# Motion Choreography & Animation Specification: Saroj Visuals

## Global Animation Rules & Principles

*   **Engine Stack**: Lenis (Smooth Scroll) + GSAP & ScrollTrigger (Scroll choreography) + Framer Motion (Micro-interactions, page transitions) + React Three Fiber (Hero 3D).
*   **The "Cinematic" Ease**: We default to `cubic-bezier(0.16, 1, 0.3, 1)` (equivalent to `CustomEase.create("cinematic", "0.16, 1, 0.3, 1")` in GSAP). It starts fast, pulls back, and lands with elegant weight. Avoid linear or bouncy eases.
*   **Performance**: Animate only `transform` and `opacity`. Use `will-change: transform` on heavy elements.
*   **Accessibility**: Respect `prefers-reduced-motion`. If true, set GSAP `duration: 0` and Framer Motion `transition: { duration: 0 }`.
*   **Lifecycle**: Every `ScrollTrigger` instance MUST be killed in a cleanup/unmount `useEffect` block. Refresh ScrollTrigger when Lenis updates its scroll dimensions.

---

## 1. Hero Sequence & 3D Environment

### React Three Fiber Object (`/src/components/3d/AbstractReel.tsx`)
*   **Object Concept**: A deconstructed, abstract representation of a film reel or audio waveform. Constructed using thin geometric lines (`LineSegments` or `Points` with subtle bloom) forming a toroid or helical structure. It must NOT look like a literal film reel.
*   **Idle Animation**: Continuous slow rotation on the Y-axis (`rotation.y += 0.001` per frame). Subtle sine-wave breathing on the scale (`baseScale + Math.sin(time) * 0.02`).
*   **Cursor Reactivity**: Mouse movement drives micro-displacements.
    *   Map normalized cursor coordinates (-1 to 1) to rotation offsets and position shifts.
    *   **Max Displacement**: 12-20px equivalent in viewport space.
    *   **Damping**: Use `MathUtils.damp()` or `useSpring` to ensure the object returns to its center idle state smoothly when the mouse leaves.
*   **Scroll-Out**: Pin the canvas container. Tie the object's `scale` (from 1 to 0.8) and `opacity` (from 1 to 0) to scroll progress as the user scrolls past the hero section (scrub applied).

### Entrance Sequence (Framer Motion or GSAP Timeline)
*   **Headline Reveal**: Mask-reveal (clip-path or hidden overflow container) line-by-line or word-by-word.
    *   Initial: `y: "100%"`, `opacity: 0`
    *   Animate: `y: "0%"`, `opacity: 1`
    *   Duration: 800ms
    *   Ease: `[0.16, 1, 0.3, 1]`
    *   Stagger: 150ms between lines/words.
*   **Sub-headline & CTAs**: Fade in with a slight vertical slide (e.g., `y: 20` to `0`).
    *   Duration: 600ms
    *   Delay: Start halfway through the headline's animation.

---

## 2. Trust Bar (Client Logos)

*   **Trigger**: GSAP ScrollTrigger, `start: "top 90%"`.
*   **Animation**: Staggered fade and slide up (`y: 30`, `opacity: 0` to `y: 0`, `opacity: 1`).
*   **Duration**: 600ms.
*   **Stagger**: 60-80ms between logos.
*   **Marquee Rule**: If using a looping marquee (due to a large logo count), use pure CSS or GSAP `xPercent: -100`. Must `pause()` on hover and stop completely if `prefers-reduced-motion` is true.

---

## 3. Agitation & Reframe Sections

*   **Typography Mask Reveals**: Large text blocks use ScrollTrigger scrub.
    *   **Technique**: Wrap text lines in `overflow: hidden` spans.
    *   **ScrollTrigger parameters**: `start: "top 80%"`, `end: "center center"`, `scrub: 0.5`.
    *   **Animation**: Transform `translateY` from 100% to 0%.
*   **Asymmetric Parallax**: Decorative elements, images, or abstract backgrounds drift at different speeds based on scroll.
    *   **Element A** (Foreground): Parallax speed multiplier `1.15x`.
    *   **Element B** (Background): Parallax speed multiplier `0.85x`.
    *   Use `useTransform` with Framer Motion's `scrollYProgress`, mapping `[0, 1]` to `y: ["0%", "-15%"]` and `y: ["0%", "15%"]`.

---

## 4. Services Grid

*   **Trigger**: GSAP ScrollTrigger, `start: "top 85%"`.
*   **Entrance**: Cards reveal with an 80-120ms stagger. Fade in and slide up (`y: 40`).
*   **Card Hover State (Framer Motion)**:
    *   **Lift**: `y: -8px`
    *   **Shadow Bloom**: Animate box-shadow to a larger, softer, colored spread (e.g., `box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(var(--accent-rgb), 0.05) inset`).
    *   **Duration**: 200ms
    *   **Ease**: `easeOut`
*   **Icon Micro-Animation (Hover)**: Subtle rotation or path dash-offset drawing. E.g., Arrow icon shifts `x: 4px` over 150ms. Never continuously loop.

---

## 5. Before/After Showcase

*   **Interaction Strategy**: Scroll-scrubbed physics. The section is heavily tactile.
*   **Implementation**: Tie the image split mask directly to scroll position via a pinned section.
*   **ScrollTrigger**:
    *   `trigger: sectionContainer`
    *   `pin: true`
    *   `start: "center center"`
    *   `end: "+=150%"` (Pins for 1.5x viewport height worth of scrolling).
    *   `scrub: 0.5`
*   **Animation target**: The `clip-path` polygon or width percentage of the "After" image container animates from 0% (Before) to 100% (After) completely driven by user scroll. Add a subtle scale (1.0 to 1.05) to the background image throughout the scrub for depth.

---

## 6. Process Timeline

*   **Interaction Strategy**: Pinned sequence with SVG path drawing.
*   **ScrollTrigger**:
    *   `pin: true`
    *   `start: "top top"`
    *   `end: "+=200%"` (Pins for 2x viewport height).
    *   `scrub: true`
*   **Connecting Line**: An SVG `<path>` connecting the 4 steps. Use `stroke-dasharray` and `stroke-dashoffset`. Map the `stroke-dashoffset` from total length to 0 based on scroll progress.
*   **Content Reveal**: As the stroke reaches predefined break-points along the scroll progress (e.g., at progressed ratios 0.25, 0.5, 0.75), trigger the fade and slide-in of the adjacent step's text block. Use `onUpdate` callbacks in GSAP or map specific progress ranges in `useTransform` to opacity ranges (`[0.2, 0.25] -> [0, 1]`).

---

## 7. Case Study Metrics (StatCounter)

*   **Trigger**: Use `IntersectionObserver` via Framer Motion's `useInView` hook (e.g., `useInView(ref, { once: true, margin: "-50px" })`).
*   **Behavior**: Count up from 0 to target number using easing (`easeOutExpo` math, not linear increment step).
*   **Constraint**: Must NEVER re-trigger on re-scroll. Ensure the count stays at target value.
*   **Duration**: 2 to 2.5 seconds depending on number magnitude.

---

## 8. Page Transitions

*   **Engine**: Framer Motion `AnimatePresence`.
*   **Shared Element Transition**: When clicking a `VideoCard` or `ServiceCard`, the clicked element's media container morphs into the hero banner of the destination detail page using `layoutId` (e.g., `layoutId={"case-study-hero-" + slug}`).
*   **Content Follow-up**: The text content on the new page fades in and slides up (`y: 20`, duration: 400ms) after the shared element finishes morphing.
*   **Fallback Transition**: If shared element is too complex for specific routes, use a clean full-page fade.
    *   Exit: `opacity: 0, scale: 0.98` (300ms, ease: back/in)
    *   Initial: `opacity: 0, scale: 1.02`
    *   Enter: `opacity: 1, scale: 1` (400ms, ease: out)

---

## 9. Preloader Sequence

*   **Trigger**: Mount on `_app.tsx` / Layout. Render only if `sessionStorage.getItem('hasVisited')` is false.
*   **Visual**: Solid background matching `--color-charcoal`. Minimal brand mark centering.
*   **Animation**: Logo mark mask-wipe reveal (left to right, or bottom up).
*   **Timing**:
    *   Wipe duration: 600ms.
    *   Hold: 200ms.
    *   Exit: Slide preloader container UP `-100%` (duration: 600ms, ease: `[0.76, 0, 0.24, 1]`).
*   **Total Duration**: Must complete under 1.4s.
*   **Skippability**: Clicking anywhere immediately sets opacity 0 and unmounts. Set `sessionStorage` flag immediately upon start.

---

## 10. Development & Cleanup

*   **GSAP / React Mismatch**: In Next.js App Router, GSAP ScrollTriggers must handle strict mode double-invocations. Use GSAP's `useGSAP` hook or ensure `ScrollTrigger.refresh()` is called defensively.
*   **Lenis Sync**: Call `ScrollTrigger.update()` inside Lenis's `requestAnimationFrame` loop, or use Lenis's built-in `gsap` ticker integration.
    ```javascript
    gsap.ticker.add((time) => { lenis.raf(time * 1000) })
    gsap.ticker.lagSmoothing(0)
    ```
*   **Route Change Cleanup**: Listen to route changes to forcibly kill orphaned ScrollTriggers and tell Lenis to reset scroll index to top `[0, 0]`.
