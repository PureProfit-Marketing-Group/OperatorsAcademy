import React, { useEffect } from 'react'
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import { BookOpen, Terminal, TrendingUp, Bot, Download, Zap, Monitor, Globe, ArrowRight, ChevronRight } from 'lucide-react'
import SiteNav from './components/SiteNav'
import CourseLayout from './components/CourseLayout'
import StartHere from './course/StartHere'
import ClaudeAI from './course/ClaudeAI'
import ClaudeCode from './course/ClaudeCode'
import N8n from './course/N8n'
import PuttingItTogether from './course/PuttingItTogether'
import Marketing from './course/Marketing'
import OpenClaw from './course/OpenClaw'
import ProjectSystem from './course/ProjectSystem'
import InstallPage from './InstallPage'
import MarketingSetupPage from './MarketingSetupPage'
import OpenClawSetupPage from './OpenClawSetupPage'
import PromptFlowsPage from './PromptFlowsPage'
import MissionControlPage from './MissionControlPage'
import SessionMonitorPage from './SessionMonitorPage'
import ClaudeCodeGuide from './ClaudeCodeGuide'

const courseModules = [
  { to: '/course', label: 'What is an Operator?', description: 'Learn the mindset behind building AI-powered systems', icon: BookOpen, color: 'blue' },
  { to: '/course/claude-ai', label: 'Claude.ai', description: 'Your AI thinking partner for brainstorming and planning', icon: BookOpen, color: 'blue' },
  { to: '/course/claude-code', label: 'Claude Code', description: 'Build real applications from natural language', icon: Terminal, color: 'purple' },
  { to: '/course/n8n', label: 'n8n', description: 'Connect apps and automate workflows', icon: Zap, color: 'cyan' },
  { to: '/course/putting-it-together', label: 'Build Your First Tool', description: 'Combine all three tools into a working system', icon: ArrowRight, color: 'teal' },
  { to: '/course/marketing', label: 'Marketing from Zero', description: '25 AI skills covering SEO, copy, ads, and growth', icon: TrendingUp, color: 'teal' },
  { to: '/course/openclaw', label: 'OpenClaw', description: 'Run a personal AI agent 24/7 for under $10/mo', icon: Bot, color: 'orange' },
  { to: '/course/project-system', label: 'Project Startup System', description: 'Documentation system for AI-assisted development', icon: Terminal, color: 'purple' },
]

const colorMap = {
  blue: { border: 'hover:border-blue-500', shadow: 'hover:shadow-blue-500/20', text: 'text-blue-400', bg: 'bg-blue-500/20' },
  purple: { border: 'hover:border-purple-500', shadow: 'hover:shadow-purple-500/20', text: 'text-purple-400', bg: 'bg-purple-500/20' },
  teal: { border: 'hover:border-teal-500', shadow: 'hover:shadow-teal-500/20', text: 'text-teal-400', bg: 'bg-teal-500/20' },
  cyan: { border: 'hover:border-cyan-500', shadow: 'hover:shadow-cyan-500/20', text: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  orange: { border: 'hover:border-orange-500', shadow: 'hover:shadow-orange-500/20', text: 'text-orange-400', bg: 'bg-orange-500/20' },
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Go from idea to working AI tool
        </h1>
        <p className="text-gray-400 text-lg mb-2 max-w-2xl mx-auto">
          Build AI-powered businesses using Claude.ai, Claude Code, and n8n — without writing code yourself.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          Free course. No signup required.
        </p>
        <Link
          to="/course"
          className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-colors text-lg font-medium"
        >
          Start the Course (Free)
          <ChevronRight size={20} />
        </Link>
      </div>

      {/* How it works */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Learn', desc: 'Master the three tools that power AI operators', color: 'text-blue-400' },
            { step: '2', title: 'Build', desc: 'Create real tools using natural language', color: 'text-purple-400' },
            { step: '3', title: 'Automate', desc: 'Connect everything to run 24/7', color: 'text-teal-400' },
          ].map(({ step, title, desc, color }) => (
            <div key={step} className="text-center p-6">
              <div className={`text-3xl font-bold ${color} mb-2`}>{step}</div>
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course modules */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold mb-6">Course Modules</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {courseModules.map(({ to, label, description, icon: Icon, color }) => {
            const c = colorMap[color];
            return (
              <Link
                key={to}
                to={to}
                className={`group bg-gray-800 border border-gray-700 rounded-xl p-5 ${c.border} transition-all hover:shadow-lg ${c.shadow}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 ${c.bg} rounded-lg`}>
                    <Icon className={c.text} size={20} />
                  </div>
                  <h3 className="font-semibold">{label}</h3>
                </div>
                <p className="text-gray-400 text-sm">{description}</p>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Tools section */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold mb-6">Tools</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link
            to="/tools/install"
            className="group bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-5 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Download className="text-purple-400" size={20} />
              </div>
              <h3 className="font-semibold">Install the Workflow</h3>
            </div>
            <p className="text-gray-400 text-sm">One command to set up CLAUDE.md, agents, status bar, and more.</p>
          </Link>

          <Link
            to="/tools/claude-code-guide"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <BookOpen className="text-blue-400" size={20} />
              </div>
              <h3 className="font-semibold">Quick Reference</h3>
            </div>
            <p className="text-gray-400 text-sm">Copy-paste templates, triggers, commands, and file templates.</p>
          </Link>

          <Link
            to="/tools/prompt-flows"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Zap className="text-cyan-400" size={20} />
              </div>
              <h3 className="font-semibold">Prompt Flows</h3>
            </div>
            <p className="text-gray-400 text-sm">Copy-paste prompt sequences for launching products, SEO, and more.</p>
          </Link>

          <Link
            to="/tools/mission-control"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Globe className="text-cyan-400" size={20} />
              </div>
              <h3 className="font-semibold">Clu Mission Control</h3>
            </div>
            <p className="text-gray-400 text-sm">Web-based Claude Code client for browsing logs and managing sessions.</p>
          </Link>

          <Link
            to="/tools/session-monitor"
            className="group bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-cyan-500 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Monitor className="text-cyan-400" size={20} />
              </div>
              <h3 className="font-semibold">Session Monitor</h3>
            </div>
            <p className="text-gray-400 text-sm">Terminal dashboard for monitoring Claude Code sessions and deployments.</p>
          </Link>
        </div>
      </div>

      <div className="text-center pb-12">
        <p className="text-gray-600 text-sm">
          Built for developers learning AI-powered development
        </p>
      </div>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <SiteNav />
      <ScrollToTop />
      <div className="pt-12">
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Course routes with shared layout */}
        <Route path="/course" element={<CourseLayout />}>
          <Route index element={<StartHere />} />
          <Route path="claude-ai" element={<ClaudeAI />} />
          <Route path="claude-code" element={<ClaudeCode />} />
          <Route path="n8n" element={<N8n />} />
          <Route path="putting-it-together" element={<PuttingItTogether />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="openclaw" element={<OpenClaw />} />
          <Route path="project-system" element={<ProjectSystem />} />
        </Route>

        {/* Tools routes */}
        <Route path="/tools/install" element={<InstallPage />} />
        <Route path="/tools/prompt-flows" element={<PromptFlowsPage />} />
        <Route path="/tools/mission-control" element={<MissionControlPage />} />
        <Route path="/tools/session-monitor" element={<SessionMonitorPage />} />
        <Route path="/tools/claude-code-guide" element={<ClaudeCodeGuide />} />

        {/* Redirect old routes */}
        <Route path="/claude-code-guide" element={<Navigate to="/tools/claude-code-guide" replace />} />

        {/* Keep old setup routes working */}
        <Route path="/install" element={<Navigate to="/tools/install" replace />} />
        <Route path="/setup/marketing" element={<MarketingSetupPage />} />
        <Route path="/setup/openclaw" element={<OpenClawSetupPage />} />
        <Route path="/prompt-flows" element={<Navigate to="/tools/prompt-flows" replace />} />
        <Route path="/mission-control" element={<Navigate to="/tools/mission-control" replace />} />
        <Route path="/session-monitor" element={<Navigate to="/tools/session-monitor" replace />} />
      </Routes>
      </div>
    </>
  )
}
