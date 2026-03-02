# Operators Academy — Content Audit & Skeleton

## Site Architecture

```
/                              → HomePage (App.jsx)
/course                        → CourseLayout + StartHere.jsx
/course/claude-ai              → CourseLayout + ClaudeAI.jsx
/course/claude-code            → CourseLayout + ClaudeCode.jsx
/course/n8n                    → CourseLayout + N8n.jsx
/course/putting-it-together    → CourseLayout + PuttingItTogether.jsx
/course/marketing              → CourseLayout + Marketing.jsx
/course/openclaw               → CourseLayout + OpenClaw.jsx
/course/project-system         → CourseLayout + ProjectSystem.jsx
/tools/install                 → InstallPage.jsx
/tools/prompt-flows            → PromptFlowsPage.jsx
/tools/mission-control         → MissionControlPage.jsx
/tools/session-monitor         → SessionMonitorPage.jsx
/setup/marketing               → MarketingSetupPage.jsx
/setup/openclaw                → OpenClawSetupPage.jsx
```

### Redirects

| Old Route | New Route |
|-----------|-----------|
| `/claude-code-guide` | `/course/project-system` |
| `/install` | `/tools/install` |
| `/prompt-flows` | `/tools/prompt-flows` |
| `/mission-control` | `/tools/mission-control` |
| `/session-monitor` | `/tools/session-monitor` |

---

## Homepage (`/`)

**Source:** `App.jsx` (170 lines — HomePage component is ~170 lines within the file)

**Sections:**
- Hero: "Go from idea to working AI tool" + subhead + "Start the Course (Free)" CTA
- How it works: 3-step grid (Learn / Build / Automate) — short descriptions
- Course modules: 2-column grid of 8 cards linking to `/course/*` routes, each with icon, label, and one-line description
- Tools: 2-column grid of 4 cards (Install, Prompt Flows, Mission Control, Session Monitor) with descriptions
- Footer tagline: "Built for developers learning AI-powered development"

**Navigation placement:** Linked from SiteNav logo + "Course" link; tools cards link to `/tools/*`

**Content assessment:** Clean and functional. No social proof, testimonials, or student metrics. The "How it works" section is thin (one sentence per step). No trust signals or credibility markers. The hero copy is outcome-focused and strong; the module/tool cards do a good job of showing scope at a glance.

---

## Navigation (`SiteNav.jsx`)

**Desktop:** Logo | Course | Tools (dropdown) | Marketing
**Mobile:** Hamburger with all 7 links

Tools dropdown:
- Install the Workflow
- Prompt Flows
- Mission Control
- Session Monitor

---

## Course Pages

All course pages share `CourseLayout.jsx`:
- Left sidebar: module nav, progress bar, glossary tab, notes tab
- Main content: `<Outlet />` renders current module
- Bottom: prev/next module navigation

### Start Here (`/course`) — `StartHere.jsx`

**What you'll learn:**
- What an "Operator" is and why it matters
- The three tools in the Operator Stack
- How the course is structured

**Sections:**
1. Welcome to Operator Academy
2. The Operator Stack

**Content summary:** Defines the "Operator" concept (building AI-powered systems vs. just prompting) with a DoorDash-vs-restaurant-owner analogy. Introduces the three tools: Claude.ai (thinking partner), Claude Code (builder), n8n (automation). Short module — 2 sections, ~250 words total. Sets up the right expectations without overstaying.

**Length:** ~250 words. Feels complete for an intro module.

### Module 1: Claude.ai (`/course/claude-ai`) — `ClaudeAI.jsx`

**What you'll learn:**
- How to create and set up your Claude.ai account
- What Claude.ai can do beyond simple Q&A
- How to use Artifacts for documents, code, and tools
- How to write prompts that get better results

**Sections:**
1. 1.1 Creating Your Account — step-by-step signup instructions, tip about Pro upgrade
2. 1.2 What You Can Do with Claude.ai — categorized use cases (research, writing, problem-solving), "brilliant research assistant" analogy
3. 1.3 Understanding Artifacts — explains the artifact panel, types table (Documents, Code, Interactive Tools, Diagrams), "Claude's workbench" analogy
4. 1.4 Formatting Prompts Like a Pro — prompt engineering workflow (rough idea → ask Claude to improve → use improved prompt → iterate), RCTFE framework (Role, Context, Task, Format, Examples)

**Content summary:** Solid beginner module covering account setup through prompt engineering. Good analogies throughout. The opener in 1.1 starts flat ("Getting started with Claude.ai is simple") — needs a hook. Prompt engineering section (1.4) is the strongest content here.

**Length:** ~800 words across 4 sections. Appropriate density for a beginner module.

**Issue — opener needs hook:** Section 1.1 opens with "Getting started with Claude.ai is simple" — a definition instead of a motivating hook. Could open with a scenario or outcome first.

### Module 2: Claude Code (`/course/claude-code`) — `ClaudeCode.jsx`

**What you'll learn:**
- Navigate your computer with the terminal
- Install and set up Claude Code
- Understand the Claude Code interface and commands
- Master context, agents, and advanced features

**Sections:**
1. 2.1 Understanding the Terminal — opening Terminal on Mac/Windows, 6 essential commands table with analogies
2. 2.2 Understanding Folder Hierarchy — folder structure visualization, `cd` navigation example, "building with floors" analogy
3. 2.3 Installing Claude Code — Node.js install, `npm install -g`, auth flow. *Has install banner linking to /tools/install*
4. 2.4 The Claude Code Interface — slash commands table (10 commands: /init, /clear, /compact, /resume, /restore, /doctor, /context, /memory, /mcp, /fork)
5. 2.5 Key Concepts Explained — definitions for Context, Tools, Agents, Hooks, MCP, Skills. "Consultant with amnesia" analogy
6. 2.6 Context and Output Quality — golden rule of context, 4 ways to provide context, /context and /compact usage tips
7. 2.7 Agent Teams (Experimental) — **[Advanced] badge**. Full explanation of team lead/teammates/task list/mailbox architecture. Comparison table vs. subagents. Enabling instructions, use cases, example prompt, and current limitations

**Content summary:** The densest module by section count (7 sections). Covers terminal basics through advanced Agent Teams. Good progression from beginner to advanced. Sections 2.1-2.3 are beginner-friendly; 2.4-2.6 are working knowledge; 2.7 is clearly advanced material. Agent Teams section (2.7) is thorough — includes enabling config, comparison table, example prompt, and limitations list.

**Length:** ~2,500 words across 7 sections. Dense but well-paced.

**Issues:**
- Missing Prerequisites callout: Node.js is required (mentioned in 2.3 but not flagged as a prerequisite box at the module level)
- MCP is used in the 2.4 interface table but not explained until 2.5
- Could split into 3 sub-pages: Basics (2.1-2.3), Working with CC (2.4-2.6), Advanced (2.7)

### Module 3: n8n (`/course/n8n`) — `N8n.jsx`

**What you'll learn:**
- Understand workflow automation with n8n
- Create your n8n account
- Build your first automated workflow

**Sections:**
1. 3.1 What is n8n? — definition, 4 automation examples (lead email, form → spreadsheet → notify, morning reports, call → transcribe → analyze → CRM), "operations manager" analogy
2. 3.2 Creating Your Account — 5-step signup at n8n.io, cloud vs. self-hosted tip
3. 3.3 How n8n Works — key concepts (Workflows, Nodes, Triggers, Connections), 5-step workflow building process, "assembly line" analogy

**Content summary:** The lightest course module — only 3 sections covering concepts and account setup. No hands-on walkthrough of actually building a workflow. The "Build your first automated workflow" promise in the "What you'll learn" box isn't really delivered — section 3.3 describes *how* n8n works conceptually but doesn't walk through creating a specific workflow.

**Length:** ~450 words across 3 sections. Feels incomplete.

**Issues:**
- Opener (3.1) starts with a definition rather than a hook
- Missing: a hands-on "Build your first workflow" tutorial that walks through creating a specific automation step by step
- The "What you'll learn" box promises "Build your first automated workflow" but no section delivers this
- This is the thinnest module — compare to Module 5 (8 sections) or Module 6 (8 sections)

### Module 4: Building Your First Tool (`/course/putting-it-together`) — `PuttingItTogether.jsx`

**What you'll learn:**
- How Claude.ai, Claude Code, and n8n work together
- The Operator workflow from idea to automation
- Build a real lead response system example

**Sections:**
1. The Operator Stack — recap table (Claude.ai = Architect, Claude Code = Builder, n8n = Operations Manager)
2. The Operator Workflow — 4-phase flow (Ideate → Build → Automate → Monitor & Improve) with bullet points for each
3. Example: Lead Response System — 3-step walkthrough (Ideate with Claude.ai → Build with Claude Code → Automate with n8n), ends with "personalized response in under 60 seconds, 24/7"

**Content summary:** Bridges the three individual tool modules into a unified workflow. The Lead Response System example is concrete and relatable. However, the module is conceptual — it describes what you *would* build rather than walking through actually building it.

**Length:** ~500 words across 3 sections. Moderate.

**Issues:**
- Opener (section 1) starts with "Now you understand the three pillars" — assumes completion of prior modules but doesn't hook the reader
- Only one example (lead response). A second example in a different domain would make the "Operator workflow" feel more universally applicable
- No actual hands-on exercise — the example is a narrative, not a walkthrough

### Module 5: Marketing from Zero (`/course/marketing`) — `Marketing.jsx`

**What you'll learn:**
- Install and use 25 AI marketing skills
- Set up your marketing context document
- Master copywriting, SEO, email, and paid ads
- Follow the zero-to-launch marketing playbook

**Sections:**
1. 5.1 The Marketing Skills Toolkit — overview of all 25 skills in 7 categories, install commands (npx and git clone), "marketing team" analogy. *Has install banner → /setup/marketing*
2. 5.2 Foundation: Your Marketing Context — product-marketing-context skill, interview process, key sections table, "creative brief" analogy
3. 5.3 Copywriting & Landing Pages — copywriting + copy-editing + page-cro skills, headline formulas, 7-section page copy structure, 7-point CRO framework table, additional CRO skills (form-cro, signup-flow-cro, onboarding-cro, popup-cro), Operator Stack workflow
4. 5.4 SEO & Organic Discovery — seo-audit + programmatic-seo + schema-markup + competitor-alternatives skills, 4-phase SEO process, 9 programmatic SEO playbooks table, strategy picker by business type, schema types, Operator Stack workflow
5. 5.5 Email & Content Marketing — email-sequence + content-strategy + social-content skills, welcome sequence timeline table (7 emails), lead nurture and re-engagement flows, content pillars framework, content-to-revenue pipeline, social platform selection table
6. 5.6 Paid Acquisition & Analytics — paid-ads + analytics-tracking + ab-test-setup skills, event tracking plan table, 4 ad platform breakdowns (Google, Meta, LinkedIn, TikTok), budget strategy (70/30 split), retargeting tiers table, A/B testing 5-step process
7. 5.7 Growth Engines & Psychology — referral-program + free-tool-strategy + pricing-strategy + marketing-psychology + marketing-ideas skills, viral loop design, free tool types, pricing strategy elements, 6 behavioral psychology principles table, 140+ marketing idea frameworks by stage
8. 5.8 The Zero-to-Launch Playbook — 5-phase, 21-step playbook (Foundation → Website & Copy → Content & SEO → Email & Automation → Scale & Optimize), n8n automation layer, 29 tool integrations table with 6 MCP integrations, complete Operator workflow diagram. *Has install banner → /setup/marketing*

**Content summary:** By far the densest and most comprehensive module. Each section is a self-contained deep-dive with tables, frameworks, step-by-step workflows, and Operator Stack integration guides. The Zero-to-Launch Playbook (5.8) is the crown jewel — a complete 21-step marketing implementation plan.

**Length:** ~5,000+ words across 8 sections. Very dense — the longest module by a significant margin.

**Issues:**
- The sheer density suggests splitting into 3 sub-pages: Getting Started (5.1-5.2), Core Skills (5.3-5.5), Growth & Scale (5.6-5.8)
- Significant overlap with /setup/marketing (which duplicates install commands and prompt library)
- No "prerequisites" note (doesn't need Node.js but does benefit from having the workflow installed)

### Module 6: OpenClaw (`/course/openclaw`) — `OpenClaw.jsx`

**What you'll learn:**
- What OpenClaw is and how it differs from ChatGPT
- Choose between VPS ($4/mo), Mac Mini, or hybrid setup
- Set up your AI agent step by step
- Connect messaging apps and manage costs securely

**Sections:**
1. 6.1 Your AI Agent That Never Sleeps — what OpenClaw is, comparison table vs. ChatGPT/Claude.ai (8 features), 50+ integrations mention, Mac Mini stock-out context, "full-time assistant" analogy
2. 6.2 Why Everyone's Buying Mac Minis (And Why You Don't Have To) — debunks the Mac Mini requirement, real cost breakdown table (6 options from $0 to $799), hidden API cost warning ($300-750/month without optimization), Ollama as the solution
3. 6.3 Choose Your Setup Path — 3 paths (VPS, Mac Mini, Hybrid) with cost/time/skill breakdowns, decision tree, VPS provider comparison table. *Has install banner → /setup/openclaw*
4. 6.4 Remote Setup: Your AI Agent for $4/Month — 7-step VPS walkthrough (create VPS → SSH → Docker → install → configure model → start daemon → verify). *Has install banner → /setup/openclaw*
5. 6.5 Local Setup: Mac Mini Configuration — 8-step Mac walkthrough (energy settings → remote access → Homebrew/Node → install → menubar app → auto-start → Ollama → iMessage)
6. 6.6 Connecting Your Messaging Apps — 6 platforms with setup instructions (WhatsApp, Telegram, Discord, Slack, Signal, iMessage), plus Google Chat and MS Teams. Integration comparison table
7. 6.7 Keeping Costs Under $10/Month — 5 strategies (model routing, spending limits, local models, reduce verbosity, monitoring), model cost comparison table (Haiku/Sonnet/Opus/Ollama), 4 realistic budget scenarios table
8. 6.8 Security: Locking Down Your Agent — **[Advanced] badge**. 3 real risks (prompt injection, data exposure, unintended actions), 5 security layers (Docker, file restrictions, confirmation for risky actions, separate API keys, network restrictions), security checklist table

**Content summary:** Second densest module. Excellent structure — starts with the "why" (6.1-6.2), provides a decision framework (6.3), then splits into detailed setup paths (6.4-6.5) before covering operations (6.6-6.8). The cost management (6.7) and security (6.8) sections are uniquely practical. Strong analogies throughout.

**Length:** ~4,500+ words across 8 sections. Very dense.

**Issues:**
- Could split into 3 sub-pages: Intro & Decision (6.1-6.3), Setup Guides (6.4-6.6), Operations (6.7-6.8)
- Significant overlap with /setup/openclaw (which duplicates VPS and Mac setup steps)
- Prerequisites callout missing (terminal familiarity needed, covered in Module 2)

### Appendix: Project Startup System (`/course/project-system`) — `ProjectSystem.jsx`

**What you'll learn:**
- The Project Startup System concept
- Set up the 4 core documentation files
- Use trigger phrases for efficient project management
- Configure the documentation hierarchy

**Sections:**
1. The Core Concept — what the Project Startup System is, hospital shift change analogy
2. The 4 Core Files — table of CONTEXT.md, TASKS.md, PLAN.md, PROGRESS.md with purposes and analogies, file creation priority order
3. Trigger Phrases — table mapping natural phrases to documentation actions (6 trigger/action pairs)
4. Configuration Hierarchy — install command, 3-level config table (Global / Project / Local), getting started instructions

**Content summary:** Condensed version of the old `ClaudeCodeGuide.jsx`. Covers the documentation system, trigger phrases, and configuration in 4 sections.

**Length:** ~600 words across 4 sections. Moderate.

**Comparison with old ClaudeCodeGuide.jsx (7 pages, ~935 lines):**

The old guide had 7 full pages:
1. **Welcome** — Hospital analogy, "5 Core Files" + "4 QA Agents" + "Checkpoints" grid, "Why This Matters" callout
2. **Core Files** — 5 file cards with expandable templates (CONTEXT, TASKS, PLAN, PROGRESS, TEST_LOG), file creation priority chain
3. **QA Agents** — 4 agent cards (Logger, Feature Tester, Debugger, QA Orchestrator) with triggers, restaurant kitchen analogy, QA cycle diagram
4. **Trigger Phrases** — Documentation triggers table (6 phrases), QA triggers table (5 phrases), example conversation flow
5. **Session Management** — Starting/ending sessions code blocks, /compact vs /clear explanation, when to clear context (do/don't lists), checkpoint markers in plans
6. **Configuration** — One-command install, installer breakdown (4 items), configuration hierarchy (Global/Project/Local), project file structure tree
7. **Quick Reference** — Summary cards: 5 files, 4 QA agents, common phrases by category, key commands (/compact, /clear, /agents), daily workflow diagram

**Content lost in the merge:**
- **TEST_LOG.md** — The old guide covered 5 core files; the appendix only mentions 4 (dropped TEST_LOG.md from the core files table)
- **QA Agents section** — The entire page about Logger, Feature Tester, Debugger, and QA Orchestrator was dropped. This was significant content with agent-specific triggers, analogies, and the QA cycle diagram
- **Session Management** — The /compact vs /clear guidance, "when to clear" decision framework, and checkpoint markers for plans were not carried over
- **Example conversation flow** — The sample back-and-forth demonstrating trigger phrases was dropped
- **Quick Reference card** — The summary cards and daily workflow diagram were not carried over

**Recommendation:** Restore the QA Agents content (4 agents with triggers) and the Session Management guidance (/compact vs /clear, checkpoint markers) as additional appendix sections. These were the most actionable parts of the old guide.

---

## Standalone Pages (Tools)

### Install the Workflow (`/tools/install`) — `InstallPage.jsx`

**Source:** 396 lines, standalone page with inline CopyButton and Expandable components

**Sections:**
- Hero: "Install the Claude Code Workflow" — one-command install pitch, "Set up in under 30 seconds"
- Install Command: curl one-liner with copy button, prerequisites note (curl + jq)
- What you get: 4 feature cards (5-File Documentation System, Live Status Bar, Natural Language Triggers, Base Configuration) + 8 Specialized Agents grid
- How it works: 4-step flow (Start project → Work with context → Use agents → End sessions cleanly)
- Details (FAQ): 5 expandable sections (What does the installer change, Will it overwrite, How to uninstall, Prerequisites, Can I customize)
- Next steps: 2 cards linking to /setup/marketing and /setup/openclaw
- CTA: Repeated install command with links to guide and course
- Footer

**Content assessment:** Polished product page. Good structure — clear install command, feature showcase, how-it-works flow, and FAQ. The 8-agent grid is a strong differentiator. Includes links back to the course and other tools.

**Length:** ~1,200 words rendered. Feels complete.

**Issues:**
- Uses inline CopyButton and Expandable components (not shared from `src/components/`)
- Some consistency overlap with course section 2.3 (which also covers installation) — but the standalone page is more detailed
- CTA at bottom links to `/claude-code-guide` (old route) rather than `/course/project-system`

### Prompt Flows (`/tools/prompt-flows`) — `PromptFlowsPage.jsx`

**Source:** 510 lines, standalone page with inline CopyButton, CopyableStep, and FlowCard components

**Sections:**
- Hero: "Prompt Flows" — copy-paste prompt workflows for Claude Code
- Quick Integration: Prompt to point Claude Code at the skills manifest for auto-integration
- How to use: 3-step guide (Install skills → Pick a flow → Paste step by step)
- Prompt Flows: 7 expandable flow cards, each with 4-6 copyable steps:
  1. Launch a Product from Scratch (6 steps)
  2. Competitor Traffic Capture (5 steps)
  3. Build an SEO Content Engine (5 steps)
  4. Conversion Rate Optimization Sprint (5 steps)
  5. Build a Growth Loop (5 steps)
  6. Google Ads Competitor Research (4 steps)
  7. Build an Email Marketing Machine (5 steps)
- Integrate with Claude Code / OpenClaw: Skills manifest URL, Claude Code prompts (4), OpenClaw prompts (3)
- Skill Quick Reference: All 25 skills organized by 7 categories with one-liner prompts (click to copy)
- CTA: Links to marketing setup, workflow install, and full course
- Footer

**Content assessment:** The most content-rich standalone page. The 7 prompt flows are genuinely useful — each is a complete multi-step workflow with contextual notes. The skill quick reference at the bottom is a good reference card. Integration section covers both Claude Code and OpenClaw use cases.

**Length:** ~2,500+ words rendered. Dense and comprehensive.

**Issues:**
- Uses inline CopyButton, CopyableStep, and FlowCard components (not shared)
- Has a redundant "Back to Home" breadcrumb link at top (other tool pages don't have this)

### Mission Control (`/tools/mission-control`) — `MissionControlPage.jsx`

**Source:** 405 lines, standalone page with inline CopyButton and Expandable components

**Sections:**
- Hero: "Clu Mission Control" — web-based Claude Code client
- Dashboard Preview: ASCII mockup showing sessions, search, and MCP tools panels
- Install Command: curl one-liner, requires Node.js 18+, pnpm, git
- Features: 8 feature cards (Chat Log Viewer, Session Management, Conversation Search, File Upload, Browser Preview, Git Integration, MCP Viewer, Message Scheduler)
- How it works: 4-step flow (Clone → Start dev server → Browse sessions → Keep running)
- Roadmap: 3 upcoming features (Task queue, Clu session management, Activity & PR tracking)
- Details (FAQ): 5 expandable sections (Installer, Prerequisites, Update, Uninstall, TUI comparison)
- Next steps: 2 cards linking to /tools/session-monitor and /tools/install
- CTA: Repeated install command with GitHub link and course link
- Footer

**Content assessment:** Well-structured product page for the web dashboard. The ASCII preview gives a good feel for what the dashboard looks like. Feature list is comprehensive. The FAQ section distinguishing this from the TUI Session Monitor is helpful.

**Length:** ~1,400 words rendered. Complete.

**Issues:**
- Uses inline CopyButton and Expandable components (not shared)
- FAQ links to `/session-monitor` (old route) instead of `/tools/session-monitor`

### Session Monitor (`/tools/session-monitor`) — `SessionMonitorPage.jsx`

**Source:** 465 lines, standalone page with inline CopyButton and Expandable components

**Sections:**
- Hero: "Session Monitor" — Go-based Bubble Tea TUI, links to GitHub
- Install Command: curl one-liner, requires git and Go 1.21+
- Dashboard Preview: ASCII mockup showing sessions (with context % bars), git, and deployments panels
- Five live panels: Claude Sessions, Git Status, Vercel Deployments, Supabase Health, Sentry Alerts — each with description
- How it works: 4-step flow (Session-driven architecture → Real-time process detection → Async refresh loops → Graceful degradation)
- Keyboard shortcuts: 6 shortcuts table (j/k, Tab, 1-5, r, m, q)
- Configuration: projects.yaml example + Vercel/Sentry/Supabase env var cards
- Details (FAQ): 6 expandable sections (Installer, Prerequisites, Update, Uninstall, Comparison to Mission Control, Worktree support)
- Next steps: 2 cards linking to /tools/mission-control and /tools/install
- CTA: Repeated install command
- Footer

**Content assessment:** The most technically detailed standalone page. Good depth on the architecture (process detection, async refresh, graceful degradation). Keyboard shortcuts and configuration sections are practical reference material. The Worktree support FAQ is a nice technical detail.

**Length:** ~1,800 words rendered. Thorough and complete.

**Issues:**
- Uses inline CopyButton and Expandable components (not shared)
- FAQ links to `/mission-control` (old route) instead of `/tools/mission-control`

---

## Setup Pages

### Marketing Setup (`/setup/marketing`) — `MarketingSetupPage.jsx`

**Source:** 305 lines, standalone page with inline CopyButton, Expandable, and CopyablePrompt components

**Sections:**
- Hero: "Set Up Marketing Skills" — 25 AI-powered marketing skills
- Prerequisites: 2 items (Claude Code installed, Operators Academy workflow installed — links to /install)
- Install Command: Tabbed (npx recommended / git clone), with copy buttons
- Prompt Library: 16 copyable prompts organized by category (Start here, Conversion & CRO, SEO & Content, Email & Ads, Growth & Strategy)
- Link to Prompt Flows page: "Want multi-step workflows?" banner
- FAQ: 3 expandable sections (What are Marketing Skills, Which to start with, Do I need the workflow)
- CTA: Repeated install command with links to prompt flows, marketing module, workflow install, and OpenClaw setup
- Footer

**Content assessment:** Lightweight quick-start guide, as intended. The prompt library is the strongest section — 16 ready-to-paste prompts. The FAQ about "which skill first" provides a useful decision framework based on business stage.

**Length:** ~800 words rendered. Appropriate for a setup page.

**Overlap with Module 5:** Significant. The install commands and prompt library overlap directly with sections 5.1 and 5.8. The setup page is a faster path for people who already know what they want. This is acceptable — the setup page is a "quick start" while the module is the "full guide." Both link to each other.

**Issues:**
- Uses inline CopyButton, Expandable, and CopyablePrompt components (not shared)
- Links to `/install` (old route) instead of `/tools/install`
- Links to `/prompt-flows` (old route) instead of `/tools/prompt-flows`

### OpenClaw Setup (`/setup/openclaw`) — `OpenClawSetupPage.jsx`

**Source:** 355 lines, standalone page with inline CopyButton, Expandable, CopyablePrompt, and StepBlock components

**Sections:**
- Hero: "Set Up OpenClaw" — 24/7 AI agent, under $10/month
- Path Chooser: Toggle between VPS ($4/mo) and Mac Mini (local) tabs
- Prerequisites: Dynamic based on path (VPS: VPS account, SSH access, API key; Mac: Mac Mini M1+, Homebrew, API key)
- Install Steps: 5 steps per path with copy-to-clipboard commands
  - VPS: SSH → Docker → Install → Configure model → Start daemon
  - Mac: Homebrew → Node.js → npm install → Configure + service install → iMessage
- Prompt Library: 6 copyable prompts for OpenClaw ("are you there?", enable WhatsApp, enable Telegram, list integrations, morning briefing, cost alert config)
- FAQ: 4 expandable sections (Do I need a Mac Mini, Cost to run, Security, Which messaging app first)
- CTA: Links to course module 6, workflow install, and marketing skills
- Footer

**Content assessment:** Effective quick-start guide with the VPS/Mac toggle being the standout UX feature. The install steps are more concise than the course module (5 steps here vs. 7-8 steps in module 6). The FAQ covers the most common objections well.

**Length:** ~900 words rendered (per path). Appropriate for a setup page.

**Overlap with Module 6:** Significant. Setup steps mirror 6.4 (VPS) and 6.5 (Mac). The setup page is the condensed version — fewer explanations, more commands. Both link to each other. This is acceptable as a "quick start" vs. "full walkthrough" distinction.

**Issues:**
- Uses inline CopyButton, Expandable, CopyablePrompt, and StepBlock components (not shared)
- Links to `/install` (old route) instead of `/tools/install`
- Links to `/course#module6` which may not scroll correctly (module 6 is at `/course/openclaw` now)

---

## Removed Pages

| File | Status | Replacement |
|------|--------|-------------|
| `ClaudeCodeGuide.jsx` | **Still exists** (935 lines) — redirect in place at `/claude-code-guide` → `/course/project-system` | `/course/project-system` absorbs some content, but significant material was lost (see Appendix comparison above) |
| `OperatorAcademy.jsx` | **Still exists** — no longer imported by App.jsx | Replaced by `src/course/` modules + `courseData.js` |

**Verification:** Neither file is imported in `App.jsx`. The `ClaudeCodeGuide` route redirects to `/course/project-system`. `OperatorAcademy` has no route at all. Both are safe to delete, but the ClaudeCodeGuide content should be reviewed for restoration into the appendix first (see Content Lost analysis in the Appendix section above).

---

## Shared Components

| Component | File | Used By |
|-----------|------|---------|
| TipBox | `src/components/TipBox.jsx` | ContentRenderer |
| CodeBlock | `src/components/CodeBlock.jsx` | ContentRenderer |
| ContentRenderer | `src/components/ContentRenderer.jsx` | All course modules |
| InstallBanner | `src/components/InstallBanner.jsx` | All course modules |
| CourseLayout | `src/components/CourseLayout.jsx` | Wraps all `/course/*` routes |
| SiteNav | `src/components/SiteNav.jsx` | App.jsx (all pages) |

**Inline components that should be extracted:**

| Component | Currently In | Copies |
|-----------|-------------|--------|
| CopyButton | InstallPage, PromptFlowsPage, MissionControlPage, SessionMonitorPage, MarketingSetupPage, OpenClawSetupPage | 6 identical copies |
| Expandable | InstallPage, MissionControlPage, SessionMonitorPage, MarketingSetupPage, OpenClawSetupPage | 5 identical copies |
| CopyablePrompt | MarketingSetupPage, OpenClawSetupPage | 2 identical copies |
| CopyableStep | PromptFlowsPage | 1 copy (unique to this page) |
| FlowCard | PromptFlowsPage | 1 copy (unique to this page) |
| StepBlock | OpenClawSetupPage | 1 copy (unique to this page) |

**Recommendation:** Extract CopyButton and Expandable into shared components first — they have 6 and 5 copies respectively. CopyablePrompt (2 copies) is a secondary priority.

---

## Glossary

45 terms across 9 categories, stored in `src/course/courseData.js` as `glossaryTerms`.

| Category | Term Count | Terms |
|----------|-----------|-------|
| Claude Code | 8 | Agent, Agent Teams, Compact, Context, Fork, Hooks, MCP, Skills, Tools |
| Claude.ai | 1 | Artifact |
| Terminal | 4 | cd, ls, mkdir, pwd |
| Tools | 3 | Claude Code, Claude.ai, n8n |
| Project System | 5 | CLAUDE.md, CONTEXT.md, PLAN.md, PROGRESS.md, TASKS.md |
| n8n | 3 | Node, Trigger, Workflow |
| General | 3 | Operator, Prompt, Terminal |
| Marketing | 10 | A/B Test, CRO, CTA, Marketing Skills, MCP Integration, Product Marketing Context, Programmatic SEO, Referral Program, Schema Markup, UTM Parameters |
| OpenClaw | 7 | ClawHub, Docker, Model Routing, Ollama, OpenClaw, Prompt Injection, VPS |

**Completeness check:** Coverage is solid across all modules. One gap: **TEST_LOG.md** is not in the glossary despite being part of the 5-file documentation system (the old guide covered 5 files; the current course only mentions 4). No other obvious missing terms from the current course content.

---

## Content Quality Notes

### Openers that need hooks (currently start with definitions)
- **Module 1 opener (1.1):** "Getting started with Claude.ai is simple" — flat, procedural start
- **Module 3 opener (3.1):** "n8n (pronounced 'nodemation') is a workflow automation tool" — dictionary definition
- **Module 4 opener (section 1):** "Now you understand the three pillars" — assumes completion, no hook
- **Appendix opener (section 1):** "As you build more complex projects with Claude Code" — conditional start, no motivation

### Jargon that needs first-use explanations
- **MCP** — used in 2.4 interface table, not explained until 2.5
- **Hooks** — explained in 2.5 but not mentioned earlier as context
- **Context window** — used implicitly throughout but never formally defined as a concept
- **Agents** — explained in 2.5 but referenced as "specialized agents" in earlier install page content

### Missing prerequisites callouts
- **Module 2:** Needs Node.js (mentioned in 2.3 setup steps but not as a prerequisite box)
- **Module 6:** Needs terminal familiarity (covered in Module 2 but not flagged as a dependency)

### Stale internal links
- **InstallPage.jsx:** CTA links to `/claude-code-guide` (old route)
- **MissionControlPage.jsx:** FAQ links to `/session-monitor` (old route)
- **SessionMonitorPage.jsx:** FAQ links to `/mission-control` (old route)
- **MarketingSetupPage.jsx:** Links to `/install` and `/prompt-flows` (old routes)
- **OpenClawSetupPage.jsx:** Links to `/install` (old route) and `/course#module6` (incorrect anchor)

---

## Current State Summary

### Total Pages/Lessons

| Type | Count | Details |
|------|-------|---------|
| Homepage | 1 | `/` |
| Course modules | 8 | Start Here + 6 modules + Appendix |
| Course sections | 37 | Across all 8 modules |
| Standalone tool pages | 4 | Install, Prompt Flows, Mission Control, Session Monitor |
| Setup pages | 2 | Marketing Setup, OpenClaw Setup |
| **Total navigable pages** | **15** | |
| **Total content sections** | **~55** | Course sections + standalone page sections |

### Content Completeness by Module

| Module | Sections | ~Word Count | Feels... |
|--------|----------|-------------|----------|
| Start Here | 2 | 250 | **Complete** — concise intro, does its job |
| Module 1: Claude.ai | 4 | 800 | **Complete** — solid beginner content |
| Module 2: Claude Code | 7 | 2,500 | **Complete but dense** — could benefit from sub-page splitting |
| Module 3: n8n | 3 | 450 | **Incomplete** — needs a hands-on walkthrough section |
| Module 4: Building First Tool | 3 | 500 | **Adequate** — conceptual only, no hands-on exercise |
| Module 5: Marketing | 8 | 5,000+ | **Complete and dense** — should split into sub-pages |
| Module 6: OpenClaw | 8 | 4,500+ | **Complete and dense** — should split into sub-pages |
| Appendix | 4 | 600 | **Incomplete** — lost QA Agents and Session Management from old guide |

### Topic Gaps

1. **n8n hands-on walkthrough** — Module 3 promises "Build your first workflow" but never delivers a step-by-step tutorial
2. **QA Agents documentation** — The old ClaudeCodeGuide had a full page on 4 QA agents (Logger, Tester, Debugger, Orchestrator) with triggers and workflows. This was dropped in the restructuring
3. **Session management guidance** — /compact vs /clear decision framework, checkpoint markers in plans — dropped from old guide
4. **TEST_LOG.md** — The 5th documentation file was dropped from the appendix (only mentions 4 core files now)
5. **Second example in Module 4** — Only the Lead Response System is demonstrated. A second domain example would strengthen the module
6. **Social proof / credibility** — Homepage has zero testimonials, student counts, or credibility markers

### Content That Feels Complete vs. Rough

**Complete and polished:**
- Module 1: Claude.ai — good analogies, clear progression
- Module 2: Claude Code — comprehensive, well-paced beginner-to-advanced
- Module 5: Marketing — exceptionally thorough, the strongest content on the site
- Module 6: OpenClaw — detailed walkthroughs, cost/security covered well
- Install page — clean product page with clear value prop
- Prompt Flows page — genuinely useful reference tool
- Session Monitor page — technically detailed, well-explained

**Adequate but could improve:**
- Start Here — does its job but could be warmer/more motivating
- Module 4: Building First Tool — conceptual only, needs a hands-on exercise
- Homepage — functional but lacks social proof and depth
- Mission Control page — solid but roadmap items suggest it's still early-stage

**Rough / Incomplete:**
- Module 3: n8n — too thin, missing the promised hands-on section
- Appendix: Project System — lost significant content from the old 7-page guide

### Redundancy

| Redundant Content | Location A | Location B | Recommendation |
|-------------------|-----------|-----------|----------------|
| Marketing skills install commands | Module 5 (5.1, 5.8) | /setup/marketing | Keep both — module = full guide, setup = quick start |
| OpenClaw VPS/Mac setup steps | Module 6 (6.4, 6.5) | /setup/openclaw | Keep both — module = full walkthrough, setup = quick start |
| CopyButton component | 6 standalone pages | — | Extract to shared component |
| Expandable component | 5 standalone pages | — | Extract to shared component |
| Course install mention | Course section 2.3 | /tools/install | Acceptable — section is brief, page is detailed |

### Component Duplication Summary

CopyButton has **6 identical copies**, Expandable has **5 identical copies**. These are the highest-priority extraction candidates for the shared components refactor.
