import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, Terminal, Download, FolderOpen, Shield, GitBranch, Eye, Zap, Bug, TestTube, BookOpen, ArrowRight, ChevronRight, ChevronDown, Home, Server } from 'lucide-react';

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

const INSTALL_CMD = 'curl -fsSL https://operators-academy.vercel.app/claude-setup/install.sh | bash';

export default function InstallPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Nav */}
      <div className="max-w-4xl mx-auto px-4 pt-4">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
          <Home size={16} />
          Back to Home
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
          <Terminal size={14} />
          One command install
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Install the Claude Code Workflow
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Session continuity, documentation-driven development, 8 specialized agents, and a live status bar.
          Set up in under 30 seconds.
        </p>
      </div>

      {/* Install Command */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-400 font-medium">Run in your terminal:</span>
            <CopyButton text={INSTALL_CMD} />
          </div>
          <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <span className="text-gray-500">$ </span>
            <span className="text-green-400">curl</span>
            <span className="text-gray-300"> -fsSL https://operators-academy.vercel.app/claude-setup/install.sh </span>
            <span className="text-gray-500">| </span>
            <span className="text-green-400">bash</span>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Backs up your existing config before installing. Requires curl and jq.
          </p>
        </div>
      </div>

      {/* What's Included */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">What you get</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* CLAUDE.md */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <FolderOpen className="text-purple-400" size={20} />
              </div>
              <h3 className="font-semibold">5-File Documentation System</h3>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              CONTEXT.md, TASKS.md, PLAN.md, PROGRESS.md, and TEST_LOG.md.
              Claude reads these at the start of each session so it never loses context.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['CONTEXT', 'TASKS', 'PLAN', 'PROGRESS', 'TEST_LOG'].map(f => (
                <span key={f} className="text-xs bg-gray-700 px-2 py-0.5 rounded">{f}.md</span>
              ))}
            </div>
          </div>

          {/* Status Line */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Eye className="text-green-400" size={20} />
              </div>
              <h3 className="font-semibold">Live Status Bar</h3>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              See your model, context usage, git branch, and project name in real-time
              at the bottom of your terminal.
            </p>
            <div className="bg-gray-950 rounded-lg px-3 py-2 font-mono text-xs">
              <span className="text-purple-400">Opus 4.6</span>
              <span className="text-green-400"> [████░░░░░░] 38%</span>
              <span className="text-gray-600"> | </span>
              <span className="text-green-400">main</span>
              <span className="text-gray-600"> | </span>
              <span className="text-cyan-400">my-project</span>
            </div>
          </div>

          {/* Trigger Phrases */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Zap className="text-blue-400" size={20} />
              </div>
              <h3 className="font-semibold">Natural Language Triggers</h3>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              Say phrases like "wrap up", "run QA", or "let's continue" and Claude
              automatically takes the right action.
            </p>
            <div className="space-y-1 text-xs">
              <div className="flex gap-2">
                <code className="text-blue-300">"initialize project"</code>
                <span className="text-gray-500">creates all doc files</span>
              </div>
              <div className="flex gap-2">
                <code className="text-blue-300">"wrap up"</code>
                <span className="text-gray-500">logs session to PROGRESS.md</span>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <Server className="text-orange-400" size={20} />
              </div>
              <h3 className="font-semibold">Base Configuration</h3>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              Pre-configured settings.json with status line integration and tool search enabled.
              Won't overwrite your existing settings.
            </p>
            <div className="text-xs text-gray-500">
              Existing settings.json is preserved if found.
            </div>
          </div>
        </div>

        {/* 8 Agents */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-3">
            <Shield className="text-cyan-400" size={20} />
            8 Specialized Agents
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: 'backend-architect', desc: 'API & DB design', color: 'purple' },
              { name: 'test-runner', desc: 'Doc-aware testing', color: 'orange' },
              { name: 'test-writer-fixer', desc: 'Write & fix tests', color: 'cyan' },
              { name: 'git-commit', desc: 'Auto commit/push', color: 'green' },
              { name: 'qa-orchestrator', desc: 'Full QA cycle', color: 'purple' },
              { name: 'feature-tester', desc: 'Feature QA', color: 'blue' },
              { name: 'debugger', desc: 'Root cause analysis', color: 'red' },
              { name: 'logger', desc: 'Observability', color: 'yellow' },
            ].map(a => (
              <div key={a.name} className="bg-gray-900 rounded-lg p-3">
                <div className={`w-2 h-2 rounded-full bg-${a.color}-400 mb-2`}></div>
                <div className="text-sm font-medium">{a.name}</div>
                <div className="text-xs text-gray-500">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">How it works</h2>

        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-400 text-sm font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Start any project</h3>
              <p className="text-sm text-gray-400">
                Open Claude Code in a project directory. Say <code className="text-blue-300">"initialize project"</code> to
                create the 5 documentation files. Claude reads them automatically at the start of each session.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-400 text-sm font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Work with context continuity</h3>
              <p className="text-sm text-gray-400">
                Claude maintains project knowledge across sessions through CONTEXT.md and TASKS.md.
                Say <code className="text-blue-300">"let's continue"</code> and it picks up where you left off.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-400 text-sm font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Use agents for quality</h3>
              <p className="text-sm text-gray-400">
                Say <code className="text-blue-300">"run QA"</code> to trigger the testing cycle, or
                <code className="text-blue-300"> "debug this"</code> to activate the debugger agent.
                The git-commit agent runs in the background after every change.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-400 text-sm font-bold">4</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">End sessions cleanly</h3>
              <p className="text-sm text-gray-400">
                Say <code className="text-blue-300">"wrap up"</code> and Claude updates PROGRESS.md with a session summary,
                so the next session starts with full context.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">Details</h2>

        <div className="space-y-3">
          <Expandable title="What does the installer change on my system?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>The installer only touches files inside <code className="text-gray-300">~/.claude/</code>:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><code className="text-gray-300">~/.claude/CLAUDE.md</code> — Global instructions file</li>
                <li><code className="text-gray-300">~/.claude/statusline-command.sh</code> — Status bar script</li>
                <li><code className="text-gray-300">~/.claude/settings.json</code> — Only created if missing</li>
                <li><code className="text-gray-300">~/.claude/agents/*.md</code> — 8 agent definition files</li>
              </ul>
              <p>Any existing files are backed up to <code className="text-gray-300">~/.claude/backups/</code> before being replaced.</p>
            </div>
          </Expandable>

          <Expandable title="Will it overwrite my existing settings?">
            <div className="text-sm text-gray-400 space-y-2">
              <p><strong className="text-gray-200">settings.json is preserved</strong> — if you already have one, the installer won't touch it.</p>
              <p><strong className="text-gray-200">CLAUDE.md is replaced</strong> — but the original is backed up first. You can merge your custom instructions back afterward.</p>
              <p><strong className="text-gray-200">Agents are replaced</strong> — existing agent files with the same names are overwritten (originals backed up). Agents with different names are left untouched.</p>
            </div>
          </Expandable>

          <Expandable title="How do I uninstall?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>Restore from the backup:</p>
              <div className="bg-gray-950 rounded-lg p-3 font-mono text-xs">
                <div className="text-gray-500"># Find your backup</div>
                <div>ls ~/.claude/backups/</div>
                <div className="text-gray-500 mt-2"># Restore (replace TIMESTAMP with your backup folder)</div>
                <div>cp ~/.claude/backups/TIMESTAMP/CLAUDE.md ~/.claude/CLAUDE.md</div>
                <div>cp ~/.claude/backups/TIMESTAMP/settings.json ~/.claude/settings.json</div>
              </div>
              <p>Or delete the installed files manually:</p>
              <div className="bg-gray-950 rounded-lg p-3 font-mono text-xs">
                <div>rm ~/.claude/CLAUDE.md ~/.claude/statusline-command.sh</div>
                <div>rm ~/.claude/agents/{'{'}{'{'}backend-architect,test-runner,test-writer-fixer,git-commit,qa-orchestrator,logger,debugger,feature-tester{'}'}{'}' }.md</div>
              </div>
            </div>
          </Expandable>

          <Expandable title="What are the prerequisites?">
            <div className="text-sm text-gray-400 space-y-2">
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong className="text-gray-200">Claude Code</strong> — installed and authenticated (<code className="text-gray-300">npm install -g @anthropic-ai/claude-code</code>)</li>
                <li><strong className="text-gray-200">curl</strong> — for the installer (comes pre-installed on macOS and most Linux)</li>
                <li><strong className="text-gray-200">jq</strong> — for the status line (<code className="text-gray-300">brew install jq</code> on macOS)</li>
              </ul>
            </div>
          </Expandable>

          <Expandable title="Can I customize it after installing?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>Everything is plain text files — customize freely:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Edit <code className="text-gray-300">~/.claude/CLAUDE.md</code> to add your own trigger phrases or conventions</li>
                <li>Edit agents in <code className="text-gray-300">~/.claude/agents/</code> to change models, tools, or behavior</li>
                <li>Add project-specific CLAUDE.md files in any repo for per-project overrides</li>
              </ul>
            </div>
          </Expandable>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Ready to install?</h2>
          <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm max-w-2xl mx-auto mb-4 flex items-center justify-between gap-4">
            <div className="overflow-x-auto">
              <span className="text-gray-500">$ </span>
              <span className="text-green-400">curl</span>
              <span className="text-gray-300"> -fsSL https://operators-academy.vercel.app/claude-setup/install.sh </span>
              <span className="text-gray-500">| </span>
              <span className="text-green-400">bash</span>
            </div>
            <CopyButton text={INSTALL_CMD} />
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <Link to="/claude-code-guide" className="flex items-center gap-1 hover:text-purple-300 transition-colors">
              <BookOpen size={14} />
              Read the full guide
            </Link>
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
