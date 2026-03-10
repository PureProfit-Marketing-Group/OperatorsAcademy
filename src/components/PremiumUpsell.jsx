import React, { useState } from 'react';
import { Crown, Sparkles, Code, Eye, Layout, Workflow, RefreshCw } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function PremiumUpsell() {
  const { refreshTier } = useAuth();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refreshTier();
    setRefreshing(false);
  };

  const highlights = [
    { icon: Code, title: 'Compound Engineering', desc: 'Plan-Work-Review-Compound loop for systematic AI development', color: 'purple' },
    { icon: Layout, title: 'Frontend Design', desc: 'Production-grade UI generation with high design quality', color: 'blue' },
    { icon: Eye, title: 'Vision System', desc: 'Intent engineering — close the gap between what you mean and what AI builds', color: 'teal' },
    { icon: Workflow, title: 'Dev Browser', desc: 'Browser automation with persistent page state for testing and scraping', color: 'cyan' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-lg text-center px-4">
        <div className="p-3 bg-amber-500/20 rounded-full w-fit mx-auto mb-4">
          <Crown className="text-amber-400" size={28} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Premium Toolkit</h2>
        <p className="text-gray-400 text-sm mb-6">
          18 skills, 11 agents, hooks, the Vision System, and more — distributed via a private GitHub repo you clone and install.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-8 text-left">
          {highlights.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-gray-800 border border-gray-700 rounded-lg p-3">
              <Icon className={`text-${color}-400 mb-2`} size={18} />
              <div className="text-sm font-medium mb-1">{title}</div>
              <div className="text-xs text-gray-500">{desc}</div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <a
            href="mailto:enzo@operatorsacademy.com?subject=Premium%20Toolkit%20Access"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-medium text-sm hover:bg-amber-500 transition-colors"
          >
            <Sparkles size={16} />
            Get Premium Access
          </a>
          <div>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors disabled:opacity-50"
            >
              <RefreshCw size={14} className={refreshing ? 'animate-spin' : ''} />
              {refreshing ? 'Refreshing...' : 'Already premium? Refresh your session'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
