# Global Claude Code Instructions

> This file configures Claude Code behavior across all projects.
> Installed from: https://operators-academy.vercel.app/install

---

## Project Documentation System

Maintain these documentation files to ensure continuity between sessions:

| File | Purpose | Analogy |
|------|---------|---------|
| **CONTEXT.md** | Domain knowledge & background | Internal wiki page |
| **TASKS.md** | Active task tracking | Trello board in markdown |
| **PLAN.md** | Strategic planning (per feature) | Architectural blueprint |
| **PROGRESS.md** | Session-by-session log | Pilot's flight log |
| **TEST_LOG.md** | QA activities & bug tracking | Lab notebook |

### File Creation Priority

1. **CONTEXT.md** — Establish domain knowledge first
2. **TASKS.md** — Active task tracking
3. **TEST_LOG.md** — Initialize QA tracking
4. **PLAN.md** — Think through complex work (as needed)
5. **PROGRESS.md** — Start logging sessions and completed work

---

## Trigger Phrases

### Documentation Triggers
| Phrase | Action |
|--------|--------|
| "wrap up" / "end session" / "done for today" | Update PROGRESS.md |
| "update tasks" / "mark done" / "what's next" | Update TASKS.md |
| "let's plan" / "think through" | Create/update PLAN.md |
| "update context" / "add to glossary" | Update CONTEXT.md |
| "initialize project" / "set up docs" | Create all missing files |
| "let's continue" / "pick up where we left off" | Read docs and resume |

### QA Triggers
| Phrase | Action |
|--------|--------|
| "run QA" / "quality check" | Run full QA cycle |
| "test this" / "verify this works" | Run feature tests |
| "debug this" / "why is this failing" | Investigate bug |
| "add logging" / "make observable" | Add strategic logging |

---

## Session Management

### Starting a Session
```
Read CLAUDE.md, TASKS.md, PROGRESS.md, and CONTEXT.md.
Tell me current progress and recommended next action.
Then help me continue.
```

### Ending a Session
```
Before we pause:
1. Update TASKS.md with current progress
2. Commit changes: git add . && git commit -m "WIP: [task]"
3. Tell me exactly where we left off
```

### Context Commands
- `/compact` — Summarize and continue
- `/clear` — Full reset (wrap up first!)
