import React, { useState, useEffect } from 'react';
import { Lock, Eye, FileText, Gauge, Layers, Shield, RotateCcw, ClipboardCheck, Compass, Target, Terminal } from 'lucide-react';

const EXPECTED_HASH = 'ae5ce162888ee3ebe974976cac5ab94a3f55049f8515884883d579fb3fa378d2';

async function hashPassword(value) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

function PasswordGate({ onUnlock }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const hex = await hashPassword(input);
    if (hex === EXPECTED_HASH) {
      localStorage.setItem('vs-auth', 'true');
      onUnlock();
    } else {
      setError(true);
      setInput('');
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-sm w-full mx-4">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-purple-500/20 rounded-full mb-4">
            <Lock className="text-purple-400" size={28} />
          </div>
          <h1 className="text-xl font-bold mb-2">Vision System Guide</h1>
          <p className="text-gray-400 text-sm mb-6">Enter password to continue.</p>
          <input
            type="password"
            value={input}
            onChange={e => { setInput(e.target.value); setError(false); }}
            placeholder="Password"
            autoFocus
            className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 mb-3"
          />
          {error && <p className="text-red-400 text-sm mb-3">Wrong password.</p>}
          <button
            type="submit"
            className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition-colors"
          >
            Unlock
          </button>
        </div>
      </form>
    </div>
  );
}

function Section({ icon: Icon, title, color, children }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 ${color} rounded-lg`}>
          <Icon className="text-white" size={20} />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-700">
            {headers.map((h, i) => (
              <th key={i} className="text-left py-2 px-3 text-gray-400 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-800">
              {row.map((cell, j) => (
                <td key={j} className="py-2 px-3 text-gray-300">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CheatSheet() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 pt-8 pb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
          <Eye size={14} />
          Personal Reference
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Vision System Cheat Sheet</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          At-a-glance reference for the Vision System — slash commands, trigger phrases, confidence tiers, eval process, and the full operational layer.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">

        {/* 1. Slash Commands */}
        <Section icon={Terminal} title="Slash Commands" color="bg-purple-500/30">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex items-start gap-4">
              <code className="text-purple-400 font-mono text-sm whitespace-nowrap mt-0.5">/init-vision</code>
              <div className="text-sm text-gray-300">
                <p className="mb-2">Initializes the Vision System for a project. Runs silently through the codebase, then launches a brain dump + gap-filling interview.</p>
                <p className="text-gray-400"><strong>Produces:</strong> VISION.md, EVAL.md, project-level CLAUDE.md snippet</p>
                <p className="text-gray-400 mt-1"><strong>When:</strong> Project kickoff, or adding the vision system to an existing project</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 2. Trigger Phrases */}
        <Section icon={FileText} title="Trigger Phrases" color="bg-blue-500/30">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <Table
              headers={['Phrase', 'Action']}
              rows={[
                [<code className="text-blue-400">"init vision" / "set up vision"</code>, 'Run /init-vision skill'],
                [<code className="text-blue-400">"run eval" / "vision eval"</code>, 'Run full eval session via EVAL.md checklist'],
                [<code className="text-blue-400">"update vision"</code>, 'Update VISION.md with accumulated decisions'],
                [<code className="text-blue-400">"vision audit"</code>, 'Review VISION.md against recent sessions'],
                [<code className="text-blue-400">"let\'s continue"</code>, 'Resume — reads VISION.md on startup, outputs confirmation'],
                [<code className="text-blue-400">"wrap up" / "end session"</code>, 'Writes Vision Decisions section to PROGRESS.md'],
              ]}
            />
          </div>
        </Section>

        {/* 3. File Legend */}
        <Section icon={FileText} title="File Legend" color="bg-teal-500/30">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <Table
              headers={['File', 'Purpose', 'When to Reference']}
              rows={[
                [<code className="text-teal-400">VISION.md</code>, 'Intent layer — judgment calls, tradeoffs, priorities', 'Ambiguous decisions, design choices, "what would the user want?"'],
                [<code className="text-teal-400">EVAL.md</code>, 'Evaluation layer — how to verify the system works', 'Every ~10 sessions or biweekly eval'],
                [<code className="text-teal-400">CONTEXT.md</code>, 'Facts — APIs, stack, business rules, formats', 'Implementation details, "how does X work?"'],
                [<code className="text-teal-400">CLAUDE.md</code>, 'Operational layer — how to use the above files', 'Always loaded automatically on session start'],
              ]}
            />
            <div className="mt-3 text-xs text-gray-500">
              <strong>Routing rule:</strong> Judgment calls → VISION.md &nbsp;|&nbsp; Facts → CONTEXT.md &nbsp;|&nbsp; Unsure → VISION.md first
            </div>
          </div>
        </Section>

        {/* 4. Confidence Tiers */}
        <Section icon={Gauge} title="Confidence Tiers" color="bg-green-500/30">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800 border border-green-500/30 rounded-xl p-5">
              <div className="text-green-400 font-bold text-sm mb-2">HIGH CONFIDENCE</div>
              <p className="text-sm text-gray-300 mb-3">VISION.md clearly covers this decision.</p>
              <p className="text-xs text-gray-400"><strong>Action:</strong> Proceed. Note the decision briefly.</p>
              <div className="mt-3 bg-gray-900 rounded-lg p-3 text-xs text-gray-400 font-mono">
                "Per VISION.md's preference for simplicity, I used a flat data structure."
              </div>
            </div>
            <div className="bg-gray-800 border border-yellow-500/30 rounded-xl p-5">
              <div className="text-yellow-400 font-bold text-sm mb-2">MEDIUM CONFIDENCE</div>
              <p className="text-sm text-gray-300 mb-3">Partially covered, needs inference.</p>
              <p className="text-xs text-gray-400"><strong>Action:</strong> Proceed but flag it.</p>
              <div className="mt-3 bg-gray-900 rounded-lg p-3 text-xs text-gray-400 font-mono">
                "Based on VISION.md's preference for [X], I went with [Y]. Adjust?"
              </div>
            </div>
            <div className="bg-gray-800 border border-red-500/30 rounded-xl p-5">
              <div className="text-red-400 font-bold text-sm mb-2">LOW CONFIDENCE</div>
              <p className="text-sm text-gray-300 mb-3">Not covered, or significant implications.</p>
              <p className="text-xs text-gray-400"><strong>Action:</strong> Stop and ask.</p>
              <div className="mt-3 bg-gray-900 rounded-lg p-3 text-xs text-gray-400 font-mono">
                Novel decisions → mention for Open Questions in VISION.md
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Precedence Chain */}
        <Section icon={Layers} title="Precedence Chain" color="bg-orange-500/30">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
              {['Live user instruction', 'Global CLAUDE.md', 'VISION.md', 'CONTEXT.md'].map((item, i) => (
                <React.Fragment key={item}>
                  <span className={`px-3 py-1.5 rounded-lg font-medium ${
                    i === 0 ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                    i === 1 ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                    i === 2 ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                  }`}>{item}</span>
                  {i < 3 && <span className="text-gray-500">&gt;</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-sm text-gray-400">
              <strong className="text-gray-300">Synthesis vs. Precedence:</strong> Most VISION.md / CONTEXT.md conflicts are complementary tensions, not true contradictions. "Prefer simplicity" + "complex integration required" = "simplest approach that satisfies the integration." Apply the hierarchy only for true contradictions.
            </div>
          </div>
        </Section>

        {/* 6. Constraint Architecture */}
        <Section icon={Shield} title="Constraint Architecture" color="bg-red-500/30">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 border border-green-500/30 rounded-xl p-5">
              <div className="text-green-400 font-bold text-sm mb-3">MUSTS</div>
              <p className="text-sm text-gray-400">Non-negotiable requirements. Every task must satisfy all of these before completion.</p>
              <div className="mt-3 text-xs text-gray-500">Verified during Quality Verification step</div>
            </div>
            <div className="bg-gray-800 border border-red-500/30 rounded-xl p-5">
              <div className="text-red-400 font-bold text-sm mb-3">MUST-NOTS</div>
              <p className="text-sm text-gray-400">Failure modes to actively prevent. Violation = stop and fix immediately.</p>
              <div className="mt-3 text-xs text-gray-500">Checked during Constraint Enforcement</div>
            </div>
            <div className="bg-gray-800 border border-blue-500/30 rounded-xl p-5">
              <div className="text-blue-400 font-bold text-sm mb-3">PREFERENCES</div>
              <p className="text-sm text-gray-400">Default choices when multiple valid approaches exist. Tiebreaker for ambiguous decisions.</p>
              <div className="mt-3 text-xs text-gray-500">Applied at Medium confidence level</div>
            </div>
            <div className="bg-gray-800 border border-yellow-500/30 rounded-xl p-5">
              <div className="text-yellow-400 font-bold text-sm mb-3">ESCALATION TRIGGERS</div>
              <p className="text-sm text-gray-400">Decisions Claude Code should NEVER make alone. Always stop and ask the user.</p>
              <div className="mt-3 text-xs text-gray-500">Checked before every task completion</div>
            </div>
          </div>
        </Section>

        {/* 7. Session Lifecycle */}
        <Section icon={RotateCcw} title="Session Lifecycle" color="bg-cyan-500/30">
          <div className="space-y-4">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
              <div className="text-cyan-400 font-bold text-sm mb-3">STARTUP</div>
              <ol className="text-sm text-gray-300 space-y-2 list-decimal list-inside">
                <li>Read PROGRESS.md (standard session start)</li>
                <li>Read VISION.md</li>
                <li>Output confirmation: <code className="text-cyan-400 text-xs">"Vision loaded: [top 2-3 decision defaults]. [N] open questions."</code></li>
                <li>If milestone reached last session, append: <code className="text-cyan-400 text-xs">"Vision review suggested."</code></li>
              </ol>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
              <div className="text-cyan-400 font-bold text-sm mb-3">DURING SESSION</div>
              <ol className="text-sm text-gray-300 space-y-2 list-decimal list-inside">
                <li>Every ambiguous decision → check VISION.md → assess confidence → act accordingly</li>
                <li>Before completing any task → verify Musts, Must-Nots, Escalation Triggers, Preferences</li>
                <li>Before marking significant work complete → check Acceptance Criteria</li>
              </ol>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
              <div className="text-cyan-400 font-bold text-sm mb-3">WRAP-UP</div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs text-gray-400">
                <div className="text-gray-300 mb-1">### Vision Decisions</div>
                <div>- <strong className="text-green-400">[High]:</strong> Used flat structure — Decision Framework: simplicity preference</div>
                <div>- <strong className="text-yellow-400">[Med]:</strong> Chose REST over GraphQL — inferred from "keep it simple" — Adjust?</div>
                <div className="text-gray-500 mt-1">Or: "None this session."</div>
              </div>
            </div>
          </div>
        </Section>

        {/* 8. Eval Session */}
        <Section icon={ClipboardCheck} title="Eval Session" color="bg-indigo-500/30">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
            <div className="flex flex-wrap gap-3 mb-4 text-xs">
              <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded">Trigger: "run eval" or "vision eval"</span>
              <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded">Cadence: every ~10 sessions or biweekly</span>
              <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded">Type: dedicated eval session</span>
            </div>
            <div className="text-sm text-gray-300 mb-4">
              <strong className="text-indigo-400">6-Step Checklist:</strong>
            </div>
            <ol className="text-sm text-gray-300 space-y-2 list-decimal list-inside mb-5">
              <li><strong>Review</strong> last 10 PROGRESS.md entries</li>
              <li><strong>Extract</strong> all Vision Decisions (High/Med/Low)</li>
              <li><strong>Score</strong> each CLAUDE.md subsection (table below)</li>
              <li><strong>Check</strong> Acceptance Criteria from VISION.md</li>
              <li><strong>Assess</strong> intent resolution gap — shrinking, stable, or growing?</li>
              <li><strong>Update</strong> VISION.md with accumulated decisions</li>
            </ol>
            <div className="text-sm text-gray-400 mb-3"><strong>Subsection Scoring:</strong></div>
            <Table
              headers={['Subsection', 'Times Fired', 'Correct Guidance', 'Caught Something', 'Score']}
              rows={[
                ['Confidence tiers', '—', '—', '—', '—'],
                ['File routing', '—', '—', '—', '—'],
                ['Constraint enforcement', '—', '—', '—', '—'],
                ['Vision evolution', '—', '—', '—', '—'],
                ['Context evolution', '—', '—', '—', '—'],
                ['Quality verification', '—', '—', '—', '—'],
              ]}
            />
            <div className="mt-3 text-xs text-gray-500">
              <strong>Decision:</strong> Any subsection scoring zero across 10 sessions gets cut.
            </div>
          </div>
        </Section>

        {/* 9. Four Disciplines */}
        <Section icon={Compass} title="The 4 Disciplines" color="bg-pink-500/30">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { num: '1', title: 'Prompt Craft', desc: 'Writing clear, structured instructions that produce reliable output. The words you type.', color: 'text-blue-400' },
              { num: '2', title: 'Context Engineering', desc: 'Curating the right information at the right time — CONTEXT.md, ARCHITECTURE.md, references. What the model can see.', color: 'text-green-400' },
              { num: '3', title: 'Intent Engineering', desc: 'Closing the gap between what you mean and what the model does. VISION.md, Decision Framework, Constraint Architecture. What the model should want.', color: 'text-purple-400' },
              { num: '4', title: 'Specification Engineering', desc: 'Producing specs precise enough that any competent implementer (human or AI) would build the same thing. Testable, unambiguous, complete.', color: 'text-orange-400' },
            ].map(d => (
              <div key={d.num} className="bg-gray-800 border border-gray-700 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-2xl font-bold ${d.color}`}>{d.num}</span>
                  <h3 className="font-semibold">{d.title}</h3>
                </div>
                <p className="text-sm text-gray-400">{d.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 10. The Benchmark */}
        <Section icon={Target} title="The Benchmark" color="bg-amber-500/30">
          <div className="bg-gray-800 border border-amber-500/30 rounded-xl p-6">
            <div className="text-center mb-4">
              <span className="text-2xl">&#127822;</span>
              <h3 className="text-lg font-bold mt-2">Honeycrisps, not Granny Smiths</h3>
            </div>
            <p className="text-sm text-gray-300 text-center max-w-xl mx-auto mb-4">
              The intent resolution gap test. You said "apples" — the model heard "apples" — but you meant <em>Honeycrisps</em> and it delivered <em>Granny Smiths</em>. Technically correct. Actually wrong.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 text-sm text-gray-400">
              <p><strong className="text-gray-300">The gap:</strong> The distance between the rich mental image in your head and the flat text spec the AI actually sees.</p>
              <p className="mt-2"><strong className="text-gray-300">VISION.md closes it</strong> by encoding your judgment calls, tradeoffs, and "what done looks like" — so the model doesn't have to guess.</p>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <div className="text-center pt-4 border-t border-gray-800">
          <button
            onClick={() => { localStorage.removeItem('vs-auth'); window.location.reload(); }}
            className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
          >
            Lock page
          </button>
        </div>
      </div>
    </div>
  );
}

export default function VisionSystemGuide() {
  const [unlocked, setUnlocked] = useState(() => localStorage.getItem('vs-auth') === 'true');

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => document.head.removeChild(meta);
  }, []);

  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  return <CheatSheet />;
}
