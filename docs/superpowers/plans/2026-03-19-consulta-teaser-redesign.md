# ConsultaTeaser Redesign — Full Red Takeover Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign `ConsultaTeaser` from a low-contrast dark 2-column layout to a full-red centered section with a single prominent CTA button that drives users to the equipment request form.

**Architecture:** Single-file rewrite of `src/components/ConsultaTeaser.tsx`. Remove the equipment list and side-by-side layout entirely. Replace with a centered column: overline → headline → body copy → white CTA button. No other files need changing.

**Tech Stack:** React, TypeScript, Tailwind CSS, Framer Motion, React Router `<Link>`

---

### Task 1: Rewrite ConsultaTeaser

**Files:**
- Modify: `src/components/ConsultaTeaser.tsx`

**Reference spec:** `docs/superpowers/specs/2026-03-19-consulta-teaser-redesign.md`

**Current component state (for reference):**
- Imports: `motion` from framer-motion, `Link` from react-router-dom, `EASE, fadeUp, stagger` from `../lib/animations`
- Has a `const equipos = [...]` array
- Section: `bg-[#0E1016]`, `border-t border-[#1C2028]`, 2-column grid
- Has `hazard-stripe` div at top
- Left column: overline using `.section-label`, headline with red `<span>`, body copy, text link
- Right column: mapped equipment cards + bottom note

- [ ] **Step 1: Replace the full file content**

Open `src/components/ConsultaTeaser.tsx` and replace with:

```tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { EASE, fadeUp } from "../lib/animations";

export default function ConsultaTeaser() {
  return (
    <section className="bg-[#9D031A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 py-24 md:py-32">
        <div className="flex flex-col items-center text-center gap-8">

          {/* Overline */}
          <motion.div
            className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            Solicitud de equipo
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h2
              className="title-primary text-white leading-[0.88]"
              initial={{ y: "105%", skewX: -2, opacity: 0 }}
              whileInView={{ y: 0, skewX: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            >
              PEDIDO
              <br />
              A MEDIDA
            </motion.h2>
          </div>

          {/* Body copy */}
          <motion.p
            className="text-sm md:text-base leading-relaxed max-w-md"
            style={{ color: "rgba(255,255,255,0.75)" }}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
          >
            Completá el formulario con las especificaciones del equipo que
            necesitás. Te respondemos con disponibilidad, condiciones y
            tiempos de entrega.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.35, duration: 0.8, ease: EASE }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{ transition: "transform 0.2s ease", willChange: "transform" }}
            >
              <Link
                to="/consulta"
                className="inline-block bg-white text-[#9D031A] font-black uppercase tracking-[0.15em] px-10 py-4 hover:bg-[#f0f0f0] transition-colors duration-200"
              >
                SOLICITÁ TU EQUIPO →
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify dev server compiles without errors**

Run: `npm run dev` (or check existing running instance)

Expected: No TypeScript errors, no console errors. Page loads and the ConsultaTeaser section appears as a full-width red block with centered content and a white button.

- [ ] **Step 3: Visual QA checklist**

Check in browser at `http://localhost:5173` (or whatever port):

- [ ] Section background is solid red `#9D031A`
- [ ] No dark diagonal stripes visible
- [ ] Overline "Solicitud de equipo" is visible in white/translucent
- [ ] "PEDIDO / A MEDIDA" headline is white, large
- [ ] Body copy is readable (white at ~75% opacity)
- [ ] White button "SOLICITÁ TU EQUIPO →" is prominent and centered
- [ ] Button hover: background lightens to off-white, no jitter/stutter on scale
- [ ] Button click navigates to `/consulta`
- [ ] Animations stagger in correctly on scroll
- [ ] Mobile layout looks correct (padding, text size)
- [ ] Transition from Clients section (light grey) to red section looks like a clean "speed bump"

- [ ] **Step 4: Build check**

Run: `npm run build`

Expected: Exits with 0 errors. TypeScript compile passes.

- [ ] **Step 5: Commit**

```bash
git add src/components/ConsultaTeaser.tsx
git commit -m "feat: redesign ConsultaTeaser with full-red CTA section

Replace low-contrast 2-column layout with centered full-red section
to make the equipment request CTA impossible to miss."
```
