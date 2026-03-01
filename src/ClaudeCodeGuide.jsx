import React, { useState } from 'react';
import { Book, FileText, CheckSquare, GitBranch, Clock, Bug, TestTube, Eye, Zap, ChevronRight, ChevronDown, Copy, Check, Play, Pause, RotateCcw, FolderOpen, Terminal, MessageSquare, AlertTriangle, Lightbulb, Target, Layers, ArrowRight, Home, BookOpen, Wrench, Brain, Shield } from 'lucide-react';

// Copy button component
const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button 
      onClick={handleCopy}
      className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded transition-colors"
    >
      {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

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

// Expandable section component
const Expandable = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-750 transition-colors text-left"
      >
        {Icon && <Icon size={20} className="text-blue-400" />}
        <span className="flex-1 font-medium">{title}</span>
        {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
      {isOpen && <div className="p-4 bg-gray-850 border-t border-gray-700">{children}</div>}
    </div>
  );
};

// Analogy card component
const AnalogyCard = ({ emoji, title, description }) => (
  <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg p-4">
    <div className="flex items-start gap-3">
      <span className="text-2xl">{emoji}</span>
      <div>
        <h4 className="font-semibold text-blue-300">{title}</h4>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </div>
    </div>
  </div>
);

// File card component
const FileCard = ({ name, purpose, icon: Icon, color, contents }) => {
  const [showContents, setShowContents] = useState(false);
  return (
    <div className={`border rounded-lg overflow-hidden ${color}`}>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <Icon size={24} />
          <h3 className="font-bold text-lg">{name}</h3>
        </div>
        <p className="text-sm text-gray-300">{purpose}</p>
        {contents && (
          <button
            onClick={() => setShowContents(!showContents)}
            className="mt-3 text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1"
          >
            {showContents ? 'Hide' : 'Show'} template
            {showContents ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>
        )}
      </div>
      {showContents && contents && (
        <div className="border-t border-gray-700 p-3 bg-gray-900/50">
          <CodeBlock>{contents}</CodeBlock>
        </div>
      )}
    </div>
  );
};

// Navigation component
const Navigation = ({ currentPage, setCurrentPage, pages }) => (
  <nav className="flex flex-wrap gap-2 p-4 bg-gray-800 rounded-lg mb-6">
    {pages.map((page, index) => (
      <button
        key={page.id}
        onClick={() => setCurrentPage(page.id)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
          currentPage === page.id
            ? 'bg-blue-600 text-white'
            : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
        }`}
      >
        <page.icon size={16} />
        <span className="hidden sm:inline">{page.title}</span>
        <span className="sm:hidden">{index + 1}</span>
      </button>
    ))}
  </nav>
);

// Progress indicator
const ProgressIndicator = ({ current, total }) => (
  <div className="flex items-center gap-2 text-sm text-gray-400">
    <div className="flex-1 bg-gray-700 rounded-full h-2">
      <div 
        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
    <span>{current} of {total}</span>
  </div>
);

// Page: Welcome
const WelcomePage = () => (
  <div className="space-y-6">
    <div className="text-center py-8">
      <div className="text-6xl mb-4">🚀</div>
      <h1 className="text-3xl font-bold mb-2">Claude Code Project Startup System</h1>
      <p className="text-gray-400 max-w-2xl mx-auto">
        A complete system for managing AI-assisted development projects with documentation, 
        quality assurance, and session continuity.
      </p>
    </div>

    <AnalogyCard
      emoji="🏥"
      title="The Hospital Shift Change Analogy"
      description="Imagine nurses changing shifts at a hospital. Each nurse documents everything so the next shift can continue patient care seamlessly. This system does the same for Claude Code sessions — each session 'hands off' to the next through documentation."
    />

    <div className="grid md:grid-cols-3 gap-4 mt-8">
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <div className="text-3xl mb-2">📁</div>
        <h3 className="font-semibold">5 Core Files</h3>
        <p className="text-sm text-gray-400">Documentation that maintains context</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <div className="text-3xl mb-2">🤖</div>
        <h3 className="font-semibold">4 QA Agents</h3>
        <p className="text-sm text-gray-400">Specialized helpers for quality</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <div className="text-3xl mb-2">🎯</div>
        <h3 className="font-semibold">Checkpoints</h3>
        <p className="text-sm text-gray-400">Know when to clear context</p>
      </div>
    </div>

    <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-lg p-4 mt-6">
      <div className="flex items-start gap-3">
        <Lightbulb className="text-yellow-400 mt-1" size={20} />
        <div>
          <h4 className="font-semibold text-yellow-300">Why This Matters</h4>
          <p className="text-sm text-gray-300 mt-1">
            Claude Code doesn't remember previous sessions. Without documentation, every session starts from scratch. 
            This system creates a "memory" through files that Claude reads at the start of each session.
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Page: Core Files
const CoreFilesPage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold flex items-center gap-3">
      <FolderOpen className="text-blue-400" />
      The 5 Core Documentation Files
    </h2>
    
    <p className="text-gray-400">
      These files work together to maintain project context across Claude Code sessions. 
      Think of them as your project's "institutional memory."
    </p>

    <div className="space-y-4">
      <FileCard
        name="CONTEXT.md"
        purpose="Domain knowledge, terminology, integrations, and conventions. Like an internal wiki page for the project."
        icon={Book}
        color="border-purple-700 bg-purple-900/20"
        contents={`# CONTEXT.md

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
- All API routes return { success, data, error }`}
      />

      <FileCard
        name="TASKS.md"
        purpose="Active task tracking with status markers. Like a Trello board in markdown format."
        icon={CheckSquare}
        color="border-green-700 bg-green-900/20"
        contents={`# TASKS.md

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
- [x] Database schema — Jan 20`}
      />

      <FileCard
        name="PLAN.md"
        purpose="Strategic planning for complex features. Like an architectural blueprint — measure twice, cut once."
        icon={Target}
        color="border-orange-700 bg-orange-900/20"
        contents={`# PLAN.md — User Authentication

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
3. OAuth providers`}
      />

      <FileCard
        name="PROGRESS.md"
        purpose="Session-by-session work log. Like a pilot's flight log documenting every session."
        icon={Clock}
        color="border-blue-700 bg-blue-900/20"
        contents={`# PROGRESS.md

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
- [ ] Add password reset`}
      />

      <FileCard
        name="TEST_LOG.md"
        purpose="QA activities, bug investigations, and fixes. Your quality assurance lab notebook."
        icon={TestTube}
        color="border-red-700 bg-red-900/20"
        contents={`# TEST_LOG.md

## Jan 22 — Auth Feature Test Run

### Results Summary
| Category | Passed | Failed |
|----------|--------|--------|
| New Feature | 8 | 1 |
| Regression | 5 | 0 |

### ❌ Failed
- test_session_expiry
  - Tokens not expiring correctly
  - Root cause: Missing exp claim

### Prevention Rules
- Always set token expiration`}
      />
    </div>

    <div className="bg-gray-800 rounded-lg p-4 mt-6">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Layers size={18} />
        File Creation Priority
      </h3>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="bg-purple-900/50 px-3 py-1 rounded">1. CONTEXT.md</span>
        <ArrowRight size={16} className="text-gray-500" />
        <span className="bg-green-900/50 px-3 py-1 rounded">2. TASKS.md</span>
        <ArrowRight size={16} className="text-gray-500" />
        <span className="bg-red-900/50 px-3 py-1 rounded">3. TEST_LOG.md</span>
        <ArrowRight size={16} className="text-gray-500" />
        <span className="bg-orange-900/50 px-3 py-1 rounded">4. PLAN.md</span>
        <ArrowRight size={16} className="text-gray-500" />
        <span className="bg-blue-900/50 px-3 py-1 rounded">5. PROGRESS.md</span>
      </div>
    </div>
  </div>
);

// Page: QA Agents
const QAAgentsPage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold flex items-center gap-3">
      <Shield className="text-green-400" />
      The 4 QA Agents
    </h2>

    <AnalogyCard
      emoji="👨‍🍳"
      title="The Restaurant Kitchen Analogy"
      description="Think of Claude Code like a restaurant kitchen. The main agent is the head chef coordinating everything. QA agents are specialized line cooks — each has their own station, tools, and expertise. They work independently but contribute to the final dish."
    />

    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-gray-800 rounded-lg p-5 border-l-4 border-yellow-500">
        <div className="flex items-center gap-3 mb-3">
          <Eye className="text-yellow-400" size={24} />
          <h3 className="font-bold text-lg">Logger Agent</h3>
        </div>
        <p className="text-sm text-gray-400 mb-3">
          Implements strategic logging for complex features. Like installing security cameras at entry points and high-value areas.
        </p>
        <div className="text-xs text-gray-500">
          <span className="font-semibold">Trigger:</span> "add logging", "make observable"
        </div>
        <div className="mt-3 bg-gray-900 rounded p-2">
          <code className="text-xs text-yellow-300">
            logger.info('Processing started', {'{'}id, timestamp{'}'});
          </code>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-5 border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-3">
          <TestTube className="text-blue-400" size={24} />
          <h3 className="font-bold text-lg">Feature Tester Agent</h3>
        </div>
        <p className="text-sm text-gray-400 mb-3">
          Tests new features and runs regression checks. Like a doctor's checkup — examine what hurts, but also check vital signs.
        </p>
        <div className="text-xs text-gray-500">
          <span className="font-semibold">Trigger:</span> "test this", "verify this works"
        </div>
        <div className="mt-3 bg-gray-900 rounded p-2 text-xs">
          <div className="text-green-400">✓ New feature tests</div>
          <div className="text-green-400">✓ Related regressions</div>
          <div className="text-green-400">✓ 2-3 random critical paths</div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-5 border-l-4 border-red-500">
        <div className="flex items-center gap-3 mb-3">
          <Bug className="text-red-400" size={24} />
          <h3 className="font-bold text-lg">Debugger Agent</h3>
        </div>
        <p className="text-sm text-gray-400 mb-3">
          Root cause analysis and surgical fixes. Like a detective — gather evidence, form hypotheses, test them, then make the fix.
        </p>
        <div className="text-xs text-gray-500">
          <span className="font-semibold">Trigger:</span> "debug this", "why is this failing"
        </div>
        <div className="mt-3 bg-gray-900 rounded p-2 text-xs">
          <div>1. Reproduce → 2. Hypothesize → 3. Isolate → 4. Fix → 5. Verify</div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-5 border-l-4 border-purple-500">
        <div className="flex items-center gap-3 mb-3">
          <Zap className="text-purple-400" size={24} />
          <h3 className="font-bold text-lg">QA Orchestrator</h3>
        </div>
        <p className="text-sm text-gray-400 mb-3">
          Coordinates the full QA workflow. The conductor that ensures all QA agents work together in harmony.
        </p>
        <div className="text-xs text-gray-500">
          <span className="font-semibold">Trigger:</span> "run QA", "quality check"
        </div>
        <div className="mt-3 bg-gray-900 rounded p-2 text-xs">
          <div>Logging → Testing → Debugging → Documentation</div>
        </div>
      </div>
    </div>

    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="font-semibold mb-3">The QA Cycle</h3>
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="bg-yellow-900/50 px-3 py-2 rounded">📝 Logging</span>
        <ArrowRight size={16} className="text-gray-500" />
        <span className="bg-blue-900/50 px-3 py-2 rounded">🧪 Testing</span>
        <ArrowRight size={16} className="text-gray-500" />
        <span className="bg-gray-700 px-3 py-2 rounded">Pass?</span>
        <ArrowRight size={16} className="text-gray-500" />
        <span className="bg-red-900/50 px-3 py-2 rounded">🐛 Debug (if fail)</span>
        <ArrowRight size={16} className="text-gray-500" />
        <span className="bg-green-900/50 px-3 py-2 rounded">✅ Document</span>
      </div>
    </div>
  </div>
);

// Page: Trigger Phrases
const TriggerPhrasesPage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold flex items-center gap-3">
      <MessageSquare className="text-purple-400" />
      Trigger Phrases
    </h2>

    <p className="text-gray-400">
      These natural language phrases tell Claude Code what action to take. 
      Just say them in your conversation and Claude will respond appropriately.
    </p>

    <div className="space-y-4">
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="bg-blue-900/30 px-4 py-2 font-semibold border-b border-gray-700">
          📁 Documentation Triggers
        </div>
        <div className="divide-y divide-gray-700">
          {[
            { phrase: '"wrap up" / "end session" / "done for today"', action: 'Updates PROGRESS.md with session summary' },
            { phrase: '"update tasks" / "mark done" / "what\'s next"', action: 'Updates TASKS.md' },
            { phrase: '"let\'s plan" / "think through"', action: 'Creates or updates PLAN.md' },
            { phrase: '"update context" / "add to glossary"', action: 'Updates CONTEXT.md' },
            { phrase: '"initialize project" / "set up docs"', action: 'Creates all missing documentation files' },
            { phrase: '"let\'s continue" / "pick up where we left off"', action: 'Reads docs and resumes work' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 p-3">
              <code className="text-sm text-blue-300 flex-1">{item.phrase}</code>
              <span className="text-sm text-gray-400">→ {item.action}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <div className="bg-green-900/30 px-4 py-2 font-semibold border-b border-gray-700">
          🧪 QA Triggers
        </div>
        <div className="divide-y divide-gray-700">
          {[
            { phrase: '"run QA" / "quality check"', action: 'Runs full QA cycle (Orchestrator)' },
            { phrase: '"test this" / "verify this works"', action: 'Runs feature tests (Tester)' },
            { phrase: '"debug this" / "why is this failing"', action: 'Investigates bug (Debugger)' },
            { phrase: '"add logging" / "make observable"', action: 'Adds strategic logging (Logger)' },
            { phrase: '"quick QA"', action: 'Runs abbreviated QA check' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 p-3">
              <code className="text-sm text-green-300 flex-1">{item.phrase}</code>
              <span className="text-sm text-gray-400">→ {item.action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="font-semibold mb-3">Example Conversation Flow</h3>
      <div className="space-y-3 text-sm">
        <div className="flex gap-3">
          <span className="text-blue-400 font-semibold w-12">You:</span>
          <span>"I just finished the login API. Run QA."</span>
        </div>
        <div className="flex gap-3">
          <span className="text-green-400 font-semibold w-12">Claude:</span>
          <span className="text-gray-400">[Runs logging → testing → documents results]</span>
        </div>
        <div className="flex gap-3">
          <span className="text-green-400 font-semibold w-12">Claude:</span>
          <span>"✅ QA complete. 12 tests passed. Ready to commit."</span>
        </div>
        <div className="flex gap-3">
          <span className="text-blue-400 font-semibold w-12">You:</span>
          <span>"Great, let's wrap up for today."</span>
        </div>
        <div className="flex gap-3">
          <span className="text-green-400 font-semibold w-12">Claude:</span>
          <span className="text-gray-400">[Updates PROGRESS.md with session summary]</span>
        </div>
      </div>
    </div>
  </div>
);

// Page: Session Management
const SessionManagementPage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold flex items-center gap-3">
      <RotateCcw className="text-orange-400" />
      Session Management & Checkpoints
    </h2>

    <AnalogyCard
      emoji="🧠"
      title="Context Window = Short-Term Memory"
      description="Claude's context window is like short-term memory — it can only hold so much before things get fuzzy. Checkpoints are like taking notes before your memory fills up, then starting fresh with those notes."
    />

    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Play className="text-green-400" size={18} />
          Starting a Session
        </h3>
        <CodeBlock>{`Read CLAUDE.md, TASKS.md, PROGRESS.md, and CONTEXT.md.
Check the ← CURRENT marker in TASKS.md.
Tell me current progress and recommended next action.
Then help me continue.`}</CodeBlock>
      </div>

      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Pause className="text-yellow-400" size={18} />
          Ending a Session
        </h3>
        <CodeBlock>{`Before we pause:
1. Update TASKS.md with current progress
2. Commit all changes: git add . && git commit -m "WIP: [task]"
3. Tell me exactly where we left off`}</CodeBlock>
      </div>
    </div>

    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Terminal className="text-blue-400" size={18} />
        Two Key Commands
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gray-900 rounded p-3">
          <code className="text-yellow-300 font-bold">/compact</code>
          <p className="text-sm text-gray-400 mt-2">
            Summarizes the conversation and frees up context without fully resetting. 
            Use when context is getting long but you're still working on related tasks.
          </p>
        </div>
        <div className="bg-gray-900 rounded p-3">
          <code className="text-red-300 font-bold">/clear</code>
          <p className="text-sm text-gray-400 mt-2">
            Completely resets the context. Use when switching to unrelated work or 
            after completing a major milestone. Always "wrap up" first!
          </p>
        </div>
      </div>
    </div>

    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <AlertTriangle className="text-orange-400" size={18} />
        When to Clear Context
      </h3>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div>
          <h4 className="text-green-400 font-semibold mb-2">✅ Good times to /clear:</h4>
          <ul className="space-y-1 text-gray-400">
            <li>• Switching to unrelated task</li>
            <li>• After a major milestone</li>
            <li>• Context is long and Claude seems confused</li>
            <li>• Starting fresh after debugging went off track</li>
          </ul>
        </div>
        <div>
          <h4 className="text-red-400 font-semibold mb-2">❌ Don't clear when:</h4>
          <ul className="space-y-1 text-gray-400">
            <li>• In the middle of multi-step work</li>
            <li>• Haven't updated PROGRESS.md yet</li>
            <li>• Next task builds on what you just did</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="font-semibold mb-3">Checkpoint Markers in Plans</h3>
      <p className="text-sm text-gray-400 mb-3">
        Mark your implementation plans with checkpoint indicators:
      </p>
      <div className="bg-gray-900 rounded p-3 text-sm font-mono">
        <div>- [ ] Task 2.1 — Create Claude service</div>
        <div>- [ ] Task 2.2 — Create embeddings service</div>
        <div className="text-yellow-400">- [ ] Task 2.3 — Create intent service 🔄 ← /compact here</div>
        <div>- [ ] Task 2.4 — Create data scope service</div>
        <div className="text-red-400">- [ ] Task 2.5 — Create database queries ✅ ← wrap + /clear</div>
      </div>
      <div className="flex gap-4 mt-3 text-xs text-gray-500">
        <span>🔄 = /compact</span>
        <span>✅ = wrap up + /clear</span>
      </div>
    </div>
  </div>
);

// Page: Configuration
const ConfigurationPage = () => {
  const installCmd = 'curl -fsSL https://operators-academy.vercel.app/claude-setup/install.sh | bash';
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold flex items-center gap-3">
      <Wrench className="text-red-400" />
      Configuration & Setup
    </h2>

    <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6">
      <h3 className="font-semibold mb-2 flex items-center gap-2">
        <Terminal size={18} className="text-purple-400" />
        One-Command Install
      </h3>
      <p className="text-sm text-gray-400 mb-4">
        Install the full workflow — CLAUDE.md, 8 agents, status bar, and settings — in one command:
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
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 rounded transition-colors flex-shrink-0"
        >
          {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Backs up existing config before installing. Requires curl and jq.
      </p>
    </div>

    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="font-semibold mb-3">What the installer sets up</h3>
      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-3 p-3 bg-gray-900 rounded">
          <span className="text-purple-400 font-semibold w-40 flex-shrink-0">CLAUDE.md</span>
          <span className="text-gray-400">Global instructions with the 5-file doc system and trigger phrases</span>
        </div>
        <div className="flex items-start gap-3 p-3 bg-gray-900 rounded">
          <span className="text-green-400 font-semibold w-40 flex-shrink-0">8 Agents</span>
          <span className="text-gray-400">backend-architect, test-runner, test-writer-fixer, git-commit, qa-orchestrator, logger, debugger, feature-tester</span>
        </div>
        <div className="flex items-start gap-3 p-3 bg-gray-900 rounded">
          <span className="text-cyan-400 font-semibold w-40 flex-shrink-0">Status bar</span>
          <span className="text-gray-400">Live terminal display showing model, context usage, git branch, and project name</span>
        </div>
        <div className="flex items-start gap-3 p-3 bg-gray-900 rounded">
          <span className="text-orange-400 font-semibold w-40 flex-shrink-0">settings.json</span>
          <span className="text-gray-400">Base configuration with status line enabled (preserved if you already have one)</span>
        </div>
      </div>
    </div>

    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="font-semibold mb-3">Configuration Hierarchy</h3>
      <p className="text-sm text-gray-400 mb-4">
        Think of it like CSS — more specific settings override general ones:
      </p>
      <div className="space-y-3">
        <div className="flex items-center gap-3 p-3 bg-gray-900 rounded">
          <div className="w-24 text-purple-400 font-semibold">Global</div>
          <code className="text-sm flex-1">~/.claude/CLAUDE.md</code>
          <span className="text-xs text-gray-500">All projects</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-900 rounded">
          <div className="w-24 text-blue-400 font-semibold">Project</div>
          <code className="text-sm flex-1">./CLAUDE.md</code>
          <span className="text-xs text-gray-500">This project only</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-900 rounded">
          <div className="w-24 text-green-400 font-semibold">Local</div>
          <code className="text-sm flex-1">./CLAUDE.local.md</code>
          <span className="text-xs text-gray-500">Personal, not git-committed</span>
        </div>
      </div>
    </div>

    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="font-semibold mb-3">Project File Structure</h3>
      <div className="bg-gray-900 rounded p-4 font-mono text-sm">
        <div className="text-gray-500">project/</div>
        <div className="pl-4">├── <span className="text-purple-400">CLAUDE.md</span> <span className="text-gray-600"># Project-specific instructions</span></div>
        <div className="pl-4">├── <span className="text-purple-400">CONTEXT.md</span> <span className="text-gray-600"># Domain knowledge</span></div>
        <div className="pl-4">├── <span className="text-green-400">TASKS.md</span> <span className="text-gray-600"># Task tracking</span></div>
        <div className="pl-4">├── <span className="text-orange-400">PLAN.md</span> <span className="text-gray-600"># Strategic plans</span></div>
        <div className="pl-4">├── <span className="text-blue-400">PROGRESS.md</span> <span className="text-gray-600"># Session log</span></div>
        <div className="pl-4">├── <span className="text-red-400">TEST_LOG.md</span> <span className="text-gray-600"># QA tracking</span></div>
        <div className="pl-4">└── <span className="text-gray-400">.claude/</span></div>
        <div className="pl-8">└── <span className="text-yellow-400">agents/</span> <span className="text-gray-600"># Project-specific agents</span></div>
      </div>
    </div>
  </div>
  );
};

// Page: Quick Reference
const QuickReferencePage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold flex items-center gap-3">
      <BookOpen className="text-cyan-400" />
      Quick Reference Card
    </h2>

    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="font-semibold mb-3 text-blue-400">📁 The 5 Files</h3>
        <div className="space-y-2 text-sm">
          <div><span className="text-purple-400">CONTEXT.md</span> — Domain knowledge</div>
          <div><span className="text-green-400">TASKS.md</span> — Task tracking</div>
          <div><span className="text-orange-400">PLAN.md</span> — Strategic plans</div>
          <div><span className="text-blue-400">PROGRESS.md</span> — Session log</div>
          <div><span className="text-red-400">TEST_LOG.md</span> — QA tracking</div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4">
        <h3 className="font-semibold mb-3 text-green-400">🤖 The 4 QA Agents</h3>
        <div className="space-y-2 text-sm">
          <div><span className="text-yellow-400">logger</span> — Strategic logging</div>
          <div><span className="text-blue-400">feature-tester</span> — Testing</div>
          <div><span className="text-red-400">debugger</span> — Bug fixing</div>
          <div><span className="text-purple-400">qa-orchestrator</span> — Coordinates QA</div>
        </div>
      </div>
    </div>

    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="font-semibold mb-3">🗣️ Common Phrases</h3>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <div className="space-y-2">
          <div className="font-semibold text-gray-400">Starting Work</div>
          <div className="bg-gray-900 p-2 rounded">"Let's continue"</div>
          <div className="bg-gray-900 p-2 rounded">"Initialize project"</div>
        </div>
        <div className="space-y-2">
          <div className="font-semibold text-gray-400">Ending Work</div>
          <div className="bg-gray-900 p-2 rounded">"Wrap up"</div>
          <div className="bg-gray-900 p-2 rounded">"Done for today"</div>
        </div>
        <div className="space-y-2">
          <div className="font-semibold text-gray-400">Quality Assurance</div>
          <div className="bg-gray-900 p-2 rounded">"Run QA"</div>
          <div className="bg-gray-900 p-2 rounded">"Test this feature"</div>
        </div>
        <div className="space-y-2">
          <div className="font-semibold text-gray-400">Debugging</div>
          <div className="bg-gray-900 p-2 rounded">"Debug this"</div>
          <div className="bg-gray-900 p-2 rounded">"Why is this failing?"</div>
        </div>
      </div>
    </div>

    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="font-semibold mb-3">⌨️ Key Commands</h3>
      <div className="grid md:grid-cols-3 gap-4 text-sm">
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
      <h3 className="font-semibold mb-3">🔄 The Daily Workflow</h3>
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="bg-blue-900/50 px-3 py-2 rounded">Start: "Let's continue"</span>
        <ArrowRight size={16} className="text-gray-500" />
        <span className="bg-gray-700 px-3 py-2 rounded">Work on tasks</span>
        <ArrowRight size={16} className="text-gray-500" />
        <span className="bg-green-900/50 px-3 py-2 rounded">"Run QA"</span>
        <ArrowRight size={16} className="text-gray-500" />
        <span className="bg-purple-900/50 px-3 py-2 rounded">"Wrap up"</span>
        <ArrowRight size={16} className="text-gray-500" />
        <span className="bg-red-900/50 px-3 py-2 rounded">/clear (if needed)</span>
      </div>
    </div>
  </div>
);

// Main App Component
export default function ClaudeCodeGuide() {
  const [currentPage, setCurrentPage] = useState('welcome');

  const pages = [
    { id: 'welcome', title: 'Welcome', icon: Home, component: WelcomePage },
    { id: 'files', title: 'Core Files', icon: FileText, component: CoreFilesPage },
    { id: 'agents', title: 'QA Agents', icon: Shield, component: QAAgentsPage },
    { id: 'triggers', title: 'Triggers', icon: MessageSquare, component: TriggerPhrasesPage },
    { id: 'sessions', title: 'Sessions', icon: RotateCcw, component: SessionManagementPage },
    { id: 'config', title: 'Setup', icon: Wrench, component: ConfigurationPage },
    { id: 'reference', title: 'Quick Ref', icon: BookOpen, component: QuickReferencePage },
  ];

  const currentPageIndex = pages.findIndex(p => p.id === currentPage);
  const CurrentComponent = pages[currentPageIndex]?.component || WelcomePage;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
        
        <ProgressIndicator current={currentPageIndex + 1} total={pages.length} />
        
        <div className="mt-6">
          <CurrentComponent />
        </div>

        <div className="flex justify-between mt-8 pt-4 border-t border-gray-700">
          <button
            onClick={() => {
              const prevIndex = currentPageIndex - 1;
              if (prevIndex >= 0) setCurrentPage(pages[prevIndex].id);
            }}
            disabled={currentPageIndex === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentPageIndex === 0
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            <ChevronRight className="rotate-180" size={16} />
            Previous
          </button>
          
          <button
            onClick={() => {
              const nextIndex = currentPageIndex + 1;
              if (nextIndex < pages.length) setCurrentPage(pages[nextIndex].id);
            }}
            disabled={currentPageIndex === pages.length - 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentPageIndex === pages.length - 1
                ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-500'
            }`}
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="text-center text-xs text-gray-600 mt-8">
          Claude Code Project Startup System Guide • Built for developers learning AI-assisted development
        </div>
      </div>
    </div>
  );
}
