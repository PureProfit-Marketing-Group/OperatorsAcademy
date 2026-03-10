import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(null);

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authCallback, setAuthCallback] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const isVerificationExpired = useCallback(() => {
    if (!user) return false;
    // Google OAuth users are always verified
    if (user.app_metadata?.provider === 'google') return false;
    if (user.email_confirmed_at) return false;
    const createdAt = new Date(user.created_at).getTime();
    return Date.now() - createdAt > SEVEN_DAYS_MS;
  }, [user]);

  const isAuthenticated = user && !isVerificationExpired();

  const tier = user?.user_metadata?.tier || 'free';
  const isPremium = tier === 'premium';

  const refreshTier = useCallback(async () => {
    const { data, error } = await supabase.auth.refreshSession();
    if (data?.session) {
      setSession(data.session);
      setUser(data.session.user);
    }
    return { data, error };
  }, []);

  const signUp = async (email, password, fullName) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, source: 'operators-academy' },
        emailRedirectTo: `${window.location.origin}`,
      },
    });
    return { data, error };
  };

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { data, error };
  };

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}`,
        queryParams: { access_type: 'offline', prompt: 'consent' },
      },
    });
    return { data, error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  const resendVerification = async () => {
    if (!user?.email) return { error: { message: 'No email found' } };
    const { data, error } = await supabase.auth.resend({
      type: 'signup',
      email: user.email,
    });
    return { data, error };
  };

  const openAuthModal = useCallback((callback) => {
    setAuthCallback(() => callback || null);
    setShowAuthModal(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setShowAuthModal(false);
    setAuthCallback(null);
  }, []);

  const onAuthSuccess = useCallback(() => {
    if (authCallback) authCallback();
    closeAuthModal();
  }, [authCallback, closeAuthModal]);

  return (
    <AuthContext.Provider value={{
      user,
      session,
      loading,
      isAuthenticated,
      isVerificationExpired: isVerificationExpired(),
      tier,
      isPremium,
      refreshTier,
      signUp,
      signIn,
      signInWithGoogle,
      signOut,
      resendVerification,
      showAuthModal,
      openAuthModal,
      closeAuthModal,
      onAuthSuccess,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
