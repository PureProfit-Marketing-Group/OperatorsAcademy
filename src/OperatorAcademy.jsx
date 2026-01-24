import React, { useState, useEffect } from 'react';
import { BookOpen, Terminal, Cpu, Workflow, Link2, FileText, StickyNote, ChevronRight, ChevronLeft, Check, Circle, Lightbulb, AlertTriangle, Target, Home, List, Menu, X, Trash2, Plus, Search } from 'lucide-react';

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
  { term: "Workflow", definition: "In n8n, a complete automation from trigger to final action.", category: "n8n" }
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
      if (savedPosition) {
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
