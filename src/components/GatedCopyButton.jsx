import React from 'react';
import { Lock, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CopyButton from './CopyButton';

export default function GatedCopyButton({ text, label = 'Copy', requiredTier = 'free' }) {
  const { isAuthenticated, isPremium, openAuthModal } = useAuth();

  if (requiredTier === 'premium' && isAuthenticated && !isPremium) {
    return (
      <Link
        to="/tools/premium"
        className="flex items-center gap-1.5 px-2 py-1 text-xs text-amber-500/70 hover:text-amber-400 border border-amber-500/30 hover:border-amber-500/50 rounded transition-all"
        title="Premium required"
      >
        <Crown size={12} />
        Premium
      </Link>
    );
  }

  if (isAuthenticated) return <CopyButton text={text} label={label} />;

  return (
    <button
      onClick={() => openAuthModal()}
      className="flex items-center gap-1.5 px-2 py-1 text-xs text-gray-500 hover:text-teal-300 border border-gray-700 hover:border-teal-500/50 rounded transition-all"
      title="Sign up free to copy"
    >
      <Lock size={12} />
      Copy
    </button>
  );
}
