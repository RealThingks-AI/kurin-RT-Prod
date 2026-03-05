

# Plan: Scroll-to-Top Button + Scroll Animation Refinement

## What's Already in Place
- All sections already use framer-motion's `useInView` with `once: true` for scroll-triggered animations — this is already performant (Intersection Observer under the hood).
- Footer has a `scrollToTop` function but it's only a static button in the footer, not a floating one.

## Changes

### 1. Add Floating Scroll-to-Top Button (FloatingButtons.tsx)
- Add a scroll-to-top arrow button that appears after scrolling 400px down
- Use `useState` + `useEffect` with a scroll listener (throttled via passive listener)
- Position it above the WhatsApp button (`bottom-20 right-4`)
- Animate in/out with `AnimatePresence`
- Use `ChevronUp` icon from lucide-react

### 2. Enhance Section Scroll Animations (minor)
- The existing animations are already good. Add a reusable `staggerChildren` pattern to sections that don't have it (FAQ, Contact header) for consistency
- Ensure all sections use `margin: "-100px"` consistently for earlier trigger on mobile

### 3. Verify Dialogs (Testing)
- After implementing, use browser tools to click service cards and client logos to verify dialogs open with correct content

### Files Modified
- `src/components/FloatingButtons.tsx` — Add scroll-to-top button alongside WhatsApp FAB
- Minor tweaks to `src/components/FAQ.tsx` and `src/components/Contact.tsx` for consistent scroll animation triggers

