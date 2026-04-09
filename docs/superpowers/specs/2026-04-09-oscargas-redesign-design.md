# Oscargas.co.za Redesign Design

## Summary

This project is a greenfield rebuild of `oscargas.co.za` as a premium, responsive marketing and catalog site with clear conversion paths and future ecommerce expansion in mind. The first release will emphasize trust, product discovery, service area clarity, and direct enquiry actions, while structuring the codebase and UI so cart, checkout, payments, and account functionality can be layered in later without redesigning the site.

The design direction is "luxury industrial" adapted to the Oscargas Helderberg logo. The visual system will use the logo's strong royal blue and signal red as primary brand anchors, supported by deep navy, charcoal, soft gray, and white surfaces. The site should feel intentional, high-end, and commercially mature, avoiding generic gas-delivery templates.

## Goals

- Rebuild the site from scratch in the current workspace.
- Deliver a highly polished, senior-level UI and UX.
- Make the site fully responsive across mobile phones, tablets, iPads, laptops, desktop monitors, and larger displays.
- Use a modern Node-based frontend stack with Tailwind CSS.
- Present products and services in a premium, conversion-focused way.
- Include a Google Maps integration to show the company location.
- Include high-quality imagery as part of the site experience.
- Build with a content and component structure that can later support ecommerce features.

## Non-Goals For First Release

- Full live ecommerce checkout and payment processing.
- Customer account management.
- Admin dashboard or CMS.
- Blog or insights section.
- Complex product filtering, inventory syncing, or order management backend.

## Product Strategy

The first release should behave as a premium digital showroom with strong conversion intent. The primary user journey is:

1. Land on the homepage.
2. Understand what Oscargas does and where it serves.
3. Build trust through visual polish, clarity, and reliability cues.
4. Browse product offerings.
5. Contact Oscargas via WhatsApp or an on-site order/request flow.

The site will be marketing-first, but the internal architecture should preserve future expansion points:

- Product schema ready for future price, stock, and cart behavior.
- CTA patterns that can evolve from `Request Order` or `WhatsApp` into `Add to Cart`.
- Reusable product cards and product-detail sections.
- Navigation and layout capable of absorbing future cart/account actions.

## Target Pages

### 1. Home

Purpose:
- Introduce the brand.
- Communicate delivery promise and service confidence.
- Direct users into products, delivery areas, and contact channels.

Key sections:
- Premium hero section with strong headline, supporting message, and primary CTAs.
- Trust/value strip.
- Featured products.
- Delivery/service area overview.
- About/business trust teaser.
- Map/location preview.
- Conversion footer.

### 2. About

Purpose:
- Strengthen trust and explain the business.

Key sections:
- Brand story and positioning.
- Why choose Oscargas.
- Reliability, safety, and service emphasis.
- Strong visual storytelling rather than long dense paragraphs.

### 3. Products

Purpose:
- Present the available gas products in a clean catalog experience.

Key sections:
- Structured product grid.
- Product cards with size, use case, and CTA.
- Space for future filtering and richer product details.

### 4. Delivery Areas

Purpose:
- Clarify where Oscargas serves and how delivery works.

Key sections:
- Service coverage overview.
- Area blocks or highlighted regional zones.
- Delivery expectations and turnaround messaging.
- CTA for out-of-area enquiries.

### 5. Contact

Purpose:
- Provide direct, high-conversion communication options.

Key sections:
- Contact details.
- Embedded Google Map.
- Premium contact/enquiry form.
- WhatsApp-first secondary CTA.

## UX Principles

- Mobile-first layouts with graceful scale-up to larger screens.
- Strong visual hierarchy and fast comprehension.
- Clear CTA placement in every major section.
- Minimal friction in enquiry and contact flows.
- Consistent spacing, rhythm, and component logic.
- Trust-building content shown early and repeatedly.
- Avoid overloading users with too many decisions.

## Visual System

### Brand Direction

The site should feel premium, industrial, and modern. It should not look like a commodity LPG template. The logo establishes a more specific identity than the earlier generic palette direction.

### Core Palette

- Primary brand blue: derived from the Oscargas cylinder and wordmark.
- Accent red: derived from the `GAS` wordmark.
- Deep navy: for dark surfaces and hero grounding.
- Charcoal/slate neutrals: for text, panels, dividers, and supporting UI.
- Soft white/light gray: for contrast, readability, and premium spacing.

### Color Rules

- Blue carries structure, trust, layout framing, and navigation emphasis.
- Red is used selectively for action emphasis and strategic contrast.
- Neutral surfaces should prevent the UI from becoming visually loud.
- Avoid overly bright or cheap-looking gradients.

### Typography

- Display typography should feel bold and confident.
- Body typography should remain clean and highly readable.
- Heading hierarchy should feel premium and deliberate, not default.

### Imagery

- Use high-resolution hero imagery and polished product imagery.
- Images should be optimized for performance, not merely large.
- Use consistent treatment across overlays, crop behavior, and section transitions.

### Motion

- Small, intentional reveal and hover motion.
- No excessive animation.
- Motion should support polish and clarity rather than novelty.

## Responsive Design Requirements

The site must scale well across:

- Mobile phones
- Large phones
- Tablets
- iPads
- Laptops
- Desktops
- Wide desktop screens

Responsive requirements:

- Fluid typography scaling.
- Predictable section stacking behavior.
- Navigation that works cleanly on narrow screens.
- Image layouts that avoid awkward cropping and dead space.
- CTA visibility preserved across viewports.
- No section should rely on a desktop-only composition.

## Technical Architecture

### Stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router structure
- Node-based frontend project

### Why This Stack

Next.js provides a strong production baseline for routing, performance, image optimization, and scalable app structure. Tailwind CSS supports a tightly controlled premium design system without dragging in a bulky UI framework. TypeScript provides stronger long-term maintainability as the site expands toward ecommerce functionality.

### Data Strategy For First Release

Use a local structured content layer for:

- brand/contact information
- product catalog
- delivery areas
- homepage content blocks

This keeps first-release complexity low while preserving a clean migration path to CMS or backend data later.

### Future Ecommerce Readiness

The component and data model design should anticipate:

- product detail expansion
- cart state
- checkout flow
- payment integration
- customer account navigation

This means first-release components should avoid hard-coding assumptions that would block commerce later.

## Component Strategy

The build should use a reusable section/component system, not one-off page markup. Target component families include:

- layout shell
- header and mobile navigation
- hero variants
- CTA blocks
- trust/value strips
- product card/grid modules
- area coverage blocks
- contact form block
- map/location block
- footer

Selected component patterns may be inspired by 21st.dev, but all styling must be normalized into one cohesive Oscargas brand language.

## Google Maps Integration

The contact page should include an embedded Google Map for the direct company location. The homepage may also include a location preview block that links users toward the full contact/location page.

Requirements:

- direct location visibility
- responsive embed behavior
- clear surrounding contact details and CTA

## Content Strategy

Tone:
- confident
- clear
- trustworthy
- premium
- commercially direct

Avoid:
- filler marketing language
- weak generic claims
- excessive jargon
- cluttered content blocks

## Accessibility

The site should aim for solid practical accessibility:

- semantic page structure
- proper heading order
- usable contrast
- keyboard-accessible navigation
- clear button and link states
- usable forms on mobile and desktop

## Performance

Performance must support the premium experience:

- optimized images
- intentional font usage
- minimal unnecessary client-side logic
- section and asset design that does not burden mobile devices

## Risks And Constraints

- High-resolution imagery can degrade performance if not optimized.
- A premium visual direction can become noisy if red is overused.
- Future ecommerce readiness must not bloat the first release.
- Because this is a greenfield rebuild, the initial project structure needs to be disciplined from the start.

## Recommended Implementation Direction

Build the first release as a polished marketing-and-catalog experience with explicit ecommerce extension points. This is the best balance between near-term launch quality and long-term platform growth.
