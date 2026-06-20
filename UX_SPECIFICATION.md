# UX & Conversion Strategy Specification: Saroj Visuals

## 1. User Journey Mapping & Session States

### The Cold Visitor (Low Trust, High Skepticism)
*   **Entry Point**: Reel Ad, YouTube Pre-roll.
*   **Mindset**: "Editing agencies are a dime a dozen. Why should I care? How much does it cost?"
*   **Flow**: 
    1. **< 3s**: Hero statement ("Turn raw footage into your next 100,000 followers") hooks them. 
    2. **Scroll 1**: Trust Bar (Creator logos) immediately anchors credibility.
    3. **Scroll 2/3**: Before/After Slider proves the quality difference instantly without reading.
    4. **Action**: Soft CTA ("View Our Proof") or they bounce.
*   **First-Time Experience**: Full cinematic preloader (< 1.2s) to establish premium brand feel.

### The Warm Visitor (Referred or Returning, Medium Trust)
*   **Entry Point**: Direct traffic, link-in-bio of a client.
*   **Mindset**: "I know they do good work. Can they do it for *my* niche, and can I afford it?"
*   **Flow**: 
    1. Bypasses Hero directly via Navigation.
    2. Navigates to `/work` or `/pricing`.
    3. Filters portfolio by their specific niche (e.g., "Real Estate").
    4. **Action**: Explores Case Studies → Clicks sticky "Book Call" CTA.
*   **Returning Experience**: Bypass preloader entirely (store via `sessionStorage`). Navigation is immediately visible.

### The High-Intent Visitor (Ready to Buy, High Trust)
*   **Entry Point**: Direct URL to `/book` or returning to homepage.
*   **Mindset**: "I need this editing bottleneck solved yesterday."
*   **Flow**: 
    1. Looks immediately for a "Book Call" button.
    2. Rapidly fills out the qualifying intake form.
    3. Selects calendar slot.
*   **Action**: Booking confirmed.

---

## 2. The Scent Trail (CTA Mapping)

Every CTA must maintain a logical "scent" that perfectly matches the user's current intent. Never use generic labels like "Learn More" or "Contact Us".

*   **Hero (Primary)**: `Book Free Strategy Call` → Routes to `/book`. High friction, but captures the high-intent visitor immediately.
*   **Hero (Secondary)**: `See The System` → Anchor link smooth-scrolls to the Process section.
*   **Services Grid**: `Explore Growth Engines` → Routes to specific `/services/[slug]`. Matches intent of someone trying to understand offerings.
*   **Proof/Before-After Section**: `Read Full Case Study` → Routes to a detailed breakdown in `/work/[slug]`. 
*   **Case Study Detail (Bottom)**: `Want results like [Client Name]? Let's chat.` → Routes to `/book`. Contextualized CTA.
*   **Pricing Tiers**: 
    *   *Starter*: `Select Starter` → Routes to `/book?tier=starter` (pre-fills context).
    *   *Growth*: `Scale With Growth` → Routes to `/book?tier=growth`.
*   **Site-wide Footer/Nav**: `Book Strategy Call`.

---

## 3. Persistent Conversion Layer

The site must always offer an immediate path to conversion without nagging the user.

*   **Desktop Behavior**: 
    *   The primary "Book Strategy Call" CTA lives in the top-right navigation.
    *   On scroll, the navigation bar morphs into a floating, slightly transparent glass-morphic pill. The CTA remains highly visible (using the Accent Color) but occupies minimal vertical space.
*   **Mobile Behavior**:
    *   After scrolling past the Hero section (triggering via Intersection Observer), a sticky bottom bar fades in.
    *   It spans 100% width, floating just above the safe-area inset: `Book Free Strategy Call`.
    *   **Rule**: It must NEVER cover readable content or overlap the chat widget/cookie banner.
*   **Exit Intent / Secondary Capture (Desktop Only)**:
    *   Triggered when cursor breaches the top viewport boundary, *only if* the user has been on site > 15 seconds.
    *   Appears as a clean, centered modal.
    *   **Offer**: Not a sales pitch, but value. "Not ready for a call? Get our 5-Step Content Repurposing Checklist."
    *   **Limit**: Fire maximum ONE time per session. Store dismissal in `localStorage` for 30 days.

---

## 4. Edge Cases: Empty, Error & Loading States

A premium brand never has broken interfaces. Error states must maintain the cinematic tone.

*   **Portfolio Filters (Empty State)**: 
    *   If a user selects "Real Estate" + "Podcasts" and yields 0 results.
    *   **UI**: No generic text. Show a faded, elegant graphic.
    *   **Copy**: "We haven't published a case study for this specific combination yet—but our retention systems apply to all niches."
    *   **Action**: Button to "Clear Filters" or "Book a Call to Discuss Your Niche".
*   **Booking Widget (Loading State)**:
    *   Upon submitting the Step 1 qualifying form, show a staggered, pulsing skeleton loader or a subtle rotating brand mark for ~600ms before revealing Step 2. Do not just blindly snap the UI.
*   **Booking Form (Error States)**:
    *   Inline validation. Errors appear immediately below the input in a muted red/orange, fading in. 
    *   Inputs with errors get a subtle bottom border shake animation.

---

## 5. Post-Conversion Experience

The moment after conversion is when buyer's remorse/skepticism is highest. The `/book/success` page must extinguish anxiety.

*   **Immediate Reassurance**: "Strategy Call Confirmed."
*   **Next Steps Box**:
    1.  **Check your inbox**: "A calendar invite with the Google Meet link has been sent."
    2.  **Prepare**: "Your strategist [Name] will review your current content before the call. Ensure your social links were accurate."
    3.  **What to expect**: "This is a zero-pressure mapping session. We will outline a custom content pipeline for you, whether you hire us or not."
*   **Action**: A clear `Add to Google Calendar` / `Add to Outlook` button.
*   **Dopamine Hit**: Embed a high-energy, 15-second "Welcome to Saroj Visuals" video or a rapid-cut reel reel of recent client wins to build excitement.

---

## 6. Trust Signal Sequencing

Skepticism occurs in waves. Trust signals must answer objections exactly when they form.

1.  **The Claim**: Hero says "turn raw footage into 100,000 followers".
2.  **Trust Anchor 1 (Immediate)**: Trust Bar with known client logos appears immediately below the fold. (Answers: *Who else trusts you?*)
3.  **The Agitation**: The problem section highlights how hard it is to edit consistently.
4.  **Trust Anchor 2**: The Before/After Slider. (Answers: *Is your quality actually better than my current freelancer?*)
5.  **The Pitch (Process/Services)**: We explain *how* we do it.
6.  **Trust Anchor 3 & 4 (Deep Proof)**: The Case Studies grid (showing data: +212% watch time) followed immediately by Video Testimonials. (Answers: *Does your system actually yield business results?*)
7.  **The Ask (Pricing/Booking)**: The hard pitch.
8.  **Trust Anchor 5 (Safety Net)**: The FAQ section strategically placed right next to Pricing. (Answers: *What if I hate the edits? What's the turnaround time?*)
