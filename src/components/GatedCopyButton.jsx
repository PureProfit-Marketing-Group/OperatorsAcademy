import React from 'react';
import { Lock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import CopyButton from './CopyButton';

export default function GatedCopyButton({ text, label = 'Copy' }) {
  const { isAuthenticated, openAuthModal } = useAuth();

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
