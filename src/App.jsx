import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import AuthModal from './components/AuthModal'
import CookieBanner from './components/CookieBanner'
import GatedRoute from './components/GatedRoute'
import SiteNav from './components/SiteNav'
import HomePage from './HomePage'
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
import CoopPage from './CoopPage'
import VisionSystemGuide from './VisionSystemGuide'
import PremiumToolkitPage from './PremiumToolkitPage'
import SettingsPage from './SettingsPage'
import PrivacyPage from './PrivacyPage'


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <SiteNav />
      <ScrollToTop />
      <AuthModal />
      <CookieBanner />
      <div className="pt-12">
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Course routes with shared layout — public */}
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

        {/* Tools routes — gated */}
        <Route path="/tools/install" element={<GatedRoute><InstallPage /></GatedRoute>} />
        <Route path="/tools/prompt-flows" element={<GatedRoute><PromptFlowsPage /></GatedRoute>} />
        <Route path="/tools/mission-control" element={<GatedRoute><MissionControlPage /></GatedRoute>} />
        <Route path="/tools/session-monitor" element={<GatedRoute><SessionMonitorPage /></GatedRoute>} />
        <Route path="/tools/claude-code-guide" element={<GatedRoute><ClaudeCodeGuide /></GatedRoute>} />
        <Route path="/tools/coop" element={<GatedRoute><CoopPage /></GatedRoute>} />
        <Route path="/tools/premium" element={<GatedRoute requiredTier="premium"><PremiumToolkitPage /></GatedRoute>} />
        <Route path="/tools/vision-system" element={<GatedRoute requiredTier="premium"><VisionSystemGuide /></GatedRoute>} />

        {/* Settings — gated */}
        <Route path="/settings" element={<GatedRoute><SettingsPage /></GatedRoute>} />

        {/* Privacy — public */}
        <Route path="/privacy" element={<PrivacyPage />} />

        {/* Redirect old routes */}
        <Route path="/claude-code-guide" element={<Navigate to="/tools/claude-code-guide" replace />} />

        {/* Keep old setup routes working */}
        <Route path="/install" element={<Navigate to="/tools/install" replace />} />
        <Route path="/setup/marketing" element={<GatedRoute><MarketingSetupPage /></GatedRoute>} />
        <Route path="/setup/openclaw" element={<GatedRoute><OpenClawSetupPage /></GatedRoute>} />
        <Route path="/prompt-flows" element={<Navigate to="/tools/prompt-flows" replace />} />
        <Route path="/mission-control" element={<Navigate to="/tools/mission-control" replace />} />
        <Route path="/session-monitor" element={<Navigate to="/tools/session-monitor" replace />} />
      </Routes>
      </div>
    </AuthProvider>
  )
}
