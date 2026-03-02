import React from 'react';
import { Link } from 'react-router-dom';
import { Users, GitBranch, ListChecks, Eye, Shield, Terminal, ArrowRight, BookOpen, Download } from 'lucide-react';
import CopyButton from './components/CopyButton';
import Expandable from './components/Expandable';

const INSTALL_CMD = 'curl -fsSL https://operators-academy.vercel.app/claude-setup/install-coop.sh | bash';

export default function CoopPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm mb-6">
          <Users size={14} />
          Multiplayer for Claude Code
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Claude Co-Op
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          2-3 developers using Claude Code on the same project, simultaneously, without stepping on each other.
          Real-time coordination through Supabase + git worktrees.
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
            <span className="text-gray-300"> -fsSL https://operators-academy.vercel.app/claude-setup/install-coop.sh </span>
            <span className="text-gray-500">| </span>
            <span className="text-green-400">bash</span>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Builds from source. Requires Go 1.23+, git, and curl.
          </p>
        </div>
      </div>

      {/* What You Get */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">What you get</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Worktree Isolation */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <GitBranch className="text-green-400" size={20} />
              </div>
              <h3 className="font-semibold">Worktree Isolation</h3>
            </div>
            <p className="text-sm text-gray-400">
              Each developer works in their own git worktree with a dedicated branch.
              No merge conflicts until you're ready to merge.
            </p>
          </div>

          {/* Shared Task Queue */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <ListChecks className="text-blue-400" size={20} />
              </div>
              <h3 className="font-semibold">Shared Task Queue</h3>
            </div>
            <p className="text-sm text-gray-400">
              Atomic task claiming prevents two people from working on the same thing.
              Claude can claim, create, and complete tasks for you.
            </p>
          </div>

          {/* Team Awareness */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Eye className="text-purple-400" size={20} />
              </div>
              <h3 className="font-semibold">Team Awareness via CO-OP.md</h3>
            </div>
            <p className="text-sm text-gray-400">
              A live-updating file that shows who's connected, what they're working on,
              and which files they've claimed. Claude reads it automatically.
            </p>
          </div>

          {/* Secure Env Sharing */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <Shield className="text-orange-400" size={20} />
              </div>
              <h3 className="font-semibold">Secure Env Sharing</h3>
            </div>
            <p className="text-sm text-gray-400">
              Share environment variables across worktrees without committing secrets.
              Encrypted envelope exchange via Supabase with automatic cleanup.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">How it works</h2>

        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-400 text-sm font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Initialize your project</h3>
              <p className="text-sm text-gray-400">
                Run <code className="text-green-300">claude-coop init</code> in your project root.
                This creates a <code className="text-green-300">.coop/</code> directory with your Supabase config
                and sets up the database tables.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-400 text-sm font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Join a session</h3>
              <p className="text-sm text-gray-400">
                Each developer runs <code className="text-green-300">claude-coop join --name yourname</code>.
                This creates a worktree, registers your session with Supabase, and generates CO-OP.md.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-400 text-sm font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Work together</h3>
              <p className="text-sm text-gray-400">
                Open Claude Code in your worktree. Claude automatically reads CO-OP.md and uses
                the MCP tools to coordinate — claiming tasks, announcing progress, and checking for conflicts.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-400 text-sm font-bold">4</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Merge when ready</h3>
              <p className="text-sm text-gray-400">
                Each worktree is on its own branch. When you're done, merge your branch back to main.
                The co-op tools help you check for file conflicts before merging.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MCP Tools */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">MCP Tools</h2>
        <p className="text-gray-400 text-sm mb-4">
          These tools are automatically available to Claude Code when you're in a co-op session.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { name: 'coop_announce', desc: 'Broadcast status updates', color: 'green' },
            { name: 'coop_read_feed', desc: 'Read team activity feed', color: 'blue' },
            { name: 'coop_list_peers', desc: 'See who\'s connected', color: 'purple' },
            { name: 'coop_claim_task', desc: 'Claim a shared task', color: 'cyan' },
            { name: 'coop_complete_task', desc: 'Mark task as done', color: 'green' },
            { name: 'coop_create_task', desc: 'Add task to queue', color: 'blue' },
            { name: 'coop_check_files', desc: 'Check for file conflicts', color: 'orange' },
            { name: 'coop_register_files', desc: 'Declare file ownership', color: 'purple' },
            { name: 'coop_get_context', desc: 'Get full team context', color: 'cyan' },
            { name: 'coop_log', desc: 'Write to shared log', color: 'green' },
          ].map(t => (
            <div key={t.name} className="bg-gray-800 border border-gray-700 rounded-lg p-3">
              <div className={`w-2 h-2 rounded-full bg-${t.color}-400 mb-2`}></div>
              <div className="text-sm font-mono font-medium">{t.name}</div>
              <div className="text-xs text-gray-500">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Prerequisites */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">Details</h2>

        <div className="space-y-3">
          <Expandable title="What are the prerequisites?">
            <div className="text-sm text-gray-400 space-y-2">
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong className="text-gray-200">Go 1.23+</strong> — for building the binary (<code className="text-gray-300">brew install go</code> on macOS)</li>
                <li><strong className="text-gray-200">Git</strong> — for worktree management</li>
                <li><strong className="text-gray-200">Supabase project</strong> — free tier works fine (<a href="https://supabase.com" className="text-green-400 hover:underline">supabase.com</a>)</li>
                <li><strong className="text-gray-200">Claude Code</strong> — installed and authenticated</li>
                <li><strong className="text-gray-200">The base workflow</strong> — install it first for CLAUDE.md and session management</li>
              </ul>
            </div>
          </Expandable>

          <Expandable title="How does it prevent conflicts?">
            <div className="text-sm text-gray-400 space-y-2">
              <p><strong className="text-gray-200">File registration</strong> — developers declare which files they're editing. If two people try to register the same file, the system warns them.</p>
              <p><strong className="text-gray-200">Atomic task claiming</strong> — task claims use SQL WHERE clauses so only one person can claim a task, even if two try simultaneously.</p>
              <p><strong className="text-gray-200">Git worktrees</strong> — each developer has their own working directory and branch. No shared working tree means no mid-edit conflicts.</p>
            </div>
          </Expandable>

          <Expandable title="What does the installer change on my system?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>The installer creates:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><code className="text-gray-300">~/.local/share/claude-coop/</code> — Source code (cloned from GitHub)</li>
                <li><code className="text-gray-300">~/.local/bin/claude-coop</code> — The compiled binary</li>
              </ul>
              <p>Per-project, <code className="text-gray-300">claude-coop init</code> creates a <code className="text-gray-300">.coop/</code> directory (gitignored) with your Supabase config.</p>
            </div>
          </Expandable>

          <Expandable title="How do I uninstall?">
            <div className="text-sm text-gray-400 space-y-2">
              <div className="bg-gray-950 rounded-lg p-3 font-mono text-xs">
                <div className="text-gray-500"># Remove the binary and source</div>
                <div>rm ~/.local/bin/claude-coop</div>
                <div>rm -rf ~/.local/share/claude-coop/</div>
                <div className="text-gray-500 mt-2"># Remove per-project config (in each project)</div>
                <div>rm -rf .coop/</div>
              </div>
            </div>
          </Expandable>
        </div>
      </div>

      {/* Next Steps */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">Next steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            to="/tools/install"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Download className="text-purple-400" size={20} />
              </div>
              <h3 className="font-semibold">Install the Workflow</h3>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              Set up the base CLAUDE.md system, agents, and status bar that Co-Op builds on.
            </p>
            <div className="text-purple-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Install <ArrowRight size={14} />
            </div>
          </Link>
          <Link
            to="/tools/claude-code-guide"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <BookOpen className="text-blue-400" size={20} />
              </div>
              <h3 className="font-semibold">Quick Reference</h3>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              Copy-paste templates, triggers, commands, and file templates for Claude Code.
            </p>
            <div className="text-blue-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              View guide <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-500/30 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Ready to go multiplayer?</h2>
          <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm max-w-2xl mx-auto mb-4 flex items-center justify-between gap-4">
            <div className="overflow-x-auto">
              <span className="text-gray-500">$ </span>
              <span className="text-green-400">curl</span>
              <span className="text-gray-300"> -fsSL https://operators-academy.vercel.app/claude-setup/install-coop.sh </span>
              <span className="text-gray-500">| </span>
              <span className="text-green-400">bash</span>
            </div>
            <CopyButton text={INSTALL_CMD} />
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <Link to="/tools/install" className="flex items-center gap-1 hover:text-purple-300 transition-colors">
              <Download size={14} />
              Install the base workflow first
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
