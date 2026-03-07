import React from 'react';
import { Link } from 'react-router-dom';
import { Users, GitBranch, ListChecks, Eye, Shield, Terminal, ArrowRight, BookOpen, Download, MessageCircle, GitMerge } from 'lucide-react';
import CopyButton from './components/CopyButton';
import Expandable from './components/Expandable';

const INSTALL_CMD = 'curl -fsSL https://operators-academy.vercel.app/claude-setup/install-coop.sh | bash';

const TOOL_CATEGORIES = [
  {
    label: 'Coordination',
    tools: [
      { name: 'coop_announce', desc: 'Broadcast status updates', color: 'green' },
      { name: 'coop_read_feed', desc: 'Read team activity feed', color: 'green' },
      { name: 'coop_list_peers', desc: 'See who\'s connected', color: 'green' },
      { name: 'coop_log', desc: 'Write to shared log', color: 'green' },
    ],
  },
  {
    label: 'Tasks',
    tools: [
      { name: 'coop_claim_task', desc: 'Claim a shared task', color: 'blue' },
      { name: 'coop_complete_task', desc: 'Mark task as done', color: 'blue' },
      { name: 'coop_create_task', desc: 'Add task to queue', color: 'blue' },
    ],
  },
  {
    label: 'Files & Context',
    tools: [
      { name: 'coop_check_files', desc: 'Check for file conflicts', color: 'purple' },
      { name: 'coop_register_files', desc: 'Declare file ownership', color: 'purple' },
      { name: 'coop_get_context', desc: 'Get peer session history', color: 'purple' },
    ],
  },
  {
    label: 'AI-to-AI (Co-Op Ask)',
    tools: [
      { name: 'coop_ask', desc: 'Ask another dev\'s AI', color: 'cyan' },
      { name: 'coop_check_inbox', desc: 'Check question threads', color: 'cyan' },
      { name: 'coop_answer_inbox', desc: 'Answer pending questions', color: 'cyan' },
    ],
  },
  {
    label: 'Vault (Secrets)',
    tools: [
      { name: 'coop_share_env', desc: 'Encrypt & share env vars', color: 'orange' },
      { name: 'coop_pull_env', desc: 'Pull shared env vars', color: 'orange' },
    ],
  },
];

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

        {/* Co-Op Ask — featured card */}
        <div className="bg-gray-800 border border-cyan-500/30 rounded-xl p-5 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <MessageCircle className="text-cyan-400" size={20} />
            </div>
            <h3 className="font-semibold">Co-Op Ask — AI-to-AI Communication</h3>
            <span className="text-xs px-2 py-0.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300">New</span>
          </div>
          <p className="text-sm text-gray-400 mb-3">
            One session's Claude can directly question another session's Claude — no human relay needed.
            Questions are auto-answered by a separate API call that never interrupts the other developer's session.
          </p>
          <div className="grid md:grid-cols-3 gap-3 text-xs text-gray-500">
            <div className="bg-gray-900 rounded-lg p-3">
              <span className="text-cyan-300 font-medium">Auto-answer</span> — most questions answered in seconds via context-aware Claude API call
            </div>
            <div className="bg-gray-900 rounded-lg p-3">
              <span className="text-cyan-300 font-medium">Multi-turn threads</span> — follow-up questions carry full conversation history
            </div>
            <div className="bg-gray-900 rounded-lg p-3">
              <span className="text-cyan-300 font-medium">/inbox escalation</span> — low-confidence answers queued for manual review
            </div>
          </div>
        </div>

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
              No merge conflicts until you're ready. Crash recovery via <code className="text-green-300">--resume</code>.
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
              <h3 className="font-semibold">Encrypted Vault</h3>
            </div>
            <p className="text-sm text-gray-400">
              Share environment variables via AES-256-GCM encrypted envelopes with 5-minute TTL.
              Session-scoped secrets auto-revoke when the sender disconnects.
            </p>
          </div>

          {/* Guided Merge */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <GitMerge className="text-green-400" size={20} />
              </div>
              <h3 className="font-semibold">Guided Merge</h3>
            </div>
            <p className="text-sm text-gray-400">
              <code className="text-green-300">claude-coop merge</code> analyzes diffs, detects conflicts, and walks you
              through rebase or merge — then cleans up the worktree when you're done.
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
                This creates a worktree, registers your session with Supabase, starts the real-time sync engine,
                and generates CO-OP.md. Use <code className="text-green-300">--resume</code> to reconnect after a crash.
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
                Open Claude Code in your worktree. Claude reads CO-OP.md and uses
                15 MCP tools to coordinate — claiming tasks, announcing progress, checking for conflicts,
                and asking the other developer's AI questions directly via Co-Op Ask.
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
                Run <code className="text-green-300">claude-coop merge</code> for a guided workflow — it analyzes diffs,
                detects conflicts, handles rebase or merge, and cleans up the worktree when you're done.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MCP Tools */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-2">15 MCP Tools</h2>
        <p className="text-gray-400 text-sm mb-6">
          Automatically available to Claude Code when you're in a co-op session.
        </p>

        <div className="space-y-6">
          {TOOL_CATEGORIES.map(cat => (
            <div key={cat.label}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{cat.label}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {cat.tools.map(t => (
                  <div key={t.name} className="bg-gray-800 border border-gray-700 rounded-lg p-3">
                    <div className={`w-2 h-2 rounded-full bg-${t.color}-400 mb-2`}></div>
                    <div className="text-sm font-mono font-medium">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details */}
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
              <p className="mt-2">For Co-Op Ask auto-answer, you'll also need an <strong className="text-gray-200">Anthropic API key</strong> — configured per-developer in <code className="text-gray-300">.coop/config.json</code>.</p>
            </div>
          </Expandable>

          <Expandable title="How does Co-Op Ask work?">
            <div className="text-sm text-gray-400 space-y-2">
              <p><strong className="text-gray-200">Auto-answer (default)</strong> — your Claude calls <code className="text-gray-300">coop_ask</code>, the question goes to Supabase, the other developer's binary detects it via Realtime, gathers context (synced file index + session history), and makes a <em>separate</em> Claude API call to answer. The answer flows back to your session inline.</p>
              <p><strong className="text-gray-200">/inbox escalation</strong> — if the auto-answer has low confidence, the question is left as PENDING. It shows up in the other developer's CO-OP.md and can be answered via <code className="text-gray-300">/inbox</code> with full local context.</p>
              <p><strong className="text-gray-200">Multi-turn threads</strong> — follow-up questions carry the full thread history. The AI self-evaluates when a thread is resolved.</p>
              <p><strong className="text-gray-200">Offline fallback</strong> — if the peer is offline, simple questions are answered using cached Supabase context. Complex questions are queued for when they come back online.</p>
            </div>
          </Expandable>

          <Expandable title="How does it prevent conflicts?">
            <div className="text-sm text-gray-400 space-y-2">
              <p><strong className="text-gray-200">File registration</strong> — developers declare which files they're editing. If two people try to register the same file, the system warns them.</p>
              <p><strong className="text-gray-200">Atomic task claiming</strong> — task claims use SQL WHERE clauses so only one person can claim a task, even if two try simultaneously.</p>
              <p><strong className="text-gray-200">Git worktrees</strong> — each developer has their own working directory and branch. No shared working tree means no mid-edit conflicts.</p>
            </div>
          </Expandable>

          <Expandable title="How does the vault work?">
            <div className="text-sm text-gray-400 space-y-2">
              <p><strong className="text-gray-200">Encryption</strong> — HKDF-SHA256 key derivation + AES-256-GCM. Secrets are encrypted client-side before touching Supabase.</p>
              <p><strong className="text-gray-200">TTL envelopes</strong> — encrypted envelopes expire after 5 minutes. Unclaimed secrets are pruned automatically.</p>
              <p><strong className="text-gray-200">Session-scoped secrets</strong> — mark secrets with <code className="text-gray-300">session_scoped: true</code> and they're automatically revoked when the sender disconnects.</p>
              <p><strong className="text-gray-200">Key-names only</strong> — the MCP tools never return secret values in conversation. Only key names are surfaced to Claude.</p>
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
