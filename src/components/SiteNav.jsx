import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const toolsLinks = [
  { to: '/tools/install', label: 'Install the Workflow' },
  { to: '/tools/claude-code-guide', label: 'Quick Reference' },
  { to: '/tools/prompt-flows', label: 'Prompt Flows' },
  { to: '/tools/mission-control', label: 'Mission Control' },
  { to: '/tools/session-monitor', label: 'Session Monitor' },
];

const allMobileLinks = [
  { to: '/course', label: 'Course' },
  { to: '/tools/install', label: 'Install' },
  { to: '/tools/claude-code-guide', label: 'Quick Reference' },
  { to: '/tools/prompt-flows', label: 'Prompt Flows' },
  { to: '/tools/mission-control', label: 'Mission Control' },
  { to: '/tools/session-monitor', label: 'Session Monitor' },
  { to: '/setup/marketing', label: 'Marketing Setup' },
  { to: '/setup/openclaw', label: 'OpenClaw Setup' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const { pathname } = useLocation();
  const dropdownRef = useRef(null);

  const isActive = (to) => pathname === to || pathname.startsWith(to + '/');

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setToolsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="h-12 bg-gray-950 border-b border-gray-800 fixed top-0 left-0 right-0 z-50 flex items-center px-4">
      <Link to="/" className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Operators Academy
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6 ml-auto">
        <Link
          to="/course"
          className={`text-sm transition-colors ${
            isActive('/course') ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Course
        </Link>

        {/* Tools dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setToolsOpen(!toolsOpen)}
            className={`text-sm transition-colors flex items-center gap-1 ${
              pathname.startsWith('/tools') ? 'text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Tools
            <ChevronDown size={14} className={`transition-transform ${toolsOpen ? 'rotate-180' : ''}`} />
          </button>
          {toolsOpen && (
            <div className="absolute top-8 right-0 bg-gray-950 border border-gray-800 rounded-lg py-1 min-w-[200px] shadow-xl">
              {toolsLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setToolsOpen(false)}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    isActive(to) ? 'text-white bg-gray-900' : 'text-gray-400 hover:text-white hover:bg-gray-900'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          to="/setup/marketing"
          className={`text-sm transition-colors ${
            isActive('/setup/marketing') ? 'text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          Marketing
        </Link>
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
          {allMobileLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-sm transition-colors ${
                isActive(to) ? 'text-white bg-gray-900' : 'text-gray-400 hover:text-white hover:bg-gray-900'
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
