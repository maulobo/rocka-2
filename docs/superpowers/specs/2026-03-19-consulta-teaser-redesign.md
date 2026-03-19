# Spec: ConsultaTeaser Redesign — Full Red Takeover

**Date:** 2026-03-19
**Component:** `src/components/ConsultaTeaser.tsx`
**Goal:** Make the "Solicitud de equipo" section impossible to miss on the home page.

---

## Problem

The current `ConsultaTeaser` blends into the dark page — dark background, subtle borders, small typography. Users scroll past it without engaging.

## Solution

Replace the current 2-column layout with a centered, full-red section that acts as a visual "speed bump" between Clients and CTABanner.

---

## Design

### Layout
- Single centered column, replacing the current 2-column grid
- Padding: `py-24 md:py-32`
- Content centered horizontally (`text-center`)

### Background & Atmosphere
- Background: `#9D031A` (solid red)
- Remove the `hazard-stripe` element entirely — on a red background it produces dark diagonal stripes which are distracting rather than subtle
- Remove `border-t` — the red contrast is enough visual separation

### Removed Elements
- Equipment list (`equipos` array and its mapped cards)
- Bottom note ("Alquiler · Compra · Fabricacion a medida...")
- Text link "Ver formulario"

### Content (top to bottom)

1. **Overline** — do NOT use `section-label` class (it hardcodes `color: #9d031a` which is invisible on red). Instead apply equivalent styles manually: `text-[10px] font-bold uppercase tracking-[0.25em] text-white/60`, text: "Solicitud de equipo"
2. **Headline** — existing `title-primary` class, white, two lines:
   ```
   PEDIDO
   A MEDIDA
   ```
   Remove the `<span className="text-[#9D031A]">` wrapper (redundant on red background)
3. **Body copy** — same existing text, color `rgba(255,255,255,0.75)`, `max-w-md mx-auto`
4. **CTA Button** — `<Link to="/consulta">`:
   - Background: white (`#FFFFFF`)
   - Text: `#9D031A`, `font-black`, `uppercase`, tracking wide
   - Padding: `px-10 py-4`
   - No border-radius (square, consistent with site style)
   - Label: `SOLICITÁ TU EQUIPO →`
   - Hover: background `#f0f0f0`, `scale: 1.02` via framer-motion `whileHover`

### Animations
- Keep existing `fadeUp` / `EASE` animation pattern for each block
- Use same `viewport={{ once: true, amount: 0.3 }}` as current component
- Stagger delays: overline 0s, headline 0.1s, body 0.2s, button 0.35s
- Button `whileHover={{ scale: 1.02 }}` — the global `transition: all` rule in `index.css` will conflict with Framer Motion's transform. Override it on the button element with `style={{ transition: "transform 0.2s ease", willChange: "transform" }}`

---

## Files Changed

- `src/components/ConsultaTeaser.tsx` — full rewrite of JSX, cleanup of unused `equipos` array, and removal of unused `stagger` import

## Files Unchanged

- `src/pages/HomePage.tsx` — no changes needed
- All other components — no changes needed
