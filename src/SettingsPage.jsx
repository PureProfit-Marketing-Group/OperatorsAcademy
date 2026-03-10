import React, { useState } from 'react';
import { User, Mail, Shield, Clock, Crown, CheckCircle, AlertCircle, Key } from 'lucide-react';
import { useAuth } from './context/AuthContext';
import { supabase } from './lib/supabase';

// SHA-256 hash of the invite code — update this when you change the code
// Current code: "operators-pro-2026"
const INVITE_CODE_HASH = '95f60b27589fe15f98d496d20b49960db2efb15fb03c3315e557b8105fb4afd7';

async function hashCode(value) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function InfoRow({ icon: Icon, label, value, color = 'gray' }) {
  return (
    <div className="flex items-start gap-3 py-3">
      <Icon size={16} className={`text-${color}-400 mt-0.5 flex-shrink-0`} />
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
        <div className="text-sm text-gray-200">{value}</div>
      </div>
    </div>
  );
}

export default function SettingsPage() {
  const { user, tier, isPremium, refreshTier } = useAuth();
  const [code, setCode] = useState('');
  const [codeStatus, setCodeStatus] = useState(null); // 'success' | 'error' | null
  const [activating, setActivating] = useState(false);

  const displayName = user?.user_metadata?.full_name || user?.user_metadata?.name || user?.email?.split('@')[0] || 'User';
  const avatarUrl = user?.user_metadata?.avatar_url;
  const provider = user?.app_metadata?.provider || 'email';
  const createdAt = user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '-';
  const lastSignIn = user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-';

  const handleActivateCode = async (e) => {
    e.preventDefault();
    if (!code.trim()) return;

    setActivating(true);
    setCodeStatus(null);

    const hex = await hashCode(code.trim());
    if (hex === INVITE_CODE_HASH) {
      const { error } = await supabase.auth.updateUser({
        data: { tier: 'premium' },
      });
      if (!error) {
        await refreshTier();
        setCodeStatus('success');
        setCode('');
      } else {
        setCodeStatus('error');
      }
    } else {
      setCodeStatus('error');
    }
    setActivating(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-16">
        <h1 className="text-2xl font-bold mb-8">Account Settings</h1>

        {/* Profile */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-700">
            {avatarUrl ? (
              <img src={avatarUrl} alt="" className="w-14 h-14 rounded-full" />
            ) : (
              <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center text-xl font-bold text-white">
                {displayName.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <h2 className="text-lg font-semibold">{displayName}</h2>
              <div className="flex items-center gap-2 mt-1">
                {isPremium ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/20 border border-amber-500/30 rounded text-xs text-amber-300">
                    <Crown size={10} /> Premium
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-700 rounded text-xs text-gray-400">
                    Free
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-700/50">
            <InfoRow icon={Mail} label="Email" value={user?.email || '-'} color="blue" />
            <InfoRow icon={Shield} label="Provider" value={provider.charAt(0).toUpperCase() + provider.slice(1)} color="teal" />
            <InfoRow icon={Clock} label="Member since" value={createdAt} color="purple" />
            <InfoRow icon={Clock} label="Last sign in" value={lastSignIn} color="cyan" />
            <InfoRow icon={User} label="User ID" value={<code className="text-xs text-gray-400 font-mono">{user?.id || '-'}</code>} />
          </div>
        </div>

        {/* Invite Code — only show for free users */}
        {!isPremium && (
          <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <Key className="text-amber-400" size={20} />
              <h3 className="font-semibold">Activate Premium</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Have an invite code? Enter it below to unlock the Premium Toolkit.
            </p>
            <form onSubmit={handleActivateCode} className="flex gap-2">
              <input
                type="text"
                value={code}
                onChange={(e) => { setCode(e.target.value); setCodeStatus(null); }}
                placeholder="Enter invite code"
                className="flex-1 px-3 py-2 bg-gray-900 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button
                type="submit"
                disabled={activating || !code.trim()}
                className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {activating ? 'Activating...' : 'Activate'}
              </button>
            </form>
            {codeStatus === 'success' && (
              <div className="flex items-center gap-2 mt-3 text-sm text-green-400">
                <CheckCircle size={14} />
                Premium activated! You now have full access.
              </div>
            )}
            {codeStatus === 'error' && (
              <div className="flex items-center gap-2 mt-3 text-sm text-red-400">
                <AlertCircle size={14} />
                Invalid code. Please check and try again.
              </div>
            )}
          </div>
        )}

        {/* Premium status — show for premium users */}
        {isPremium && (
          <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <Crown className="text-amber-400" size={20} />
              <h3 className="font-semibold">Premium Active</h3>
            </div>
            <p className="text-sm text-gray-400">
              You have access to the Premium Toolkit — 18 skills, 11 agents, hooks, and the Vision System.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
