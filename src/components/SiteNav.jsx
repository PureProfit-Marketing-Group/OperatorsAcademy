import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/course', label: 'Course' },
  { to: '/claude-code-guide', label: 'Guide' },
  { to: '/install', label: 'Install' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="h-12 bg-gray-950 border-b border-gray-800 sticky top-0 z-50 flex items-center px-4">
      <Link to="/" className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Operators Academy
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6 ml-auto">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`text-sm transition-colors ${
              pathname === to || pathname.startsWith(to + '/')
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden ml-auto p-1 text-gray-400 hover:text-white"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-12 left-0 right-0 bg-gray-950 border-b border-gray-800 md:hidden">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-sm transition-colors ${
                pathname === to || pathname.startsWith(to + '/')
                  ? 'text-white bg-gray-900'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
