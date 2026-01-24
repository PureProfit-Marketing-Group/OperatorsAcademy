import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { BookOpen, Terminal, Home } from 'lucide-react'
import ClaudeCodeGuide from './ClaudeCodeGuide'
import OperatorAcademy from './OperatorAcademy'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
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
              Start Learning <span>→</span>
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
              Explore Guide <span>→</span>
            </div>
          </Link>
        </div>

        <p className="text-gray-600 text-sm mt-12">
          Built for developers learning AI-powered development
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/course" element={<OperatorAcademy />} />
      <Route path="/claude-code-guide" element={<ClaudeCodeGuide />} />
    </Routes>
  )
}
