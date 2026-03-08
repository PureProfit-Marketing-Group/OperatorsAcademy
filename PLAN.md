# Operators Academy — User Auth & Lead Capture Plan

## Summary

Add full user authentication to Operators Academy so we collect names and emails from users who want to interact with tools/install commands. Course content stays public. Gated elements show a casual CTA prompting free signup. Auth lives on the shared Satori Supabase project with a `source` field to differentiate users.

---

## Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Auth provider | Supabase Auth (shared Satori project) | Already has Google OAuth configured. Shared user pool with Satori is a feature, not a bug — related businesses. |
| Auth methods | Email/password + Google OAuth | Covers all user preferences. Google = lowest friction. |
| User data collected | Name + email only | Minimal friction. Segment/qualify later via behavior. |
| What's gated | Copy buttons, install commands, tool detail pages | Course stays fully public (SEO value). Gate the actionable stuff. |
| What's public | Homepage, course modules, all course content | "Free course" promise stays intact. Users hit auth only when they want to DO something. |
| Gate UI | Teaser + CTA placeholder | "Want this? Sign up in 10 seconds — it's free." Casual & friendly tone. |
| Auth UI | Minimal dark modal overlay | Matches site aesthetic. Triggered inline — user stays on the same page. |
| Post-signup flow | Seamless return | Modal closes, gated action completes. No onboarding steps. |
| Email verification | Soft verification with 7-day grace | Instant access on signup. Verification email sent. If not verified in 7 days, block until verified. Google OAuth = auto-verified. |
| Nav bar | Add Login/Sign Up button | Changes to user name/avatar + logout dropdown when authenticated. |
| Privacy | Privacy page + cookie consent banner | Covers GDPR for Vercel Analytics. |
| Supabase project | Shared with Satori | Add `source` column to profiles table to track origin (operators-academy vs satori). |
| Admin | Supabase dashboard | No custom admin UI needed for now. |

---

## Architecture

```
Browser (React SPA)
  |
  |-- Supabase JS Client (@supabase/supabase-js)
  |     |-- Auth (signup, login, session, OAuth)
  |     |-- DB (profiles table read/write)
  |
  |-- AuthContext (React Context)
  |     |-- Provides: user, session, loading, signUp, signIn, signOut
  |     |-- Wraps entire app in App.jsx
  |
  |-- AuthModal (shared component)
  |     |-- Triggered by any gated element
  |     |-- Tabs: Sign Up / Log In
  |     |-- Google OAuth button
  |     |-- Email + password fields
  |     |-- Name field (signup only)
  |
  |-- GatedAction (wrapper component)
  |     |-- Wraps CopyButton, install commands, Link to tool pages
  |     |-- If logged in: render children normally
  |     |-- If logged out: render teaser CTA, open AuthModal on click
  |
  |-- CookieBanner (component)
  |     |-- Shows on first visit, stores consent in localStorage
  |
  |-- /privacy (route + page)
```

---

## Implementation Plan

### Phase 1: Supabase Setup

1. **Install `@supabase/supabase-js`**
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Create `src/lib/supabase.js`**
   - Initialize Supabase client with env vars
   - `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

3. **Database: profiles table** (on shared Satori Supabase project)
   ```sql
   CREATE TABLE IF NOT EXISTS public.profiles (
     id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
     full_name TEXT,
     email TEXT,
     avatar_url TEXT,
     source TEXT DEFAULT 'operators-academy',
     email_verified_at TIMESTAMPTZ,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW()
   );

   -- RLS policies
   ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

   -- Users can read their own profile
   CREATE POLICY "Users can read own profile"
     ON public.profiles FOR SELECT
     USING (auth.uid() = id);

   -- Users can update their own profile
   CREATE POLICY "Users can update own profile"
     ON public.profiles FOR UPDATE
     USING (auth.uid() = id);

   -- Auto-create profile on signup
   CREATE OR REPLACE FUNCTION public.handle_new_user()
   RETURNS TRIGGER AS $$
   BEGIN
     INSERT INTO public.profiles (id, full_name, email, avatar_url, source)
     VALUES (
       NEW.id,
       COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
       NEW.email,
       COALESCE(NEW.raw_user_meta_data->>'avatar_url', ''),
       COALESCE(NEW.raw_user_meta_data->>'source', 'operators-academy')
     );
     RETURN NEW;
   END;
   $$ LANGUAGE plpgsql SECURITY DEFINER;

   -- Trigger (check if exists first since Satori may already have one)
   CREATE TRIGGER on_auth_user_created
     AFTER INSERT ON auth.users
     FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
   ```

   > **Note**: Since Satori may already have a profiles table and trigger, we need to check and ALTER rather than CREATE. The `source` column is the key addition.

4. **Add Google OAuth redirect URL** in Supabase dashboard
   - Add `https://operators-academy.vercel.app` to allowed redirect URLs
   - Add `http://localhost:5173` for local dev

5. **Environment variables**
   - Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to:
     - `.env.local` (local dev)
     - Vercel project environment variables (production)

### Phase 2: Auth Context & Modal

6. **Create `src/context/AuthContext.jsx`**
   - React Context providing: `user`, `session`, `loading`, `profile`
   - Methods: `signUp(email, password, name)`, `signIn(email, password)`, `signInWithGoogle()`, `signOut()`
   - Listen to `onAuthStateChange` for session persistence
   - On signup, pass `source: 'operators-academy'` in user metadata
   - 7-day verification check: if `email_confirmed_at` is null AND account is >7 days old, treat as unauthenticated

7. **Create `src/components/AuthModal.jsx`**
   - Dark themed modal overlay (click outside to dismiss)
   - Two tabs: "Sign Up" / "Log In"
   - Sign Up: Name, Email, Password fields + "Sign up with Google" button
   - Log In: Email, Password fields + "Sign in with Google" button
   - Error handling (duplicate email, weak password, etc.)
   - Loading states on buttons
   - On success: close modal, trigger pending gated action via callback
   - Privacy policy link at bottom: "By signing up, you agree to our privacy policy"

8. **Create `src/components/AuthModalContext.jsx`** (or add to AuthContext)
   - Provides `openAuthModal(onSuccess?)` function
   - Any component can trigger the modal and pass a callback for post-auth action

### Phase 3: Gating Components

9. **Create `src/components/GatedAction.jsx`**
   - Wrapper component that checks auth state
   - Props: `children`, `fallback?` (custom CTA text)
   - If authenticated: renders `children` as-is
   - If not authenticated: renders teaser CTA block, opens AuthModal on click
   - Default CTA: "Want this? Sign up in 10 seconds — it's free."

10. **Create `src/components/GatedCopyButton.jsx`**
    - Wraps `CopyButton` with auth check
    - Logged out: shows disabled-looking copy button, clicking opens auth modal
    - Logged in: normal CopyButton behavior

11. **Create `src/components/GatedRoute.jsx`**
    - Route-level gate for tool detail pages
    - If not authenticated: show the page content but with a banner/overlay CTA
    - Or: redirect to homepage with auth modal open

12. **Update existing components to use gating:**
    - `CopyButton` usages across tool pages → wrap with `GatedCopyButton` or `GatedAction`
    - Install command blocks (curl | bash) → wrap with `GatedAction`
    - Tool page routes (`/tools/install`, `/tools/coop`, `/tools/mission-control`, etc.) → wrap with `GatedRoute`
    - Course pages stay ungated

### Phase 4: Nav Bar Update

13. **Update `src/components/SiteNav.jsx`**
    - Add "Log In / Sign Up" button (right side of nav)
    - When authenticated: show user name or avatar
    - Dropdown on click: "Log Out" option
    - Mobile responsive

### Phase 5: Privacy & Cookie Banner

14. **Create `src/PrivacyPage.jsx`**
    - Standard privacy policy covering:
      - What data we collect (name, email, usage analytics)
      - How it's used (account access, email communication)
      - Third parties (Supabase for auth/storage, Vercel for hosting/analytics, Google for OAuth)
      - Data retention and deletion (email to request)
      - Cookie usage (Vercel Analytics)
    - Add route: `/privacy`

15. **Create `src/components/CookieBanner.jsx`**
    - Bottom banner on first visit
    - "We use cookies for analytics" + Accept/Decline buttons
    - Store preference in localStorage
    - If declined, disable Vercel Analytics (or just acknowledge — Vercel Analytics is cookieless)
    - Note: Vercel Web Analytics is actually cookieless/privacy-friendly, so the banner is mainly for transparency

### Phase 6: Verification Enforcement

16. **Add verification check to AuthContext**
    - After 7 days, if `email_confirmed_at` is null on the Supabase user:
      - Treat user as unauthenticated for gating purposes
      - Show a banner: "Please verify your email to keep access. Check your inbox or resend."
      - Add "Resend verification email" button
    - Google OAuth users: `email_confirmed_at` is set automatically — skip this check

---

## Gating Map

| Page/Element | Public? | Gated? | Gate Type |
|-------------|---------|--------|-----------|
| Homepage | Yes | No | — |
| Course modules (all 8) | Yes | No | — |
| SiteNav | Yes | No | Shows login button |
| `/tools/install` | No | Yes | GatedRoute — teaser CTA |
| `/tools/coop` | No | Yes | GatedRoute — teaser CTA |
| `/tools/mission-control` | No | Yes | GatedRoute — teaser CTA |
| `/tools/session-monitor` | No | Yes | GatedRoute — teaser CTA |
| `/tools/claude-code-guide` | No | Yes | GatedRoute — teaser CTA |
| `/tools/prompt-flows` | No | Yes | GatedRoute — teaser CTA |
| `/tools/vision-system` | No | Yes | Already password-gated |
| CopyButton (everywhere) | No | Yes | GatedCopyButton |
| Install commands (curl) | No | Yes | GatedAction wrapper |
| `/privacy` | Yes | No | — |

---

## Files to Create

```
src/lib/supabase.js                    — Supabase client init
src/context/AuthContext.jsx            — Auth state provider
src/components/AuthModal.jsx           — Login/signup modal
src/components/GatedAction.jsx         — Generic auth gate wrapper
src/components/GatedCopyButton.jsx     — Auth-gated copy button
src/components/GatedRoute.jsx          — Route-level auth gate
src/components/CookieBanner.jsx        — Cookie consent banner
src/components/UserMenu.jsx            — Nav bar user dropdown
src/PrivacyPage.jsx                    — Privacy policy page
```

## Files to Modify

```
src/App.jsx                            — Wrap with AuthProvider, add /privacy route
src/components/SiteNav.jsx             — Add login button / user menu
src/components/CopyButton.jsx          — May need onCopy callback prop
src/CoopPage.jsx                       — Wrap gated elements
src/InstallPage.jsx                    — Wrap gated elements
src/ClaudeCodeGuide.jsx                — Wrap gated elements
src/PromptFlowsPage.jsx                — Wrap gated elements
src/MissionControlPage.jsx             — Wrap gated elements
src/SessionMonitorPage.jsx             — Wrap gated elements
.env.local                             — Supabase env vars
```

---

## Open Questions

1. **Satori profiles table**: Does one already exist? If so, we need to ALTER it (add `source` column) rather than CREATE, and modify the trigger to not conflict.
2. **Supabase auth email templates**: Do we want to customize the verification email template with Operators Academy branding, or use Supabase defaults?
3. **Rate limiting**: Should we add any rate limiting on signup to prevent abuse? Supabase has built-in rate limits on auth endpoints.
