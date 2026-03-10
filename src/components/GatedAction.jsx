import React from 'react';
import { Lock, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function GatedAction({ children, fallbackText, className, requiredTier = 'free' }) {
  const { isAuthenticated, isPremium, openAuthModal } = useAuth();

  if (requiredTier === 'premium' && isAuthenticated && !isPremium) {
    return (
      <Link
        to="/tools/premium"
        className={`group flex items-center gap-2 px-4 py-2.5 bg-gray-800 border border-amber-500/30 rounded-lg text-sm text-gray-400 hover:border-amber-500/50 hover:text-amber-300 transition-all cursor-pointer ${className || ''}`}
      >
        <Crown size={14} className="text-amber-500 group-hover:text-amber-400 transition-colors" />
        Premium — unlock this tool
      </Link>
    );
  }

  if (isAuthenticated) return children;

  return (
    <button
      onClick={() => openAuthModal()}
      className={`group flex items-center gap-2 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-400 hover:border-teal-500/50 hover:text-teal-300 transition-all cursor-pointer ${className || ''}`}
    >
      <Lock size={14} className="text-gray-500 group-hover:text-teal-400 transition-colors" />
      {fallbackText || "Want this? Sign up in 10 seconds \u2014 it's free."}
    </button>
  );
}
