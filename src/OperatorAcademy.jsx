import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BookOpen, Terminal, Cpu, Workflow, Link2, FileText, StickyNote, ChevronRight, ChevronLeft, Check, Circle, Lightbulb, AlertTriangle, Target, Home, List, Menu, X, Trash2, Plus, Search, TrendingUp, Bot } from 'lucide-react';

// ==================== COURSE DATA ====================
const courseData = {
  introduction: {
    title: "Introduction: What is an 'Operator'?",
    icon: Home,
    sections: [
      {
        title: "Welcome to Operator Academy",
        content: `Before we dive into the tools, let's establish what we're building toward.

Most people "prompt" AI — they ask it questions and get answers. An **Operator** builds AI-powered systems that work without constant manual input.`,
        analogy: "Think of the difference between someone who orders food on DoorDash versus someone who owns the restaurant. Both get food, but one has built something that generates value repeatedly."
      },
      {
        title: "The Operator Stack",
        content: `In this course, you'll learn three core tools that work together:

• **Claude.ai** — Your AI thinking partner for brainstorming, writing, and problem-solving

• **Claude Code** — Your AI builder that creates actual applications and tools

• **n8n** — Your automation engine that connects everything and runs workflows automatically

By the end of this course, you'll be able to go from an idea to a working AI-powered tool — without writing a single line of code yourself.`
      }
    ]
  },
  module1: {
    title: "Module 1: Claude.ai",
    subtitle: "Your AI Thinking Partner",
    icon: Cpu,
    sections: [
      {
        title: "1.1 Creating Your Account",
        content: `Getting started with Claude.ai is simple:

1. Go to **claude.ai** in your web browser
2. Click "Sign up" or "Get started"
3. Enter your email address or sign up with Google
4. Verify your email by clicking the link sent to your inbox
5. Complete your profile setup`,
        tip: "Consider upgrading to Claude Pro ($20/month) for higher usage limits and access to more powerful models. For building tools, the extra capacity is worth it."
      },
      {
        title: "1.2 What You Can Do with Claude.ai",
        content: `Claude.ai isn't just a chatbot — it's a multi-purpose thinking tool.

**Research & Analysis**
• Summarize long documents, articles, or reports
• Compare different options or approaches
• Extract key insights from data

**Writing & Communication**
• Draft emails, proposals, and documentation
• Edit and improve existing content
• Translate between languages

**Problem-Solving**
• Brainstorm solutions to challenges
• Think through complex decisions
• Debug issues in your processes`,
        analogy: "Claude.ai is like having a brilliant research assistant who never sleeps, never gets annoyed by questions, and can help you think through any problem."
      },
      {
        title: "1.3 Understanding Artifacts",
        content: `When Claude creates an **Artifact**, it appears in a separate panel. This is useful because:

• You can see the full output without scrolling through chat
• You can copy, download, or share the artifact directly
• Interactive artifacts (like calculators or tools) actually work
• Claude can iterate on the artifact based on your feedback

**Types of Artifacts:**

| Type | Best For |
|------|----------|
| Documents | Reports, guides, SOPs, long-form content |
| Code | Scripts, applications, automations |
| Interactive Tools | Calculators, forms, mini-apps |
| Diagrams | Flowcharts, process maps, visualizations |`,
        analogy: "Artifacts are like Claude's workbench. Instead of just describing something in text, Claude can build it right in front of you."
      },
      {
        title: "1.4 Formatting Prompts Like a Pro",
        content: `Here's the secret most people miss: *you can use Claude to help you write better prompts for Claude*.

**The Prompt Engineering Workflow:**

1. **Start with a rough idea:** "I need to write sales follow-up emails"
2. **Ask Claude to improve it:** "Help me write a detailed prompt for generating sales follow-up emails"
3. **Use the improved prompt:** Claude will give you a structured, detailed prompt
4. **Iterate:** Refine based on results

**Elements of a Great Prompt:**

• **Role:** Tell Claude who it should be ("Act as an expert copywriter")
• **Context:** Provide background information
• **Task:** Be specific about what you want
• **Format:** Describe how you want the output structured
• **Examples:** Show what good output looks like`,
        analogy: "Talking to Claude is like giving instructions to a skilled contractor. The more specific your blueprint, the better the result."
      }
    ]
  },
  module2: {
    title: "Module 2: Claude Code",
    subtitle: "Building Real Applications with AI",
    icon: Terminal,
    sections: [
      {
        title: "2.1 Understanding the Terminal",
        content: `Claude Code runs in your computer's **Terminal** (also called Command Line). Don't worry — we'll walk through everything step by step.

**Opening the Terminal:**
• **Mac:** Press Cmd + Space, type "Terminal", press Enter
• **Windows:** Press Win key, type "Command Prompt" or "PowerShell", press Enter

**Essential Terminal Commands:**

| Command | What It Does | Analogy |
|---------|--------------|---------|
| \`pwd\` | Shows your current location | "You are here" on a map |
| \`ls\` | Lists files and folders | Opening a drawer to see inside |
| \`cd [folder]\` | Change directory (go into folder) | Walking into a room |
| \`cd ..\` | Go up one folder level | Walking back out of a room |
| \`mkdir [name]\` | Make a new directory (folder) | Creating a new filing cabinet |
| \`clear\` | Clears the terminal screen | Wiping a whiteboard clean |`,
        analogy: "The Terminal is like texting with your computer. Instead of clicking buttons and icons, you type commands. It might feel old-school, but it's actually faster and more powerful."
      },
      {
        title: "2.2 Understanding Folder Hierarchy",
        content: `Your computer's folder structure is like a building with floors and rooms.

**Typical project folder structure:**

\`\`\`
~/                          (Your home folder)
  └── Projects/             (A folder for all your work)
       └── my-first-app/    (Your specific project)
            ├── index.html  (A file)
            ├── style.css   (Another file)
            └── scripts/    (A subfolder)
                 └── app.js (A file inside subfolder)
\`\`\`

To navigate to your project, you'd type:

\`\`\`
cd ~/Projects/my-first-app
\`\`\``,
        analogy: "The 'root' is the ground floor, your 'home' folder is your office, and inside it are different departments (folders) containing specific files. The path is like the building address plus floor and room number."
      },
      {
        title: "2.3 Installing Claude Code",
        content: `Claude Code requires **Node.js** (a program that runs JavaScript). Here's how to install everything:

**Step 1: Install Node.js**
1. Go to nodejs.org
2. Download the "LTS" version (recommended for most users)
3. Run the installer and follow the prompts
4. Restart your Terminal

**Step 2: Install Claude Code**
Open Terminal and run this command:

\`\`\`
npm install -g @anthropic-ai/claude-code
\`\`\`

**Step 3: Log In**
Run Claude Code and it will prompt you to log in:

\`\`\`
claude
\`\`\`

This will open a browser window where you can authenticate with your Claude account.`
      },
      {
        title: "2.4 The Claude Code Interface",
        content: `Type "/" to see available commands. Here are the most important ones:

| Command | What It Does |
|---------|--------------|
| \`/init\` | Initialize a new project with basic structure |
| \`/clear\` | Clear conversation history (keeps settings) |
| \`/compact\` | Summarize conversation to save context space |
| \`/resume\` | Pick up where you left off from previous session |
| \`/restore\` | Restore files to a previous checkpoint |
| \`/doctor\` | Diagnose setup issues and check configuration |
| \`/context\` | Shows how much context (memory) is being used |
| \`/memory\` | View and edit what Claude remembers |
| \`/mcp\` | Manage Model Context Protocol servers |
| \`/fork\` | Create a branch to try something safely |`
      },
      {
        title: "2.5 Key Concepts Explained",
        content: `**Context**
Context is like Claude's working memory. The more context Claude has, the better it understands your project. But there's a limit — like a desk that can only hold so many papers.

**Tools**
Tools are actions Claude can take — reading files, writing code, running commands, searching the web. When you give Claude a task, it automatically uses the right tools.

**Agents**
Agents are specialized Claude configurations for specific tasks. You can create custom agents that have particular instructions, personality, or capabilities.

**Hooks**
Hooks are automatic triggers that run when certain events happen (like before/after Claude edits a file). Think of them as automated quality control.

**MCP (Model Context Protocol)**
MCP lets Claude connect to external services — databases, APIs, other tools. It's how Claude can interact with the broader world beyond just your project files.

**Skills**
Skills are reusable capabilities you can give Claude — like knowing how to use a specific framework or follow certain coding standards.`,
        analogy: "Imagine you're working with a consultant who has amnesia. If you only tell them about today's task, they'll help — but if you also remind them about the project history, goals, and constraints, they'll give much better advice. That's context."
      },
      {
        title: "2.6 Context and Output Quality",
        content: `**The golden rule:** More relevant context = higher quality output.

**Ways to provide context:**
• **CLAUDE.md file:** Project-specific instructions Claude reads automatically
• **Conversation history:** What you've discussed in the current session
• **File contents:** Claude can read any file in your project
• **Explicit instructions:** What you tell Claude in your messages

**Managing context:**
• Use \`/context\` to see how full your context is
• Use \`/compact\` when context is getting full but you want to continue
• Use \`/clear\` when starting a new task (keeps settings, clears conversation)`,
        tip: "Claude Code works best when it's opened inside a specific project folder. This way, it can see all your project files and make changes to them directly."
      },
      {
        title: "2.7 Agent Teams (Experimental)",
        content: `Agent Teams let you coordinate **multiple Claude Code instances** working together on the same project. One session acts as the **team lead**, while other sessions called **teammates** work independently in their own context windows.

**Why Agent Teams?**
When a task benefits from parallel exploration — like reviewing code from multiple angles, building independent modules, or investigating competing debugging hypotheses — a single Claude session can become a bottleneck. Agent Teams solve this by splitting work across multiple sessions that can communicate directly with each other.

**How It Works:**

| Component | Role |
|-----------|------|
| **Team Lead** | The main session that creates the team, spawns teammates, and coordinates work |
| **Teammates** | Separate Claude Code instances that each work on assigned tasks |
| **Task List** | Shared list of work items that teammates claim and complete |
| **Mailbox** | Messaging system for communication between agents |

**Agent Teams vs. Subagents:**

| Feature | Subagents | Agent Teams |
|---------|-----------|-------------|
| **Context** | Share the main agent's session | Fully independent context windows |
| **Communication** | Report results back to caller only | Teammates message each other directly |
| **Best For** | Focused tasks where only the result matters | Complex work requiring discussion and collaboration |
| **Token Cost** | Lower | Higher — each teammate is a separate instance |

**Enabling Agent Teams:**
Agent Teams are disabled by default. Enable them by adding this to your \`settings.json\`:

\`\`\`
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
\`\`\`

**Best Use Cases:**
• **Research and review** — Multiple teammates investigate different aspects simultaneously
• **New modules or features** — Each teammate owns a separate piece without conflicts
• **Debugging with competing hypotheses** — Test different theories in parallel
• **Cross-layer coordination** — Frontend, backend, and tests each owned by a different teammate

**Starting a Team:**
Just describe the task and team structure in natural language:

\`\`\`
Create an agent team to review PR #142. Spawn three reviewers:
- One focused on security implications
- One checking performance impact
- One validating test coverage
Have them each review and report findings.
\`\`\`

**Current Limitations:**
Agent Teams are experimental. Be aware of these constraints:

• **No session resumption** — \`/resume\` and \`/rewind\` do not restore in-process teammates
• **Task status can lag** — Teammates sometimes fail to mark tasks as completed, blocking dependent tasks
• **One team per session** — Clean up the current team before starting a new one
• **No nested teams** — Teammates cannot spawn their own teams
• **Lead is fixed** — You can't promote a teammate to lead or transfer leadership
• **Permissions set at spawn** — All teammates inherit the lead's permission mode
• **Split panes require tmux or iTerm2** — The default in-process mode works in any terminal, but split-pane mode isn't supported in VS Code terminal, Windows Terminal, or Ghostty`,
        analogy: "Think of Agent Teams like a war room with specialists. The team lead is the general assigning missions, and each teammate is a specialist working independently on their piece — the sniper scouts, the engineer builds, the medic patches things up. They can radio each other directly, but the general keeps the big picture.",
        tip: "Start with research and review tasks before trying parallel code implementation. Agent Teams add coordination overhead, so they work best when teammates can operate independently on different files or aspects of a problem."
      }
    ]
  },
  module3: {
    title: "Module 3: n8n",
    subtitle: "Automating Everything",
    icon: Workflow,
    sections: [
      {
        title: "3.1 What is n8n?",
        content: `**n8n** (pronounced "nodemation") is a workflow automation tool. It lets you connect different apps and services together to create automated processes.

**Examples of what you can automate:**
• When a new lead comes in → Send them a personalized email
• When a form is submitted → Add data to a spreadsheet → Notify your team
• Every morning → Pull reports → Send summary to Slack
• When a customer calls → Transcribe the call → Analyze with AI → Update CRM`,
        analogy: "If Claude.ai is your consultant and Claude Code is your builder, n8n is your operations manager who runs things automatically 24/7."
      },
      {
        title: "3.2 Creating Your Account",
        content: `Getting started with n8n:

1. Go to **n8n.io**
2. Click "Get started free"
3. Create an account with email or Google
4. Choose the cloud version (easier to start)
5. Complete the onboarding walkthrough`,
        tip: "n8n offers both cloud-hosted and self-hosted options. Start with cloud — it's easier and you can always migrate later. Self-hosting gives more control but requires technical setup."
      },
      {
        title: "3.3 How n8n Works",
        content: `**Key Concepts:**

• **Workflows:** The complete automation from trigger to final action
• **Nodes:** Individual building blocks (each does one thing)
• **Triggers:** What starts the workflow (webhook, schedule, event)
• **Connections:** Lines between nodes showing data flow

**Building a Workflow:**

1. Start with a **Trigger** node (what kicks things off)
2. Add **Action** nodes (what happens next)
3. Connect them in sequence
4. Test with sample data
5. Activate to run automatically`,
        analogy: "n8n workflows are like assembly lines in a factory. Data comes in at one end, passes through different stations (nodes) that each do something to it, and comes out the other end transformed and delivered where it needs to go."
      }
    ]
  },
  module4: {
    title: "Module 4: Tying It All Together",
    subtitle: "Building Your First AI-Powered Tool",
    icon: Link2,
    sections: [
      {
        title: "The Operator Stack",
        content: `Now you understand the three pillars of the Operator stack:

| Tool | Role | Analogy |
|------|------|---------|
| Claude.ai | Think, plan, design | The Architect |
| Claude Code | Build the actual tool/app | The Builder |
| n8n | Automate and connect | The Operations Manager |`
      },
      {
        title: "The Operator Workflow",
        content: `Here's how a typical project flows:

**1. Ideate (Claude.ai)**
• Describe your problem or goal
• Brainstorm solutions with Claude
• Get Claude to help you plan the technical approach

**2. Build (Claude Code)**
• Create your project folder
• Tell Claude Code what to build
• Iterate and refine until it works

**3. Automate (n8n)**
• Create workflows that trigger your tool
• Connect to other services (CRM, email, etc.)
• Set it to run automatically

**4. Monitor & Improve**
• Watch your automation work
• Identify improvements
• Iterate using the same cycle`
      },
      {
        title: "Example: Lead Response System",
        content: `Let's walk through a real example — building an automated lead response system:

**Step 1: Ideate with Claude.ai**
"I want to automatically respond to leads with personalized emails based on their inquiry type."

Claude helps you:
• Define the different inquiry types
• Draft email templates for each type
• Plan the data flow

**Step 2: Build with Claude Code**
"Create a Node.js script that takes lead data and generates a personalized email using the Claude API."

Claude Code creates:
• The script with API integration
• Error handling
• Logging

**Step 3: Automate with n8n**
• Trigger: Webhook receives new lead
• Action: Run your script
• Action: Send email via SendGrid
• Action: Update CRM with response status

**Result:** Every new lead gets a personalized response in under 60 seconds, 24/7.`
      }
    ]
  },
  module5: {
    title: "Module 5: Marketing from Zero",
    subtitle: "AI-Powered Marketing with the Operator Stack",
    icon: TrendingUp,
    sections: [
      {
        title: "5.1 The Marketing Skills Toolkit",
        content: `Every business needs marketing, but most founders either can't afford an agency or don't know where to start. The **Marketing Skills** toolkit solves this by giving your AI operator stack 25 specialized marketing capabilities that cover the entire funnel — from getting discovered to converting visitors to turning customers into advocates.

**What Are Marketing Skills?**
Marketing Skills are structured instructions (built on Claude Code's Skills system) that turn Claude into a domain expert for specific marketing tasks. Instead of giving Claude vague requests like "help me with marketing," you activate a skill that contains expert frameworks, best practices, and step-by-step processes.

**The 25 Skills Organized by Function:**

| Category | Skills | What They Cover |
|----------|--------|-----------------|
| **Conversion (CRO)** | page-cro, signup-flow-cro, onboarding-cro, form-cro, popup-cro | Optimizing every step of your funnel |
| **Copywriting** | copywriting, copy-editing, email-sequence, social-content | Writing that converts |
| **SEO & Discovery** | seo-audit, programmatic-seo, schema-markup, competitor-alternatives | Getting found organically |
| **Paid & Distribution** | paid-ads, content-strategy, launch-strategy | Driving traffic strategically |
| **Measurement** | analytics-tracking, ab-test-setup | Knowing what works |
| **Growth Engineering** | referral-program, free-tool-strategy, marketing-ideas | Building viral loops |
| **Strategy** | pricing-strategy, marketing-psychology, product-marketing-context | Thinking like a CMO |

**Installing the Toolkit:**

\`\`\`
npx skills add coreyhaines31/marketingskills
\`\`\`

Or clone directly into your Claude Code skills folder:

\`\`\`
git clone https://github.com/coreyhaines31/marketingskills.git
cp -r marketingskills/skills/* .claude/skills/
\`\`\``,
        analogy: "Think of Marketing Skills like hiring a marketing team, except each 'team member' is a specialized AI skill. You have a copywriter, an SEO expert, a CRO analyst, a paid ads manager, and a growth engineer — all available instantly, working together through Claude Code.",
        tip: "Start by installing the full toolkit, then focus on the skills relevant to your current stage. Pre-launch businesses should prioritize copywriting, page-cro, and content-strategy. Post-launch, shift focus to analytics-tracking, ab-test-setup, and paid-ads."
      },
      {
        title: "5.2 Foundation: Your Marketing Context",
        content: `Before using any marketing skill, you need to establish your **Product Marketing Context** — a single reference document that every skill reads from. This is the most important step because it prevents you from repeating the same background information every time you switch between skills.

**Creating Your Context Document:**
Use the \`product-marketing-context\` skill to build this file. Tell Claude:

\`\`\`
"Create my product marketing context document"
\`\`\`

Claude will ask you about:

**1. Your Product**
• What does it do? (one sentence)
• Who is it for? (specific audience)
• What problem does it solve?
• How is it different from alternatives?

**2. Your Market**
• Who are your competitors?
• What's your pricing model?
• What stage are you at? (pre-launch, early, growing, scaling)

**3. Your Voice**
• What tone should marketing use? (professional, casual, technical, friendly)
• Are there words or phrases to always use or avoid?
• What's your brand personality?

**The Output — \`product-marketing-context.md\`:**
This becomes a shared reference file that all 25 skills check before they start working. It ensures every piece of copy, every SEO page, every ad, and every email sounds like it comes from the same brand.

**Operator Stack Integration:**
Use **Claude.ai** to brainstorm and refine your positioning before committing it to the context document. Then use **Claude Code** with the product-marketing-context skill to generate the file. Every future marketing task will reference it automatically.

**Key Sections to Get Right:**

| Section | Why It Matters |
|---------|---------------|
| **Value Proposition** | Every headline, ad, and email starts here |
| **Target Audience** | Determines tone, channels, and messaging |
| **Competitive Positioning** | Shapes how you differentiate in copy and SEO |
| **Brand Voice** | Keeps all output consistent across channels |
| **Growth Stage** | Skills adapt their recommendations to your stage |`,
        analogy: "Your product marketing context is like a creative brief at an ad agency. Before any designer, writer, or strategist touches your brand, they read the brief. It ensures everyone is aligned — and for your AI marketing team, it ensures every skill speaks with one voice.",
        tip: "Revisit your context document quarterly. As your product evolves, your positioning should too. An outdated context document leads to marketing that doesn't match your current reality."
      },
      {
        title: "5.3 Copywriting & Landing Pages",
        content: `Your website is your 24/7 salesperson. The copy on it determines whether visitors become customers or bounce. Three skills work together here: **copywriting**, **copy-editing**, and **page-cro**.

**Step 1: Write High-Converting Copy (copywriting skill)**

The copywriting skill uses proven frameworks to generate copy for any page type:

**Headline Formulas That Work:**
• "{Achieve outcome} without {pain point}" — focuses on benefit + removes objection
• "{Category} for {audience}" — instant clarity about what you are
• "Stop {painful activity}. Start {desired outcome}." — contrast creates urgency

**Page Copy Structure:**
1. **Hero Section** — Headline + subhead + primary CTA
2. **Problem** — Describe the pain your audience feels
3. **Solution** — Show how you solve it
4. **Social Proof** — Testimonials, logos, numbers
5. **Features/Benefits** — What they get (focus on outcomes, not features)
6. **Objection Handling** — Address why someone might hesitate
7. **Final CTA** — Repeat the call to action

**Step 2: Polish and Tighten (copy-editing skill)**

After generating copy, run it through the copy-editing skill:
• Eliminates jargon and unnecessary words
• Improves clarity and readability
• Checks tone consistency against your brand voice
• Catches grammatical issues

**Step 3: Optimize for Conversions (page-cro skill)**

The page-cro skill analyzes your page against a 7-point framework:

| Priority | Factor | What It Checks |
|----------|--------|-----------------|
| 1 | Value Proposition Clarity | Can visitors understand what you do in 5 seconds? |
| 2 | Headline Effectiveness | Does it address a real desire or pain point? |
| 3 | CTA Placement & Copy | Is it clear, specific, and above the fold? |
| 4 | Visual Hierarchy | Does the eye follow a logical path? |
| 5 | Trust Signals | Are there reviews, logos, or security badges? |
| 6 | Objection Handling | Are common concerns addressed? |
| 7 | Friction Points | Is anything confusing or unnecessary? |

**Additional CRO Skills for Your Funnel:**

• **form-cro** — Reduce form fields, add smart defaults, use conditional logic
• **signup-flow-cro** — Optimize the account creation and trial activation process
• **onboarding-cro** — Improve first-run experience to reduce churn
• **popup-cro** — Create exit-intent popups, lead magnets, and promotional overlays

**Operator Stack Workflow:**
1. Use **Claude.ai** to brainstorm your unique value proposition and messaging angles
2. Use **Claude Code** with the copywriting skill to generate page copy
3. Use **Claude Code** with page-cro to audit and improve the copy
4. Use **Claude Code** to build the actual landing page
5. Use **n8n** to set up form submissions and lead routing`,
        analogy: "Writing landing page copy without these skills is like performing surgery with a butter knife — you might get there eventually, but it won't be pretty. Each skill is a precision instrument: the copywriting skill writes, the editor sharpens, and the CRO analyst ensures it actually converts.",
        tip: "Always write copy for one specific person, not a vague audience. The copywriting skill works best when your product marketing context has a detailed ideal customer profile. 'Small business owners' is weak. 'Solo consultants earning $100-250K who spend 10+ hours/week on admin tasks' is powerful."
      },
      {
        title: "5.4 SEO & Organic Discovery",
        content: `Paid ads stop working when you stop paying. SEO builds compounding traffic that grows over time. Four skills cover the entire SEO strategy: **seo-audit**, **programmatic-seo**, **schema-markup**, and **competitor-alternatives**.

**Phase 1: Audit Your Current State (seo-audit skill)**

Before building anything new, understand where you stand. The seo-audit skill checks:

• **Technical SEO** — Site speed, mobile-friendliness, crawlability, Core Web Vitals
• **On-Page SEO** — Title tags, meta descriptions, heading structure, keyword usage
• **Indexation** — Are your pages showing up in Google at all?
• **Content Gaps** — What are competitors ranking for that you're missing?

**Phase 2: Build Pages at Scale (programmatic-seo skill)**

This is where the real leverage comes in. Programmatic SEO creates hundreds of optimized pages from templates. The skill includes **12 playbooks**:

| Playbook | Example Pattern | Best For |
|----------|----------------|----------|
| **Templates** | "[Type] template" | SaaS, design tools |
| **Comparisons** | "[Product] vs [Competitor]" | Any competitive market |
| **Alternatives** | "[Competitor] alternatives" | Challenger brands |
| **Locations** | "[Service] in [City]" | Local businesses, agencies |
| **Integrations** | "[Product] + [Integration]" | SaaS with API/integrations |
| **Glossary** | "What is [term]?" | Technical products, education |
| **Curation** | "Best [category] for [use case]" | Marketplaces, directories |
| **Examples** | "[Type] examples" | Creative tools, templates |
| **Personas** | "[Product] for [role/industry]" | Products with multiple audiences |

**Strategy: Pick 2-3 Playbooks That Fit Your Business**

• **SaaS product?** → Comparisons + Alternatives + Integrations
• **Local service?** → Locations + Glossary
• **Marketplace?** → Curation + Templates + Examples
• **Agency?** → Locations + Glossary + Personas

**Phase 3: Rich Results with Schema Markup (schema-markup skill)**

Schema markup tells Google exactly what your pages are about, unlocking rich results (star ratings, FAQ dropdowns, pricing info) in search:

• **Product pages** → Product schema with pricing and reviews
• **Blog posts** → Article schema with author and date
• **FAQ pages** → FAQ schema for dropdown results
• **How-to guides** → HowTo schema for step-by-step results

**Phase 4: Own Competitor Traffic (competitor-alternatives skill)**

Create comparison pages that capture people searching for your competitors:

• "[Competitor] vs [Your Product]" — Direct comparison
• "[Competitor] alternatives" — Position yourself as the top alternative
• "[Competitor] review" — Honest review that naturally leads to you

**Operator Stack Workflow:**
1. Use **Claude.ai** to research keywords and identify which playbooks match your market
2. Use **Claude Code** with seo-audit to analyze your current site
3. Use **Claude Code** with programmatic-seo to generate page templates at scale
4. Use **Claude Code** to build the pages and implement schema markup
5. Use **n8n** to automate content publication and indexing pings`,
        analogy: "SEO is like planting an orchard. Each page you publish is a tree. It takes time to grow, but once it does, it produces fruit (traffic) for years. Programmatic SEO is like using a planting machine instead of planting by hand — same orchard, 100x faster.",
        tip: "Don't try all 12 programmatic SEO playbooks at once. Pick the one with the highest search volume for your niche and build 20-50 pages. Measure results over 60-90 days, then expand to the next playbook."
      },
      {
        title: "5.5 Email & Content Marketing",
        content: `Social media rents you an audience. Email and content marketing build one that you own. Three skills cover this: **email-sequence**, **content-strategy**, and **social-content**.

**Email Marketing: Your Highest-ROI Channel**

The email-sequence skill designs complete automated flows. The key sequences every business needs:

**1. Welcome Sequence (3-7 emails)**
The most important sequence — it runs immediately after someone signs up.

| Email | Timing | Purpose |
|-------|--------|---------|
| Welcome | Immediate | Deliver promised value, set expectations |
| Quick Win | Day 1 | Help them succeed with one specific thing |
| Story | Day 3 | Share your origin story, build connection |
| Value | Day 5 | Teach something useful, demonstrate expertise |
| Social Proof | Day 7 | Show what others have achieved |
| Soft CTA | Day 9 | Introduce your paid offering naturally |
| Direct CTA | Day 12 | Clear call to action with urgency |

**2. Lead Nurture Sequence (6-8 emails)**
For leads who signed up but haven't bought:
• Educate with your best content
• Build authority through case studies
• Address specific objections per email
• Graduate to a sales conversation

**3. Re-engagement Sequence (3-4 emails)**
For users going cold:
• "We miss you" with a compelling reason to return
• Show what they're missing (new features, content)
• Final "should we part ways?" email (this often gets the highest open rate)

**Content Strategy: Building Your Authority Engine**

The content-strategy skill helps you plan and execute content that drives traffic and builds trust:

**Content Pillars Framework:**
1. Identify 3-5 core topics your audience cares about
2. Create pillar content (comprehensive guides) for each
3. Build cluster content (specific subtopics) linking back to pillars
4. Distribute across channels with the social-content skill

**The Content-to-Revenue Pipeline:**
• **Top of Funnel** — Blog posts, social content, free tools (awareness)
• **Middle of Funnel** — Email sequences, case studies, webinars (consideration)
• **Bottom of Funnel** — Comparison pages, demos, testimonials (decision)

**Social Content: Amplifying Your Reach**

The social-content skill creates platform-native content for:

| Platform | Best For | Content Type |
|----------|----------|-------------|
| **LinkedIn** | B2B, professional audiences | Thought leadership, case studies |
| **Twitter/X** | Tech, startup communities | Threads, hot takes, quick wins |
| **Instagram** | Visual products, lifestyle | Carousels, stories, reels |
| **TikTok** | Younger demographics, viral reach | Short-form educational videos |

**Operator Stack Workflow:**
1. Use **Claude.ai** to brainstorm content topics and email angles
2. Use **Claude Code** with content-strategy to build your editorial calendar
3. Use **Claude Code** with email-sequence to write each automated flow
4. Use **Claude Code** with social-content to repurpose content across platforms
5. Use **n8n** to automate email sending (via Mailchimp, Customer.io, or Resend) and social scheduling`,
        analogy: "Email marketing is like building a private highway to your customers' attention. Social media is the public road — noisy, crowded, and controlled by someone else. Content marketing is the signage that gets people onto your private highway in the first place.",
        tip: "Your welcome sequence is responsible for up to 50% of email-driven revenue. Spend 80% of your email effort perfecting those first 5-7 emails before building anything else."
      },
      {
        title: "5.6 Paid Acquisition & Analytics",
        content: `Organic growth is powerful but slow. Paid acquisition lets you buy traffic today while your SEO compounds in the background. Two skills cover this: **paid-ads** and **analytics-tracking** (plus **ab-test-setup** for optimization).

**Setting Up Analytics First (analytics-tracking skill)**

Never spend money on ads without measurement in place. The analytics-tracking skill sets up:

**Event Tracking Plan:**

| Event Category | Examples | Why It Matters |
|----------------|----------|---------------|
| **Page Views** | Landing page, pricing, blog | Know where traffic goes |
| **Engagement** | Scroll depth, time on page, clicks | Know if content works |
| **Conversion** | Sign up, purchase, demo request | Know what drives revenue |
| **Attribution** | UTM parameters, referral source | Know where money comes from |

**Key Setup Steps:**
1. Install GA4 (or your analytics tool of choice)
2. Define your conversion events
3. Set up UTM parameter conventions
4. Create a tracking plan document
5. Implement event tracking via Google Tag Manager

**Running Paid Ads (paid-ads skill)**

The paid-ads skill covers four major platforms:

**Google Ads — Capture Existing Demand**
• People searching for your solution right now
• Best for: "software for [use case]", "[competitor] alternative"
• Budget allocation: Start with branded + high-intent keywords

**Meta Ads (Facebook/Instagram) — Generate Demand**
• Reach people who don't know they need you yet
• Best for: Visual products, broad audiences, retargeting
• Creative testing: Concept > Hook > Visual > Copy > CTA

**LinkedIn Ads — B2B Targeting**
• Target by job title, company size, industry
• Best for: Enterprise products, professional services
• Higher CPCs but more qualified leads

**TikTok Ads — Younger Demographics**
• Video-first, authentic content performs best
• Best for: Consumer products, brand awareness
• Lowest CPMs but requires native-feeling creative

**Budget Strategy:**
• **70% Proven** — Put most budget on what's already working
• **30% Testing** — Reserve budget to test new audiences, creatives, and platforms
• **Retargeting Tiers:**

| Tier | Audience | Bid Strategy |
|------|----------|-------------|
| **Hot** (1-7 days) | Recent visitors, cart abandoners | Aggressive — they almost converted |
| **Warm** (7-30 days) | Past visitors, email subscribers | Moderate — remind and re-engage |
| **Cold** (30-90 days) | Old visitors, lookalike audiences | Conservative — reintroduce value |

**A/B Testing for Optimization (ab-test-setup skill)**

Once you have traffic flowing, test everything:

1. **Form a hypothesis:** "Changing the CTA from 'Sign Up' to 'Start Free Trial' will increase conversions by 15%"
2. **Calculate sample size:** The skill helps determine how much traffic you need
3. **Run the test:** Split traffic evenly between variants
4. **Analyze results:** Check for statistical significance (not just "which number is bigger")
5. **Implement winner:** Roll out the winning variant

**Operator Stack Workflow:**
1. Use **Claude.ai** to research your audience and brainstorm ad angles
2. Use **Claude Code** with analytics-tracking to set up your measurement foundation
3. Use **Claude Code** with paid-ads to design campaign structure and write ad copy
4. Use **Claude Code** with ab-test-setup to design experiments
5. Use **n8n** to automate bid adjustments, budget alerts, and performance reports`,
        analogy: "Running ads without analytics is like driving with your eyes closed. Analytics tells you where you are, ads are the gas pedal, and A/B testing is the steering wheel. You need all three.",
        tip: "Don't start with paid ads until you've validated that your landing page converts organic traffic. If your page can't convert free visitors, it definitely can't convert paid ones. Fix your conversion rate first with page-cro, then scale with ads."
      },
      {
        title: "5.7 Growth Engines & Psychology",
        content: `The skills above handle acquiring and converting customers. These final skills build engines that compound growth: **referral-program**, **free-tool-strategy**, **pricing-strategy**, **marketing-psychology**, and **marketing-ideas**.

**Referral Programs: Turn Customers into Salespeople**

The referral-program skill designs viral loops:

**Program Design Elements:**

| Element | Options | Example |
|---------|---------|---------|
| **Incentive Type** | Two-sided, one-sided, tiered | "Give $20, Get $20" |
| **Reward Structure** | Credits, discounts, cash, features | Free month for each referral |
| **Trigger Point** | Post-purchase, after milestone, always visible | After first successful project |
| **Tracking** | Unique links, referral codes, cookies | Dub.co or Rewardful integration |

**The Viral Loop:**
1. Customer uses your product and gets value
2. You prompt them to share (at the moment of delight)
3. They share a unique referral link
4. New user signs up through the link
5. Both get rewarded
6. New user becomes a referrer → repeat

**Free Tool Strategy: Build Traffic Magnets**

The free-tool-strategy skill creates standalone tools that attract your target audience:

**High-Performing Free Tool Types:**
• **Calculators** — ROI calculator, savings estimator, sizing tool
• **Generators** — Name generator, tagline generator, email template generator
• **Analyzers** — Website audit, SEO checker, performance grader
• **Converters** — File converters, unit converters, format tools

**Why This Works:**
• Free tools rank well in search (high backlink potential)
• They demonstrate your expertise
• You capture emails from tool users
• They create natural upgrade paths to your paid product

**Pricing Strategy: Maximize Revenue per Customer**

The pricing-strategy skill covers:

• **Value Metrics** — Charge based on the unit of value (per user, per project, per API call)
• **Tier Design** — Structure plans so most customers land on your target tier
• **Anchoring** — Use a high-priced tier to make the middle tier feel reasonable
• **Free vs. Freemium vs. Free Trial** — Each model works for different business types

**Marketing Psychology: Behavioral Science for Conversions**

The marketing-psychology skill applies proven mental models:

| Principle | Application | Example |
|-----------|-------------|---------|
| **Loss Aversion** | Show what they'll miss | "You're losing $2,400/year on manual tasks" |
| **Social Proof** | Show others doing it | "Join 10,000+ teams" |
| **Anchoring** | Set a reference price first | Show enterprise plan before standard |
| **Scarcity** | Create genuine urgency | "Early adopter pricing ends Friday" |
| **Reciprocity** | Give value before asking | Free tool → email capture → paid offer |
| **Authority** | Show expertise signals | Industry certifications, media logos |

**Marketing Ideas: Never Run Out of Strategies**

The marketing-ideas skill contains **140+ frameworks** organized by growth stage:

• **Pre-launch** — Build waitlists, create launch buzz, establish thought leadership
• **Early stage** — Find product-market fit, get first 100 customers
• **Growth** — Scale what works, diversify channels, build brand
• **Mature** — Optimize LTV, reduce churn, expand into new segments`,
        analogy: "Think of growth engines like compound interest. A referral program doesn't just get you one customer — it gets you a customer who gets you another customer who gets you another. The free tool doesn't just rank once — it earns backlinks that boost your whole site. Small engines, exponential results.",
        tip: "The marketing-ideas skill is your best starting point when you're stuck. Tell Claude your business stage, what you've tried, and your constraints — it will generate a prioritized list of strategies you haven't considered."
      },
      {
        title: "5.8 The Zero-to-Launch Playbook",
        content: `Here's how to take any business from zero marketing to a complete, working marketing engine using the Operator Stack and Marketing Skills together. Follow this playbook in order.

**Phase 1: Foundation (Week 1)**

| Step | Skill | Action |
|------|-------|--------|
| 1 | product-marketing-context | Define your positioning, audience, and voice |
| 2 | pricing-strategy | Set your pricing model and tier structure |
| 3 | marketing-ideas | Generate 20+ marketing strategies, pick top 5 |
| 4 | analytics-tracking | Set up GA4, conversion events, and UTM conventions |

**Phase 2: Website & Copy (Week 2)**

| Step | Skill | Action |
|------|-------|--------|
| 5 | copywriting | Write homepage, landing page, and pricing page copy |
| 6 | copy-editing | Polish all copy for clarity and consistency |
| 7 | page-cro | Audit every page against the 7-point CRO framework |
| 8 | form-cro | Optimize signup forms and lead capture |
| 9 | schema-markup | Add structured data for rich search results |

**Phase 3: Content & SEO (Weeks 3-4)**

| Step | Skill | Action |
|------|-------|--------|
| 10 | seo-audit | Identify technical issues and content gaps |
| 11 | content-strategy | Build content pillars and editorial calendar |
| 12 | programmatic-seo | Generate 20-50 templated SEO pages |
| 13 | competitor-alternatives | Create comparison and alternative pages |
| 14 | social-content | Set up social presence on 2 key platforms |

**Phase 4: Email & Automation (Week 5)**

| Step | Skill | Action |
|------|-------|--------|
| 15 | email-sequence | Build welcome, nurture, and re-engagement sequences |
| 16 | onboarding-cro | Optimize post-signup experience |
| 17 | free-tool-strategy | Build one free tool as a lead magnet |

**Phase 5: Scale & Optimize (Week 6+)**

| Step | Skill | Action |
|------|-------|--------|
| 18 | paid-ads | Launch first ad campaigns (start small: $20-50/day) |
| 19 | ab-test-setup | Design first A/B tests on highest-traffic pages |
| 20 | referral-program | Launch customer referral program |
| 21 | marketing-psychology | Apply behavioral principles across all touchpoints |

**The n8n Automation Layer:**

Throughout this process, use n8n to automate:
• **Lead routing** — New signup → CRM update → Welcome email → Slack notification
• **Content distribution** — Blog published → Social posts → Email newsletter
• **Ad monitoring** — Daily spend check → Alert if budget exceeded → Pause underperforming ads
• **Referral tracking** — Referral link clicked → Attribution tracked → Rewards issued
• **Reporting** — Weekly analytics pull → Performance summary → Email to stakeholders

**Tool Integrations Available:**

The Marketing Skills toolkit includes guides for 29 tools you can connect:

| Category | Tools |
|----------|-------|
| **Analytics** | GA4, Mixpanel, Amplitude, PostHog, Segment |
| **SEO** | Google Search Console, Semrush, Ahrefs |
| **Email** | Mailchimp, Customer.io, SendGrid, Resend, Kit |
| **Ads** | Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads |
| **Payments** | Stripe |
| **CRM** | HubSpot, Salesforce |
| **Referrals** | Rewardful, Tolt, Dub.co |
| **Automation** | Zapier |
| **CMS** | Shopify, WordPress, Webflow |

**6 tools have direct MCP integration** (meaning Claude can interact with them directly): GA4, Stripe, Mailchimp, Google Ads, Resend, and Zapier.

**The Complete Operator Workflow:**

\`\`\`
1. THINK  (Claude.ai)     → Research, brainstorm, strategize
2. BUILD  (Claude Code)    → Write copy, create pages, implement tracking
3. CONNECT (n8n)           → Automate workflows, connect tools, run 24/7
4. MEASURE (Analytics)     → Track what works, identify what doesn't
5. OPTIMIZE (A/B Testing)  → Improve continuously based on data
\`\`\`

This isn't theory — it's a repeatable system. Every business can follow this playbook, adapt the skills to their market, and build a marketing engine that runs on AI-powered automation.`,
        analogy: "Building marketing from zero without a system is like trying to assemble IKEA furniture without instructions — you have all the pieces but no idea what order to put them in. This playbook is your instruction manual, and the Marketing Skills are the numbered pieces.",
        tip: "Don't try to do everything at once. Complete each phase fully before moving to the next. A mediocre website with great ads will waste money. A great website with no traffic will waste time. Follow the order — foundation first, then traffic, then optimization."
      }
    ]
  },
  module6: {
    title: "Module 6: OpenClaw",
    subtitle: "Your Personal AI Agent, Running 24/7",
    icon: Bot,
    sections: [
      {
        title: "6.1 Your AI Agent That Never Sleeps",
        content: `Imagine texting an assistant at 2 AM that checks your email, schedules your meetings, scrapes competitor pricing, and pushes code to GitHub — all before you wake up.

That's **OpenClaw**.

OpenClaw is an open-source personal AI agent that lives on your own hardware, connects to your messaging apps, and actually *does things* on your behalf. Not "here's a summary" — actual execution. File management. Browser automation. Shell commands. API calls. All triggered from a WhatsApp message or a Telegram chat.

**What makes it different from ChatGPT or Claude.ai:**

| Feature | ChatGPT / Claude.ai | OpenClaw |
|---------|---------------------|----------|
| **Runs where?** | Their servers | Your machine |
| **Can access your files?** | No | Yes |
| **Can run terminal commands?** | No | Yes |
| **Can control a browser?** | No | Yes |
| **Works via text/WhatsApp?** | No | Yes |
| **Persistent memory?** | Limited | Full — learns your preferences over time |
| **Works while you sleep?** | No | Yes — 24/7 autonomous operation |
| **Your data stays private?** | No | Yes — nothing leaves your machine |

**50+ integrations out of the box:** Gmail, GitHub, Spotify, Obsidian, Twitter, Google Calendar, Slack, and more. The community builds new skills daily on **ClawHub** — and OpenClaw can even create and modify its own skills through conversation.

People are calling it "what Apple Intelligence should have been." The community exploded so fast that Mac Mini stock sold out across major retailers. Tom's Hardware reported delivery delays of up to 6 weeks for high-memory configurations.

This module walks you through setting it up — affordably, securely, and without the trial-and-error that burns most people out.`,
        analogy: "ChatGPT is like calling a knowledgeable friend for advice. OpenClaw is like hiring a full-time assistant who sits at your desk, has your passwords, knows your preferences, and works while you're asleep.",
        tip: "OpenClaw is open-source and free. The software costs nothing. You only pay for hardware (or a cheap VPS) and API calls if you use cloud models like Claude or GPT-4. With the right setup, that's under $10/month."
      },
      {
        title: "6.2 Why Everyone's Buying Mac Minis (And Why You Don't Have To)",
        content: `You've seen the tweets. You've seen the Reddit threads. Developers are panic-buying Mac Minis like they're limited-edition sneakers. But here's what nobody tells you: **most people don't need a Mac Mini to run OpenClaw.**

**Why the Mac Mini became the default:**

The Mac Mini emerged as the go-to OpenClaw host for one reason above all others: **iMessage**. In the US, iMessage is how most people text. If you want OpenClaw responding to your iMessages, you need macOS. And the cheapest way to get macOS is a Mac Mini.

**Other reasons people buy dedicated hardware:**
• **Isolation** — A dedicated machine keeps your AI agent separate from your personal data
• **Always-on** — Mac Minis idle at under 5 watts. Quieter than a nightlight
• **Apple Silicon** — Unified memory architecture makes local AI models run faster than equivalent x86 hardware
• **Reliability** — macOS doesn't randomly restart for updates at 3 AM

**The real cost breakdown:**

| Option | Upfront Cost | Monthly Cost | iMessage? |
|--------|-------------|-------------|-----------|
| New Mac Mini M4 (16GB) | $599 | $1-8 (API calls) | Yes |
| New Mac Mini M4 (32GB) | $799 | $1-8 (API calls) | Yes |
| Used Mac Mini M1 (16GB) | $350-500 | $1-8 (API calls) | Yes |
| Hetzner VPS (2 vCPU, 2GB) | $0 | $4/month + API | No |
| Oracle Cloud Free Tier | $0 | $0-8 (API only) | No |
| Hostinger VPS | $0 | $5-13/month + API | No |

**The hidden cost nobody talks about: API bills.**

Early adopters report spending **$300-750/month** on cloud LLM API calls when using models like Claude or GPT-4. OpenClaw's agent makes many reasoning calls per task — those tokens add up fast.

The solution? Use local models with **Ollama** for routine tasks and only route complex requests to cloud APIs. We'll cover this in the cost management section.

**The bottom line:** If you need iMessage integration, a used M1 Mac Mini for $350-400 is the sweet spot. If you don't need iMessage, a $4/month VPS does everything else — and you can start in 20 minutes instead of waiting for shipping.`,
        analogy: "Buying a new Mac Mini for OpenClaw is like buying a brand-new truck to drive to the grocery store. It works — but a reliable used car gets you there just fine. Pick the vehicle that matches the trip.",
        tip: "Check Facebook Marketplace and local listings for M1 Mac Minis. Since the M4 launched, M1 prices dropped significantly. A used M1 with 16GB runs OpenClaw perfectly for cloud API usage."
      },
      {
        title: "6.3 Choose Your Setup Path",
        content: `Before you install anything, pick the path that fits your needs and budget. There's no wrong answer — each has trade-offs.

**Path A: Remote VPS (Best for most people)**

• **Cost:** $0-13/month for the server + $1-8/month for API calls
• **Setup time:** 20-30 minutes
• **Best for:** WhatsApp, Telegram, Discord, Slack, Signal users
• **Not for:** iMessage users (requires macOS)
• **Skill level:** Beginner-friendly with our walkthrough

This is the path we recommend for most Operators Academy students. It's the fastest, cheapest way to get a working OpenClaw agent. You get a cloud server that runs 24/7, no hardware to buy, and you can manage it from anywhere.

**Recommended VPS providers:**

| Provider | Price | RAM | Standout Feature |
|----------|-------|-----|-----------------|
| **Oracle Cloud** | Free | 1-4GB | Free tier is generous, but can be unreliable |
| **Hetzner** | $4/mo | 2GB | Best value for stability |
| **Hostinger** | $5-13/mo | 2-8GB | One-click Docker deployment |

**Path B: Local Mac Mini (For iMessage + power users)**

• **Cost:** $350-800 upfront + $1-8/month for API calls
• **Setup time:** 45-60 minutes
• **Best for:** iMessage users, privacy maximalists, local model enthusiasts
• **Skill level:** Intermediate

Choose this if iMessage is a must-have or you want to run AI models locally with zero cloud dependency. A used M1 Mac Mini is the budget sweet spot.

**Path C: Hybrid (Maximum flexibility)**

• **Cost:** $350-800 upfront + $4/mo VPS + API calls
• **Setup time:** 60-90 minutes
• **Best for:** Power users who want the best of both worlds
• **Skill level:** Intermediate to advanced

Run OpenClaw on a Mac Mini for iMessage, plus a VPS instance for always-on redundancy. If your Mac Mini goes offline, the VPS takes over for non-iMessage channels.

**Decision tree:**

Do you need iMessage?
• **Yes** → Path B (Mac Mini) or Path C (Hybrid)
• **No** → Path A (VPS) — save $350+ and start today

Are you comfortable with terminal commands?
• **Yes** → Any path works
• **Not yet** → Path A with Hostinger's one-click Docker setup

Is privacy your top concern?
• **Yes** → Path B with local Ollama models (zero cloud dependency)
• **Not critical** → Path A is simpler and cheaper`,
        analogy: "Choosing your setup path is like choosing where to live. A VPS is renting an apartment — cheap, fast move-in, someone else handles maintenance. A Mac Mini is buying a house — more upfront cost, but it's yours, and you can do whatever you want with it.",
        tip: "Start with Path A (VPS) even if you plan to go local later. It takes 20 minutes, costs $4/month, and teaches you how OpenClaw works before you invest in hardware. Think of it as a test drive."
      },
      {
        title: "6.4 Remote Setup: Your AI Agent for $4/Month",
        content: `This walkthrough gets OpenClaw running on a Hetzner VPS. By the end, you'll have a 24/7 AI agent you can message from your phone.

**Step 1: Create Your VPS**

1. Sign up at **hetzner.com** (or your preferred VPS provider)
2. Create a new server:
   • **OS:** Ubuntu 22.04
   • **Type:** CX22 (2 vCPU, 4GB RAM) — $4.59/month
   • **Location:** Pick the closest data center to you
   • **SSH Key:** Add your public key (or use password auth to start)
3. Note your server's IP address

**Step 2: Connect to Your Server**

Open your terminal and SSH in:

\`\`\`
ssh root@YOUR_SERVER_IP
\`\`\`

**Step 3: Install Docker**

Docker keeps OpenClaw isolated and makes updates painless:

\`\`\`
curl -fsSL https://get.docker.com | sh
\`\`\`

**Step 4: Install OpenClaw**

Run the one-liner installer:

\`\`\`
curl -fsSL https://openclaw.ai/install.sh | bash
\`\`\`

The installer handles Node.js, dependencies, and initial configuration. Follow the prompts to:
• Choose your AI model provider (Claude, OpenAI, or local via Ollama)
• Enter your API key
• Set your admin password

**Step 5: Configure Your Model**

For the most cost-effective setup, use Claude Haiku for routine tasks:

\`\`\`
openclaw config set model claude-haiku-4-5-20251001
\`\`\`

For complex tasks that need more reasoning power:

\`\`\`
openclaw config set fallback-model claude-sonnet-4-5-20250929
\`\`\`

**Step 6: Start OpenClaw as a Background Service**

\`\`\`
openclaw start --daemon
\`\`\`

This runs OpenClaw in the background. It survives server reboots and restarts automatically if it crashes.

**Step 7: Verify It's Running**

\`\`\`
openclaw status
\`\`\`

You should see: \`Status: Running | Uptime: Xs | Model: claude-haiku\`

**What you've built so far:**
Your AI agent is live on a server, running 24/7, waiting for instructions. Next, we'll connect it to your messaging apps so you can talk to it from your phone.`,
        analogy: "Setting up a VPS for OpenClaw is like renting a tiny office for your new employee. You don't need a corner office with a view — you need a desk, a chair, and a power outlet. A $4/month server is that desk.",
        tip: "Set a billing alert on your VPS provider for $10/month. This catches any unexpected charges early. Hetzner and most providers let you set this up in the billing dashboard."
      },
      {
        title: "6.5 Local Setup: Mac Mini Configuration",
        content: `If you chose Path B (local Mac Mini), this section walks you through turning it into a dedicated OpenClaw server.

**Before You Start:**
• A Mac Mini (M1 or newer, 16GB RAM minimum)
• macOS 14 Sonoma or later
• An Ethernet cable (more reliable than Wi-Fi for always-on operation)
• Your AI model API key (Anthropic or OpenAI)

**Step 1: Prepare Your Mac Mini for Server Duty**

These settings prevent your Mac from going to sleep or interrupting OpenClaw:

1. **System Settings > Energy** → Turn off "Put hard disks to sleep"
2. **System Settings > Energy** → Set "Prevent automatic sleeping" to ON
3. **System Settings > Lock Screen** → Set "Start Screen Saver" to Never
4. **System Settings > Software Update** → Turn off automatic updates (update manually on your schedule)

**Step 2: Enable Remote Access**

So you can manage your Mac Mini from any other device:

1. **System Settings > General > Sharing** → Turn on **Remote Login (SSH)**
2. Note the SSH command shown (e.g., \`ssh username@192.168.1.x\`)
3. Optionally enable **Screen Sharing** for GUI access

**Step 3: Install Homebrew and Node.js**

Open Terminal and run:

\`\`\`
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
\`\`\`

**Step 4: Install OpenClaw**

\`\`\`
curl -fsSL https://openclaw.ai/install.sh | bash
\`\`\`

Follow the installer prompts to configure your model provider and API key.

**Step 5: Install the Menubar App (Optional)**

OpenClaw offers a macOS menubar companion app (beta) for quick status checks:

\`\`\`
brew install --cask openclaw
\`\`\`

This shows a small icon in your menu bar with agent status, recent activity, and quick controls.

**Step 6: Set Up Auto-Start on Boot**

Create a launch agent so OpenClaw starts automatically when your Mac boots:

\`\`\`
openclaw service install
\`\`\`

This registers OpenClaw as a macOS LaunchAgent that starts on login and restarts if it crashes.

**Step 7: Set Up Local Models with Ollama (Optional)**

For zero API costs on routine tasks:

\`\`\`
brew install ollama
ollama pull llama3.2
openclaw config set model ollama/llama3.2
openclaw config set fallback-model claude-sonnet-4-5-20250929
\`\`\`

This runs a local model for simple requests and only calls Claude for complex tasks — cutting your API bill by 70-90%.

**Step 8: Configure iMessage Integration**

This is the feature that justifies the Mac Mini. In the OpenClaw config:

\`\`\`
openclaw integrations enable imessage
\`\`\`

OpenClaw will request permission to access Messages. Grant it, and you can now text your agent like any contact.

**You're live.** Your Mac Mini is now a personal AI server running 24/7 with iMessage access, local model support, and cloud fallback for complex reasoning.`,
        analogy: "Configuring a Mac Mini for OpenClaw is like converting a spare bedroom into a home office. You disable the things that interrupt work (sleep settings, auto-updates), set up remote access (so you can check in from anywhere), and make sure it starts fresh every morning (auto-launch on boot).",
        tip: "Connect your Mac Mini via Ethernet, not Wi-Fi. A dropped Wi-Fi connection at 3 AM means your agent goes offline until you notice. Ethernet is one cable that eliminates this failure mode entirely."
      },
      {
        title: "6.6 Connecting Your Messaging Apps",
        content: `Your agent is running. Now let's make it reachable from your phone. OpenClaw supports 8 messaging platforms — pick the ones you actually use.

**WhatsApp (Most Popular)**

WhatsApp is the most-used integration worldwide. Setup takes 5 minutes:

\`\`\`
openclaw integrations enable whatsapp
\`\`\`

1. OpenClaw generates a QR code in your terminal
2. Open WhatsApp on your phone → Settings → Linked Devices → Link a Device
3. Scan the QR code
4. Send a test message: "Hey, are you there?"

Your agent now lives in your WhatsApp as a linked device. Message it like a contact, and it responds.

**Telegram**

Telegram requires creating a bot through BotFather:

1. Message **@BotFather** on Telegram
2. Send \`/newbot\` and follow the prompts to name your bot
3. Copy the bot token BotFather gives you
4. Run:

\`\`\`
openclaw integrations enable telegram --token YOUR_BOT_TOKEN
\`\`\`

5. Message your bot on Telegram to test

**Discord**

For Discord, you create a bot application:

1. Go to the Discord Developer Portal → Applications → New Application
2. Go to Bot → Add Bot → Copy the token
3. Under OAuth2 → URL Generator, select \`bot\` scope with \`Send Messages\` + \`Read Message History\`
4. Use the generated URL to invite the bot to your server
5. Run:

\`\`\`
openclaw integrations enable discord --token YOUR_BOT_TOKEN
\`\`\`

**Slack**

\`\`\`
openclaw integrations enable slack
\`\`\`

Follow the OAuth flow that opens in your browser. Select your workspace and grant permissions.

**Signal**

\`\`\`
openclaw integrations enable signal
\`\`\`

Signal uses a linked device approach similar to WhatsApp — scan a QR code with your Signal app.

**iMessage (Mac Mini Only)**

If you're running on macOS:

\`\`\`
openclaw integrations enable imessage
\`\`\`

Grant Messages access when prompted. Your agent becomes reachable via iMessage to anyone who has your Apple ID.

**Managing Multiple Channels:**

You can enable as many integrations as you want. OpenClaw handles them all simultaneously:

\`\`\`
openclaw integrations list
\`\`\`

This shows all active integrations, their status, and message counts.

| Integration | Setup Difficulty | Works on VPS? | Works on Mac? |
|-------------|-----------------|---------------|---------------|
| WhatsApp | Easy (QR scan) | Yes | Yes |
| Telegram | Easy (bot token) | Yes | Yes |
| Discord | Medium (developer portal) | Yes | Yes |
| Slack | Easy (OAuth flow) | Yes | Yes |
| Signal | Easy (QR scan) | Yes | Yes |
| iMessage | Easy (one command) | No | Yes |
| Google Chat | Medium (service account) | Yes | Yes |
| MS Teams | Medium (Azure app) | Yes | Yes |`,
        analogy: "Connecting messaging apps to OpenClaw is like giving your assistant phone numbers for different offices. WhatsApp is the main line, Telegram is the back channel, Discord is the team chat, and iMessage is the personal line. Same assistant, different ways to reach them.",
        tip: "Start with one messaging app — whichever you use most. Get comfortable with that workflow before adding more channels. Each integration is independent, so you can add them anytime."
      },
      {
        title: "6.7 Keeping Costs Under $10/Month",
        content: `The number one reason people abandon OpenClaw isn't setup difficulty — it's the surprise API bill at the end of the month. OpenClaw agents are verbose. Every task involves multiple reasoning steps, each burning tokens. Without guardrails, costs spiral fast.

Here's how to keep your total bill under $10/month.

**Understanding Where the Money Goes:**

| Cost Component | Typical Range | Can You Reduce It? |
|----------------|--------------|-------------------|
| VPS hosting | $0-13/month | Yes — use free tiers or Hetzner |
| Cloud LLM API calls | $1-750/month | Yes — this is where optimization matters |
| Local model (Ollama) | $0 | Free, but needs capable hardware |

**Strategy 1: Model Routing — Use Cheap Models by Default**

The biggest cost saver. Route simple tasks to cheap models and only use expensive models when needed:

\`\`\`
openclaw config set model claude-haiku-4-5-20251001
openclaw config set fallback-model claude-sonnet-4-5-20250929
openclaw config set fallback-threshold complex
\`\`\`

**Cost comparison per task:**

| Model | Cost per 1M Input Tokens | Cost per 1M Output Tokens | Typical Task Cost |
|-------|-------------------------|--------------------------|-------------------|
| Claude Haiku 4.5 | $0.80 | $4.00 | $0.002-0.01 |
| Claude Sonnet 4.5 | $3.00 | $15.00 | $0.01-0.05 |
| Claude Opus 4.6 | $15.00 | $75.00 | $0.05-0.25 |
| Local (Ollama) | Free | Free | $0.00 |

Using Haiku for 90% of tasks and Sonnet for the rest keeps most users at **$5-15/month** in API costs.

**Strategy 2: Set Hard Spending Limits**

Both Anthropic and OpenAI let you set monthly spending caps:

• **Anthropic Console** → Settings → Spending Limits → Set to $20/month
• **OpenAI Dashboard** → Billing → Usage Limits → Set hard cap

If you hit the cap, OpenClaw falls back to local models or pauses until next month.

**Strategy 3: Use Local Models for Routine Work**

If you're on a Mac Mini, install Ollama and run a local model for free:

\`\`\`
ollama pull llama3.2
openclaw config set model ollama/llama3.2
\`\`\`

Local models handle simple tasks well: reminders, basic lookups, file organization, quick answers. Route only tasks that need deep reasoning to cloud APIs.

**Strategy 4: Reduce Agent Verbosity**

OpenClaw agents can be chatty in their reasoning. Trim the fat:

\`\`\`
openclaw config set max-reasoning-tokens 2048
openclaw config set summarize-context true
\`\`\`

This caps how much the agent "thinks" per step and compresses conversation history — fewer tokens sent, lower costs.

**Strategy 5: Monitor and Alert**

Set up a daily cost check:

\`\`\`
openclaw config set daily-cost-alert 0.50
\`\`\`

If spending exceeds $0.50 in a day, OpenClaw notifies you through your connected messaging app.

**Realistic Monthly Budget:**

| Setup | Hosting | API Costs | Total |
|-------|---------|-----------|-------|
| VPS + Haiku only | $4 | $2-5 | **$6-9/month** |
| VPS + Haiku + Sonnet fallback | $4 | $5-15 | **$9-19/month** |
| Mac Mini + Ollama local | $0 (owned) | $0-5 | **$0-5/month** |
| Mac Mini + Haiku cloud | $0 (owned) | $2-8 | **$2-8/month** |`,
        analogy: "Managing OpenClaw costs is like managing a phone plan. You wouldn't use international roaming for every call when Wi-Fi calling is free. Use local models (Wi-Fi) for everyday tasks and cloud APIs (roaming) only when you need the premium connection.",
        tip: "Check your Anthropic or OpenAI usage dashboard weekly for the first month. Most people find a stable usage pattern within 2-3 weeks. Once you know your pattern, set your spending cap 20% above your average."
      },
      {
        title: "6.8 Security: Locking Down Your Agent",
        content: `OpenClaw has full access to your machine. It can read files, run commands, and control a browser. That's what makes it powerful — and what makes security non-negotiable.

**The Real Risks:**

• **Prompt injection** — Someone sends your agent a message containing hidden instructions (via email, chat, or a webpage). The agent follows the hidden instructions instead of your intent
• **Data exposure** — Your agent reads a file containing API keys or passwords and includes them in a response
• **Unintended actions** — A poorly-worded request causes the agent to delete files, send messages, or modify data you didn't intend

**These aren't hypothetical.** Security researchers have demonstrated prompt injection attacks that extract .env files and SSH keys from OpenClaw instances running without guardrails.

**Layer 1: Run in Docker (Required for VPS, Recommended for Mac)**

Docker containers isolate OpenClaw from your host system:

\`\`\`
openclaw config set runtime docker
openclaw config set docker-volumes /safe/data:/data
\`\`\`

This means OpenClaw can only access files you explicitly mount into the container — not your entire filesystem.

**Layer 2: Restrict File Access**

Even within Docker, limit what directories OpenClaw can reach:

\`\`\`
openclaw config set allowed-paths /data,/projects
openclaw config set blocked-paths /secrets,/.ssh,/.env
\`\`\`

**Layer 3: Require Confirmation for Risky Actions**

Configure OpenClaw to ask before executing destructive commands:

\`\`\`
openclaw config set confirm-actions delete,send,push,deploy
\`\`\`

When the agent tries to delete a file, send a message on your behalf, push code, or deploy something, it pauses and asks you first.

**Layer 4: Separate API Keys**

Create a dedicated API key for OpenClaw with limited permissions — don't reuse your personal key:

• **Anthropic** → Console → API Keys → Create new key with usage limits
• **OpenAI** → Dashboard → API Keys → Create new project key

If the key is ever compromised, your personal account stays safe.

**Layer 5: Network Restrictions (Advanced)**

On a VPS, use firewall rules to limit what your agent can connect to:

\`\`\`
ufw allow ssh
ufw allow out to any port 443
ufw default deny incoming
ufw enable
\`\`\`

This allows HTTPS traffic (for API calls) and SSH (for your management) while blocking everything else.

**Security Checklist:**

| Action | Priority | Done? |
|--------|----------|-------|
| Run in Docker container | Critical | |
| Set allowed/blocked file paths | Critical | |
| Use a dedicated API key with spending limits | High | |
| Enable confirmation for destructive actions | High | |
| Keep OpenClaw updated (\`openclaw update\`) | High | |
| Set up firewall rules (VPS) | Medium | |
| Review agent activity logs weekly | Medium | |
| Disable integrations you don't use | Low | |

**One more thing:** Update OpenClaw regularly. The project moves fast, and security patches ship frequently:

\`\`\`
openclaw update
\`\`\``,
        analogy: "Giving OpenClaw unrestricted access to your machine is like handing a new employee the master key to every office on day one. Instead, give them a badge that opens the rooms they need, require approval for sensitive areas, and review the access logs. Trust, but verify.",
        tip: "The single most important security step is running in Docker. It takes one config change and prevents the worst-case scenarios. If you do nothing else from this list, do that."
      }
    ]
  },
  appendix: {
    title: "Appendix: Project Startup System",
    subtitle: "Professional Project Documentation",
    icon: FileText,
    sections: [
      {
        title: "The Core Concept",
        content: `As you build more complex projects with Claude Code, you'll need a system to keep track of everything. This is the **Project Startup System** — a documentation structure that helps Claude understand your project and helps you maintain continuity across sessions.`,
        analogy: "Think of this like a hospital shift change log. When nurses change shifts, they don't just say 'good luck!' — they hand over detailed notes about each patient. Since Claude doesn't remember between sessions, your documentation files serve as that handover."
      },
      {
        title: "The 4 Core Files",
        content: `| File | Purpose | Analogy |
|------|---------|---------|
| **CONTEXT.md** | Domain knowledge, terminology, integrations, business rules | Internal wiki page |
| **TASKS.md** | Active task tracking (TODO, IN PROGRESS, DONE) | Trello board in markdown |
| **PLAN.md** | Strategic planning for complex features | Architectural blueprint |
| **PROGRESS.md** | Session-by-session work log | Pilot's flight log |

**File Creation Priority:**
1. CONTEXT.md — Establish domain knowledge first
2. TASKS.md — Define what needs to be done
3. PLAN.md — Think through complex work (as needed)
4. PROGRESS.md — Start logging sessions`
      },
      {
        title: "Trigger Phrases",
        content: `Once you set up your global CLAUDE.md file, you can use natural phrases to manage your documentation:

| Say This... | Claude Does This |
|-------------|------------------|
| "wrap up" / "end session" / "done for today" | Updates PROGRESS.md |
| "update tasks" / "mark done" / "what's next" | Updates TASKS.md |
| "let's plan" / "think through" | Creates/updates PLAN.md |
| "update context" / "add to glossary" | Updates CONTEXT.md |
| "initialize project" / "set up docs" | Creates all missing files |`
      },
      {
        title: "Configuration Hierarchy",
        content: `You can set instructions at different levels:

| Level | Location | Scope |
|-------|----------|-------|
| **Global** | \`~/.claude/CLAUDE.md\` | All projects on your machine |
| **Project** | \`./CLAUDE.md\` | Just that specific project |
| **Local** | \`./CLAUDE.local.md\` | Personal overrides (not shared) |

**Quick Start Command:**

\`\`\`
# Navigate to your project folder
cd ~/Projects/my-new-project

# Start Claude Code
claude

# In Claude Code, say:
"Initialize project documentation — create CONTEXT.md, TASKS.md, 
and PROGRESS.md by analyzing the existing codebase."
\`\`\`

Claude will analyze your project and create all the documentation files automatically!`
      }
    ]
  }
};

// ==================== GLOSSARY DATA ====================
const glossaryTerms = [
  { term: "Agent", definition: "A specialized Claude configuration for specific tasks with particular instructions, personality, or capabilities.", category: "Claude Code" },
  { term: "Agent Teams", definition: "An experimental feature that coordinates multiple Claude Code instances working together — one lead session spawns teammates that work independently, communicate directly, and share a task list.", category: "Claude Code" },
  { term: "Artifact", definition: "A separate panel where Claude creates documents, code, diagrams, or interactive tools that you can copy, download, or share.", category: "Claude.ai" },
  { term: "cd", definition: "Change Directory - Terminal command to navigate into a folder. Use 'cd ..' to go up one level.", category: "Terminal" },
  { term: "Claude Code", definition: "An AI-powered development tool that runs in your terminal and can create actual applications and files.", category: "Tools" },
  { term: "Claude.ai", definition: "Anthropic's web-based AI assistant for thinking, writing, and problem-solving.", category: "Tools" },
  { term: "CLAUDE.md", definition: "A markdown file containing project-specific instructions that Claude reads automatically.", category: "Project System" },
  { term: "Compact", definition: "The /compact command summarizes your conversation to save context space while preserving key information.", category: "Claude Code" },
  { term: "Context", definition: "Claude's working memory - the information it has about your project and conversation. More relevant context = better output.", category: "Claude Code" },
  { term: "CONTEXT.md", definition: "Documentation file for domain knowledge, terminology, integrations, and business rules.", category: "Project System" },
  { term: "Fork", definition: "The /fork command creates a branch to try something without affecting your main work.", category: "Claude Code" },
  { term: "Hooks", definition: "Automatic triggers that run when certain events happen (like before/after Claude edits a file).", category: "Claude Code" },
  { term: "ls", definition: "List - Terminal command to show files and folders in your current directory.", category: "Terminal" },
  { term: "MCP", definition: "Model Context Protocol - Lets Claude connect to external services like databases, APIs, and other tools.", category: "Claude Code" },
  { term: "mkdir", definition: "Make Directory - Terminal command to create a new folder.", category: "Terminal" },
  { term: "n8n", definition: "A workflow automation tool (pronounced 'nodemation') that connects apps and services to create automated processes.", category: "Tools" },
  { term: "Node", definition: "In n8n, an individual building block that does one thing in a workflow.", category: "n8n" },
  { term: "Operator", definition: "Someone who builds AI-powered systems that work automatically, rather than just prompting AI for answers.", category: "General" },
  { term: "PLAN.md", definition: "Documentation file for strategic planning of complex features - like an architectural blueprint.", category: "Project System" },
  { term: "PROGRESS.md", definition: "Documentation file for session-by-session work logs - like a pilot's flight log.", category: "Project System" },
  { term: "Prompt", definition: "The instructions or questions you give to an AI. Better prompts = better outputs.", category: "General" },
  { term: "pwd", definition: "Print Working Directory - Terminal command to show your current location in the folder structure.", category: "Terminal" },
  { term: "Skills", definition: "Reusable capabilities you can give Claude, like knowing how to use a specific framework.", category: "Claude Code" },
  { term: "TASKS.md", definition: "Documentation file for active task tracking (TODO, IN PROGRESS, DONE) - like a Trello board in markdown.", category: "Project System" },
  { term: "Terminal", definition: "A text-based interface for interacting with your computer by typing commands.", category: "General" },
  { term: "Tools", definition: "Actions Claude can take - reading files, writing code, running commands, searching the web.", category: "Claude Code" },
  { term: "Trigger", definition: "In n8n, what starts a workflow - can be a webhook, schedule, or event.", category: "n8n" },
  { term: "Workflow", definition: "In n8n, a complete automation from trigger to final action.", category: "n8n" },
  { term: "A/B Test", definition: "An experiment comparing two versions of a page, email, or ad to determine which performs better based on statistical significance.", category: "Marketing" },
  { term: "CRO", definition: "Conversion Rate Optimization — the practice of increasing the percentage of visitors who take a desired action (sign up, purchase, etc.).", category: "Marketing" },
  { term: "CTA", definition: "Call to Action — a button, link, or prompt that tells the visitor what to do next ('Start Free Trial', 'Get Started').", category: "Marketing" },
  { term: "Marketing Skills", definition: "A collection of 25 AI agent skills for Claude Code that cover the full marketing funnel — from copywriting and SEO to paid ads and growth engineering.", category: "Marketing" },
  { term: "Product Marketing Context", definition: "A shared reference document containing your positioning, audience, voice, and competitive landscape that all marketing skills read before generating output.", category: "Marketing" },
  { term: "Programmatic SEO", definition: "Creating many optimized pages from templates to capture long-tail search traffic at scale (e.g., '[Product] vs [Competitor]' pages).", category: "Marketing" },
  { term: "Schema Markup", definition: "Structured data (JSON-LD) added to web pages that tells search engines what the content is about, enabling rich results like star ratings and FAQ dropdowns.", category: "Marketing" },
  { term: "UTM Parameters", definition: "Tags added to URLs (utm_source, utm_medium, utm_campaign) that track where traffic comes from in your analytics.", category: "Marketing" },
  { term: "Referral Program", definition: "A system where existing customers are incentivized to refer new customers, creating a viral growth loop.", category: "Marketing" },
  { term: "MCP Integration", definition: "When a tool has a Model Context Protocol server, allowing Claude to interact with it directly through API calls without manual setup.", category: "Marketing" },
  { term: "OpenClaw", definition: "An open-source personal AI agent that runs on your own hardware, connects to messaging apps (WhatsApp, Telegram, iMessage, etc.), and autonomously executes real-world tasks 24/7.", category: "OpenClaw" },
  { term: "ClawHub", definition: "Community marketplace for OpenClaw skills — pre-built integrations and capabilities that extend what your agent can do.", category: "OpenClaw" },
  { term: "Ollama", definition: "Open-source tool for running AI language models locally on your machine. Used with OpenClaw to reduce or eliminate cloud API costs.", category: "OpenClaw" },
  { term: "VPS", definition: "Virtual Private Server — a cloud-hosted computer you rent by the month. A cost-effective alternative to buying hardware for running OpenClaw 24/7.", category: "OpenClaw" },
  { term: "Docker", definition: "Containerization tool that isolates applications from the host system. Critical for running OpenClaw securely by restricting file and network access.", category: "OpenClaw" },
  { term: "Prompt Injection", definition: "A security attack where hidden instructions in emails, messages, or web pages trick an AI agent into performing unintended actions.", category: "OpenClaw" },
  { term: "Model Routing", definition: "Strategy of sending simple tasks to cheap/free AI models and only using expensive models for complex reasoning — the key to keeping OpenClaw costs under $10/month.", category: "OpenClaw" }
];

// ==================== COMPONENTS ====================

const TipBox = ({ type = "tip", title, children }) => {
  const styles = {
    tip: { bg: "bg-emerald-900/30", border: "border-emerald-500/50", icon: <Lightbulb size={18} className="text-emerald-400" /> },
    warning: { bg: "bg-amber-900/30", border: "border-amber-500/50", icon: <AlertTriangle size={18} className="text-amber-400" /> },
    analogy: { bg: "bg-purple-900/30", border: "border-purple-500/50", icon: <Target size={18} className="text-purple-400" /> }
  };
  const style = styles[type];
  
  return (
    <div className={`${style.bg} ${style.border} border rounded-lg p-4 my-4`}>
      <div className="flex items-center gap-2 font-semibold mb-2">
        {style.icon}
        <span>{title}</span>
      </div>
      <div className="text-gray-300 text-sm">{children}</div>
    </div>
  );
};

const CodeBlock = ({ children }) => (
  <pre className="bg-gray-950 border border-gray-700 rounded-lg p-4 my-4 overflow-x-auto">
    <code className="text-teal-400 font-mono text-sm whitespace-pre">{children}</code>
  </pre>
);

const ContentRenderer = ({ content, analogy, tip }) => {
  const renderContent = (text) => {
    const lines = text.split('\n');
    const elements = [];
    let inTable = false;
    let tableRows = [];
    let inCodeBlock = false;
    let codeContent = [];
    
    lines.forEach((line, idx) => {
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          elements.push(<CodeBlock key={`code-${idx}`}>{codeContent.join('\n')}</CodeBlock>);
          codeContent = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }
      
      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }
      
      if (line.includes('|') && line.trim().startsWith('|')) {
        if (!inTable) {
          inTable = true;
          tableRows = [];
        }
        if (!line.includes('---')) {
          tableRows.push(line.split('|').filter(cell => cell.trim()).map(cell => cell.trim()));
        }
        return;
      } else if (inTable) {
        elements.push(
          <div key={`table-${idx}`} className="overflow-x-auto my-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800">
                  {tableRows[0]?.map((cell, i) => (
                    <th key={i} className="border border-gray-600 px-3 py-2 text-left font-semibold">{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.slice(1).map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-gray-800/50">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="border border-gray-700 px-3 py-2">
                        {cell.startsWith('`') ? <code className="bg-gray-800 px-1 rounded text-teal-400">{cell.replace(/`/g, '')}</code> : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        inTable = false;
        tableRows = [];
      }
      
      if (line.trim()) {
        const formatted = line
          .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
          .replace(/\*(.+?)\*/g, '<em>$1</em>')
          .replace(/`(.+?)`/g, '<code class="bg-gray-800 px-1 rounded text-teal-400 text-sm">$1</code>');
        
        if (line.startsWith('•')) {
          elements.push(
            <div key={idx} className="flex gap-2 ml-4 my-1">
              <span className="text-teal-400">•</span>
              <span dangerouslySetInnerHTML={{ __html: formatted.substring(1) }} />
            </div>
          );
        } else if (/^\d+\./.test(line)) {
          const num = line.match(/^(\d+)\./)[1];
          elements.push(
            <div key={idx} className="flex gap-2 ml-4 my-1">
              <span className="text-teal-400 font-semibold min-w-[1.5rem]">{num}.</span>
              <span dangerouslySetInnerHTML={{ __html: formatted.replace(/^\d+\.\s*/, '') }} />
            </div>
          );
        } else {
          elements.push(<p key={idx} className="my-2" dangerouslySetInnerHTML={{ __html: formatted }} />);
        }
      }
    });
    
    if (inTable && tableRows.length > 0) {
      elements.push(
        <div key="table-end" className="overflow-x-auto my-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-800">
                {tableRows[0]?.map((cell, i) => (
                  <th key={i} className="border border-gray-600 px-3 py-2 text-left font-semibold">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-gray-800/50">
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="border border-gray-700 px-3 py-2">
                      {cell.startsWith('`') ? <code className="bg-gray-800 px-1 rounded text-teal-400">{cell.replace(/`/g, '')}</code> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    
    return elements;
  };
  
  return (
    <div className="text-gray-300">
      {renderContent(content)}
      {analogy && <TipBox type="analogy" title="Analogy">{analogy}</TipBox>}
      {tip && <TipBox type="tip" title="Pro Tip">{tip}</TipBox>}
    </div>
  );
};

const ProgressBar = ({ current, total }) => (
  <div className="flex items-center gap-3">
    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-teal-500 to-teal-400 transition-all duration-500"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
    <span className="text-sm text-gray-400 whitespace-nowrap">{current}/{total}</span>
  </div>
);

// ==================== MAIN APP ====================
export default function OperatorAcademy() {
  const location = useLocation();
  const [currentModule, setCurrentModule] = useState('introduction');
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState({});
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [activeTab, setActiveTab] = useState('course');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [glossarySearch, setGlossarySearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const modules = Object.keys(courseData);
  const currentModuleData = courseData[currentModule];
  const totalSections = Object.values(courseData).reduce((acc, m) => acc + m.sections.length, 0);
  const completedCount = Object.values(completedSections).filter(Boolean).length;

  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem('operator-academy-notes');
      const savedProgress = localStorage.getItem('operator-academy-progress');
      const savedPosition = localStorage.getItem('operator-academy-position');

      if (savedNotes) setNotes(JSON.parse(savedNotes));
      if (savedProgress) setCompletedSections(JSON.parse(savedProgress));

      const hash = location.hash.replace('#', '');
      if (hash && courseData[hash]) {
        setCurrentModule(hash);
        setCurrentSection(0);
      } else if (savedPosition) {
        const pos = JSON.parse(savedPosition);
        setCurrentModule(pos.module);
        setCurrentSection(pos.section);
      }
    } catch (e) {
      console.log('Loading fresh state');
    }
    setIsLoading(false);
  }, []);
  
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('operator-academy-progress', JSON.stringify(completedSections));
      localStorage.setItem('operator-academy-position', JSON.stringify({ module: currentModule, section: currentSection }));
    }
  }, [completedSections, currentModule, currentSection, isLoading]);
  
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('operator-academy-notes', JSON.stringify(notes));
    }
  }, [notes, isLoading]);
  
  const handleNext = () => {
    const sectionKey = `${currentModule}-${currentSection}`;
    setCompletedSections(prev => ({ ...prev, [sectionKey]: true }));
    
    if (currentSection < currentModuleData.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      const currentIdx = modules.indexOf(currentModule);
      if (currentIdx < modules.length - 1) {
        setCurrentModule(modules[currentIdx + 1]);
        setCurrentSection(0);
      }
    }
  };
  
  const handlePrev = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    } else {
      const currentIdx = modules.indexOf(currentModule);
      if (currentIdx > 0) {
        const prevModule = modules[currentIdx - 1];
        setCurrentModule(prevModule);
        setCurrentSection(courseData[prevModule].sections.length - 1);
      }
    }
  };
  
  const addNote = () => {
    if (newNote.trim()) {
      const note = {
        id: Date.now(),
        text: newNote,
        module: currentModuleData.title,
        section: currentModuleData.sections[currentSection].title,
        timestamp: new Date().toLocaleString()
      };
      setNotes([note, ...notes]);
      setNewNote('');
    }
  };
  
  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };
  
  const filteredGlossary = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.definition.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    item.category.toLowerCase().includes(glossarySearch.toLowerCase())
  );
  
  const isFirstSection = currentModule === modules[0] && currentSection === 0;
  const isLastSection = currentModule === modules[modules.length - 1] && 
    currentSection === courseData[modules[modules.length - 1]].sections.length - 1;
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-teal-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your progress...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div className={`fixed lg:static inset-y-0 left-0 z-40 w-72 bg-gray-950 border-r border-gray-800 transform transition-transform duration-300 flex flex-col ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 flex-1 overflow-y-auto">
          <h1 className="text-xl font-bold text-teal-400 mb-1">OPERATOR ACADEMY</h1>
          <p className="text-sm text-gray-500 mb-6">Course 1: Foundations</p>
          
          <ProgressBar current={completedCount} total={totalSections} />
          
          <nav className="mt-6 space-y-1">
            {modules.map((moduleKey) => {
              const module = courseData[moduleKey];
              const Icon = module.icon;
              const isActive = currentModule === moduleKey;
              const moduleCompleted = module.sections.every((_, sIdx) => completedSections[`${moduleKey}-${sIdx}`]);
              
              return (
                <div key={moduleKey}>
                  <button
                    onClick={() => { setCurrentModule(moduleKey); setCurrentSection(0); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${isActive ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:bg-gray-800'}`}
                  >
                    <Icon size={18} />
                    <span className="flex-1 text-sm truncate">{module.title.replace(/Module \d+: /, '').replace('Appendix: ', '')}</span>
                    {moduleCompleted && <Check size={16} className="text-teal-400 flex-shrink-0" />}
                  </button>
                  {isActive && (
                    <div className="ml-8 mt-1 space-y-1">
                      {module.sections.map((section, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => { setCurrentSection(sIdx); setSidebarOpen(false); }}
                          className={`w-full flex items-center gap-2 px-2 py-1 rounded text-left text-xs transition-colors ${currentSection === sIdx ? 'text-teal-400' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                          {completedSections[`${moduleKey}-${sIdx}`] ? (
                            <Check size={12} className="text-teal-400 flex-shrink-0" />
                          ) : (
                            <Circle size={12} className="flex-shrink-0" />
                          )}
                          <span className="truncate">{section.title}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-800 bg-gray-950">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('course')}
              className={`flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs transition-colors ${activeTab === 'course' ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:bg-gray-800'}`}
            >
              <BookOpen size={14} />
              Course
            </button>
            <button
              onClick={() => setActiveTab('glossary')}
              className={`flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs transition-colors ${activeTab === 'glossary' ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:bg-gray-800'}`}
            >
              <List size={14} />
              Glossary
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs transition-colors ${activeTab === 'notes' ? 'bg-teal-500/20 text-teal-400' : 'text-gray-400 hover:bg-gray-800'}`}
            >
              <StickyNote size={14} />
              Notes{notes.length > 0 && ` (${notes.length})`}
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-6 lg:p-8 pb-24">
          {activeTab === 'course' && (
            <>
              <div className="mb-8 pt-8 lg:pt-0">
                <div className="flex items-center gap-3 text-teal-400 mb-2">
                  {React.createElement(currentModuleData.icon, { size: 24 })}
                  <span className="text-sm uppercase tracking-wider">
                    {currentModule === 'introduction' ? 'Start Here' : 
                     currentModule === 'appendix' ? 'Reference' : 
                     `Module ${modules.indexOf(currentModule)}`}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">{currentModuleData.title}</h2>
                {currentModuleData.subtitle && (
                  <p className="text-lg lg:text-xl text-teal-400 mt-1">{currentModuleData.subtitle}</p>
                )}
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-5 lg:p-8 mb-8">
                <h3 className="text-lg lg:text-xl font-semibold mb-4">
                  {currentModuleData.sections[currentSection].title}
                </h3>
                <ContentRenderer 
                  content={currentModuleData.sections[currentSection].content}
                  analogy={currentModuleData.sections[currentSection].analogy}
                  tip={currentModuleData.sections[currentSection].tip}
                />
              </div>
              
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={handlePrev}
                  disabled={isFirstSection}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isFirstSection ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                >
                  <ChevronLeft size={20} />
                  <span className="hidden sm:inline">Previous</span>
                </button>
                
                <span className="text-sm text-gray-500 text-center">
                  {currentSection + 1} / {currentModuleData.sections.length}
                </span>
                
                <button
                  onClick={handleNext}
                  disabled={isLastSection}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isLastSection ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-teal-600 text-white hover:bg-teal-500'}`}
                >
                  <span className="hidden sm:inline">{isLastSection ? 'Complete!' : 'Next'}</span>
                  <span className="sm:hidden">{isLastSection ? '✓' : 'Next'}</span>
                  {!isLastSection && <ChevronRight size={20} />}
                </button>
              </div>
            </>
          )}
          
          {activeTab === 'glossary' && (
            <div className="pt-8 lg:pt-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Glossary</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input
                    type="text"
                    placeholder="Search terms..."
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                {filteredGlossary.map((item, idx) => (
                  <div key={idx} className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-teal-400">{item.term}</h3>
                        <p className="text-gray-300 text-sm mt-1">{item.definition}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-400 whitespace-nowrap flex-shrink-0">
                        {item.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'notes' && (
            <div className="pt-8 lg:pt-0">
              <h2 className="text-2xl font-bold mb-4">My Notes</h2>
              
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder={`Add a note about "${currentModuleData.sections[currentSection].title}"...`}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-teal-500 resize-none"
                  rows={3}
                />
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-500">
                    Notes saved automatically
                  </span>
                  <button
                    onClick={addNote}
                    disabled={!newNote.trim()}
                    className="flex items-center gap-2 px-4 py-2 bg-teal-600 rounded-lg hover:bg-teal-500 disabled:bg-gray-700 disabled:text-gray-500 transition-colors"
                  >
                    <Plus size={16} />
                    Add Note
                  </button>
                </div>
              </div>
              
              {notes.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <StickyNote size={48} className="mx-auto mb-4 opacity-50" />
                  <p>No notes yet. Start taking notes as you learn!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {notes.map(note => (
                    <div key={note.id} className="bg-gray-800/50 rounded-lg p-4">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-200 whitespace-pre-wrap break-words">{note.text}</p>
                          <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-500">
                            <span className="truncate max-w-[150px]">{note.module}</span>
                            <span>•</span>
                            <span className="truncate max-w-[150px]">{note.section}</span>
                            <span>•</span>
                            <span>{note.timestamp}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => deleteNote(note.id)}
                          className="p-2 text-gray-500 hover:text-red-400 hover:bg-gray-700 rounded transition-colors flex-shrink-0"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
