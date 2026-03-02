import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, Terminal, Home, ArrowRight, TrendingUp, Zap, BookOpen, Package, Bot } from 'lucide-react';
import CopyButton from './components/CopyButton';
import Expandable from './components/Expandable';

const CopyablePrompt = ({ prompt }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="group bg-gray-800 border border-gray-700 rounded-lg p-4 text-left hover:border-teal-500/50 transition-all w-full"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm text-gray-300 font-mono leading-relaxed">{prompt}</p>
        <span className="flex-shrink-0 mt-0.5">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-500 group-hover:text-teal-400 transition-colors" />}
        </span>
      </div>
    </button>
  );
};

const NPX_CMD = 'npx skills add coreyhaines31/marketingskills';
const GIT_CMD = 'git clone https://github.com/coreyhaines31/marketingskills.git && cp -r marketingskills/skills/* .claude/skills/';

export default function MarketingSetupPage() {
  const [installTab, setInstallTab] = useState('npx');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full text-teal-300 text-sm mb-6">
          <TrendingUp size={14} />
          25 AI-powered marketing skills
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Set Up Marketing Skills
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Turn Claude Code into a full marketing team — copywriting, SEO, CRO, ads, email, and growth.
          Install in one command.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Prerequisites</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={12} className="text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Claude Code installed and authenticated</p>
                <p className="text-xs text-gray-500">npm install -g @anthropic-ai/claude-code</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={12} className="text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-gray-300">Operators Academy workflow installed</p>
                <Link to="/tools/install" className="text-xs text-teal-400 hover:text-teal-300 transition-colors">
                  Install the workflow →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Install Command */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setInstallTab('npx')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${installTab === 'npx' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : 'text-gray-400 hover:text-gray-300'}`}
            >
              npx (Recommended)
            </button>
            <button
              onClick={() => setInstallTab('git')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${installTab === 'git' ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30' : 'text-gray-400 hover:text-gray-300'}`}
            >
              Git Clone
            </button>
          </div>

          {installTab === 'npx' ? (
            <>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400 font-medium">Run in your project directory:</span>
                <CopyButton text={NPX_CMD} />
              </div>
              <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <span className="text-gray-500">$ </span>
                <span className="text-green-400">npx</span>
                <span className="text-gray-300"> skills add coreyhaines31/marketingskills</span>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Installs all 25 marketing skills into your project's .claude/skills/ directory.
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400 font-medium">Clone and copy manually:</span>
                <CopyButton text={GIT_CMD} />
              </div>
              <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <span className="text-gray-500">$ </span>
                <span className="text-green-400">git clone</span>
                <span className="text-gray-300"> https://github.com/coreyhaines31/marketingskills.git</span>
                <br />
                <span className="text-gray-500">$ </span>
                <span className="text-green-400">cp</span>
                <span className="text-gray-300"> -r marketingskills/skills/* .claude/skills/</span>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Clone the repo then copy skills into your project. Works without npx.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Prompt Library */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-2">Prompt Library</h2>
        <p className="text-gray-400 text-sm mb-6">Click any prompt to copy it. Paste into Claude Code to get started.</p>

        <h3 className="text-sm font-semibold text-gray-300 mb-3">Start here</h3>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <CopyablePrompt prompt="Create my product marketing context document" />
          <CopyablePrompt prompt="Write homepage copy for [product]" />
        </div>

        <h3 className="text-sm font-semibold text-gray-300 mb-3">Conversion & CRO</h3>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <CopyablePrompt prompt="Run a CRO audit on [URL]" />
          <CopyablePrompt prompt="Audit my signup flow for conversion blockers" />
          <CopyablePrompt prompt="Optimize the onboarding experience for new users" />
          <CopyablePrompt prompt="Create an exit-intent popup for [page URL]" />
        </div>

        <h3 className="text-sm font-semibold text-gray-300 mb-3">SEO & Content</h3>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <CopyablePrompt prompt="Run an SEO audit on my site at [URL]" />
          <CopyablePrompt prompt="Generate programmatic SEO pages for [business type]" />
          <CopyablePrompt prompt="Create a '[competitor] alternatives' page" />
          <CopyablePrompt prompt="Build a 90-day content strategy for [product]" />
        </div>

        <h3 className="text-sm font-semibold text-gray-300 mb-3">Email & Ads</h3>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <CopyablePrompt prompt="Build a 5-email welcome sequence for [product]" />
          <CopyablePrompt prompt="Create Google Ads for [product] targeting [audience]" />
          <CopyablePrompt prompt="Write a re-engagement sequence for churned users" />
          <CopyablePrompt prompt="Design a product launch email series" />
        </div>

        <h3 className="text-sm font-semibold text-gray-300 mb-3">Growth & Strategy</h3>
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          <CopyablePrompt prompt="Design a referral program for [product]" />
          <CopyablePrompt prompt="Generate 50 marketing ideas ranked by effort vs impact" />
          <CopyablePrompt prompt="What free tools could drive signups for [product]?" />
          <CopyablePrompt prompt="Analyze and optimize pricing for [product]" />
        </div>

        {/* Link to full prompt flows */}
        <Link
          to="/tools/prompt-flows"
          className="block bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-4 hover:border-cyan-500 transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap size={16} className="text-cyan-400" />
              <div>
                <p className="text-sm font-medium text-cyan-300">Want multi-step workflows?</p>
                <p className="text-xs text-gray-400">Browse 6 complete prompt flows — launch, SEO, CRO, growth, email, and competitor capture.</p>
              </div>
            </div>
            <ArrowRight size={16} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">FAQ</h2>

        <div className="space-y-3">
          <Expandable title="What are Marketing Skills?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>Marketing Skills are structured instructions built on Claude Code's Skills system. Each skill turns Claude into a domain expert for a specific marketing task — like running a CRO audit, writing email sequences, or building SEO content.</p>
              <p>Instead of vague prompts, skills contain expert frameworks, best practices, and step-by-step processes that produce professional-quality marketing output.</p>
            </div>
          </Expandable>

          <Expandable title="Which skill should I start with?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>Start with <strong className="text-gray-200">product-marketing-context</strong>. It creates a reference document that every other skill reads from — your positioning, audience, voice, and competitors.</p>
              <p>After that, the path depends on your stage:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong className="text-gray-200">Pre-launch:</strong> copywriting → page-cro → content-strategy</li>
                <li><strong className="text-gray-200">Post-launch:</strong> analytics-tracking → ab-test-setup → paid-ads</li>
                <li><strong className="text-gray-200">Growth stage:</strong> referral-program → free-tool-strategy → programmatic-seo</li>
              </ul>
            </div>
          </Expandable>

          <Expandable title="Do I need the Operators Academy workflow installed?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>No, Marketing Skills work with any Claude Code setup. However, the Operators Academy workflow adds session continuity, documentation tracking, and specialized agents that make the skills more effective.</p>
              <p>We recommend installing both for the best experience. <Link to="/tools/install" className="text-teal-400 hover:text-teal-300">Install the workflow →</Link></p>
            </div>
          </Expandable>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 border border-teal-500/30 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Ready to build your marketing engine?</h2>
          <div className="bg-gray-950 rounded-lg p-4 font-mono text-sm max-w-2xl mx-auto mb-4 flex items-center justify-between gap-4">
            <div className="overflow-x-auto">
              <span className="text-gray-500">$ </span>
              <span className="text-green-400">npx</span>
              <span className="text-gray-300"> skills add coreyhaines31/marketingskills</span>
            </div>
            <CopyButton text={NPX_CMD} />
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400 flex-wrap">
            <Link to="/tools/prompt-flows" className="flex items-center gap-1 hover:text-cyan-300 transition-colors">
              <Zap size={14} />
              Prompt flows
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/course#module5" className="flex items-center gap-1 hover:text-teal-300 transition-colors">
              <BookOpen size={14} />
              Marketing module
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/tools/install" className="flex items-center gap-1 hover:text-purple-300 transition-colors">
              <ArrowRight size={14} />
              Install workflow
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/setup/openclaw" className="flex items-center gap-1 hover:text-orange-300 transition-colors">
              <Bot size={14} />
              Set up OpenClaw
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
