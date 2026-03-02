import { Home, Cpu, Terminal, Workflow, Link2, TrendingUp, Bot, FileText } from 'lucide-react';

export const moduleRoutes = [
  { key: 'introduction', slug: '', label: 'Start Here', navLabel: 'What is an Operator?' },
  { key: 'module1', slug: 'claude-ai', label: 'Module 1: Claude.ai', navLabel: 'Claude.ai' },
  { key: 'module2', slug: 'claude-code', label: 'Module 2: Claude Code', navLabel: 'Claude Code' },
  { key: 'module3', slug: 'n8n', label: 'Module 3: n8n', navLabel: 'n8n' },
  { key: 'module4', slug: 'putting-it-together', label: 'Module 4: Building Your First Tool', navLabel: 'Building Your First Tool' },
  { key: 'module5', slug: 'marketing', label: 'Module 5: Marketing from Zero', navLabel: 'Marketing from Zero' },
  { key: 'module6', slug: 'openclaw', label: 'Module 6: OpenClaw', navLabel: 'OpenClaw' },
  { key: 'appendix', slug: 'project-system', label: 'Appendix: Project Startup System', navLabel: 'Project Startup System' },
];

export const courseData = {
  introduction: {
    title: "Introduction: What is an 'Operator'?",
    icon: Home,
    sections: [
      {
        title: "Welcome to Operator Academy",
        content: `Before we dive into the tools, let's establish what we're building toward.

Most people "prompt" AI \u2014 they ask it questions and get answers. An **Operator** builds AI-powered systems that work without constant manual input.`,
        analogy: "Think of the difference between someone who orders food on DoorDash versus someone who owns the restaurant. Both get food, but one has built something that generates value repeatedly."
      },
      {
        title: "The Operator Stack",
        content: `In this course, you'll learn three core tools that work together:

\u2022 **Claude.ai** \u2014 Your AI thinking partner for brainstorming, writing, and problem-solving

\u2022 **Claude Code** \u2014 Your AI builder that creates actual applications and tools

\u2022 **n8n** \u2014 Your automation engine that connects everything and runs workflows automatically

By the end of this course, you'll be able to go from an idea to a working AI-powered tool \u2014 without writing a single line of code yourself.`
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
        content: `Claude.ai isn't just a chatbot \u2014 it's a multi-purpose thinking tool.

**Research & Analysis**
\u2022 Summarize long documents, articles, or reports
\u2022 Compare different options or approaches
\u2022 Extract key insights from data

**Writing & Communication**
\u2022 Draft emails, proposals, and documentation
\u2022 Edit and improve existing content
\u2022 Translate between languages

**Problem-Solving**
\u2022 Brainstorm solutions to challenges
\u2022 Think through complex decisions
\u2022 Debug issues in your processes`,
        analogy: "Claude.ai is like having a brilliant research assistant who never sleeps, never gets annoyed by questions, and can help you think through any problem."
      },
      {
        title: "1.3 Understanding Artifacts",
        content: `When Claude creates an **Artifact**, it appears in a separate panel. This is useful because:

\u2022 You can see the full output without scrolling through chat
\u2022 You can copy, download, or share the artifact directly
\u2022 Interactive artifacts (like calculators or tools) actually work
\u2022 Claude can iterate on the artifact based on your feedback

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

\u2022 **Role:** Tell Claude who it should be ("Act as an expert copywriter")
\u2022 **Context:** Provide background information
\u2022 **Task:** Be specific about what you want
\u2022 **Format:** Describe how you want the output structured
\u2022 **Examples:** Show what good output looks like`,
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
        content: `Claude Code runs in your computer's **Terminal** (also called Command Line). Don't worry \u2014 we'll walk through everything step by step.

**Opening the Terminal:**
\u2022 **Mac:** Press Cmd + Space, type "Terminal", press Enter
\u2022 **Windows:** Press Win key, type "Command Prompt" or "PowerShell", press Enter

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
  \u2514\u2500\u2500 Projects/             (A folder for all your work)
       \u2514\u2500\u2500 my-first-app/    (Your specific project)
            \u251c\u2500\u2500 index.html  (A file)
            \u251c\u2500\u2500 style.css   (Another file)
            \u2514\u2500\u2500 scripts/    (A subfolder)
                 \u2514\u2500\u2500 app.js (A file inside subfolder)
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

This will open a browser window where you can authenticate with your Claude account.`,
        installBanner: { color: 'purple', link: '/tools/install', text: 'Install the Workflow', labelText: 'Quick Start' }
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
Context is like Claude's working memory. The more context Claude has, the better it understands your project. But there's a limit \u2014 like a desk that can only hold so many papers.

**Tools**
Tools are actions Claude can take \u2014 reading files, writing code, running commands, searching the web. When you give Claude a task, it automatically uses the right tools.

**Agents**
Agents are specialized Claude configurations for specific tasks. You can create custom agents that have particular instructions, personality, or capabilities.

**Hooks**
Hooks are automatic triggers that run when certain events happen (like before/after Claude edits a file). Think of them as automated quality control.

**MCP (Model Context Protocol)**
MCP lets Claude connect to external services \u2014 databases, APIs, other tools. It's how Claude can interact with the broader world beyond just your project files.

**Skills**
Skills are reusable capabilities you can give Claude \u2014 like knowing how to use a specific framework or follow certain coding standards.`,
        analogy: "Imagine you're working with a consultant who has amnesia. If you only tell them about today's task, they'll help \u2014 but if you also remind them about the project history, goals, and constraints, they'll give much better advice. That's context."
      },
      {
        title: "2.6 Context and Output Quality",
        content: `**The golden rule:** More relevant context = higher quality output.

**Ways to provide context:**
\u2022 **CLAUDE.md file:** Project-specific instructions Claude reads automatically
\u2022 **Conversation history:** What you've discussed in the current session
\u2022 **File contents:** Claude can read any file in your project
\u2022 **Explicit instructions:** What you tell Claude in your messages

**Managing context:**
\u2022 Use \`/context\` to see how full your context is
\u2022 Use \`/compact\` when context is getting full but you want to continue
\u2022 Use \`/clear\` when starting a new task (keeps settings, clears conversation)`,
        tip: "Claude Code works best when it's opened inside a specific project folder. This way, it can see all your project files and make changes to them directly."
      },
      {
        title: "2.7 Agent Teams (Experimental)",
        content: `Agent Teams let you coordinate **multiple Claude Code instances** working together on the same project. One session acts as the **team lead**, while other sessions called **teammates** work independently in their own context windows.

**Why Agent Teams?**
When a task benefits from parallel exploration \u2014 like reviewing code from multiple angles, building independent modules, or investigating competing debugging hypotheses \u2014 a single Claude session can become a bottleneck. Agent Teams solve this by splitting work across multiple sessions that can communicate directly with each other.

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
| **Token Cost** | Lower | Higher \u2014 each teammate is a separate instance |

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
\u2022 **Research and review** \u2014 Multiple teammates investigate different aspects simultaneously
\u2022 **New modules or features** \u2014 Each teammate owns a separate piece without conflicts
\u2022 **Debugging with competing hypotheses** \u2014 Test different theories in parallel
\u2022 **Cross-layer coordination** \u2014 Frontend, backend, and tests each owned by a different teammate

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

\u2022 **No session resumption** \u2014 \`/resume\` and \`/rewind\` do not restore in-process teammates
\u2022 **Task status can lag** \u2014 Teammates sometimes fail to mark tasks as completed, blocking dependent tasks
\u2022 **One team per session** \u2014 Clean up the current team before starting a new one
\u2022 **No nested teams** \u2014 Teammates cannot spawn their own teams
\u2022 **Lead is fixed** \u2014 You can't promote a teammate to lead or transfer leadership
\u2022 **Permissions set at spawn** \u2014 All teammates inherit the lead's permission mode
\u2022 **Split panes require tmux or iTerm2** \u2014 The default in-process mode works in any terminal, but split-pane mode isn't supported in VS Code terminal, Windows Terminal, or Ghostty`,
        analogy: "Think of Agent Teams like a war room with specialists. The team lead is the general assigning missions, and each teammate is a specialist working independently on their piece \u2014 the sniper scouts, the engineer builds, the medic patches things up. They can radio each other directly, but the general keeps the big picture.",
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
\u2022 When a new lead comes in \u2192 Send them a personalized email
\u2022 When a form is submitted \u2192 Add data to a spreadsheet \u2192 Notify your team
\u2022 Every morning \u2192 Pull reports \u2192 Send summary to Slack
\u2022 When a customer calls \u2192 Transcribe the call \u2192 Analyze with AI \u2192 Update CRM`,
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
        tip: "n8n offers both cloud-hosted and self-hosted options. Start with cloud \u2014 it's easier and you can always migrate later. Self-hosting gives more control but requires technical setup."
      },
      {
        title: "3.3 How n8n Works",
        content: `**Key Concepts:**

\u2022 **Workflows:** The complete automation from trigger to final action
\u2022 **Nodes:** Individual building blocks (each does one thing)
\u2022 **Triggers:** What starts the workflow (webhook, schedule, event)
\u2022 **Connections:** Lines between nodes showing data flow

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
\u2022 Describe your problem or goal
\u2022 Brainstorm solutions with Claude
\u2022 Get Claude to help you plan the technical approach

**2. Build (Claude Code)**
\u2022 Create your project folder
\u2022 Tell Claude Code what to build
\u2022 Iterate and refine until it works

**3. Automate (n8n)**
\u2022 Create workflows that trigger your tool
\u2022 Connect to other services (CRM, email, etc.)
\u2022 Set it to run automatically

**4. Monitor & Improve**
\u2022 Watch your automation work
\u2022 Identify improvements
\u2022 Iterate using the same cycle`
      },
      {
        title: "Example: Lead Response System",
        content: `Let's walk through a real example \u2014 building an automated lead response system:

**Step 1: Ideate with Claude.ai**
"I want to automatically respond to leads with personalized emails based on their inquiry type."

Claude helps you:
\u2022 Define the different inquiry types
\u2022 Draft email templates for each type
\u2022 Plan the data flow

**Step 2: Build with Claude Code**
"Create a Node.js script that takes lead data and generates a personalized email using the Claude API."

Claude Code creates:
\u2022 The script with API integration
\u2022 Error handling
\u2022 Logging

**Step 3: Automate with n8n**
\u2022 Trigger: Webhook receives new lead
\u2022 Action: Run your script
\u2022 Action: Send email via SendGrid
\u2022 Action: Update CRM with response status

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
        content: `Every business needs marketing, but most founders either can't afford an agency or don't know where to start. The **Marketing Skills** toolkit solves this by giving your AI operator stack 25 specialized marketing capabilities that cover the entire funnel \u2014 from getting discovered to converting visitors to turning customers into advocates.

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
        analogy: "Think of Marketing Skills like hiring a marketing team, except each 'team member' is a specialized AI skill. You have a copywriter, an SEO expert, a CRO analyst, a paid ads manager, and a growth engineer \u2014 all available instantly, working together through Claude Code.",
        tip: "Start by installing the full toolkit, then focus on the skills relevant to your current stage. Pre-launch businesses should prioritize copywriting, page-cro, and content-strategy. Post-launch, shift focus to analytics-tracking, ab-test-setup, and paid-ads.",
        installBanner: { color: 'teal', link: '/setup/marketing', text: 'Marketing Skills Setup Guide', labelText: 'Setup' }
      },
      {
        title: "5.2 Foundation: Your Marketing Context",
        content: `Before using any marketing skill, you need to establish your **Product Marketing Context** \u2014 a single reference document that every skill reads from. This is the most important step because it prevents you from repeating the same background information every time you switch between skills.

**Creating Your Context Document:**
Use the \`product-marketing-context\` skill to build this file. Tell Claude:

\`\`\`
"Create my product marketing context document"
\`\`\`

Claude will ask you about:

**1. Your Product**
\u2022 What does it do? (one sentence)
\u2022 Who is it for? (specific audience)
\u2022 What problem does it solve?
\u2022 How is it different from alternatives?

**2. Your Market**
\u2022 Who are your competitors?
\u2022 What's your pricing model?
\u2022 What stage are you at? (pre-launch, early, growing, scaling)

**3. Your Voice**
\u2022 What tone should marketing use? (professional, casual, technical, friendly)
\u2022 Are there words or phrases to always use or avoid?
\u2022 What's your brand personality?

**The Output \u2014 \`product-marketing-context.md\`:**
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
        analogy: "Your product marketing context is like a creative brief at an ad agency. Before any designer, writer, or strategist touches your brand, they read the brief. It ensures everyone is aligned \u2014 and for your AI marketing team, it ensures every skill speaks with one voice.",
        tip: "Revisit your context document quarterly. As your product evolves, your positioning should too. An outdated context document leads to marketing that doesn't match your current reality."
      },
      {
        title: "5.3 Copywriting & Landing Pages",
        content: `Your website is your 24/7 salesperson. The copy on it determines whether visitors become customers or bounce. Three skills work together here: **copywriting**, **copy-editing**, and **page-cro**.

**Step 1: Write High-Converting Copy (copywriting skill)**

The copywriting skill uses proven frameworks to generate copy for any page type:

**Headline Formulas That Work:**
\u2022 "{Achieve outcome} without {pain point}" \u2014 focuses on benefit + removes objection
\u2022 "{Category} for {audience}" \u2014 instant clarity about what you are
\u2022 "Stop {painful activity}. Start {desired outcome}." \u2014 contrast creates urgency

**Page Copy Structure:**
1. **Hero Section** \u2014 Headline + subhead + primary CTA
2. **Problem** \u2014 Describe the pain your audience feels
3. **Solution** \u2014 Show how you solve it
4. **Social Proof** \u2014 Testimonials, logos, numbers
5. **Features/Benefits** \u2014 What they get (focus on outcomes, not features)
6. **Objection Handling** \u2014 Address why someone might hesitate
7. **Final CTA** \u2014 Repeat the call to action

**Step 2: Polish and Tighten (copy-editing skill)**

After generating copy, run it through the copy-editing skill:
\u2022 Eliminates jargon and unnecessary words
\u2022 Improves clarity and readability
\u2022 Checks tone consistency against your brand voice
\u2022 Catches grammatical issues

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

\u2022 **form-cro** \u2014 Reduce form fields, add smart defaults, use conditional logic
\u2022 **signup-flow-cro** \u2014 Optimize the account creation and trial activation process
\u2022 **onboarding-cro** \u2014 Improve first-run experience to reduce churn
\u2022 **popup-cro** \u2014 Create exit-intent popups, lead magnets, and promotional overlays

**Operator Stack Workflow:**
1. Use **Claude.ai** to brainstorm your unique value proposition and messaging angles
2. Use **Claude Code** with the copywriting skill to generate page copy
3. Use **Claude Code** with page-cro to audit and improve the copy
4. Use **Claude Code** to build the actual landing page
5. Use **n8n** to set up form submissions and lead routing`,
        analogy: "Writing landing page copy without these skills is like performing surgery with a butter knife \u2014 you might get there eventually, but it won't be pretty. Each skill is a precision instrument: the copywriting skill writes, the editor sharpens, and the CRO analyst ensures it actually converts.",
        tip: "Always write copy for one specific person, not a vague audience. The copywriting skill works best when your product marketing context has a detailed ideal customer profile. 'Small business owners' is weak. 'Solo consultants earning $100-250K who spend 10+ hours/week on admin tasks' is powerful."
      },
      {
        title: "5.4 SEO & Organic Discovery",
        content: `Paid ads stop working when you stop paying. SEO builds compounding traffic that grows over time. Four skills cover the entire SEO strategy: **seo-audit**, **programmatic-seo**, **schema-markup**, and **competitor-alternatives**.

**Phase 1: Audit Your Current State (seo-audit skill)**

Before building anything new, understand where you stand. The seo-audit skill checks:

\u2022 **Technical SEO** \u2014 Site speed, mobile-friendliness, crawlability, Core Web Vitals
\u2022 **On-Page SEO** \u2014 Title tags, meta descriptions, heading structure, keyword usage
\u2022 **Indexation** \u2014 Are your pages showing up in Google at all?
\u2022 **Content Gaps** \u2014 What are competitors ranking for that you're missing?

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

\u2022 **SaaS product?** \u2192 Comparisons + Alternatives + Integrations
\u2022 **Local service?** \u2192 Locations + Glossary
\u2022 **Marketplace?** \u2192 Curation + Templates + Examples
\u2022 **Agency?** \u2192 Locations + Glossary + Personas

**Phase 3: Rich Results with Schema Markup (schema-markup skill)**

Schema markup tells Google exactly what your pages are about, unlocking rich results (star ratings, FAQ dropdowns, pricing info) in search:

\u2022 **Product pages** \u2192 Product schema with pricing and reviews
\u2022 **Blog posts** \u2192 Article schema with author and date
\u2022 **FAQ pages** \u2192 FAQ schema for dropdown results
\u2022 **How-to guides** \u2192 HowTo schema for step-by-step results

**Phase 4: Own Competitor Traffic (competitor-alternatives skill)**

Create comparison pages that capture people searching for your competitors:

\u2022 "[Competitor] vs [Your Product]" \u2014 Direct comparison
\u2022 "[Competitor] alternatives" \u2014 Position yourself as the top alternative
\u2022 "[Competitor] review" \u2014 Honest review that naturally leads to you

**Operator Stack Workflow:**
1. Use **Claude.ai** to research keywords and identify which playbooks match your market
2. Use **Claude Code** with seo-audit to analyze your current site
3. Use **Claude Code** with programmatic-seo to generate page templates at scale
4. Use **Claude Code** to build the pages and implement schema markup
5. Use **n8n** to automate content publication and indexing pings`,
        analogy: "SEO is like planting an orchard. Each page you publish is a tree. It takes time to grow, but once it does, it produces fruit (traffic) for years. Programmatic SEO is like using a planting machine instead of planting by hand \u2014 same orchard, 100x faster.",
        tip: "Don't try all 12 programmatic SEO playbooks at once. Pick the one with the highest search volume for your niche and build 20-50 pages. Measure results over 60-90 days, then expand to the next playbook."
      },
      {
        title: "5.5 Email & Content Marketing",
        content: `Social media rents you an audience. Email and content marketing build one that you own. Three skills cover this: **email-sequence**, **content-strategy**, and **social-content**.

**Email Marketing: Your Highest-ROI Channel**

The email-sequence skill designs complete automated flows. The key sequences every business needs:

**1. Welcome Sequence (3-7 emails)**
The most important sequence \u2014 it runs immediately after someone signs up.

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
\u2022 Educate with your best content
\u2022 Build authority through case studies
\u2022 Address specific objections per email
\u2022 Graduate to a sales conversation

**3. Re-engagement Sequence (3-4 emails)**
For users going cold:
\u2022 "We miss you" with a compelling reason to return
\u2022 Show what they're missing (new features, content)
\u2022 Final "should we part ways?" email (this often gets the highest open rate)

**Content Strategy: Building Your Authority Engine**

The content-strategy skill helps you plan and execute content that drives traffic and builds trust:

**Content Pillars Framework:**
1. Identify 3-5 core topics your audience cares about
2. Create pillar content (comprehensive guides) for each
3. Build cluster content (specific subtopics) linking back to pillars
4. Distribute across channels with the social-content skill

**The Content-to-Revenue Pipeline:**
\u2022 **Top of Funnel** \u2014 Blog posts, social content, free tools (awareness)
\u2022 **Middle of Funnel** \u2014 Email sequences, case studies, webinars (consideration)
\u2022 **Bottom of Funnel** \u2014 Comparison pages, demos, testimonials (decision)

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
        analogy: "Email marketing is like building a private highway to your customers' attention. Social media is the public road \u2014 noisy, crowded, and controlled by someone else. Content marketing is the signage that gets people onto your private highway in the first place.",
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

**Google Ads \u2014 Capture Existing Demand**
\u2022 People searching for your solution right now
\u2022 Best for: "software for [use case]", "[competitor] alternative"
\u2022 Budget allocation: Start with branded + high-intent keywords

**Meta Ads (Facebook/Instagram) \u2014 Generate Demand**
\u2022 Reach people who don't know they need you yet
\u2022 Best for: Visual products, broad audiences, retargeting
\u2022 Creative testing: Concept > Hook > Visual > Copy > CTA

**LinkedIn Ads \u2014 B2B Targeting**
\u2022 Target by job title, company size, industry
\u2022 Best for: Enterprise products, professional services
\u2022 Higher CPCs but more qualified leads

**TikTok Ads \u2014 Younger Demographics**
\u2022 Video-first, authentic content performs best
\u2022 Best for: Consumer products, brand awareness
\u2022 Lowest CPMs but requires native-feeling creative

**Budget Strategy:**
\u2022 **70% Proven** \u2014 Put most budget on what's already working
\u2022 **30% Testing** \u2014 Reserve budget to test new audiences, creatives, and platforms
\u2022 **Retargeting Tiers:**

| Tier | Audience | Bid Strategy |
|------|----------|-------------|
| **Hot** (1-7 days) | Recent visitors, cart abandoners | Aggressive \u2014 they almost converted |
| **Warm** (7-30 days) | Past visitors, email subscribers | Moderate \u2014 remind and re-engage |
| **Cold** (30-90 days) | Old visitors, lookalike audiences | Conservative \u2014 reintroduce value |

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
6. New user becomes a referrer \u2192 repeat

**Free Tool Strategy: Build Traffic Magnets**

The free-tool-strategy skill creates standalone tools that attract your target audience:

**High-Performing Free Tool Types:**
\u2022 **Calculators** \u2014 ROI calculator, savings estimator, sizing tool
\u2022 **Generators** \u2014 Name generator, tagline generator, email template generator
\u2022 **Analyzers** \u2014 Website audit, SEO checker, performance grader
\u2022 **Converters** \u2014 File converters, unit converters, format tools

**Why This Works:**
\u2022 Free tools rank well in search (high backlink potential)
\u2022 They demonstrate your expertise
\u2022 You capture emails from tool users
\u2022 They create natural upgrade paths to your paid product

**Pricing Strategy: Maximize Revenue per Customer**

The pricing-strategy skill covers:

\u2022 **Value Metrics** \u2014 Charge based on the unit of value (per user, per project, per API call)
\u2022 **Tier Design** \u2014 Structure plans so most customers land on your target tier
\u2022 **Anchoring** \u2014 Use a high-priced tier to make the middle tier feel reasonable
\u2022 **Free vs. Freemium vs. Free Trial** \u2014 Each model works for different business types

**Marketing Psychology: Behavioral Science for Conversions**

The marketing-psychology skill applies proven mental models:

| Principle | Application | Example |
|-----------|-------------|---------|
| **Loss Aversion** | Show what they'll miss | "You're losing $2,400/year on manual tasks" |
| **Social Proof** | Show others doing it | "Join 10,000+ teams" |
| **Anchoring** | Set a reference price first | Show enterprise plan before standard |
| **Scarcity** | Create genuine urgency | "Early adopter pricing ends Friday" |
| **Reciprocity** | Give value before asking | Free tool \u2192 email capture \u2192 paid offer |
| **Authority** | Show expertise signals | Industry certifications, media logos |

**Marketing Ideas: Never Run Out of Strategies**

The marketing-ideas skill contains **140+ frameworks** organized by growth stage:

\u2022 **Pre-launch** \u2014 Build waitlists, create launch buzz, establish thought leadership
\u2022 **Early stage** \u2014 Find product-market fit, get first 100 customers
\u2022 **Growth** \u2014 Scale what works, diversify channels, build brand
\u2022 **Mature** \u2014 Optimize LTV, reduce churn, expand into new segments`,
        analogy: "Think of growth engines like compound interest. A referral program doesn't just get you one customer \u2014 it gets you a customer who gets you another customer who gets you another. The free tool doesn't just rank once \u2014 it earns backlinks that boost your whole site. Small engines, exponential results.",
        tip: "The marketing-ideas skill is your best starting point when you're stuck. Tell Claude your business stage, what you've tried, and your constraints \u2014 it will generate a prioritized list of strategies you haven't considered."
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
\u2022 **Lead routing** \u2014 New signup \u2192 CRM update \u2192 Welcome email \u2192 Slack notification
\u2022 **Content distribution** \u2014 Blog published \u2192 Social posts \u2192 Email newsletter
\u2022 **Ad monitoring** \u2014 Daily spend check \u2192 Alert if budget exceeded \u2192 Pause underperforming ads
\u2022 **Referral tracking** \u2014 Referral link clicked \u2192 Attribution tracked \u2192 Rewards issued
\u2022 **Reporting** \u2014 Weekly analytics pull \u2192 Performance summary \u2192 Email to stakeholders

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
1. THINK  (Claude.ai)     \u2192 Research, brainstorm, strategize
2. BUILD  (Claude Code)    \u2192 Write copy, create pages, implement tracking
3. CONNECT (n8n)           \u2192 Automate workflows, connect tools, run 24/7
4. MEASURE (Analytics)     \u2192 Track what works, identify what doesn't
5. OPTIMIZE (A/B Testing)  \u2192 Improve continuously based on data
\`\`\`

This isn't theory \u2014 it's a repeatable system. Every business can follow this playbook, adapt the skills to their market, and build a marketing engine that runs on AI-powered automation.`,
        analogy: "Building marketing from zero without a system is like trying to assemble IKEA furniture without instructions \u2014 you have all the pieces but no idea what order to put them in. This playbook is your instruction manual, and the Marketing Skills are the numbered pieces.",
        tip: "Don't try to do everything at once. Complete each phase fully before moving to the next. A mediocre website with great ads will waste money. A great website with no traffic will waste time. Follow the order \u2014 foundation first, then traffic, then optimization.",
        installBanner: { color: 'teal', link: '/setup/marketing', text: 'Install Marketing Skills', labelText: 'Install' }
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
        content: `Imagine texting an assistant at 2 AM that checks your email, schedules your meetings, scrapes competitor pricing, and pushes code to GitHub \u2014 all before you wake up.

That's **OpenClaw**.

OpenClaw is an open-source personal AI agent that lives on your own hardware, connects to your messaging apps, and actually *does things* on your behalf. Not "here's a summary" \u2014 actual execution. File management. Browser automation. Shell commands. API calls. All triggered from a WhatsApp message or a Telegram chat.

**What makes it different from ChatGPT or Claude.ai:**

| Feature | ChatGPT / Claude.ai | OpenClaw |
|---------|---------------------|----------|
| **Runs where?** | Their servers | Your machine |
| **Can access your files?** | No | Yes |
| **Can run terminal commands?** | No | Yes |
| **Can control a browser?** | No | Yes |
| **Works via text/WhatsApp?** | No | Yes |
| **Persistent memory?** | Limited | Full \u2014 learns your preferences over time |
| **Works while you sleep?** | No | Yes \u2014 24/7 autonomous operation |
| **Your data stays private?** | No | Yes \u2014 nothing leaves your machine |

**50+ integrations out of the box:** Gmail, GitHub, Spotify, Obsidian, Twitter, Google Calendar, Slack, and more. The community builds new skills daily on **ClawHub** \u2014 and OpenClaw can even create and modify its own skills through conversation.

People are calling it "what Apple Intelligence should have been." The community exploded so fast that Mac Mini stock sold out across major retailers. Tom's Hardware reported delivery delays of up to 6 weeks for high-memory configurations.

This module walks you through setting it up \u2014 affordably, securely, and without the trial-and-error that burns most people out.`,
        analogy: "ChatGPT is like calling a knowledgeable friend for advice. OpenClaw is like hiring a full-time assistant who sits at your desk, has your passwords, knows your preferences, and works while you're asleep.",
        tip: "OpenClaw is open-source and free. The software costs nothing. You only pay for hardware (or a cheap VPS) and API calls if you use cloud models like Claude or GPT-4. With the right setup, that's under $10/month."
      },
      {
        title: "6.2 Why Everyone's Buying Mac Minis (And Why You Don't Have To)",
        content: `You've seen the tweets. You've seen the Reddit threads. Developers are panic-buying Mac Minis like they're limited-edition sneakers. But here's what nobody tells you: **most people don't need a Mac Mini to run OpenClaw.**

**Why the Mac Mini became the default:**

The Mac Mini emerged as the go-to OpenClaw host for one reason above all others: **iMessage**. In the US, iMessage is how most people text. If you want OpenClaw responding to your iMessages, you need macOS. And the cheapest way to get macOS is a Mac Mini.

**Other reasons people buy dedicated hardware:**
\u2022 **Isolation** \u2014 A dedicated machine keeps your AI agent separate from your personal data
\u2022 **Always-on** \u2014 Mac Minis idle at under 5 watts. Quieter than a nightlight
\u2022 **Apple Silicon** \u2014 Unified memory architecture makes local AI models run faster than equivalent x86 hardware
\u2022 **Reliability** \u2014 macOS doesn't randomly restart for updates at 3 AM

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

Early adopters report spending **$300-750/month** on cloud LLM API calls when using models like Claude or GPT-4. OpenClaw's agent makes many reasoning calls per task \u2014 those tokens add up fast.

The solution? Use local models with **Ollama** for routine tasks and only route complex requests to cloud APIs. We'll cover this in the cost management section.

**The bottom line:** If you need iMessage integration, a used M1 Mac Mini for $350-400 is the sweet spot. If you don't need iMessage, a $4/month VPS does everything else \u2014 and you can start in 20 minutes instead of waiting for shipping.`,
        analogy: "Buying a new Mac Mini for OpenClaw is like buying a brand-new truck to drive to the grocery store. It works \u2014 but a reliable used car gets you there just fine. Pick the vehicle that matches the trip.",
        tip: "Check Facebook Marketplace and local listings for M1 Mac Minis. Since the M4 launched, M1 prices dropped significantly. A used M1 with 16GB runs OpenClaw perfectly for cloud API usage."
      },
      {
        title: "6.3 Choose Your Setup Path",
        content: `Before you install anything, pick the path that fits your needs and budget. There's no wrong answer \u2014 each has trade-offs.

**Path A: Remote VPS (Best for most people)**

\u2022 **Cost:** $0-13/month for the server + $1-8/month for API calls
\u2022 **Setup time:** 20-30 minutes
\u2022 **Best for:** WhatsApp, Telegram, Discord, Slack, Signal users
\u2022 **Not for:** iMessage users (requires macOS)
\u2022 **Skill level:** Beginner-friendly with our walkthrough

This is the path we recommend for most Operators Academy students. It's the fastest, cheapest way to get a working OpenClaw agent. You get a cloud server that runs 24/7, no hardware to buy, and you can manage it from anywhere.

**Recommended VPS providers:**

| Provider | Price | RAM | Standout Feature |
|----------|-------|-----|-----------------|
| **Oracle Cloud** | Free | 1-4GB | Free tier is generous, but can be unreliable |
| **Hetzner** | $4/mo | 2GB | Best value for stability |
| **Hostinger** | $5-13/mo | 2-8GB | One-click Docker deployment |

**Path B: Local Mac Mini (For iMessage + power users)**

\u2022 **Cost:** $350-800 upfront + $1-8/month for API calls
\u2022 **Setup time:** 45-60 minutes
\u2022 **Best for:** iMessage users, privacy maximalists, local model enthusiasts
\u2022 **Skill level:** Intermediate

Choose this if iMessage is a must-have or you want to run AI models locally with zero cloud dependency. A used M1 Mac Mini is the budget sweet spot.

**Path C: Hybrid (Maximum flexibility)**

\u2022 **Cost:** $350-800 upfront + $4/mo VPS + API calls
\u2022 **Setup time:** 60-90 minutes
\u2022 **Best for:** Power users who want the best of both worlds
\u2022 **Skill level:** Intermediate to advanced

Run OpenClaw on a Mac Mini for iMessage, plus a VPS instance for always-on redundancy. If your Mac Mini goes offline, the VPS takes over for non-iMessage channels.

**Decision tree:**

Do you need iMessage?
\u2022 **Yes** \u2192 Path B (Mac Mini) or Path C (Hybrid)
\u2022 **No** \u2192 Path A (VPS) \u2014 save $350+ and start today

Are you comfortable with terminal commands?
\u2022 **Yes** \u2192 Any path works
\u2022 **Not yet** \u2192 Path A with Hostinger's one-click Docker setup

Is privacy your top concern?
\u2022 **Yes** \u2192 Path B with local Ollama models (zero cloud dependency)
\u2022 **Not critical** \u2192 Path A is simpler and cheaper`,
        analogy: "Choosing your setup path is like choosing where to live. A VPS is renting an apartment \u2014 cheap, fast move-in, someone else handles maintenance. A Mac Mini is buying a house \u2014 more upfront cost, but it's yours, and you can do whatever you want with it.",
        tip: "Start with Path A (VPS) even if you plan to go local later. It takes 20 minutes, costs $4/month, and teaches you how OpenClaw works before you invest in hardware. Think of it as a test drive.",
        installBanner: { color: 'orange', link: '/setup/openclaw', text: 'OpenClaw Setup Guide', labelText: 'Setup' }
      },
      {
        title: "6.4 Remote Setup: Your AI Agent for $4/Month",
        content: `This walkthrough gets OpenClaw running on a Hetzner VPS. By the end, you'll have a 24/7 AI agent you can message from your phone.

**Step 1: Create Your VPS**

1. Sign up at **hetzner.com** (or your preferred VPS provider)
2. Create a new server:
   \u2022 **OS:** Ubuntu 22.04
   \u2022 **Type:** CX22 (2 vCPU, 4GB RAM) \u2014 $4.59/month
   \u2022 **Location:** Pick the closest data center to you
   \u2022 **SSH Key:** Add your public key (or use password auth to start)
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
\u2022 Choose your AI model provider (Claude, OpenAI, or local via Ollama)
\u2022 Enter your API key
\u2022 Set your admin password

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
        analogy: "Setting up a VPS for OpenClaw is like renting a tiny office for your new employee. You don't need a corner office with a view \u2014 you need a desk, a chair, and a power outlet. A $4/month server is that desk.",
        tip: "Set a billing alert on your VPS provider for $10/month. This catches any unexpected charges early. Hetzner and most providers let you set this up in the billing dashboard.",
        installBanner: { color: 'orange', link: '/setup/openclaw', text: 'Open the Quick-Start Guide', labelText: 'Quick Start' }
      },
      {
        title: "6.5 Local Setup: Mac Mini Configuration",
        content: `If you chose Path B (local Mac Mini), this section walks you through turning it into a dedicated OpenClaw server.

**Before You Start:**
\u2022 A Mac Mini (M1 or newer, 16GB RAM minimum)
\u2022 macOS 14 Sonoma or later
\u2022 An Ethernet cable (more reliable than Wi-Fi for always-on operation)
\u2022 Your AI model API key (Anthropic or OpenAI)

**Step 1: Prepare Your Mac Mini for Server Duty**

These settings prevent your Mac from going to sleep or interrupting OpenClaw:

1. **System Settings > Energy** \u2192 Turn off "Put hard disks to sleep"
2. **System Settings > Energy** \u2192 Set "Prevent automatic sleeping" to ON
3. **System Settings > Lock Screen** \u2192 Set "Start Screen Saver" to Never
4. **System Settings > Software Update** \u2192 Turn off automatic updates (update manually on your schedule)

**Step 2: Enable Remote Access**

So you can manage your Mac Mini from any other device:

1. **System Settings > General > Sharing** \u2192 Turn on **Remote Login (SSH)**
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

This runs a local model for simple requests and only calls Claude for complex tasks \u2014 cutting your API bill by 70-90%.

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
        content: `Your agent is running. Now let's make it reachable from your phone. OpenClaw supports 8 messaging platforms \u2014 pick the ones you actually use.

**WhatsApp (Most Popular)**

WhatsApp is the most-used integration worldwide. Setup takes 5 minutes:

\`\`\`
openclaw integrations enable whatsapp
\`\`\`

1. OpenClaw generates a QR code in your terminal
2. Open WhatsApp on your phone \u2192 Settings \u2192 Linked Devices \u2192 Link a Device
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

1. Go to the Discord Developer Portal \u2192 Applications \u2192 New Application
2. Go to Bot \u2192 Add Bot \u2192 Copy the token
3. Under OAuth2 \u2192 URL Generator, select \`bot\` scope with \`Send Messages\` + \`Read Message History\`
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

Signal uses a linked device approach similar to WhatsApp \u2014 scan a QR code with your Signal app.

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
        tip: "Start with one messaging app \u2014 whichever you use most. Get comfortable with that workflow before adding more channels. Each integration is independent, so you can add them anytime."
      },
      {
        title: "6.7 Keeping Costs Under $10/Month",
        content: `The number one reason people abandon OpenClaw isn't setup difficulty \u2014 it's the surprise API bill at the end of the month. OpenClaw agents are verbose. Every task involves multiple reasoning steps, each burning tokens. Without guardrails, costs spiral fast.

Here's how to keep your total bill under $10/month.

**Understanding Where the Money Goes:**

| Cost Component | Typical Range | Can You Reduce It? |
|----------------|--------------|-------------------|
| VPS hosting | $0-13/month | Yes \u2014 use free tiers or Hetzner |
| Cloud LLM API calls | $1-750/month | Yes \u2014 this is where optimization matters |
| Local model (Ollama) | $0 | Free, but needs capable hardware |

**Strategy 1: Model Routing \u2014 Use Cheap Models by Default**

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

\u2022 **Anthropic Console** \u2192 Settings \u2192 Spending Limits \u2192 Set to $20/month
\u2022 **OpenAI Dashboard** \u2192 Billing \u2192 Usage Limits \u2192 Set hard cap

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

This caps how much the agent "thinks" per step and compresses conversation history \u2014 fewer tokens sent, lower costs.

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
        content: `OpenClaw has full access to your machine. It can read files, run commands, and control a browser. That's what makes it powerful \u2014 and what makes security non-negotiable.

**The Real Risks:**

\u2022 **Prompt injection** \u2014 Someone sends your agent a message containing hidden instructions (via email, chat, or a webpage). The agent follows the hidden instructions instead of your intent
\u2022 **Data exposure** \u2014 Your agent reads a file containing API keys or passwords and includes them in a response
\u2022 **Unintended actions** \u2014 A poorly-worded request causes the agent to delete files, send messages, or modify data you didn't intend

**These aren't hypothetical.** Security researchers have demonstrated prompt injection attacks that extract .env files and SSH keys from OpenClaw instances running without guardrails.

**Layer 1: Run in Docker (Required for VPS, Recommended for Mac)**

Docker containers isolate OpenClaw from your host system:

\`\`\`
openclaw config set runtime docker
openclaw config set docker-volumes /safe/data:/data
\`\`\`

This means OpenClaw can only access files you explicitly mount into the container \u2014 not your entire filesystem.

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

Create a dedicated API key for OpenClaw with limited permissions \u2014 don't reuse your personal key:

\u2022 **Anthropic** \u2192 Console \u2192 API Keys \u2192 Create new key with usage limits
\u2022 **OpenAI** \u2192 Dashboard \u2192 API Keys \u2192 Create new project key

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
        content: `As you build more complex projects with Claude Code, you'll need a system to keep track of everything. This is the **Project Startup System** \u2014 a documentation structure that helps Claude understand your project and helps you maintain continuity across sessions.`,
        analogy: "Think of this like a hospital shift change log. When nurses change shifts, they don't just say 'good luck!' \u2014 they hand over detailed notes about each patient. Since Claude doesn't remember between sessions, your documentation files serve as that handover."
      },
      {
        title: "The 5 Core Files",
        content: `| File | Purpose | Analogy |
|------|---------|---------|
| **CONTEXT.md** | Domain knowledge, terminology, integrations, business rules | Internal wiki page |
| **TASKS.md** | Active task tracking (TODO, IN PROGRESS, DONE) | Trello board in markdown |
| **TEST_LOG.md** | QA activities, bug investigations, and fixes | Lab notebook |
| **PLAN.md** | Strategic planning for complex features | Architectural blueprint |
| **PROGRESS.md** | Session-by-session work log | Pilot's flight log |

**File Creation Priority:**
1. CONTEXT.md \u2014 Establish domain knowledge first
2. TASKS.md \u2014 Define what needs to be done
3. TEST_LOG.md \u2014 Initialize QA tracking
4. PLAN.md \u2014 Think through complex work (as needed)
5. PROGRESS.md \u2014 Start logging sessions`
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
        title: "QA Agents",
        content: `Claude Code includes 4 specialized QA agents that handle different aspects of quality assurance:

| Agent | Role | Trigger Phrase |
|-------|------|---------------|
| **Logger** | Implements strategic logging for complex features | "add logging" / "make observable" |
| **Feature Tester** | Tests new features and runs regression checks | "test this" / "verify this works" |
| **Debugger** | Root cause analysis and surgical bug fixes | "debug this" / "why is this failing" |
| **QA Orchestrator** | Coordinates the full QA workflow | "run QA" / "quality check" |

**The QA Cycle:**

Logging \u2192 Testing \u2192 Pass? \u2192 Debug (if fail) \u2192 Document

The orchestrator runs this full cycle automatically when you say "run QA." It coordinates the other three agents in sequence: first adding logging to make the feature observable, then running tests, then debugging any failures, and finally documenting everything in TEST_LOG.md.`,
        analogy: "Think of Claude Code like a restaurant kitchen. The main agent is the head chef coordinating everything. QA agents are specialized line cooks \u2014 each has their own station, tools, and expertise. The Logger sets up ingredient tracking, the Tester tastes every dish, the Debugger figures out why something went wrong, and the QA Orchestrator is the sous chef making sure they all work together."
      },
      {
        title: "Session Management",
        content: `Claude doesn't remember between sessions \u2014 each new conversation starts fresh. These scripts and commands help you maintain continuity:

**Starting a Session:**

\`\`\`
Read CLAUDE.md, TASKS.md, PROGRESS.md, and CONTEXT.md.
Check the \u2190 CURRENT marker in TASKS.md.
Tell me current progress and recommended next action.
Then help me continue.
\`\`\`

**Ending a Session:**

\`\`\`
Before we pause:
1. Update TASKS.md with current progress
2. Commit all changes: git add . && git commit -m "WIP: [task]"
3. Tell me exactly where we left off
\`\`\`

**Two Key Commands:**

| Command | What It Does | When to Use |
|---------|-------------|-------------|
| \`/compact\` | Summarizes the conversation and frees up context | Context getting long but still working on related tasks |
| \`/clear\` | Completely resets the context | Switching to unrelated work, or after a major milestone |

**When to /clear:**
- Switching to an unrelated task
- After a major milestone
- Context is long and Claude seems confused
- Starting fresh after debugging went off track

**When NOT to /clear:**
- In the middle of multi-step work
- Haven't updated PROGRESS.md yet
- Next task builds on what you just did

**Checkpoint Markers in Plans:**

Mark your implementation plans with checkpoint indicators so you know when to compact or clear:

\`\`\`
- [ ] Task 2.1 \u2014 Create Claude service
- [ ] Task 2.2 \u2014 Create embeddings service
- [ ] Task 2.3 \u2014 Create intent service \ud83d\udd04 \u2190 /compact here
- [ ] Task 2.4 \u2014 Create data scope service
- [ ] Task 2.5 \u2014 Create database queries \u2705 \u2190 wrap + /clear
\`\`\``,
        analogy: "Claude's context window is like short-term memory \u2014 it can only hold so much before things get fuzzy. Checkpoints are like taking notes before your memory fills up, then starting fresh with those notes. /compact is like jotting down key points on a sticky note; /clear is like sleeping and starting a new day with your notebook."
      },
      {
        title: "Configuration Hierarchy",
        content: `**One-Command Install:**

Install the full workflow system \u2014 global CLAUDE.md, 8 specialized agents, a live status bar, and base settings \u2014 with one command:

\`\`\`
curl -fsSL https://operators-academy.vercel.app/claude-setup/install.sh | bash
\`\`\`

This backs up your existing config before installing. Requires curl and jq.

**Configuration levels** (more specific overrides general, like CSS):

| Level | Location | Scope |
|-------|----------|-------|
| **Global** | \`~/.claude/CLAUDE.md\` | All projects on your machine |
| **Project** | \`./CLAUDE.md\` | Just that specific project |
| **Local** | \`./CLAUDE.local.md\` | Personal overrides (not shared) |

**After installing, start any project:**

\`\`\`
cd ~/Projects/my-new-project
claude
# Say: "Initialize project documentation"
\`\`\`

Claude will analyze your project and create the documentation files (CONTEXT.md, TASKS.md, PROGRESS.md, etc.) automatically!`
      }
    ]
  }
};

export const glossaryTerms = [
  { term: "Agent", definition: "A specialized Claude configuration for specific tasks with particular instructions, personality, or capabilities.", category: "Claude Code" },
  { term: "Agent Teams", definition: "An experimental feature that coordinates multiple Claude Code instances working together \u2014 one lead session spawns teammates that work independently, communicate directly, and share a task list.", category: "Claude Code" },
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
  { term: "QA Agents", definition: "Four specialized Claude Code agents (Logger, Feature Tester, Debugger, QA Orchestrator) that handle different aspects of quality assurance.", category: "Project System" },
  { term: "PROGRESS.md", definition: "Documentation file for session-by-session work logs - like a pilot's flight log.", category: "Project System" },
  { term: "Prompt", definition: "The instructions or questions you give to an AI. Better prompts = better outputs.", category: "General" },
  { term: "pwd", definition: "Print Working Directory - Terminal command to show your current location in the folder structure.", category: "Terminal" },
  { term: "Skills", definition: "Reusable capabilities you can give Claude, like knowing how to use a specific framework.", category: "Claude Code" },
  { term: "TASKS.md", definition: "Documentation file for active task tracking (TODO, IN PROGRESS, DONE) - like a Trello board in markdown.", category: "Project System" },
  { term: "TEST_LOG.md", definition: "Documentation file for QA activities, bug investigations, and prevention rules - like a lab notebook.", category: "Project System" },
  { term: "Terminal", definition: "A text-based interface for interacting with your computer by typing commands.", category: "General" },
  { term: "Tools", definition: "Actions Claude can take - reading files, writing code, running commands, searching the web.", category: "Claude Code" },
  { term: "Trigger", definition: "In n8n, what starts a workflow - can be a webhook, schedule, or event.", category: "n8n" },
  { term: "Workflow", definition: "In n8n, a complete automation from trigger to final action.", category: "n8n" },
  { term: "A/B Test", definition: "An experiment comparing two versions of a page, email, or ad to determine which performs better based on statistical significance.", category: "Marketing" },
  { term: "CRO", definition: "Conversion Rate Optimization \u2014 the practice of increasing the percentage of visitors who take a desired action (sign up, purchase, etc.).", category: "Marketing" },
  { term: "CTA", definition: "Call to Action \u2014 a button, link, or prompt that tells the visitor what to do next ('Start Free Trial', 'Get Started').", category: "Marketing" },
  { term: "Marketing Skills", definition: "A collection of 25 AI agent skills for Claude Code that cover the full marketing funnel \u2014 from copywriting and SEO to paid ads and growth engineering.", category: "Marketing" },
  { term: "Product Marketing Context", definition: "A shared reference document containing your positioning, audience, voice, and competitive landscape that all marketing skills read before generating output.", category: "Marketing" },
  { term: "Programmatic SEO", definition: "Creating many optimized pages from templates to capture long-tail search traffic at scale (e.g., '[Product] vs [Competitor]' pages).", category: "Marketing" },
  { term: "Schema Markup", definition: "Structured data (JSON-LD) added to web pages that tells search engines what the content is about, enabling rich results like star ratings and FAQ dropdowns.", category: "Marketing" },
  { term: "UTM Parameters", definition: "Tags added to URLs (utm_source, utm_medium, utm_campaign) that track where traffic comes from in your analytics.", category: "Marketing" },
  { term: "Referral Program", definition: "A system where existing customers are incentivized to refer new customers, creating a viral growth loop.", category: "Marketing" },
  { term: "MCP Integration", definition: "When a tool has a Model Context Protocol server, allowing Claude to interact with it directly through API calls without manual setup.", category: "Marketing" },
  { term: "OpenClaw", definition: "An open-source personal AI agent that runs on your own hardware, connects to messaging apps (WhatsApp, Telegram, iMessage, etc.), and autonomously executes real-world tasks 24/7.", category: "OpenClaw" },
  { term: "ClawHub", definition: "Community marketplace for OpenClaw skills \u2014 pre-built integrations and capabilities that extend what your agent can do.", category: "OpenClaw" },
  { term: "Ollama", definition: "Open-source tool for running AI language models locally on your machine. Used with OpenClaw to reduce or eliminate cloud API costs.", category: "OpenClaw" },
  { term: "VPS", definition: "Virtual Private Server \u2014 a cloud-hosted computer you rent by the month. A cost-effective alternative to buying hardware for running OpenClaw 24/7.", category: "OpenClaw" },
  { term: "Docker", definition: "Containerization tool that isolates applications from the host system. Critical for running OpenClaw securely by restricting file and network access.", category: "OpenClaw" },
  { term: "Prompt Injection", definition: "A security attack where hidden instructions in emails, messages, or web pages trick an AI agent into performing unintended actions.", category: "OpenClaw" },
  { term: "Model Routing", definition: "Strategy of sending simple tasks to cheap/free AI models and only using expensive models for complex reasoning \u2014 the key to keeping OpenClaw costs under $10/month.", category: "OpenClaw" }
];
