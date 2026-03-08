import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AuthModal() {
  const { showAuthModal, closeAuthModal, onAuthSuccess, signUp, signIn, signInWithGoogle } = useAuth();
  const [mode, setMode] = useState('signup');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const overlayRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    if (showAuthModal) {
      setError('');
      setFullName('');
      setEmail('');
      setPassword('');
      setMode('signup');
      setTimeout(() => {
        (mode === 'signup' ? nameRef : emailRef).current?.focus();
      }, 100);
    }
  }, [showAuthModal]);

  useEffect(() => {
    if (!showAuthModal) return;
    const handleEsc = (e) => { if (e.key === 'Escape') closeAuthModal(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [showAuthModal, closeAuthModal]);

  if (!showAuthModal) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'signup') {
        if (!fullName.trim()) { setError('Name is required'); setLoading(false); return; }
        const { error } = await signUp(email, password, fullName.trim());
        if (error) { setError(error.message); setLoading(false); return; }
      } else {
        const { error } = await signIn(email, password);
        if (error) { setError(error.message); setLoading(false); return; }
      }
      onAuthSuccess();
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    setError('');
    const { error } = await signInWithGoogle();
    if (error) setError(error.message);
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === overlayRef.current) closeAuthModal(); }}
    >
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-sm mx-4 shadow-2xl">
        {/* Close button */}
        <div className="flex justify-end mb-2">
          <button onClick={closeAuthModal} className="text-gray-500 hover:text-gray-300 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Header */}
        <h2 className="text-xl font-bold text-white text-center mb-1">
          {mode === 'signup' ? 'Create your free account' : 'Welcome back'}
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          {mode === 'signup'
            ? 'Unlock all tools, install commands, and templates.'
            : 'Log in to access your tools.'}
        </p>

        {/* Google OAuth */}
        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors mb-4"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="text-xs text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === 'signup' && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
            />
          )}
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full px-3 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
          />

          {error && (
            <p className="text-red-400 text-xs">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-teal-600 text-white rounded-lg font-medium text-sm hover:bg-teal-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '...' : mode === 'signup' ? 'Create Account' : 'Log In'}
          </button>
        </form>

        {/* Toggle mode */}
        <p className="text-center text-sm text-gray-500 mt-4">
          {mode === 'signup' ? (
            <>Already have an account?{' '}<button onClick={() => { setMode('login'); setError(''); }} className="text-teal-400 hover:underline">Log in</button></>
          ) : (
            <>No account yet?{' '}<button onClick={() => { setMode('signup'); setError(''); }} className="text-teal-400 hover:underline">Sign up free</button></>
          )}
        </p>

        {/* Privacy link */}
        {mode === 'signup' && (
          <p className="text-center text-xs text-gray-600 mt-3">
            By signing up, you agree to our{' '}
            <a href="/privacy" className="underline hover:text-gray-400">privacy policy</a>.
          </p>
        )}
      </div>
    </div>
  );
}
