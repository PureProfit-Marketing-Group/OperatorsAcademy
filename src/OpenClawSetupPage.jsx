import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, Terminal, ChevronRight, ChevronDown, Home, ArrowRight, Bot, BookOpen, Server, Laptop } from 'lucide-react';

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

const Expandable = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-800 transition-colors text-left"
      >
        <span className="flex-1 font-medium text-gray-200">{title}</span>
        {isOpen ? <ChevronDown size={18} className="text-gray-400" /> : <ChevronRight size={18} className="text-gray-400" />}
      </button>
      {isOpen && <div className="p-4 border-t border-gray-700">{children}</div>}
    </div>
  );
};

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
      className="group bg-gray-800 border border-gray-700 rounded-lg p-4 text-left hover:border-orange-500/50 transition-all w-full"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm text-gray-300 font-mono leading-relaxed">{prompt}</p>
        <span className="flex-shrink-0 mt-0.5">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-500 group-hover:text-orange-400 transition-colors" />}
        </span>
      </div>
    </button>
  );
};

const StepBlock = ({ number, title, command, note }) => (
  <div className="flex gap-4 items-start">
    <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
      <span className="text-orange-400 text-sm font-bold">{number}</span>
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold mb-2">{title}</h3>
      {command && (
        <div className="bg-gray-950 border border-gray-700 rounded-lg p-3 mb-2">
          <div className="flex items-center justify-between gap-2">
            <code className="text-sm text-green-400 font-mono overflow-x-auto block">{command}</code>
            <CopyButton text={command} />
          </div>
        </div>
      )}
      {note && <p className="text-sm text-gray-400">{note}</p>}
    </div>
  </div>
);

export default function OpenClawSetupPage() {
  const [path, setPath] = useState('vps');

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
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm mb-6">
          <Bot size={14} />
          24/7 AI agent, under $10/month
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Set Up OpenClaw
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your personal AI agent that runs 24/7, connects to your messaging apps, and actually executes tasks on your behalf.
        </p>
      </div>

      {/* Path Chooser */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="flex items-center justify-center gap-2 p-1 bg-gray-800 rounded-xl w-fit mx-auto">
          <button
            onClick={() => setPath('vps')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${path === 'vps' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' : 'text-gray-400 hover:text-gray-300'}`}
          >
            <Server size={16} />
            VPS ($4/mo)
          </button>
          <button
            onClick={() => setPath('mac')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${path === 'mac' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' : 'text-gray-400 hover:text-gray-300'}`}
          >
            <Laptop size={16} />
            Mac Mini (local)
          </button>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Prerequisites — {path === 'vps' ? 'VPS Path' : 'Mac Mini Path'}</h2>
          <div className="space-y-3">
            {path === 'vps' ? (
              <>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">VPS account (Hetzner, DigitalOcean, or similar)</p>
                    <p className="text-xs text-gray-500">CX22 or equivalent — 2 vCPU, 4GB RAM, ~$4/month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">SSH access to your server</p>
                    <p className="text-xs text-gray-500">Password or SSH key authentication</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Anthropic API key</p>
                    <p className="text-xs text-gray-500">Get one at console.anthropic.com</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Mac Mini M1 or newer</p>
                    <p className="text-xs text-gray-500">16GB RAM recommended for local model support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Homebrew installed</p>
                    <p className="text-xs text-gray-500">brew.sh — macOS package manager</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Anthropic API key</p>
                    <p className="text-xs text-gray-500">Get one at console.anthropic.com</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Install Steps */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">
          {path === 'vps' ? 'VPS Setup Steps' : 'Mac Mini Setup Steps'}
        </h2>

        <div className="space-y-6">
          {path === 'vps' ? (
            <>
              <StepBlock
                number={1}
                title="SSH into your server"
                command="ssh root@YOUR_SERVER_IP"
                note="Replace YOUR_SERVER_IP with your VPS IP address."
              />
              <StepBlock
                number={2}
                title="Install Docker"
                command="curl -fsSL https://get.docker.com | sh"
                note="Docker runs OpenClaw in an isolated container."
              />
              <StepBlock
                number={3}
                title="Install OpenClaw"
                command="docker run -d --name openclaw --restart unless-stopped -e ANTHROPIC_API_KEY=your_key_here ghcr.io/nicepkg/openclaw:latest"
                note="Replace your_key_here with your Anthropic API key."
              />
              <StepBlock
                number={4}
                title="Configure the model"
                command="docker exec openclaw openclaw config set model claude-haiku-4-5-20251001"
                note="Start with Haiku for cost efficiency. Add Sonnet as a fallback for complex tasks."
              />
              <StepBlock
                number={5}
                title="Start the daemon"
                command="docker exec openclaw openclaw start --daemon"
                note="OpenClaw now runs 24/7, surviving reboots and auto-restarting on crashes."
              />
            </>
          ) : (
            <>
              <StepBlock
                number={1}
                title="Install Homebrew (if not already installed)"
                command='/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
                note="Skip this if you already have Homebrew."
              />
              <StepBlock
                number={2}
                title="Install Node.js"
                command="brew install node"
                note="OpenClaw requires Node.js 18+."
              />
              <StepBlock
                number={3}
                title="Install OpenClaw"
                command="npm install -g openclaw"
                note="Installs the OpenClaw CLI globally."
              />
              <StepBlock
                number={4}
                title="Configure and install as a service"
                command="openclaw init && openclaw config set model claude-haiku-4-5-20251001 && openclaw service install"
                note="Registers OpenClaw as a macOS launch agent that starts on boot."
              />
              <StepBlock
                number={5}
                title="Enable iMessage integration"
                command="openclaw integrations enable imessage"
                note="Mac-exclusive: lets you message your agent from iMessage on any Apple device."
              />
            </>
          )}
        </div>
      </div>

      {/* Prompt Library */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-2">Prompt Library</h2>
        <p className="text-gray-400 text-sm mb-6">Click any prompt to copy it. Send to your OpenClaw agent to get started.</p>

        <div className="grid md:grid-cols-2 gap-3">
          <CopyablePrompt prompt="Hey, are you there? Tell me your status and what you can help with." />
          <CopyablePrompt prompt="Enable WhatsApp integration and show me the QR code" />
          <CopyablePrompt prompt="Enable Telegram integration and walk me through connecting" />
          <CopyablePrompt prompt="List all active integrations and their status" />
          <CopyablePrompt prompt="Every morning at 8am, send me a briefing with weather, top 3 calendar events, and urgent unread emails" />
          <CopyablePrompt prompt="Configure a daily cost alert for $0.50 and set max model to claude-haiku with sonnet fallback for complex tasks only" />
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">FAQ</h2>

        <div className="space-y-3">
          <Expandable title="Do I need a Mac Mini?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>No. The VPS path works on any cloud server and costs $4-13/month. A Mac Mini is only needed if you want iMessage integration or prefer running everything locally.</p>
              <p>We recommend starting with a VPS even if you plan to go local later — it's the fastest way to learn how OpenClaw works.</p>
            </div>
          </Expandable>

          <Expandable title="What does it cost to run?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>Two costs: server and API.</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong className="text-gray-200">Server:</strong> $0 (Mac you own) to $4-13/month (VPS)</li>
                <li><strong className="text-gray-200">API:</strong> $1-8/month typical usage with Haiku as the default model</li>
              </ul>
              <p>Total: under $10/month for most users. Set a cost alert to avoid surprises.</p>
            </div>
          </Expandable>

          <Expandable title="Is it secure?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>OpenClaw runs on <em>your</em> infrastructure — your VPS or your Mac. Your data never passes through third-party servers (except the AI model API calls).</p>
              <p>The API key is stored locally on your machine. For VPS setups, use SSH keys instead of passwords and keep your server updated.</p>
            </div>
          </Expandable>

          <Expandable title="Which messaging app should I connect first?">
            <div className="text-sm text-gray-400 space-y-2">
              <p>Depends on your setup:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong className="text-gray-200">Mac Mini:</strong> iMessage — it's the most seamless and works across all Apple devices</li>
                <li><strong className="text-gray-200">VPS:</strong> WhatsApp or Telegram — both work great, WhatsApp is more familiar for most people</li>
              </ul>
              <p>You can connect multiple apps later. Start with the one you use most.</p>
            </div>
          </Expandable>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-orange-900/30 to-amber-900/30 border border-orange-500/30 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">Ready to deploy your AI agent?</h2>
          <p className="text-gray-400 mb-4">Follow the full walkthrough in Module 6 of the course for detailed explanations of every step.</p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <Link to="/course#module6" className="flex items-center gap-1 hover:text-orange-300 transition-colors">
              <BookOpen size={14} />
              OpenClaw module in the course
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/install" className="flex items-center gap-1 hover:text-purple-300 transition-colors">
              <ArrowRight size={14} />
              Install the workflow
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
