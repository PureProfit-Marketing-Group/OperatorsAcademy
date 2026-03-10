import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, User, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function UserMenu() {
  const { user, isAuthenticated, loading, signOut, openAuthModal } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  if (loading) return null;

  if (!isAuthenticated) {
    return (
      <button
        onClick={() => openAuthModal()}
        className="px-3 py-1.5 text-sm text-teal-400 border border-teal-500/30 rounded-lg hover:bg-teal-500/10 transition-colors"
      >
        Log In / Sign Up
      </button>
    );
  }

  const displayName = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || 'User';
  const avatarUrl = user.user_metadata?.avatar_url;

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-800 transition-colors"
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt="" className="w-6 h-6 rounded-full" />
        ) : (
          <div className="w-6 h-6 rounded-full bg-teal-600 flex items-center justify-center text-xs font-bold text-white">
            {displayName.charAt(0).toUpperCase()}
          </div>
        )}
        <span className="text-sm text-gray-300 hidden sm:inline">{displayName}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-1 z-50">
          <div className="px-3 py-2 border-b border-gray-700">
            <p className="text-sm text-white font-medium truncate">{displayName}</p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>
          <Link
            to="/settings"
            onClick={() => setOpen(false)}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          >
            <Settings size={14} />
            Settings
          </Link>
          <button
            onClick={async () => { await signOut(); setOpen(false); }}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          >
            <LogOut size={14} />
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
