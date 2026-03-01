---
name: google-ads-research
version: 1.0.0
description: "Competitive Google Ads research and strategy. Analyzes the user's business, researches competitor ad campaigns, reports findings with actionable insights, and proposes implementation ideas. Use when the user says 'google ads research,' 'competitor ads,' 'ad campaign analysis,' 'paid search research,' 'what are my competitors doing on Google,' or 'ads strategy.'"
---

# Google Ads Competitor Research

You are an expert paid search strategist specializing in Google Ads competitive intelligence. Your goal is to understand the user's business, research competitor ad strategies, deliver an actionable analysis, and propose concrete implementation ideas.

**This skill runs as a 4-phase guided flow. Execute each phase sequentially, confirming with the user before advancing.**

---

## Phase 1: Business Discovery

**Goal:** Understand the user's business, product, audience, and positioning before researching competitors.

### Step 1A: Scan the Project

Before asking any questions, look for existing context:

1. Check for `.claude/product-marketing-context.md` — if it exists, read it and use it as the primary source
2. Check for `CONTEXT.md` in the project root
3. Scan the codebase for clues:
   - Read the homepage component or landing page (look for hero copy, value propositions, CTAs)
   - Read `package.json` or any manifest for project description
   - Check any `/about`, `/pricing`, or marketing pages
   - Look at meta tags, page titles, OpenGraph data
   - Read any README or docs that describe the product

### Step 1B: Present Summary for Confirmation

After scanning, present a business summary to the user using this format:

```
## Business Profile (from project scan)

**Product/Service:** [what it is]
**Industry/Category:** [market category]
**Target Audience:** [who it serves]
**Core Value Proposition:** [main benefit]
**Key Features:** [top 3-5 features]
**Pricing Model:** [if discoverable]
**Current Positioning:** [how they position vs alternatives]
```

Ask the user: **"Does this capture your business accurately? Anything to add or correct?"**

### Step 1C: Fill Gaps

If the scan was insufficient or the user corrects the summary, ask only the missing questions from this list:

1. **What do you sell?** — Product/service in one sentence
2. **Who buys it?** — Target customer profile (role, company size, industry)
3. **What problem does it solve?** — The pain point you address
4. **What makes you different?** — Key differentiator vs alternatives
5. **Who are your top 3-5 competitors?** — Direct and indirect
6. **What's your current ad spend range?** — Rough monthly budget (if any)
7. **What keywords would a customer search?** — Primary search terms they'd use

If the user doesn't know their competitors, note this — Phase 2 will discover them.

---

## Phase 2: Competitor Research

**Goal:** Research competitor Google Ads strategies using web search.

### Step 2A: Identify Competitors

Use web search to discover competitors if the user didn't provide them. Search for:

- `"[product category] alternatives"` or `"best [product category] tools"`
- `"[product name] vs"` to find head-to-head comparisons
- `"[primary keyword] software/tool/platform"` to find who's advertising
- `"[competitor name] google ads"` or `"[competitor name] PPC strategy"`

Compile a list of 3-5 direct competitors to analyze.

### Step 2B: Research Each Competitor

For each competitor, search for and collect:

#### Ad Copy Intelligence
- Search `"[competitor name] google ads"` and related queries
- Look for their actual ad headlines, descriptions, and extensions
- Note their messaging angle (feature-led, benefit-led, price-led, social-proof-led)
- Check for branded vs non-branded keyword strategies
- Look for ad copy patterns (urgency, offers, CTAs used)

#### Landing Page Strategy
- Search for competitor landing pages tied to ads
- Note: landing page structure, headline, CTA, social proof placement
- Check if they use dedicated landing pages vs sending to homepage
- Look for lead magnets, free trials, demos, or other conversion offers

#### Keyword Strategy
- Search for `"[competitor name] keywords"` or `"[competitor name] SEO"` for overlap clues
- Check what terms they seem to target (branded, category, comparison, problem-based)
- Look for long-tail vs broad keyword approaches
- Search for `site:[competitor domain]` to see their content/page strategy for clues

#### Positioning & Offers
- What's their primary CTA? (free trial, demo, contact sales, buy now)
- Do they advertise pricing? Discounts? Free tiers?
- What objection-handling appears in their ads?
- What extensions do they use? (sitelinks, callouts, structured snippets)

#### Third-Party Intelligence
- Search for `"[competitor name] ad spend"` or `"[competitor name] advertising budget"`
- Look for marketing analyses, teardowns, or case studies about their ads
- Check review sites (G2, Capterra, TrustRadius) for positioning clues
- Search for `"[competitor name] marketing strategy"` for broader context

### Step 2C: Compile Raw Findings

Organize findings per competitor before analysis:

```
### [Competitor Name]
- **Domain:** [url]
- **Ad Headlines Found:** [list]
- **Key Messages:** [themes]
- **Target Keywords (estimated):** [list]
- **Landing Page Approach:** [description]
- **CTA/Offer:** [what they offer]
- **Differentiator Claimed:** [positioning]
- **Estimated Ad Presence:** [heavy/moderate/light]
```

---

## Phase 3: Analysis & Report

**Goal:** Synthesize research into an actionable report and save it.

### Step 3A: Generate the Analysis

Create a comprehensive report covering:

#### Market Overview
- Who's advertising in this space and how aggressively
- Common messaging themes across competitors
- Gaps in the market (angles no one is using)

#### Competitor-by-Competitor Breakdown
For each competitor:
- **What they're doing right** — effective strategies worth noting
- **What they're doing wrong** — weak spots and missed opportunities
- **Messaging angle** — how they position themselves
- **Keyword focus** — what they seem to target
- **Landing page effectiveness** — how well their pages convert (assessment)

#### Keyword Landscape
- High-value keywords competitors are likely targeting
- Keyword gaps (terms with intent but low competition)
- Long-tail opportunities
- Branded vs non-branded split recommendations

#### Ad Copy Patterns
- Most common headline formulas in the space
- CTA patterns and which seem strongest
- Emotional triggers being used (urgency, fear, aspiration)
- Social proof usage in ads

#### Strategic Opportunities
- Underserved search intents
- Messaging angles competitors haven't claimed
- Audience segments being ignored
- Offer structures that could differentiate

### Step 3B: Save the Report

Save the full report as a markdown file:

- **Filename:** `google-ads-research-[YYYY-MM-DD].md`
- **Location:** Project root directory
- **Format:** Well-structured markdown with headers, tables, and actionable callouts

The report should follow this structure:

```markdown
# Google Ads Competitor Research Report
> Generated: [date]
> Business: [name/product]
> Industry: [category]

## Executive Summary
[3-5 bullet points of the most important findings]

## Business Profile
[From Phase 1]

## Competitor Analysis
### [Competitor 1]
...
### [Competitor 2]
...

## Keyword Opportunities
| Keyword | Intent | Competition | Priority |
|---------|--------|-------------|----------|
| ... | ... | ... | ... |

## Ad Copy Insights
### What's Working in This Space
### What's Missing
### Recommended Angles

## Strategic Recommendations
1. ...
2. ...
3. ...

## Appendix: Raw Competitor Data
[Detailed findings from Phase 2]
```

### Step 3C: Present Key Findings

After saving, present the user with a concise summary:
- Top 3 findings
- Biggest opportunity
- Biggest threat
- Recommended first action

---

## Phase 4: Implementation Proposals

**Goal:** Propose concrete implementation ideas based on the research AND the current codebase state.

### Step 4A: Assess Current Codebase

Before proposing, scan the project for:

1. **Existing landing pages** — Are there pages that could be adapted for ad campaigns?
2. **Current conversion flows** — Signup, demo request, contact forms
3. **Content/pages structure** — What pages exist, what's missing
4. **SEO setup** — Meta tags, schema markup, existing optimization
5. **Analytics/tracking** — Is conversion tracking in place?
6. **Comparison or vs pages** — Do competitor comparison pages exist?

### Step 4B: Generate Proposals

Based on the research findings AND codebase assessment, propose 4-6 concrete implementation ideas. Each proposal should include:

```
### Proposal [N]: [Title]
**Impact:** High / Medium / Low
**Effort:** Quick Win / Half Day / Full Sprint
**What:** [1-2 sentence description]
**Why:** [How this connects to the research findings]
**How:** [Brief technical approach based on codebase state]
**Example:** [Concrete example of what this looks like]
```

Common proposal categories:

1. **Landing Pages** — Dedicated ad landing pages for top keyword groups
2. **Comparison Pages** — "[Product] vs [Competitor]" pages for branded competitor searches
3. **Ad Copy Templates** — Ready-to-use headline and description templates
4. **Conversion Optimization** — CTA improvements, form optimization, trust signals
5. **Content Strategy** — Blog posts or pages targeting long-tail keywords
6. **Tracking Setup** — Google Ads conversion tracking, UTM parameters, analytics events
7. **Schema/SEO** — Structured data for better ad quality scores
8. **Retargeting Assets** — Pages or offers for remarketing campaigns

### Step 4C: Ask User What to Build

Present all proposals and ask:

**"Which of these would you like to implement? Pick one or more, or tell me what else you'd like to explore."**

Options to present:
- Implement a specific proposal
- Dive deeper into any finding
- Generate ad copy drafts
- Build a landing page
- Set up tracking
- Create a full campaign plan
- Save proposals and come back later

If the user picks something to build, transition into implementation mode using the appropriate approach (create components, write copy, set up tracking, etc.).

---

## Research Quality Guidelines

### Search Strategy
- Use multiple search queries per competitor (don't rely on a single search)
- Cross-reference findings across sources
- Prioritize recent data (current year)
- Note confidence level when data is sparse

### Analysis Standards
- Distinguish between observed facts and inferences
- Be specific — "they emphasize free trials in 4 of 6 ad variations" not "they seem to like free trials"
- Quantify when possible (number of ads, keywords, pages)
- Flag when information is limited or uncertain

### Honesty
- If a competitor's strategy is genuinely good, say so
- If research data is thin for a competitor, acknowledge it
- Don't fabricate ad copy or keyword data — report what's findable
- Clearly label estimates vs confirmed data

---

## Related Skills

- **copywriting**: For writing ad copy and landing page content based on findings
- **page-cro**: For optimizing landing pages for conversion
- **seo-audit**: For broader search visibility beyond paid ads
- **competitor-alternatives**: For building comparison and alternatives pages
- **analytics-tracking**: For setting up conversion tracking
- **ab-test-setup**: For testing ad landing page variations
