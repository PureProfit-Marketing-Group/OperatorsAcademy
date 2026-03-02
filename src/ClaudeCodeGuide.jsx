import React, { useState, useEffect } from 'react';
import { Copy, Check, ChevronRight, ChevronDown, FolderOpen, Terminal, MessageSquare, Wrench, BookOpen, ArrowRight, Download, Layers } from 'lucide-react';
import CopyButton from './components/CopyButton';

// Code block component
const CodeBlock = ({ children, copyable = true }) => (
  <div className="relative group">
    <pre className="bg-gray-900 p-3 rounded-lg text-sm overflow-x-auto text-gray-300 font-mono">
      {children}
    </pre>
    {copyable && (
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyButton text={children} />
      </div>
    )}
  </div>
);

// Expandable section component (custom variant for this page)
const Expandable = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-750 transition-colors text-left"
      >
        <span className="flex-1 font-medium text-sm">{title}</span>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
      {isOpen && <div className="p-3 bg-gray-850 border-t border-gray-700">{children}</div>}
    </div>
  );
};

// Section nav item
const sections = [
  { id: 'install', label: 'Install' },
  { id: 'files', label: 'Files' },
  { id: 'triggers', label: 'Triggers' },
  { id: 'sessions', label: 'Sessions' },
  { id: 'config', label: 'Config' },
  { id: 'reference', label: 'Reference' },
];

export default function ClaudeCodeGuide() {
  const [activeSection, setActiveSection] = useState('install');
  const installCmd = 'curl -fsSL https://operators-academy.vercel.app/claude-setup/install.sh | bash';
  const [installCopied, setInstallCopied] = useState(false);

  const handleInstallCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setInstallCopied(true);
    setTimeout(() => setInstallCopied(false), 2000);
  };

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sticky section nav */}
      <div className="sticky top-12 z-40 bg-gray-900/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex gap-1 py-2 overflow-x-auto">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded text-sm whitespace-nowrap transition-colors ${
                  activeSection === id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-12">
        {/* Page title */}
        <div>
          <h1 className="text-2xl font-bold">Quick Reference</h1>
          <p className="text-gray-400 text-sm mt-1">Copy-paste templates, triggers, commands, and file templates.</p>
        </div>

        {/* ── Install ── */}
        <section id="install" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Download className="text-purple-400" size={20} />
            Install
          </h2>
          <p className="text-sm text-gray-400">
            One command installs CLAUDE.md, 8 agents, status bar, and settings.
          </p>
          <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm flex items-center justify-between gap-4">
            <div className="overflow-x-auto">
              <span className="text-gray-500">$ </span>
              <span className="text-green-400">curl</span>
              <span className="text-gray-300"> -fsSL https://operators-academy.vercel.app/claude-setup/install.sh </span>
              <span className="text-gray-500">| </span>
              <span className="text-green-400">bash</span>
            </div>
            <button
              onClick={handleInstallCopy}
              className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded transition-colors flex-shrink-0"
            >
              {installCopied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
              {installCopied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <p className="text-xs text-gray-500">Backs up existing config. Requires curl and jq.</p>
        </section>

        {/* ── Files ── */}
        <section id="files" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <FolderOpen className="text-blue-400" size={20} />
            The 5 Core Files
          </h2>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-left">
                  <th className="px-4 py-2 text-gray-400 font-medium">File</th>
                  <th className="px-4 py-2 text-gray-400 font-medium">Purpose</th>
                  <th className="px-4 py-2 text-gray-400 font-medium hidden sm:table-cell">Analogy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {[
                  { name: 'CONTEXT.md', purpose: 'Domain knowledge & terminology', analogy: 'Internal wiki', color: 'text-purple-400' },
                  { name: 'TASKS.md', purpose: 'Active task tracking', analogy: 'Trello board', color: 'text-green-400' },
                  { name: 'TEST_LOG.md', purpose: 'QA activities & bug tracking', analogy: 'Lab notebook', color: 'text-red-400' },
                  { name: 'PLAN.md', purpose: 'Strategic planning', analogy: 'Blueprint', color: 'text-orange-400' },
                  { name: 'PROGRESS.md', purpose: 'Session-by-session log', analogy: 'Flight log', color: 'text-blue-400' },
                ].map((f) => (
                  <tr key={f.name}>
                    <td className={`px-4 py-2 font-mono font-semibold ${f.color}`}>{f.name}</td>
                    <td className="px-4 py-2 text-gray-300">{f.purpose}</td>
                    <td className="px-4 py-2 text-gray-500 hidden sm:table-cell">{f.analogy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold mb-3 text-sm flex items-center gap-2">
              <Layers size={16} />
              File Creation Priority
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-purple-900/50 px-3 py-1 rounded">1. CONTEXT.md</span>
              <ArrowRight size={14} className="text-gray-500" />
              <span className="bg-green-900/50 px-3 py-1 rounded">2. TASKS.md</span>
              <ArrowRight size={14} className="text-gray-500" />
              <span className="bg-red-900/50 px-3 py-1 rounded">3. TEST_LOG.md</span>
              <ArrowRight size={14} className="text-gray-500" />
              <span className="bg-orange-900/50 px-3 py-1 rounded">4. PLAN.md</span>
              <ArrowRight size={14} className="text-gray-500" />
              <span className="bg-blue-900/50 px-3 py-1 rounded">5. PROGRESS.md</span>
            </div>
          </div>

          {/* Expandable templates */}
          <div className="space-y-2">
            <Expandable title="CONTEXT.md template">
              <CodeBlock>{`# CONTEXT.md

## Project Overview
**Name:** My App
**Tech Stack:** Next.js, Supabase, TypeScript

## Terminology
| Term | Definition |
|------|------------|
| Agent | Sales representative |
| Call | Recorded phone conversation |

## External Integrations
- Twilio (SMS)
- Stripe (Payments)

## Conventions
- Use TypeScript strict mode
- All API routes return { success, data, error }`}</CodeBlock>
            </Expandable>

            <Expandable title="TASKS.md template">
              <CodeBlock>{`# TASKS.md

## Current Sprint
Building authentication system

## In Progress
- [ ] **User login flow** ← CURRENT
  - Branch: feature/auth
  - Blocker: None

## To Do
- [ ] Password reset
- [ ] OAuth integration

## Done
- [x] Database schema — Jan 20`}</CodeBlock>
            </Expandable>

            <Expandable title="TEST_LOG.md template">
              <CodeBlock>{`# TEST_LOG.md

## Jan 22 — Auth Feature Test Run

### Results Summary
| Category | Passed | Failed |
|----------|--------|--------|
| New Feature | 8 | 1 |
| Regression | 5 | 0 |

### Failed
- test_session_expiry
  - Tokens not expiring correctly
  - Root cause: Missing exp claim

### Prevention Rules
- Always set token expiration`}</CodeBlock>
            </Expandable>

            <Expandable title="PLAN.md template">
              <CodeBlock>{`# PLAN.md — User Authentication

## Objective
Secure user authentication with OAuth support

## Options Considered
### Option A: NextAuth.js
Pros: Quick setup, many providers
Cons: Less control

### Option B: Custom + Supabase Auth
Pros: Full control, integrated with DB
Cons: More work

## Decision
Option B — Need tight Supabase integration

## Implementation Phases
1. Basic email/password
2. Session management
3. OAuth providers`}</CodeBlock>
            </Expandable>

            <Expandable title="PROGRESS.md template">
              <CodeBlock>{`# PROGRESS.md

## Jan 22, 2026 — Session 3

### Summary
Completed user authentication API routes

### Completed
- [x] Login endpoint
- [x] Logout endpoint
- [x] Session middleware

### Files Changed
- app/api/auth/login/route.ts — Created
- middleware.ts — Added auth check

### Decisions Made
- Using HTTP-only cookies for tokens

### Next Steps
- [ ] Build login UI
- [ ] Add password reset`}</CodeBlock>
            </Expandable>
          </div>
        </section>

        {/* ── Triggers ── */}
        <section id="triggers" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <MessageSquare className="text-purple-400" size={20} />
            Trigger Phrases
          </h2>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="bg-blue-900/30 px-4 py-2 font-semibold text-sm border-b border-gray-700">
              Documentation Triggers
            </div>
            <div className="divide-y divide-gray-700">
              {[
                { phrase: '"wrap up" / "end session" / "done for today"', action: 'Updates PROGRESS.md' },
                { phrase: '"update tasks" / "mark done" / "what\'s next"', action: 'Updates TASKS.md' },
                { phrase: '"let\'s plan" / "think through"', action: 'Creates/updates PLAN.md' },
                { phrase: '"update context" / "add to glossary"', action: 'Updates CONTEXT.md' },
                { phrase: '"initialize project" / "set up docs"', action: 'Creates all missing files' },
                { phrase: '"let\'s continue" / "pick up where we left off"', action: 'Reads docs and resumes' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-3">
                  <code className="text-sm text-blue-300 flex-1">{item.phrase}</code>
                  <span className="text-xs text-gray-500 flex-shrink-0">{item.action}</span>
                  <CopyButton text={item.phrase.replace(/['"]/g, '').split(' / ')[0]} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="bg-green-900/30 px-4 py-2 font-semibold text-sm border-b border-gray-700">
              QA Triggers
            </div>
            <div className="divide-y divide-gray-700">
              {[
                { phrase: '"run QA" / "quality check"', action: 'Full QA cycle (Orchestrator)' },
                { phrase: '"test this" / "verify this works"', action: 'Feature tests (Tester)' },
                { phrase: '"debug this" / "why is this failing"', action: 'Bug investigation (Debugger)' },
                { phrase: '"add logging" / "make observable"', action: 'Strategic logging (Logger)' },
                { phrase: '"quick QA"', action: 'Abbreviated QA check' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-3">
                  <code className="text-sm text-green-300 flex-1">{item.phrase}</code>
                  <span className="text-xs text-gray-500 flex-shrink-0">{item.action}</span>
                  <CopyButton text={item.phrase.replace(/['"]/g, '').split(' / ')[0]} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sessions ── */}
        <section id="sessions" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Terminal className="text-orange-400" size={20} />
            Session Management
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-sm text-green-400">Starting a Session</h3>
              <CodeBlock>{`Read CLAUDE.md, TASKS.md, PROGRESS.md, and CONTEXT.md.
Check the ← CURRENT marker in TASKS.md.
Tell me current progress and recommended next action.
Then help me continue.`}</CodeBlock>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-2 text-sm text-yellow-400">Ending a Session</h3>
              <CodeBlock>{`Before we pause:
1. Update TASKS.md with current progress
2. Commit all changes: git add . && git commit -m "WIP: [task]"
3. Tell me exactly where we left off`}</CodeBlock>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-left">
                  <th className="px-4 py-2 text-gray-400 font-medium">Command</th>
                  <th className="px-4 py-2 text-gray-400 font-medium">What It Does</th>
                  <th className="px-4 py-2 text-gray-400 font-medium">When to Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-4 py-2"><code className="text-yellow-300">/compact</code></td>
                  <td className="px-4 py-2 text-gray-300">Summarizes conversation, frees context</td>
                  <td className="px-4 py-2 text-gray-500">Context long but still on same topic</td>
                </tr>
                <tr>
                  <td className="px-4 py-2"><code className="text-red-300">/clear</code></td>
                  <td className="px-4 py-2 text-gray-300">Completely resets context</td>
                  <td className="px-4 py-2 text-gray-500">Switching tasks or after milestone</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Config ── */}
        <section id="config" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Wrench className="text-red-400" size={20} />
            Configuration
          </h2>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-left">
                  <th className="px-4 py-2 text-gray-400 font-medium">Level</th>
                  <th className="px-4 py-2 text-gray-400 font-medium">Location</th>
                  <th className="px-4 py-2 text-gray-400 font-medium">Scope</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr>
                  <td className="px-4 py-2 text-purple-400 font-semibold">Global</td>
                  <td className="px-4 py-2 font-mono text-gray-300">~/.claude/CLAUDE.md</td>
                  <td className="px-4 py-2 text-gray-500">All projects</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-blue-400 font-semibold">Project</td>
                  <td className="px-4 py-2 font-mono text-gray-300">./CLAUDE.md</td>
                  <td className="px-4 py-2 text-gray-500">This project only</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-green-400 font-semibold">Local</td>
                  <td className="px-4 py-2 font-mono text-gray-300">./CLAUDE.local.md</td>
                  <td className="px-4 py-2 text-gray-500">Personal, not committed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold mb-3 text-sm">Project File Structure</h3>
            <div className="bg-gray-900 rounded p-4 font-mono text-sm">
              <div className="text-gray-500">project/</div>
              <div className="pl-4">├── <span className="text-purple-400">CLAUDE.md</span> <span className="text-gray-600"># Project instructions</span></div>
              <div className="pl-4">├── <span className="text-purple-400">CONTEXT.md</span> <span className="text-gray-600"># Domain knowledge</span></div>
              <div className="pl-4">├── <span className="text-green-400">TASKS.md</span> <span className="text-gray-600"># Task tracking</span></div>
              <div className="pl-4">├── <span className="text-red-400">TEST_LOG.md</span> <span className="text-gray-600"># QA tracking</span></div>
              <div className="pl-4">├── <span className="text-orange-400">PLAN.md</span> <span className="text-gray-600"># Strategic plans</span></div>
              <div className="pl-4">├── <span className="text-blue-400">PROGRESS.md</span> <span className="text-gray-600"># Session log</span></div>
              <div className="pl-4">└── <span className="text-gray-400">.claude/</span></div>
              <div className="pl-8">└── <span className="text-yellow-400">agents/</span> <span className="text-gray-600"># Project agents</span></div>
            </div>
          </div>
        </section>

        {/* ── Reference ── */}
        <section id="reference" className="scroll-mt-28 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <BookOpen className="text-cyan-400" size={20} />
            Cheat Sheet
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-sm text-blue-400">The 5 Files</h3>
              <div className="space-y-1.5 text-sm">
                <div><span className="text-purple-400 font-mono">CONTEXT.md</span> — Domain knowledge</div>
                <div><span className="text-green-400 font-mono">TASKS.md</span> — Task tracking</div>
                <div><span className="text-red-400 font-mono">TEST_LOG.md</span> — QA tracking</div>
                <div><span className="text-orange-400 font-mono">PLAN.md</span> — Strategic plans</div>
                <div><span className="text-blue-400 font-mono">PROGRESS.md</span> — Session log</div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-sm text-green-400">The 4 QA Agents</h3>
              <div className="space-y-1.5 text-sm">
                <div><span className="text-yellow-400 font-mono">logger</span> — Strategic logging</div>
                <div><span className="text-blue-400 font-mono">feature-tester</span> — Testing</div>
                <div><span className="text-red-400 font-mono">debugger</span> — Bug fixing</div>
                <div><span className="text-purple-400 font-mono">qa-orchestrator</span> — Coordinates QA</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-4">
            <h3 className="font-semibold mb-3 text-sm">Key Commands</h3>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div className="bg-gray-900 p-3 rounded text-center">
                <code className="text-yellow-300">/compact</code>
                <div className="text-xs text-gray-500 mt-1">Summarize & continue</div>
              </div>
              <div className="bg-gray-900 p-3 rounded text-center">
                <code className="text-red-300">/clear</code>
                <div className="text-xs text-gray-500 mt-1">Full reset</div>
              </div>
              <div className="bg-gray-900 p-3 rounded text-center">
                <code className="text-blue-300">/agents</code>
                <div className="text-xs text-gray-500 mt-1">Manage agents</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg p-4">
            <h3 className="font-semibold mb-3 text-sm">Daily Workflow</h3>
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="bg-blue-900/50 px-3 py-1.5 rounded">"Let's continue"</span>
              <ArrowRight size={14} className="text-gray-500" />
              <span className="bg-gray-700 px-3 py-1.5 rounded">Work on tasks</span>
              <ArrowRight size={14} className="text-gray-500" />
              <span className="bg-green-900/50 px-3 py-1.5 rounded">"Run QA"</span>
              <ArrowRight size={14} className="text-gray-500" />
              <span className="bg-purple-900/50 px-3 py-1.5 rounded">"Wrap up"</span>
              <ArrowRight size={14} className="text-gray-500" />
              <span className="bg-red-900/50 px-3 py-1.5 rounded">/clear</span>
            </div>
          </div>
        </section>

        <div className="text-center text-xs text-gray-600 pb-4">
          Quick Reference — Operators Academy
        </div>
      </div>
    </div>
  );
}
