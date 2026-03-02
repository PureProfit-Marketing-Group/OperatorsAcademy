import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const installBannerColors = {
  purple: { bg: 'from-purple-900/30 to-blue-900/30', border: 'border-purple-500/30', text: 'text-purple-300', hover: 'hover:text-purple-200', label: 'bg-purple-500/20 text-purple-300' },
  teal: { bg: 'from-teal-900/30 to-cyan-900/30', border: 'border-teal-500/30', text: 'text-teal-300', hover: 'hover:text-teal-200', label: 'bg-teal-500/20 text-teal-300' },
  orange: { bg: 'from-orange-900/30 to-amber-900/30', border: 'border-orange-500/30', text: 'text-orange-300', hover: 'hover:text-orange-200', label: 'bg-orange-500/20 text-orange-300' },
};

export default function InstallBanner({ banner }) {
  if (!banner) return null;
  const c = installBannerColors[banner.color] || installBannerColors.purple;
  return (
    <Link
      to={banner.link}
      className={`mt-6 block bg-gradient-to-r ${c.bg} border ${c.border} rounded-xl p-4 transition-all hover:shadow-lg group`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.label}`}>{banner.labelText || 'Setup'}</span>
          <span className={`text-sm font-medium ${c.text}`}>{banner.text}</span>
        </div>
        <ArrowRight size={16} className={`${c.text} group-hover:translate-x-1 transition-transform`} />
      </div>
    </Link>
  );
}
