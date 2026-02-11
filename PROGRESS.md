# PROGRESS.md

> Running log of work completed. Update at the end of each session.

---

## 2026-01-24 — Session 1

### Summary
Set up Operators Academy as a deployable React app and launched to production on Vercel.

### Completed
- [x] Explored codebase structure (two JSX educational components)
- [x] Created Vite + React + Tailwind CSS project structure
- [x] Configured React Router with home page and routes for both apps
- [x] Fixed `window.storage` → `localStorage` bug in OperatorAcademy component
- [x] Deployed to Vercel production
- [x] Initialized git repository
- [x] Created GitHub repo and pushed code

### Files Created
- `package.json` — Project dependencies and scripts
- `vite.config.js` — Vite build configuration
- `tailwind.config.js` — Tailwind CSS configuration
- `postcss.config.js` — PostCSS configuration
- `index.html` — HTML entry point
- `src/main.jsx` — React entry point with router
- `src/App.jsx` — Main app with routing to both courses
- `src/index.css` — Tailwind imports
- `src/ClaudeCodeGuide.jsx` — Moved from root (renamed export)
- `src/OperatorAcademy.jsx` — Moved from root (fixed storage API)
- `.gitignore` — Git ignore rules

### Decisions Made
- **Framework:** Chose Vite for fast builds and modern React support
- **Routing:** Used React Router to serve both apps from single deployment
- **Storage fix:** Replaced custom `window.storage` API with standard `localStorage`

### Blockers / Issues Encountered
- Original JSX files used `window.storage` (custom API) — fixed by converting to `localStorage`
- GitHub CLI not installed — installed via Homebrew

### Deployments
- **Vercel:** https://operators-academy-m5edcpoda-enzo-hoyos-projects.vercel.app
- **GitHub:** https://github.com/ehoyos007/OperatorsAcademy

### Next Steps
- [ ] Consider adding the Word doc content or removing it
- [ ] Add a custom domain if desired
- [ ] Consider adding meta tags for SEO/social sharing

---

## 2026-02-11 — Session 2

### Summary
Added a new course section covering the experimental Agent Teams feature in Claude Code.

### Completed
- [x] Fetched and analyzed full Agent Teams documentation from code.claude.com
- [x] Added section "2.7 Agent Teams (Experimental)" to Module 2 in OperatorAcademy.jsx
- [x] Content covers: what Agent Teams are, architecture, comparison with subagents, enabling, use cases, starting a team, and all current limitations
- [x] Added analogy (war room specialists) and pro tip (start with research tasks)
- [x] Added "Agent Teams" glossary entry
- [x] Verified build succeeds

### Files Changed
- `src/OperatorAcademy.jsx` — Added section 2.7 and glossary entry

### Decisions Made
- Placed Agent Teams as section 2.7 within Module 2 (Claude Code) since it's a Claude Code feature
- Covered the full feature overview rather than just limitations, so readers have context

### Next Steps
- [ ] Consider adding the Word doc content or removing it
- [ ] Add a custom domain if desired
- [ ] Consider adding meta tags for SEO/social sharing
- [ ] Deploy updated build to Vercel
