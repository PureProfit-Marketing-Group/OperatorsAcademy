import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, Terminal, Monitor, GitBranch, Activity, AlertTriangle, Cloud, Database, Keyboard, ChevronRight, ChevronDown, ArrowRight, BookOpen, Download, Settings, Cpu } from 'lucide-react';

const CopyButton = ({ text, label = 'Copy' }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
    >
      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
      {copied ? 'Copied!' : label}
    </button>
  );
};

const Expandable = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-800 transition-colors text-left"
      >
        <span className="flex-1 font-medium text-gray-200">{title}</span>
        {isOpen ? <ChevronDown size={18} className="text-gray-400" /> : <ChevronRight size={18} className="text-gray-400" />}
      </button>
      {isOpen && <div className="p-4 border-t border-gray-700">{children}</div>}
    </div>
  );
};

const INSTALL_CMD = 'curl -fsSL https://operators-academy.vercel.app/claude-setup/install-mission-control.sh | bash';

const panels = [
  {
    name: 'Claude Sessions',
    icon: Cpu,
    color: 'cyan',
    desc: 'Active sessions with state detection (RUNNING, AWAITING INPUT, IDLE), context window usage, branch info, and uncommitted changes.',
  },
  {
    name: 'Git Status',
    icon: GitBranch,
    color: 'purple',
    desc: 'Branch, uncommitted file count, ahead/behind tracking, and last commit time per project.',
  },
  {
    name: 'Vercel Deployments',
    icon: Cloud,
    color: 'white',
    desc: 'Deployment status (LIVE/BUILDING/FAILED), build duration, function count, and commit messages.',
  },
  {
    name: 'Supabase Health',
    icon: Database,
    color: 'emerald',
    desc: 'Database size, connection count, cache hit rates, and a built-in migration runner.',
  },
  {
    name: 'Sentry Alerts',
    icon: AlertTriangle,
    color: 'orange',
    desc: 'Unresolved error tracking with severity breakdown (fatal/error/warning).',
  },
];

const shortcuts = [
  { keys: 'j / k', action: 'Scroll within panel' },
  { keys: 'Tab', action: 'Next panel' },
  { keys: '1-5', action: 'Jump to panel' },
  { keys: 'r', action: 'Force refresh' },
  { keys: 'm', action: 'Run migration' },
  { keys: 'q', action: 'Quit' },
];

export default function MissionControlPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6">
          <Monitor size={14} />
          Terminal Dashboard
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Mission Control
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A real-time terminal dashboard for managing multiple Claude Code sessions.
          See every session, repo, deployment, and alert in one persistent pane.
        </p>
      </div>

      {/* Dashboard Preview */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-gray-950 border border-gray-700 rounded-xl p-4 font-mono text-xs overflow-x-auto">
          <div className="text-gray-500 mb-2">
            {'  '}MISSION CONTROL{' '}
            <span className="text-gray-700">{'─'.repeat(40)}</span>
            <span className="text-gray-600 float-right">14:32:08</span>
          </div>
          <div className="mb-3">
            <div className="text-cyan-400 mb-1">{'  '}SESSIONS</div>
            <div className="text-gray-300">
              {'  '}<span className="text-green-400">RUNNING</span>{'    '}sales-coaching-ai{'   '}<span className="text-green-400">{'████████░░'} 78%</span>{'  '}main{'        '}2 dirty
            </div>
            <div className="text-gray-300">
              {'  '}<span className="text-yellow-400">AWAITING</span>{'   '}lead-crm{'            '}<span className="text-cyan-400">{'██████░░░░'} 55%</span>{'  '}feat/auth{'   '}clean
            </div>
            <div className="text-gray-300">
              {'  '}<span className="text-gray-500">IDLE</span>{'       '}operators-academy{'   '}<span className="text-gray-500">{'███░░░░░░░'} 28%</span>{'  '}main{'        '}clean
            </div>
          </div>
          <div className="mb-3">
            <div className="text-purple-400 mb-1">{'  '}GIT</div>
            <div className="text-gray-300">
              {'  '}sales-coaching-ai{'   '}main{'         '}<span className="text-yellow-400">2 uncommitted</span>{'  '}3m ago
            </div>
            <div className="text-gray-300">
              {'  '}lead-crm{'            '}feat/auth{'    '}<span className="text-green-400">clean</span>{'            '}12m ago
            </div>
          </div>
          <div>
            <div className="text-gray-400 mb-1">{'  '}DEPLOYMENTS</div>
            <div className="text-gray-300">
              {'  '}sales-coaching-ai{'   '}<span className="text-green-400">LIVE</span>{'     '}42s{'  '}main{'  '}"Add checkout flow"
            </div>
            <div className="text-gray-300">
              {'  '}lead-crm{'            '}<span className="text-yellow-400">BUILDING</span>{' '}...{'  '}feat/auth{'  '}"OAuth provider"
            </div>
          </div>
          <div className="mt-3 text-gray-600 border-t border-gray-800 pt-2">
            {'  '}3 sessions{'  '}|{'  '}2 repos synced{'  '}|{'  '}1 LIVE{'  '}|{'  '}DB OK{'  '}|{'  '}0 alerts
          </div>
        </div>
        <p className="text-xs text-gray-600 mt-2 text-center">
          Simulated output — actual dashboard updates in real-time
        </p>
      </div>

      {/* Install Command */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400 font-medium">Install with one command:</span>
            <CopyButton text={INSTALL_CMD} />
          </div>
          <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <span className="text-gray-500">$ </span>
            <span className="text-green-400">curl</span>
            <span className="text-gray-300"> -fsSL https://operators-academy.vercel.app/claude-setup/install-mission-control.sh </span>
            <span className="text-gray-500">| </span>
            <span className="text-green-400">bash</span>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Requires Go 1.21+ and git. Installs to ~/.local/bin/mc.
          </p>
        </div>
      </div>

      {/* 5 Panels */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">Five live panels</h2>
        <div className="space-y-3">
          {panels.map((p, i) => (
            <div key={p.name} className="bg-gray-800 border border-gray-700 rounded-xl p-5 flex items-start gap-4">
              <div className={`p-2.5 bg-${p.color === 'white' ? 'gray' : p.color}-500/20 rounded-lg flex-shrink-0`}>
                <p.icon className={`text-${p.color === 'white' ? 'gray' : p.color}-400`} size={20} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold">{p.name}</h3>
                  <span className="text-xs text-gray-600 bg-gray-900 px-2 py-0.5 rounded">Tab {i + 1}</span>
                </div>
                <p className="text-sm text-gray-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">How it works</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-cyan-400 text-sm font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Session-driven architecture</h3>
              <p className="text-sm text-gray-400">
                Mission Control detects active Claude Code processes automatically.
                Every panel filters to show only projects with active sessions — open a session and it appears, close it and it clears.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-cyan-400 text-sm font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Real-time process detection</h3>
              <p className="text-sm text-gray-400">
                Detects session state by inspecting process trees.
                A foreground <code className="text-cyan-300">caffeinate</code> child means Claude is thinking (RUNNING).
                No child process means it's waiting for input (AWAITING INPUT). Background sessions show as IDLE.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-cyan-400 text-sm font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Async refresh loops</h3>
              <p className="text-sm text-gray-400">
                Each data source refreshes on its own interval — sessions every 5s, git every 15s, deployments every 15s, infrastructure every 60s.
                Stale data is flagged automatically. CPU usage stays under 2%.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-cyan-400 text-sm font-bold">4</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Graceful degradation</h3>
              <p className="text-sm text-gray-400">
                Missing API tokens? Panel shows last-known data with a staleness indicator instead of crashing.
                No Supabase CLI? Infrastructure panel displays an error status and keeps running. Every panel is independent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard Shortcuts */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">Keyboard shortcuts</h2>
        <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
          {shortcuts.map((s, i) => (
            <div
              key={s.keys}
              className={`flex items-center justify-between px-5 py-3 ${i < shortcuts.length - 1 ? 'border-b border-gray-700' : ''}`}
            >
              <kbd className="font-mono text-sm text-cyan-300 bg-gray-900 px-2.5 py-1 rounded min-w-[60px] text-center">{s.keys}</kbd>
              <span className="text-sm text-gray-400">{s.action}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Configuration */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">Configuration</h2>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="text-gray-400" size={18} />
            <h3 className="font-semibold">projects.yaml</h3>
            <span className="text-xs text-gray-600">~/.config/mission-control/projects.yaml</span>
          </div>
          <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <div className="text-gray-500"># Only name and path are required.</div>
            <div className="text-gray-500"># Other fields enable additional panels.</div>
            <div className="text-gray-300 mt-2">projects:</div>
            <div className="text-gray-300">{'  '}- name: <span className="text-cyan-300">my-project</span></div>
            <div className="text-gray-300">{'    '}path: <span className="text-cyan-300">~/Projects/my-project</span></div>
            <div className="text-gray-500">{'    '}vercel_project_id: prj_xxxxx          # Optional</div>
            <div className="text-gray-500">{'    '}supabase_project_ref: abcdef          # Optional</div>
            <div className="text-gray-500">{'    '}sentry_project_slug: my-project       # Optional</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-semibold mb-2 text-gray-300">Vercel</h4>
            <p className="text-xs text-gray-500 mb-2">Set <code className="text-gray-400">VERCEL_TOKEN</code> env var for the Deployments panel.</p>
            <div className="bg-gray-950 rounded p-2 font-mono text-xs text-gray-400">
              export VERCEL_TOKEN="..."
            </div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-semibold mb-2 text-gray-300">Sentry</h4>
            <p className="text-xs text-gray-500 mb-2">Set both <code className="text-gray-400">SENTRY_AUTH_TOKEN</code> and <code className="text-gray-400">SENTRY_ORG</code>.</p>
            <div className="bg-gray-950 rounded p-2 font-mono text-xs text-gray-400">
              export SENTRY_AUTH_TOKEN="..."
            </div>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-semibold mb-2 text-gray-300">Supabase</h4>
            <p className="text-xs text-gray-500 mb-2">Needs <code className="text-gray-400">supabase</code> CLI installed and linked in project dirs.</p>
            <div className="bg-gray-950 rounded p-2 font-mono text-xs text-gray-400">
              brew install supabase/tap/supabase
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">Details</h2>

        <div className="space-y-3">
          <Expandable title="What does the installer do?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>The installer clones the repository, builds the Go binary, and sets up your config:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><code className="text-gray-300">~/.local/bin/mc</code> — The binary (added to PATH)</li>
                <li><code className="text-gray-300">~/.local/share/mission-control/</code> — Source code (for updates)</li>
                <li><code className="text-gray-300">~/.config/mission-control/projects.yaml</code> — Config template</li>
              </ul>
            </div>
          </Expandable>

          <Expandable title="What are the prerequisites?">
            <div className="text-sm text-gray-400 space-y-2">
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong className="text-gray-200">Go 1.21+</strong> — for building (<code className="text-gray-300">brew install go</code> on macOS)</li>
                <li><strong className="text-gray-200">git</strong> — for cloning the repository</li>
                <li><strong className="text-gray-200">Claude Code</strong> — sessions are detected automatically</li>
              </ul>
              <p className="mt-2">Optional for extra panels:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><code className="text-gray-300">VERCEL_TOKEN</code> — Deployments panel</li>
                <li><code className="text-gray-300">SENTRY_AUTH_TOKEN</code> + <code className="text-gray-300">SENTRY_ORG</code> — Alerts panel</li>
                <li><code className="text-gray-300">supabase</code> CLI — Infrastructure panel</li>
              </ul>
            </div>
          </Expandable>

          <Expandable title="How do I update?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>Run the install command again — it detects the existing installation and pulls the latest version:</p>
              <div className="bg-gray-950 rounded-lg p-3 font-mono text-xs">
                <div>curl -fsSL https://operators-academy.vercel.app/claude-setup/install-mission-control.sh | bash</div>
              </div>
              <p>Or update manually:</p>
              <div className="bg-gray-950 rounded-lg p-3 font-mono text-xs">
                <div>cd ~/.local/share/mission-control</div>
                <div>git pull && make build && cp bin/mc ~/.local/bin/mc</div>
              </div>
            </div>
          </Expandable>

          <Expandable title="How do I uninstall?">
            <div className="text-sm text-gray-400 space-y-2">
              <div className="bg-gray-950 rounded-lg p-3 font-mono text-xs">
                <div>rm ~/.local/bin/mc</div>
                <div>rm -rf ~/.local/share/mission-control</div>
                <div>rm -rf ~/.config/mission-control</div>
              </div>
            </div>
          </Expandable>

          <Expandable title="Does it work with worktrees?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>Yes. Mission Control uses a dual-key lookup (project name + path) to match sessions to projects.
                 If Claude Code opens a worktree under a registered project path, it maps correctly to the parent project.</p>
            </div>
          </Expandable>
        </div>
      </div>

      {/* Next Steps */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">Next steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            to="/install"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Download className="text-purple-400" size={20} />
              </div>
              <h3 className="font-semibold">Install the Workflow</h3>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              Set up the full Claude Code workflow — docs, agents, status bar, and trigger phrases.
            </p>
            <div className="text-purple-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Install <ArrowRight size={14} />
            </div>
          </Link>
          <Link
            to="/claude-code-guide"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <BookOpen className="text-purple-400" size={20} />
              </div>
              <h3 className="font-semibold">Claude Code Guide</h3>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              Deep dive into the Claude Code project startup system and documentation-driven development.
            </p>
            <div className="text-purple-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Read guide <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Ready to install?</h2>
          <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm max-w-2xl mx-auto mb-4 flex items-center justify-between gap-4">
            <div className="overflow-x-auto">
              <span className="text-gray-500">$ </span>
              <span className="text-green-400">curl</span>
              <span className="text-gray-300"> -fsSL https://operators-academy.vercel.app/claude-setup/install-mission-control.sh </span>
              <span className="text-gray-500">| </span>
              <span className="text-green-400">bash</span>
            </div>
            <CopyButton text={INSTALL_CMD} />
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <a href="https://github.com/ehoyos007/mission-control" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
              <GitBranch size={14} />
              View source on GitHub
            </a>
            <span className="text-gray-600">|</span>
            <Link to="/course" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
              <ArrowRight size={14} />
              Take the course
            </Link>
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
