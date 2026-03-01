import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, Home, Zap, ArrowRight, Terminal, TrendingUp, Search, Rocket, BarChart3, Mail, Globe, Repeat, ChevronRight, ChevronDown, BookOpen, Target } from 'lucide-react';

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

const CopyableStep = ({ number, prompt, note }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="group flex items-start gap-3 bg-gray-800 border border-gray-700 rounded-lg p-4 text-left hover:border-blue-500/50 transition-all w-full"
    >
      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold flex items-center justify-center mt-0.5">
        {number}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-200 font-mono leading-relaxed">{prompt}</p>
        {note && <p className="text-xs text-gray-500 mt-1">{note}</p>}
      </div>
      <span className="flex-shrink-0 mt-1">
        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-500 group-hover:text-blue-400 transition-colors" />}
      </span>
    </button>
  );
};

const FlowCard = ({ icon: Icon, color, title, description, steps, isOpen, onToggle }) => {
  const colorMap = {
    blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30', hover: 'hover:border-blue-500' },
    teal: { bg: 'bg-teal-500/20', text: 'text-teal-400', border: 'border-teal-500/30', hover: 'hover:border-teal-500' },
    purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30', hover: 'hover:border-purple-500' },
    orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30', hover: 'hover:border-orange-500' },
    pink: { bg: 'bg-pink-500/20', text: 'text-pink-400', border: 'border-pink-500/30', hover: 'hover:border-pink-500' },
    cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30', hover: 'hover:border-cyan-500' },
    green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30', hover: 'hover:border-green-500' },
  };
  const c = colorMap[color] || colorMap.blue;

  return (
    <div className={`border ${c.border} rounded-xl overflow-hidden transition-all ${c.hover}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 bg-gray-800/50 hover:bg-gray-800 transition-colors text-left"
      >
        <div className={`p-2.5 ${c.bg} rounded-lg flex-shrink-0`}>
          <Icon className={c.text} size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-100">{title}</h3>
          <p className="text-sm text-gray-400 mt-0.5">{description}</p>
        </div>
        <span className="flex-shrink-0 text-gray-400">
          {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </span>
      </button>
      {isOpen && (
        <div className="p-5 pt-0 space-y-2">
          <div className="border-t border-gray-700 pt-4 space-y-2">
            {steps.map((step, i) => (
              <CopyableStep key={i} number={i + 1} prompt={step.prompt} note={step.note} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const flows = [
  {
    icon: Rocket,
    color: 'blue',
    title: 'Launch a Product from Scratch',
    description: 'Go from zero to a fully marketed product in one session.',
    steps: [
      { prompt: 'Create my product marketing context document', note: 'Claude will interview you about your product, audience, and voice. This becomes the foundation for all other skills.' },
      { prompt: 'Write homepage copy for [your product name]', note: 'Generates hero, problem, solution, social proof, features, objection handling, and CTA sections.' },
      { prompt: 'Run a CRO audit on my homepage copy', note: 'Audits your copy against a 7-point conversion framework and suggests specific improvements.' },
      { prompt: 'Build a 5-email welcome sequence for new signups', note: 'Creates a drip sequence: welcome, value delivery, social proof, feature highlight, soft CTA.' },
      { prompt: 'Run an SEO audit and create a 90-day content strategy', note: 'Identifies technical issues, content gaps, and builds a prioritized publishing calendar.' },
      { prompt: 'Generate 3 comparison pages vs my top competitors', note: 'Creates "[You] vs [Competitor]" pages optimized for search traffic.' },
    ],
  },
  {
    icon: Search,
    color: 'teal',
    title: 'Competitor Traffic Capture',
    description: 'Build pages that intercept people searching for your competitors.',
    steps: [
      { prompt: 'Analyze these competitors and identify their positioning: [competitor 1], [competitor 2], [competitor 3]', note: 'Maps competitor strengths, weaknesses, and messaging angles you can exploit.' },
      { prompt: 'Generate a "[your product] vs [competitor]" comparison page for each competitor', note: 'Creates honest, SEO-optimized comparison pages that highlight your advantages.' },
      { prompt: 'Write a "[top competitor] alternatives" page positioning us as #1', note: 'Targets high-intent "alternatives" search queries with a curated list where you shine.' },
      { prompt: 'Create Google Ads copy targeting competitor brand terms', note: 'Generates ad headlines and descriptions for competitor conquest campaigns.' },
      { prompt: 'Add schema markup to all comparison pages for rich search results', note: 'Adds structured data so Google shows star ratings, pricing, and feature comparisons.' },
    ],
  },
  {
    icon: Globe,
    color: 'purple',
    title: 'Build an SEO Content Engine',
    description: 'Create a scalable system for compounding organic traffic.',
    steps: [
      { prompt: 'Run a full SEO audit on my site at [URL]', note: 'Checks technical SEO, on-page optimization, indexation status, and content gaps.' },
      { prompt: 'Which programmatic SEO playbooks fit my business best? I sell [describe product]', note: 'Recommends 2-3 of the 12 playbooks (templates, comparisons, alternatives, locations, etc.).' },
      { prompt: 'Generate the first 20 pages using the [playbook name] template', note: 'Creates a batch of SEO-optimized pages with unique content, internal linking, and CTAs.' },
      { prompt: 'Add schema markup to all generated pages', note: 'Implements FAQ, Product, or HowTo schema for rich results in Google.' },
      { prompt: 'Create a 90-day content strategy to support these pages with blog posts', note: 'Plans supporting content that builds topical authority around your programmatic pages.' },
    ],
  },
  {
    icon: BarChart3,
    color: 'orange',
    title: 'Conversion Rate Optimization Sprint',
    description: 'Audit and optimize every step of your funnel.',
    steps: [
      { prompt: 'Run a CRO audit on [URL] — focus on the landing page', note: 'Evaluates value proposition clarity, headline effectiveness, CTA placement, trust signals, and friction.' },
      { prompt: 'Audit my signup flow for conversion blockers', note: 'Reviews each step from "click signup" to "active account" and identifies drop-off points.' },
      { prompt: 'Optimize my onboarding experience — here\'s what new users see: [describe flow]', note: 'Redesigns first-run experience to maximize activation and reduce churn.' },
      { prompt: 'Create exit-intent popups for my top 3 landing pages', note: 'Designs non-annoying popups with lead magnets tailored to each page\'s intent.' },
      { prompt: 'Design A/B tests for the top 3 CRO recommendations', note: 'Creates test hypotheses, variants, and success metrics with statistical rigor.' },
    ],
  },
  {
    icon: Repeat,
    color: 'pink',
    title: 'Build a Growth Loop',
    description: 'Design viral mechanics and self-reinforcing growth channels.',
    steps: [
      { prompt: 'Design a referral program for [product] — my customers are [describe audience]', note: 'Creates incentive structure, referral flow, and messaging that matches your audience.' },
      { prompt: 'Build a free tool strategy — what tools could drive organic signups to [product]?', note: 'Identifies 3-5 free tool ideas that attract your target audience and funnel to your paid product.' },
      { prompt: 'Generate 50 marketing ideas ranked by effort vs impact for [product]', note: 'Creates a prioritized backlog from quick wins to moonshots, scored on a 2x2 matrix.' },
      { prompt: 'Create a launch strategy for the referral program', note: 'Plans rollout: soft launch, email announcement, social push, and partner outreach.' },
      { prompt: 'Set up analytics tracking for the referral funnel', note: 'Defines events, funnels, and attribution logic to measure referral program ROI.' },
    ],
  },
  {
    icon: Target,
    color: 'green',
    title: 'Google Ads Competitor Research',
    description: 'Analyze competitor ad strategies, find keyword gaps, and build your paid search plan.',
    steps: [
      { prompt: 'Analyze my business from the codebase — summarize what I sell, who I serve, my positioning, and key differentiators. Present it for me to confirm before moving on.', note: 'Scans your project files (homepage, landing pages, package.json, any marketing context) to build a business profile.' },
      { prompt: 'Research my top 3-5 competitors\' Google Ads strategies. Find their ad copy, landing pages, keyword targets, CTAs, and positioning. Search for "[competitor] google ads", "[product category] alternatives", and "[competitor] vs" queries.', note: 'Goes online to collect real competitor ad intelligence — headlines, descriptions, offers, and landing page approaches.' },
      { prompt: 'Generate a full competitive analysis report: what each competitor is doing right, what they\'re doing wrong, keyword opportunities they\'re missing, and strategic gaps I can exploit. Save everything as google-ads-research.md', note: 'Produces a structured .md report with executive summary, per-competitor breakdown, keyword opportunities table, and strategic recommendations.' },
      { prompt: 'Based on the competitor research and my current codebase, propose 4-6 concrete implementation ideas — like landing pages, comparison pages, ad copy templates, or tracking setup. Rank each by impact and effort, then ask me which to build.', note: 'Assesses what you already have (pages, forms, tracking) and proposes actionable next steps tied to the research findings.' },
    ],
  },
  {
    icon: Mail,
    color: 'cyan',
    title: 'Build an Email Marketing Machine',
    description: 'Create automated sequences for every stage of the customer journey.',
    steps: [
      { prompt: 'Build a 5-email welcome sequence for new signups to [product]', note: 'Welcome → Quick win → Social proof → Feature highlight → Soft upgrade CTA.' },
      { prompt: 'Create a 6-email lead nurture sequence for free trial users', note: 'Educates, demonstrates value, handles objections, and drives conversion before trial expires.' },
      { prompt: 'Write a 4-email re-engagement sequence for users who haven\'t logged in for 30 days', note: 'Win-back series: "We miss you" → New feature → Success story → Last chance offer.' },
      { prompt: 'Design a product launch email series — 5 emails over 2 weeks', note: 'Builds anticipation: teaser → behind the scenes → early access → launch day → social proof.' },
      { prompt: 'Set up analytics tracking for email conversion events', note: 'Tracks opens, clicks, conversions, and revenue attribution per sequence.' },
    ],
  },
];

const INTEGRATION_PROMPT = `Go to https://operators-academy.vercel.app/skills-manifest.json and integrate the Operators Academy skills and workflow into this project.`;

const INTEGRATION_STEPS = `# Integrate Operators Academy into your project

1. Fetch the manifest: https://operators-academy.vercel.app/skills-manifest.json
2. Install the workflow: curl -fsSL https://operators-academy.vercel.app/claude-setup/install.sh | bash
3. Install marketing skills: npx skills add coreyhaines31/marketingskills
4. Start with: "Create my product marketing context document"`;

export default function PromptFlowsPage() {
  const [openFlow, setOpenFlow] = useState(0);

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
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm mb-6">
          <Zap size={14} />
          Copy-paste prompt workflows
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Prompt Flows
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Step-by-step prompt sequences you can paste into Claude Code.
          Each flow chains multiple marketing skills into a complete workflow.
        </p>
      </div>

      {/* Integration Box */}
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-blue-500/20 rounded-lg flex-shrink-0">
              <Terminal className="text-blue-400" size={20} />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-gray-100 mb-1">Quick Integration</h2>
              <p className="text-sm text-gray-400 mb-4">
                Point Claude Code at this site to auto-integrate everything — workflow, agents, and marketing skills.
              </p>
              <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-3">
                <span className="text-gray-500">{'>'} </span>
                <span className="text-gray-300">{INTEGRATION_PROMPT}</span>
              </div>
              <CopyButton text={INTEGRATION_PROMPT} label="Copy prompt" />
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <h2 className="text-xl font-bold mb-2">How to use these flows</h2>
        <p className="text-sm text-gray-400 mb-4">Each flow is a sequence of prompts. Click any step to copy it, then paste into Claude Code.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-400 mb-2">1</div>
            <h3 className="font-medium text-sm mb-1">Install skills</h3>
            <p className="text-xs text-gray-400">Run the install command to add marketing skills to your project.</p>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-400 mb-2">2</div>
            <h3 className="font-medium text-sm mb-1">Pick a flow</h3>
            <p className="text-xs text-gray-400">Choose the workflow that matches your goal — launch, SEO, CRO, growth, or email.</p>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-400 mb-2">3</div>
            <h3 className="font-medium text-sm mb-1">Paste step by step</h3>
            <p className="text-xs text-gray-400">Copy each prompt, paste into Claude Code, and review the output before moving to the next step.</p>
          </div>
        </div>
      </div>

      {/* Flows */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">Prompt Flows</h2>
        <div className="space-y-3">
          {flows.map((flow, i) => (
            <FlowCard
              key={i}
              {...flow}
              isOpen={openFlow === i}
              onToggle={() => setOpenFlow(openFlow === i ? -1 : i)}
            />
          ))}
        </div>
      </div>

      {/* Integration for Claude Code / OpenClaw Section */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-2">Integrate with Claude Code or OpenClaw</h2>
        <p className="text-sm text-gray-400 mb-6">
          This site exposes a machine-readable manifest so AI agents can discover and install everything automatically.
        </p>

        <div className="space-y-4">
          {/* Manifest */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Globe size={16} className="text-purple-400" />
              Skills Manifest
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              A structured JSON file listing every module, skill, agent, prompt flow, and install command.
              Point any AI agent at this URL to auto-discover the full Operators Academy toolkit.
            </p>
            <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-3 flex items-center justify-between gap-4">
              <span className="text-blue-400">https://operators-academy.vercel.app/skills-manifest.json</span>
              <CopyButton text="https://operators-academy.vercel.app/skills-manifest.json" />
            </div>
            <p className="text-xs text-gray-500">
              Contains: 6 modules, 25 skills (7 categories), 8 agents, 6 prompt flows, install commands, and recommended learning paths.
            </p>
          </div>

          {/* Example: Claude Code */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Terminal size={16} className="text-blue-400" />
              From Claude Code
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Paste any of these prompts into Claude Code to integrate Operators Academy into your project:
            </p>
            <div className="space-y-2">
              {[
                { prompt: 'Go to https://operators-academy.vercel.app/skills-manifest.json and install the Operators Academy workflow and marketing skills into this project.', note: 'Full integration — installs workflow + all 25 marketing skills' },
                { prompt: 'Fetch https://operators-academy.vercel.app/skills-manifest.json and show me which marketing skills are available.', note: 'Discovery — browse skills without installing' },
                { prompt: 'Read the skills manifest at https://operators-academy.vercel.app/skills-manifest.json and recommend a prompt flow for my stage: [pre-launch / post-launch / growth]', note: 'Guided recommendation based on your business stage' },
                { prompt: 'Install the Operators Academy workflow: curl -fsSL https://operators-academy.vercel.app/claude-setup/install.sh | bash — then install marketing skills with: npx skills add coreyhaines31/marketingskills', note: 'Direct install — skip the manifest, just set up everything' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-900 border border-gray-700/50 rounded-lg p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm text-gray-200 font-mono leading-relaxed">{item.prompt}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.note}</p>
                    </div>
                    <CopyButton text={item.prompt} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example: OpenClaw */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Zap size={16} className="text-orange-400" />
              From OpenClaw
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Send these to your OpenClaw agent via WhatsApp, Telegram, or any connected messaging app:
            </p>
            <div className="space-y-2">
              {[
                { prompt: 'Set up the Operators Academy marketing workflow in my project at ~/Projects/my-app', note: 'OpenClaw installs the workflow + skills into your project remotely' },
                { prompt: 'Run the "Launch a Product from Scratch" prompt flow for [product name] in ~/Projects/my-app', note: 'OpenClaw executes the full 6-step launch flow autonomously' },
                { prompt: 'Check https://operators-academy.vercel.app/skills-manifest.json for new marketing skills and update my setup', note: 'OpenClaw checks for updates and installs anything new' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-900 border border-gray-700/50 rounded-lg p-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm text-gray-200 font-mono leading-relaxed">{item.prompt}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.note}</p>
                    </div>
                    <CopyButton text={item.prompt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skill Quick Reference */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-2">Skill Quick Reference</h2>
        <p className="text-sm text-gray-400 mb-6">All 25 skills with one-liner prompts. Click to copy.</p>

        {[
          {
            category: 'Conversion (CRO)',
            color: 'text-orange-400',
            skills: [
              { name: 'page-cro', prompt: 'Run a CRO audit on [URL]' },
              { name: 'signup-flow-cro', prompt: 'Audit my signup flow for conversion blockers' },
              { name: 'onboarding-cro', prompt: 'Optimize the onboarding experience for new users' },
              { name: 'form-cro', prompt: 'Optimize this form for higher completion rates: [describe form]' },
              { name: 'popup-cro', prompt: 'Create an exit-intent popup for [page URL]' },
            ],
          },
          {
            category: 'Copywriting',
            color: 'text-blue-400',
            skills: [
              { name: 'copywriting', prompt: 'Write homepage copy for [product]' },
              { name: 'copy-editing', prompt: 'Edit and improve this copy: [paste copy]' },
              { name: 'email-sequence', prompt: 'Build a welcome email sequence for [product]' },
              { name: 'social-content', prompt: 'Create a week of social posts for [product] on [platform]' },
            ],
          },
          {
            category: 'SEO & Discovery',
            color: 'text-teal-400',
            skills: [
              { name: 'seo-audit', prompt: 'Run an SEO audit on [URL]' },
              { name: 'programmatic-seo', prompt: 'Generate programmatic SEO pages for [business type]' },
              { name: 'schema-markup', prompt: 'Add schema markup to [page type]' },
              { name: 'competitor-alternatives', prompt: 'Create a "[competitor] alternatives" page' },
            ],
          },
          {
            category: 'Paid & Distribution',
            color: 'text-purple-400',
            skills: [
              { name: 'google-ads-research', prompt: 'Run competitor Google Ads research for my business' },
              { name: 'paid-ads', prompt: 'Create Google Ads for [product] targeting [audience]' },
              { name: 'content-strategy', prompt: 'Build a 90-day content strategy for [product]' },
              { name: 'launch-strategy', prompt: 'Create a launch strategy for [product/feature]' },
            ],
          },
          {
            category: 'Measurement',
            color: 'text-cyan-400',
            skills: [
              { name: 'analytics-tracking', prompt: 'Set up analytics tracking for [key events]' },
              { name: 'ab-test-setup', prompt: 'Design an A/B test for [hypothesis]' },
            ],
          },
          {
            category: 'Growth Engineering',
            color: 'text-pink-400',
            skills: [
              { name: 'referral-program', prompt: 'Design a referral program for [product]' },
              { name: 'free-tool-strategy', prompt: 'What free tools could drive signups for [product]?' },
              { name: 'marketing-ideas', prompt: 'Generate 50 marketing ideas ranked by effort vs impact' },
            ],
          },
          {
            category: 'Strategy',
            color: 'text-yellow-400',
            skills: [
              { name: 'pricing-strategy', prompt: 'Analyze and optimize pricing for [product]' },
              { name: 'marketing-psychology', prompt: 'Apply behavioral psychology to [page/campaign]' },
              { name: 'product-marketing-context', prompt: 'Create my product marketing context document' },
            ],
          },
        ].map((group) => (
          <div key={group.category} className="mb-6">
            <h3 className={`text-sm font-semibold ${group.color} mb-3`}>{group.category}</h3>
            <div className="space-y-1.5">
              {group.skills.map((skill) => {
                const SkillRow = () => {
                  const [copied, setCopied] = useState(false);
                  const handleCopy = () => {
                    navigator.clipboard.writeText(skill.prompt);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  };
                  return (
                    <button
                      onClick={handleCopy}
                      className="group flex items-center gap-3 w-full bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-gray-600 rounded-lg px-4 py-2.5 text-left transition-all"
                    >
                      <code className="text-xs text-gray-500 font-mono w-44 flex-shrink-0 truncate">{skill.name}</code>
                      <span className="text-sm text-gray-300 flex-1 truncate">{skill.prompt}</span>
                      <span className="flex-shrink-0">
                        {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} className="text-gray-600 group-hover:text-gray-400 transition-colors" />}
                      </span>
                    </button>
                  );
                };
                return <SkillRow key={skill.name} />;
              })}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Ready to get started?</h2>
          <p className="text-sm text-gray-400 mb-5">Install everything, then pick a prompt flow.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/setup/marketing"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/20 border border-teal-500/30 rounded-lg text-teal-300 hover:bg-teal-500/30 transition-colors text-sm font-medium"
            >
              <TrendingUp size={16} />
              Install Marketing Skills
            </Link>
            <Link
              to="/install"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-colors text-sm font-medium"
            >
              <Terminal size={16} />
              Install Workflow
            </Link>
            <Link
              to="/course"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              <BookOpen size={16} />
              Full Course
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
