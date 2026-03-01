import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { BookOpen, Terminal, TrendingUp, Bot, Home, Download, Zap, Monitor, Globe } from 'lucide-react'
import SiteNav from './components/SiteNav'
import ClaudeCodeGuide from './ClaudeCodeGuide'
import OperatorAcademy from './OperatorAcademy'
import InstallPage from './InstallPage'
import MarketingSetupPage from './MarketingSetupPage'
import OpenClawSetupPage from './OpenClawSetupPage'
import PromptFlowsPage from './PromptFlowsPage'
import MissionControlPage from './MissionControlPage'
import SessionMonitorPage from './SessionMonitorPage'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Operators Academy
        </h1>
        <p className="text-gray-400 text-lg mb-12">
          Learn to build AI-powered systems with Claude.ai, Claude Code, and n8n
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            to="/course"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <BookOpen className="text-blue-400" size={24} />
              </div>
              <h2 className="text-xl font-semibold">Operator Academy Course</h2>
            </div>
            <p className="text-gray-400 text-left">
              Complete course covering Claude.ai, Claude Code, and n8n workflow automation. Perfect for beginners.
            </p>
            <div className="mt-4 text-blue-400 flex items-center gap-2 group-hover:gap-3 transition-all">
              Start Learning <span>&rarr;</span>
            </div>
          </Link>

          <Link
            to="/course#module6"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-all hover:shadow-lg hover:shadow-orange-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-500/20 rounded-lg">
                <Bot className="text-orange-400" size={24} />
              </div>
              <h2 className="text-xl font-semibold">OpenClaw Setup Guide</h2>
            </div>
            <p className="text-gray-400 text-left">
              Run a personal AI agent 24/7 for under $10/month. Skip the $600 Mac Mini — set up OpenClaw on a $4 VPS or locally.
            </p>
            <div className="mt-4 text-orange-400 flex items-center gap-2 group-hover:gap-3 transition-all">
              Set Up Your Agent <span>&rarr;</span>
            </div>
          </Link>

          <Link
            to="/course#module5"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-teal-500 transition-all hover:shadow-lg hover:shadow-teal-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-teal-500/20 rounded-lg">
                <TrendingUp className="text-teal-400" size={24} />
              </div>
              <h2 className="text-xl font-semibold">Marketing from Zero</h2>
            </div>
            <p className="text-gray-400 text-left">
              Build a complete marketing engine using 25 AI-powered skills. Covers SEO, copywriting, ads, email, and growth.
            </p>
            <div className="mt-4 text-teal-400 flex items-center gap-2 group-hover:gap-3 transition-all">
              Start Marketing <span>&rarr;</span>
            </div>
          </Link>

          <Link
            to="/prompt-flows"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <Zap className="text-cyan-400" size={24} />
              </div>
              <h2 className="text-xl font-semibold">Prompt Flows</h2>
            </div>
            <p className="text-gray-400 text-left">
              Copy-paste prompt sequences for Claude Code. Launch products, capture SEO traffic, optimize conversions, and more.
            </p>
            <div className="mt-4 text-cyan-400 flex items-center gap-2 group-hover:gap-3 transition-all">
              Browse Flows <span>&rarr;</span>
            </div>
          </Link>

          <Link
            to="/claude-code-guide"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Terminal className="text-purple-400" size={24} />
              </div>
              <h2 className="text-xl font-semibold">Claude Code Guide</h2>
            </div>
            <p className="text-gray-400 text-left">
              Deep dive into the Claude Code Project Startup System. For developers ready to master AI-assisted development.
            </p>
            <div className="mt-4 text-purple-400 flex items-center gap-2 group-hover:gap-3 transition-all">
              Explore Guide <span>&rarr;</span>
            </div>
          </Link>

          <Link
            to="/mission-control"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <Globe className="text-cyan-400" size={24} />
              </div>
              <h2 className="text-xl font-semibold">Clu Mission Control</h2>
            </div>
            <p className="text-gray-400 text-left">
              Web-based Claude Code client. Browse chat logs, start sessions, search conversations, and manage everything from your browser.
            </p>
            <div className="mt-4 text-cyan-400 flex items-center gap-2 group-hover:gap-3 transition-all">
              Get Dashboard <span>&rarr;</span>
            </div>
          </Link>

          <Link
            to="/session-monitor"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <Monitor className="text-cyan-400" size={24} />
              </div>
              <h2 className="text-xl font-semibold">Session Monitor</h2>
            </div>
            <p className="text-gray-400 text-left">
              Go-based TUI terminal dashboard for monitoring Claude Code sessions, git repos, deployments, and alerts in real-time.
            </p>
            <div className="mt-4 text-cyan-400 flex items-center gap-2 group-hover:gap-3 transition-all">
              Get Dashboard <span>&rarr;</span>
            </div>
          </Link>
        </div>

        <Link
          to="/install"
          className="group mt-6 block bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Download className="text-purple-400" size={24} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Install the Workflow</h2>
                <p className="text-gray-400 text-sm mt-1">
                  One command to set up the full Claude Code workflow — docs, agents, status bar, and more.
                </p>
              </div>
            </div>
            <div className="text-purple-400 flex items-center gap-2 group-hover:gap-3 transition-all">
              Install <span>&rarr;</span>
            </div>
          </div>
        </Link>

        <p className="text-gray-600 text-sm mt-12">
          Built for developers learning AI-powered development
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <SiteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<OperatorAcademy />} />
        <Route path="/claude-code-guide" element={<ClaudeCodeGuide />} />
        <Route path="/install" element={<InstallPage />} />
        <Route path="/setup/marketing" element={<MarketingSetupPage />} />
        <Route path="/setup/openclaw" element={<OpenClawSetupPage />} />
        <Route path="/prompt-flows" element={<PromptFlowsPage />} />
        <Route path="/mission-control" element={<MissionControlPage />} />
        <Route path="/session-monitor" element={<SessionMonitorPage />} />
      </Routes>
    </>
  )
}
