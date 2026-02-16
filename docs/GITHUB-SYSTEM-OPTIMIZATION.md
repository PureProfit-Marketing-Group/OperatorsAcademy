# GitHub System Optimization Guide

> **Author:** Clu 🟠  
> **Created:** 2026-02-16  
> **Purpose:** Document Enzo's optimized GitHub workflow

---

## Overview

This guide documents the GitHub system optimizations implemented for Enzo's development workflow. The goal: **automation over process changes** — keep the same coding habits while layering on features that work silently in the background.

---

## 1. GitHub Projects — Visual Roadmap

### What It Does
A Kanban board that provides visual progress tracking across all repositories.

### Project: "Enzo's Dev Roadmap"
- **URL:** https://github.com/users/ehoyos007/projects/[PROJECT_NUMBER]
- **Views:**
  - **All Tasks** — Everything in one place
  - **FHE Repos** — First Health Enrollment projects (tagged `fhe-roadmap`)
  - **Personal/Side Projects** — Non-FHE work

### FHE Repositories (tagged `fhe-roadmap`)
| Repository | Description |
|------------|-------------|
| fhe-2026 | FHE Engineering Dashboard |
| sales-coaching-ai-v2 | AI sales call analysis |
| stream-crm | Unified CRM replacing Bubble.io |
| stream-analysis | CRM Dashboard & Backend |
| scriptflow | Teleprompter for sales agents |
| TwilioDialer | Dialer system |
| fhe-life-calculator | Life insurance calculator |
| sales-transcript-ui | Transcript UI |
| Customerservicefhe | Customer service tools |
| ReachOut | Outreach system |
| stream-crm-64576 | Stream CRM variant |

### How Automation Works
1. **Issue created** → Auto-appears in "To Do" column
2. **Issue closed** → Auto-moves to "Done" column
3. **PR merged** → Linked issues auto-close

### Using Labels for Phases
Add these labels to issues for filtering:
- `phase:1`, `phase:2`, `phase:3` — Track project phases
- `priority:high`, `priority:low` — Prioritization
- `type:bug`, `type:feature`, `type:debt` — Categorization

---

## 2. Auto-PROGRESS.md Workflow

### What It Does
Automatically regenerates `PROGRESS.md` on every push to main — eliminating manual "wrap up" work.

### File Location
```
.github/workflows/auto-progress.yml
```

### What Gets Generated
- Last update timestamp
- Last 10 commits with relative timestamps
- Open issues list
- Placeholders for manual "Current Phase" and "Next Steps" sections

### Triggering Manually
```bash
gh workflow run auto-progress.yml
```

### Customizing
Edit the workflow file to add:
- Different sections
- More/fewer commits
- PR status
- Milestone progress

---

## 3. Linking Commits to Issues

### Auto-Close Issues
When you commit with keywords, issues auto-close:

```bash
git commit -m "Add user authentication - fixes #12"
git commit -m "Resolve login bug - closes #15"
```

**Keywords that work:**
- `fixes #N`
- `closes #N`
- `resolves #N`

### Reference Without Closing
```bash
git commit -m "Working on auth flow - ref #12"
```

---

## 4. Release Tags — Track Deployments

### Why Tag Releases
- Know exactly what code is deployed
- Easy rollback reference
- GitHub auto-generates release notes

### Creating a Release
```bash
# Tag current commit
git tag -a v1.0.0 -m "Initial production release"
git push --tags

# Or via GitHub CLI
gh release create v1.0.0 --generate-notes
```

### Semantic Versioning
- `v1.0.0` — Major release (breaking changes)
- `v1.1.0` — Minor release (new features)
- `v1.1.1` — Patch (bug fixes)

---

## 5. Sentry Integration (Optional)

### What It Does
- Sentry errors auto-create GitHub Issues
- Stack traces link to exact commits
- "Suspect commits" identifies which push caused bugs

### Setup
1. Go to Sentry → Settings → Integrations → GitHub
2. Connect your repositories
3. Enable "Create GitHub Issues" for error alerts

---

## 6. When to Use Branches

### Push to Main When:
- Small, confident changes
- Solo work, low risk
- Quick fixes

### Use a Branch When:
- Multi-day features
- Risky changes
- Want preview deploy (Vercel auto-deploys branches)

### Branch Workflow
```bash
# Create and switch to branch
git checkout -b feature/new-dashboard

# Work, commit, push
git add .
git commit -m "Add dashboard layout"
git push -u origin feature/new-dashboard

# GitHub auto-creates PR
# Vercel auto-deploys preview
# Review, then merge
```

---

## Quick Reference

### GitHub CLI Commands
```bash
# List your projects
gh project list

# Create an issue
gh issue create --title "Bug: login fails" --label "type:bug"

# List open issues
gh issue list --state open

# Close an issue
gh issue close 12

# Create a release
gh release create v1.0.0 --generate-notes

# Trigger workflow manually
gh workflow run auto-progress.yml
```

### Useful GitHub URLs
- **Your Projects:** https://github.com/ehoyos007?tab=projects
- **All Issues:** https://github.com/issues
- **All PRs:** https://github.com/pulls

---

## Maintenance

### Weekly (optional)
- Review Kanban board
- Close stale issues
- Update phase labels

### Per Deploy
- Tag release: `git tag -a vX.X.X -m "description"`
- Push tags: `git push --tags`

### Per Project
- Copy `.github/workflows/auto-progress.yml` to new repos
- Add repo to GitHub Project

---

## Troubleshooting

### Workflow not running?
```bash
# Check workflow status
gh run list --workflow=auto-progress.yml

# View logs
gh run view [RUN_ID] --log
```

### Issues not appearing on board?
- Ensure issue is in a repo added to the project
- Check project's auto-add rules

### Auth issues?
```bash
# Re-authenticate with project scopes
gh auth refresh -s project,read:project -h github.com
```
