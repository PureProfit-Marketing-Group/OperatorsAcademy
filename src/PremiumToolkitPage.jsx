import React from 'react';
import { Crown, Terminal, Code, Eye, Layout, Workflow, Cpu, Zap, FileText, PenTool, Brain, Shield, Bell, Settings, Package, ArrowRight } from 'lucide-react';
import GatedCopyButton from './components/GatedCopyButton';

const TOKEN = import.meta.env.VITE_PRO_INSTALL_TOKEN || '';
const CLONE_CMD = `git clone https://${TOKEN}@github.com/ehoyos007/operators-academy-pro.git ~/.local/share/operators-academy-pro`;
const INSTALL_CMD = '~/.local/share/operators-academy-pro/install.sh';
const UPDATE_CMD = 'cd ~/.local/share/operators-academy-pro && git pull && ./install.sh';

const skillCategories = [
  {
    name: 'Development',
    color: 'purple',
    skills: [
      { name: 'compound-engineering', desc: 'Plan-Work-Review-Compound loop for systematic development' },
      { name: 'frontend-design', desc: 'Production-grade UI with high design quality' },
      { name: 'dev-browser', desc: 'Browser automation with persistent page state' },
      { name: 'code-review', desc: 'Structured code review with actionable feedback' },
      { name: 'documentation', desc: 'Auto-generate documentation from code' },
      { name: 'audit-hooks', desc: 'Git pre-commit hooks for formatting and linting' },
    ],
  },
  {
    name: 'Vision System',
    color: 'teal',
    skills: [
      { name: 'init-vision', desc: 'Initialize VISION.md + EVAL.md for a project' },
      { name: 'vision-check', desc: 'Quick alignment check between vision and recent work' },
      { name: 'vision-adoption', desc: 'Scan all projects for Vision System adoption status' },
    ],
  },
  {
    name: 'Content',
    color: 'blue',
    skills: [
      { name: 'copywriting', desc: 'Marketing copy for pages, ads, and product' },
      { name: 'copy-editing', desc: 'Multi-pass editing and polishing for existing copy' },
      { name: 'pdf', desc: 'Create, edit, extract, and manipulate PDF documents' },
      { name: 'docx', desc: 'Generate formatted Word documents and reports' },
    ],
  },
  {
    name: 'Workflow',
    color: 'cyan',
    skills: [
      { name: 'my-help', desc: 'Quick reference of all your custom tools and commands' },
      { name: 'session-review', desc: 'Review and summarize Claude Code session logs' },
      { name: 'daily-tasks', desc: 'Check daily tasks for the current git repo' },
    ],
  },
  {
    name: 'Knowledge',
    color: 'green',
    skills: [
      { name: 'brain-sync', desc: 'Sync pending brain captures and cross-project context' },
      { name: 'brain-digest', desc: 'Daily health check on your Open Brain knowledge system' },
    ],
  },
];

const agents = [
  { name: 'devops-automator', desc: 'CI/CD, cloud infra, monitoring' },
  { name: 'frontend-developer', desc: 'React/Vue/Angular components' },
  { name: 'ui-designer', desc: 'Visual design and design systems' },
  { name: 'rapid-prototyper', desc: 'Quick MVP scaffolding' },
  { name: 'sprint-prioritizer', desc: 'Sprint planning and feature prioritization' },
  { name: 'feedback-synthesizer', desc: 'Analyze user feedback into insights' },
  { name: 'mobile-app-builder', desc: 'iOS/Android/React Native' },
  { name: 'api-tester', desc: 'API endpoint testing and validation' },
  { name: 'ux-researcher', desc: 'User research and usability analysis' },
  { name: 'performance-benchmarker', desc: 'Performance testing and optimization' },
  { name: 'workflow-optimizer', desc: 'Process improvement and automation' },
];

const colorMap = {
  purple: 'border-purple-500/30 text-purple-400',
  teal: 'border-teal-500/30 text-teal-400',
  blue: 'border-blue-500/30 text-blue-400',
  cyan: 'border-cyan-500/30 text-cyan-400',
  green: 'border-green-500/30 text-green-400',
};

const bgMap = {
  purple: 'bg-purple-500/20',
  teal: 'bg-teal-500/20',
  blue: 'bg-blue-500/20',
  cyan: 'bg-cyan-500/20',
  green: 'bg-green-500/20',
};

export default function PremiumToolkitPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-300 text-sm mb-6">
          <Crown size={14} />
          Premium Toolkit
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          The Complete Operator Setup
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          18 skills, 11 agents, hooks, the Vision System, and settings upgrades — everything distributed via a private GitHub repo.
        </p>
      </div>

      {/* Install Section */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-4">Install</h2>
        <div className="space-y-3">
          {/* Clone */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400 font-medium">1. Clone the repo</span>
              <GatedCopyButton text={CLONE_CMD} requiredTier="premium" />
            </div>
            <div className="bg-gray-950 rounded-lg p-3 font-mono text-sm overflow-x-auto">
              <span className="text-gray-500">$ </span>
              <span className="text-green-400">git clone</span>
              <span className="text-gray-300"> https://github.com/ehoyos007/operators-academy-pro.git ~/.local/share/operators-academy-pro</span>
            </div>
          </div>

          {/* Install */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400 font-medium">2. Run the installer</span>
              <GatedCopyButton text={INSTALL_CMD} requiredTier="premium" />
            </div>
            <div className="bg-gray-950 rounded-lg p-3 font-mono text-sm overflow-x-auto">
              <span className="text-gray-500">$ </span>
              <span className="text-green-400">{INSTALL_CMD}</span>
            </div>
          </div>

          {/* Update */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400 font-medium">Update anytime</span>
              <GatedCopyButton text={UPDATE_CMD} requiredTier="premium" />
            </div>
            <div className="bg-gray-950 rounded-lg p-3 font-mono text-sm overflow-x-auto">
              <span className="text-gray-500">$ </span>
              <span className="text-gray-300">{UPDATE_CMD}</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Requires the free install completed first. The premium installer layers on top — it never overwrites existing free-tier files.
        </p>
      </div>

      {/* Skills */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">18 Skills</h2>
        <div className="space-y-6">
          {skillCategories.map(({ name, color, skills }) => (
            <div key={name}>
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${colorMap[color].split(' ')[1]}`}>
                {name}
              </h3>
              <div className="grid md:grid-cols-2 gap-2">
                {skills.map(({ name: skillName, desc }) => (
                  <div key={skillName} className={`bg-gray-800 border ${colorMap[color].split(' ')[0]} rounded-lg p-3`}>
                    <div className="text-sm font-medium mb-0.5">/{skillName}</div>
                    <div className="text-xs text-gray-500">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agents */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">11 Agents</h2>
        <p className="text-gray-400 text-sm mb-4">
          These agents run as autonomous subprocesses, handling complex multi-step tasks in parallel with your main conversation.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {agents.map(({ name, desc }) => (
            <div key={name} className="bg-gray-800 border border-gray-700 rounded-lg p-3">
              <div className="text-sm font-medium mb-1">{name}</div>
              <div className="text-xs text-gray-500">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hooks */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-4">Hooks</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Bell className="text-yellow-400" size={18} />
              </div>
              <h3 className="font-semibold text-sm">iTerm2 Tab Notifications</h3>
            </div>
            <p className="text-xs text-gray-400">
              Tab turns gold when Claude is waiting for input, resets when you type. Never miss a prompt again.
            </p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Settings className="text-purple-400" size={18} />
              </div>
              <h3 className="font-semibold text-sm">Settings Upgrade</h3>
            </div>
            <p className="text-xs text-gray-400">
              High effort level, agent teams, and official plugins (claude-md-management, playwright, frontend-design).
            </p>
          </div>
        </div>
      </div>

      {/* Vision System */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-4">Vision System</h2>
        <div className="bg-gradient-to-r from-teal-900/20 to-blue-900/20 border border-teal-500/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-teal-500/20 rounded-lg">
              <Eye className="text-teal-400" size={20} />
            </div>
            <h3 className="font-semibold">Intent Engineering for AI Development</h3>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            VISION.md encodes your judgment calls, tradeoffs, and "what done looks like" so Claude doesn't have to guess.
            The eval system measures whether your intent is being captured correctly over time.
          </p>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-teal-400 font-medium mb-1">VISION.md</div>
              <div className="text-xs text-gray-500">Decision framework, constraints, escalation triggers</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-teal-400 font-medium mb-1">EVAL.md</div>
              <div className="text-xs text-gray-500">6-step evaluation checklist for periodic review</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-teal-400 font-medium mb-1">/init-vision</div>
              <div className="text-xs text-gray-500">Brain dump interview to bootstrap both files</div>
            </div>
          </div>
        </div>
      </div>

      {/* TLE-Marketing Bonus */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-4">Bonus: UGC Ad Maker</h2>
        <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Package className="text-orange-400" size={20} />
            </div>
            <h3 className="font-semibold">TLE-Marketing</h3>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Full Next.js application for AI-generated UGC ads. Dual-pipeline video generation,
            ABCD scoring framework, Meta Ads integration, and a creative pipeline dashboard.
          </p>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400 font-medium">Clone</span>
              <GatedCopyButton text="git clone https://github.com/ehoyos007/tle-marketing.git" requiredTier="premium" />
            </div>
            <div className="bg-gray-950 rounded-lg p-3 font-mono text-xs overflow-x-auto">
              <span className="text-gray-500">$ </span>
              <span className="text-green-400">git clone</span>
              <span className="text-gray-300"> https://github.com/ehoyos007/tle-marketing.git</span>
            </div>
          </div>
        </div>
      </div>

      {/* How to Update */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-4">Keep Updated</h2>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
          <p className="text-sm text-gray-400 mb-3">
            New skills and agents are added regularly. Pull and re-run to get the latest:
          </p>
          <div className="bg-gray-950 rounded-lg p-3 font-mono text-sm overflow-x-auto flex items-center justify-between gap-4">
            <div>
              <span className="text-gray-500">$ </span>
              <span className="text-gray-300">{UPDATE_CMD}</span>
            </div>
            <GatedCopyButton text={UPDATE_CMD} requiredTier="premium" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-600 pb-8">
        Operators Academy
      </div>
    </div>
  );
}
