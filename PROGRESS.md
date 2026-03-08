# Project Progress

> Auto-generated on every push. Last updated: $(date -u '+%Y-%m-%d %H:%M UTC')

## Recent Activity

### Last 10 Commits
```
e25d22b Add user auth, gated tools, privacy page, and cookie banner (6 seconds ago)
0b354ed 📊 Auto-update PROGRESS.md (2 hours ago)
0f43dc8 Update Co-Op page with Co-Op Ask, Guided Merge, categorized tools, and expanded FAQ (2 hours ago)
c8e8056 📊 Auto-update PROGRESS.md (5 days ago)
e8f0883 Block crawlers and AI tools from Vision System page (5 days ago)
03cdc35 📊 Auto-update PROGRESS.md (5 days ago)
00abe17 Add Vision System card to homepage Tools grid (5 days ago)
905f119 📊 Auto-update PROGRESS.md (5 days ago)
acc81bc Add password-protected Vision System cheat sheet page (5 days ago)
02624d2 📊 Auto-update PROGRESS.md (6 days ago)
```

### Open Issues
_No open issues_

---

## Current Phase

User auth & lead capture — deployed, awaiting live testing.

## Session Log

### Session 18 — User Auth, Gated Tools, Email Hook (2026-03-07)

**Summary:** Added full user auth with Supabase (email/password + Google OAuth), gated all tool pages and copy buttons, built multi-brand email hook for Satori/OA routing.

**What was built:**

Operators Academy (15 new/modified files):
- Supabase Auth integration (shared Satori project, `source` column for user origin)
- AuthContext with 7-day soft email verification (Google OAuth auto-verified)
- Dark auth modal (signup/login tabs, Google OAuth button)
- GatedRoute wrapping all `/tools/*` and `/setup/*` pages
- GatedCopyButton for auth-gated copy buttons
- UserMenu in SiteNav (login/signup + user dropdown)
- Cookie consent banner for Vercel Analytics transparency
- Privacy policy page at `/privacy`
- PLAN.md with full architecture and gating map

Satori project (3 new files):
- `api/auth-email-hook.ts` — Supabase Send Email Hook endpoint
- `api/_lib/oa-auth-templates.ts` — OA-branded auth email templates
- `api/_lib/satori-auth-templates.ts` — Satori-branded auth email templates (function versions)

Supabase config changes:
- Added `source` column to profiles table (default: 'satori')
- Updated `handle_new_user()` trigger to set source from user metadata
- Enabled `hook_send_email` pointing to Satori's Vercel endpoint
- Added OA redirect URLs to auth allow list

Vercel env vars:
- `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` on OA (production + preview)
- `SUPABASE_AUTH_HOOK_SECRET` on Satori (production)

**Status:** Deployed, pending live testing.

## Next Steps

- Test signup flow (email/password + Google OAuth) on live site
- Verify OA-branded verification email arrives via Resend
- Verify gating works on all tool pages
- Test 7-day verification enforcement
- Consider adding Operators Academy as a verified domain on Resend (for better deliverability with OA-branded FROM address)

