# SEO Architecture & Implementation Checklist: Saroj Visuals

## 1. Keyword Mapping & Page Architecture

Target distinct keyword clusters per page to avoid keyword cannibalization.

### Core Pages
*   **`/` (Home)**
    *   *Primary Keyword:* Premium video editing agency
    *   *Supporting Variants:* Creator video editing, retention editing service, content repurposing agency
*   **`/pricing`**
    *   *Primary Keyword:* Video editing agency pricing
    *   *Supporting Variants:* Retainer video editor cost, YouTube editing packages
*   **`/work`**
    *   *Primary Keyword:* Video editing portfolio
    *   *Supporting Variants:* Client case studies video editing, best video editing examples

### Service Pages (`/services/[slug]`)
*   **`youtube-automation`**
    *   *Primary Keyword:* YouTube video editing service
    *   *Supporting Variants:* YouTube editor for hire, long-form video editing agency
*   **`short-form-engines`**
    *   *Primary Keyword:* Short form video editing service
    *   *Supporting Variants:* TikTok editing agency, Reels editing service
*   **`podcast-extraction`**
    *   *Primary Keyword:* Podcast editing agency
    *   *Supporting Variants:* Podcast repurposing service, video podcast editor
*   **`vsl-funnel-video`**
    *   *Primary Keyword:* VSL video editing service
    *   *Supporting Variants:* Direct response video editor, sales funnel video editing
*   **`real-estate-cinematic`**
    *   *Primary Keyword:* Real estate video editing service
    *   *Supporting Variants:* Luxury real estate video editor, property tour editing
*   **`course-production`**
    *   *Primary Keyword:* Course video production service
    *   *Supporting Variants:* Educational video editor, e-learning video editing
*   **`thumbnail-design`**
    *   *Primary Keyword:* YouTube thumbnail design service
    *   *Supporting Variants:* High CTR thumbnail designer, custom thumbnail creation
*   **`growth-consulting`**
    *   *Primary Keyword:* YouTube growth consulting
    *   *Supporting Variants:* Creator strategy consultant, audience retention analysis

---

## 2. Metadata Templates

Write for humans first, engines second. Drive CTR with compelling hooks.

*   **Homepage**
    *   *Title (≤60 chars):* Premium Video Editing Agency | Saroj Visuals
    *   *Description (≤155 chars):* We turn raw footage into your next 100,000 followers. Data-backed retention editing systems for real estate agents, coaches, and creators.
*   **Service Page Template**
    *   *Title:* [Primary Keyword] focused on Retention | Saroj Visuals
        *(e.g., YouTube Video Editing Service | Saroj Visuals)*
    *   *Description:* [Outcome-focused hook]. Get premium [Service Name] from Saroj Visuals designed specifically for [Audience Niche] to maximize algorithmic reach.
*   **Case Study Template**
    *   *Title:* Case Study: [Metric] for [Client Name] | Saroj Visuals
        *(e.g., Case Study: +212% Watch Time for The Founder Podcast | Saroj)*
    *   *Description:* Discover how Saroj Visuals engineered a [Metric] increase in [Result Type] for [Client] using our [Service Name] framework.
*   **Blog/Insight Template**
    *   *Title:* [Article Title] | Insights by Saroj Visuals
    *   *Description:* [Direct answer/teaser of the article's core premise, incorporating the primary long-tail keyword naturally].

---

## 3. Heading Hierarchy Rules

Strict enforcement: No skipping heading levels (e.g., H1 -> H3 is invalid). H1 must be unique per page.

*   **Service Pages**
    *   `H1`: [Outcome Headline] (Must contain the primary keyword naturally)
    *   `H2`: Who This Is For
    *   `H2`: The Transformation (What changes for you)
    *   `H3`: [Specific deliverable/benefit]
    *   `H2`: Our Process
    *   `H2`: Related Case Studies
*   **Case Studies**
    *   `H1`: [Client Name] & The [Core Challenge]
    *   `H2`: The Challenge
    *   `H2`: The Approach
    *   `H2`: The Results
    *   `H3`: [Specific metric callout]

---

## 4. JSON-LD Schema Specifications

Inject structured data into the `<head>` to win rich snippets.

*   **`Organization`**: Sitewide. Defines `name`, `url`, `logo`, `sameAs` (social profiles), and `contactPoint`.
*   **`Service`**: On every `/services/[slug]` page. Defines `name`, `description`, `provider` (Saroj Visuals), and `offers`.
*   **`BreadcrumbList`**: On all nested pages (e.g., nested inside `/services/`, `/work/`, `/insights/`) to define site hierarchy.
*   **`FAQPage`**: On the homepage or dedicated `/faq` page if created. Must wrap the exact Q&A text shown on-screen.
*   **`Review` / `AggregateRating`**: ONLY on Case Studies/Work pages *if* there are actual, verifiable testimonials tied directly to the service. Never fake reviews for schema.

---

## 5. Internal Linking Map

Ensure no page is "orphaned" and crawl depth is ≤3 clicks from the homepage.

*   **Header Nav**: Links to `/work`, `/services`, `/process`, `/pricing`, `/book`.
*   **Homepage**: Links out to `/services/[slug]` (grid), `/work/[slug]` (case studies), `/pricing` (tiers), and `/book` (all CTAs).
*   **Service Pages**: Must contextually link (`<a>` tags within paragraphs) to 2-3 highly relevant **Case Studies**.
*   **Case Studies**: Must link backward to the specific **Service Page(s)** utilized in the project.
*   **Footer**: Comprehensive "fat footer" linking to all primary `/services` and `/work` categories, plus `/privacy` and `/terms`.

---

## 6. Image SEO Rules

Images are a major discovery vector and impact accessibility.

*   **File naming convention**: Explicit and descriptive, using hyphens.
    *   *Bad:* `IMG_10293.jpg`
    *   *Good:* `youtube-editing-retention-graph-example.jpg`
*   **Alt Text Rules**:
    *   Describe the image functionally for screen readers; do not keyword stuff.
    *   *Portfolio Thumbnail:* `Alt="Before and after color grading comparison for luxury real estate tour video"`
    *   *Case Study Hero:* `Alt="Video editing timeline showing complex multi-cam podcast assembly"`
    *   *Decorative/Abstract:* `Alt=""` (Empty string for decorative/background assets so screen readers skip them).

---

## 7. Core Web Vitals (SEO Impact)

Google ranks based on real-world performance metrics.

*   **LCP (Largest Contentful Paint) < 2.0s**: Ensure the hero background (image or 3D canvas) is preloaded. Do not lazy-load above-the-fold assets.
*   **CLS (Cumulative Layout Shift) < 0.05**: Explicitly define `width` and `height` attributes on all `<img>` tags or use Next.js/React standard `aspect-ratio` wrappers to reserve space before images load.
*   **INP (Interaction to Next Paint) < 200ms**: Code-split the Heavy 3D React Three Fiber hero canvas. Load GSAP and Frame Motion dynamically if possible, or ensure main thread isn't blocked during scroll interactions.

---

## 8. Content Cluster Plan (`/insights`)

Build topical authority around "Content Repurposing" and "Retention".

**Pillar Page (The Hub)**
*   `H1`: The Complete Guide to Content Repurposing for Creators
*   *URL:* `/insights/content-repurposing-guide`
*   *Purpose:* Comprehensive, 3000+ word resource linking out to all sub-clusters.

**Supporting Cluster Articles (The Spokes)**
1.  *How to Repurpose 1 Podcast into 15 TikToks (Workflow)*
2.  *The First 3 Seconds: Hook Frameworks that Stop the Scroll*
3.  *Premiere Pro vs. CapCut Desktop for Short-Form Creators*
4.  *Why Your YouTube Retention is Flatlining (And How to Fix It)*
5.  *Real Estate Video Marketing: Moving Beyond the Drone Montage*
6.  *How Much Should You Pay a Video Editor in 2024?*
7.  *Outsourcing Your Video Editing: When Is It Time?*

---

## 9. Sitemap & Robots.txt Specification

Control how crawlers index the site.

**`robots.txt`**
```text
User-agent: *
Allow: /
Disallow: /book/success
Disallow: /*?tier=   # Prevent indexing of parameterized pricing URLs
Disallow: /api/

Sitemap: https://sarojvisuals.com/sitemap.xml
```

**`sitemap.xml` Generation Rules**
*   **Include**: `/`, `/about`, `/pricing`, `/services`, `/work`, all `/services/[slug]`, all `/work/[slug]`, all `/insights/[slug]`.
*   **Exclude (NoIndex)**: `/book` (if it's just an embed), `/book/success`, `/privacy`, `/terms`, any drafted/empty case studies.
*   **Meta tag for excluded pages**: `<meta name="robots" content="noindex, nofollow" />` on the Booking Confirmation page.
