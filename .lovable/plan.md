

# Comprehensive Audit & Improvement Plan for Kurin Hygienic Website

## Issues Found & Proposed Fixes

### 1. Mobile View Issues

**Hero section**: On small screens, the hero heading container (`h-[5.5rem]`) may clip text. The client marquee logos at the bottom overlap with the CTA buttons on shorter viewports. The marquee `min-w-[100px]` cards are cramped.

**Navigation**: The hamburger menu icon shows both X and Menu icons via AnimatePresence, which is correct, but the close button inside the panel is redundant -- there are two X buttons (one in nav bar, one in panel header). This is confusing on mobile.

**Testimonials**: Navigation arrows (`left-0`, `right-0`) overlap with card content on mobile, making the card text hard to read beneath the buttons.

**Process section**: The mobile timeline vertical line is at `left-8` but step icons are `w-14`/`w-16`, causing misalignment -- the line doesn't center through the icons.

**Footer**: On small screens, the 4-column grid collapses but the "Get a Quote" section spans `sm:col-span-2` awkwardly. The back-to-top button at `right-6 -top-6` may overlap content on narrow screens.

**Contact form**: The form padding `p-5` is tight on small screens. The progress indicator "X/4 completed" may wrap on narrow screens.

### 2. Tablet View Issues

**Services grid**: Uses `grid-cols-2 lg:grid-cols-4` -- no `md` breakpoint, so tablets show 2 columns which is fine but cards look small. Could use `md:grid-cols-3` for better tablet utilization.

**Industries grid**: `grid-cols-2 md:grid-cols-3 lg:grid-cols-5` is good but 14 items in 3-col leaves uneven last row (2 items centered would look better).

**About section**: The image + text grid `lg:grid-cols-2` means on tablets (md) it's single column, making the section very long vertically.

### 3. Animation Issues

**Excessive framer-motion usage**: Almost every element has motion animations. On lower-end devices this causes jank. The Hero section alone has 8 floating elements + 3 geometric shapes + particle effects continuously animating.

**LoadingScreen particles**: Uses `window.innerWidth/innerHeight` directly in render, which doesn't update on resize and causes SSR issues.

**Clients carousel second row**: Uses `[...clients].reverse()` without duplicating for infinite scroll -- the second row will stop/jump when it reaches the end unlike the first row which is properly duplicated.

**Process section stepper**: The `setInterval` in `useEffect` creates a nested timeout + interval pattern that can leak if the component unmounts mid-animation.

### 4. Security Concerns

**Contact form `mailto:` approach**: The form submits via `mailto:` link which is client-side only. There's no server-side validation or CSRF protection. Form data is not actually sent to any server -- it just opens the user's email client. This means:
  - No rate limiting (spam risk if a backend is ever added)
  - No data sanitization before constructing the mailto URL (potential for mailto injection)
  - The `encodeURIComponent` usage is correct but the approach is fragile

**External links**: Social media links and WhatsApp links use `rel="noopener noreferrer"` correctly.

**Google Maps iframe**: Uses `referrerPolicy="no-referrer-when-downgrade"` -- acceptable but could be stricter.

**No CSP headers**: No Content Security Policy configured (this is a deployment concern, not code).

**Phone numbers hardcoded**: Phone numbers appear in multiple files (Hero, Navigation, Contact, FloatingButtons) -- should be centralized to avoid inconsistency.

### 5. Performance Issues

**Duplicate client logos**: Client logos are imported in both `Hero.tsx` and `Clients.tsx` -- 17 images imported twice. Should be centralized in a shared data file.

**No image optimization**: All images are imported as static assets with no srcset/responsive sizes. Industry images (14 of them) load at full resolution even for small cards.

**Lazy image CSS issue**: `img[loading="lazy"]` CSS sets `opacity: 0` initially, but there's no JS to add the `.loaded` class -- images may remain invisible or flash.

**Too many floating/decorative animations**: Hero has ~15 continuously animating elements that consume GPU resources.

### 6. Accessibility Issues

**Missing skip-to-content link**: No skip navigation link for keyboard users.

**Testimonials section**: Has `tabIndex={0}` on the section element, which is unusual. Keyboard navigation works but screen reader experience could be better.

**Color contrast**: Some text like `text-[10px]` on WhyChooseUs cards and "Click to learn more" hints may not meet WCAG contrast ratios at that small size.

**FAQ**: Missing the badge/label seen in other sections for consistency.

### 7. Code Quality

**Unused component**: `PageTransition.tsx` exists but is not used anywhere -- `App.tsx` has its own inline AnimatedRoutes.

**Inconsistent section padding**: Some sections use `section-padding`, others use `py-20 md:py-28`, others use `py-12 md:py-16`. This creates visual inconsistency between sections.

**Inconsistent container usage**: Some use `section-container`, others use `container mx-auto px-4`.

---

## Implementation Plan

### Phase 1: Critical Fixes (Mobile & Tablet)
1. **Fix mobile navigation** -- Remove duplicate close button, ensure only one X is visible
2. **Fix testimonials mobile arrows** -- Move arrows below the card on mobile, keep beside on desktop
3. **Fix Hero mobile layout** -- Adjust heading container height, add spacing above marquee
4. **Fix Process mobile timeline alignment** -- Center vertical line through step icons
5. **Add tablet breakpoints** -- Add `md:grid-cols-3` to Services, adjust About to show 2-col on `md`

### Phase 2: Animation & Performance
6. **Reduce Hero decorative animations** -- Cut floating elements from 8 to 4, remove geometric shapes on mobile
7. **Fix Clients second row** -- Duplicate reversed array for seamless infinite scroll
8. **Fix lazy image CSS** -- Remove the opacity:0 rule or add proper JS handler
9. **Centralize client data** -- Move to shared `data/clients.ts` to avoid duplicate imports
10. **Delete unused PageTransition.tsx**

### Phase 3: Consistency & Polish
11. **Standardize section padding** -- Use `section-padding` and `section-container` consistently across all sections
12. **Centralize contact info** -- Create `data/contact.ts` with phone numbers, email, address
13. **Add skip-to-content link** -- In Navigation component

### Phase 4: Security Hardening
14. **Sanitize form inputs** -- Add XSS protection to mailto body construction
15. **Add honeypot field** -- Invisible field to catch bots in the contact form

