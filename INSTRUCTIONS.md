# Frontend Developer Technical Test

This task is designed to evaluate your skills in **React**, **Next.js**, **TypeScript**, **TailwindCSS**, and animation libraries such as **GSAP** or **Motion**. You will build a small application and present it with engaging animations and a responsive UI.


* **Design is optional.** We’re providing a simple **Figma starter** you can use, adapt, or ignore entirely. Fidelity **is not** the goal; use it to skip the “how do I make it look nice?” step.
* **API is optional.** You may use the **Jelly Belly API**, **any other public API**, **your own lightweight API**, **local/mock data**, or **no API** at all depending on what you want to build.
* We care most about **interaction craft, performance, and polish** (animations, transitions, thoughtful UX).

---

## Project Requirements

### Tech Stack

* **React with Next.js**
* **TypeScript**
* **TailwindCSS** for styling
* **GSAP** or **Motion** (Framer Motion) for animations

### Getting Started

To get started, fork this repository and clone it locally. Make sure you have **Node.js** installed.

**Initialize the application using:**

```bash
npx create-next-app@latest my-app
```

We normally use the default options during setup and recommend the same for this test. Refer to the [Next.js documentation](https://nextjs.org/docs) for more details.

### Optional Starter Design

* Use our base visual kit to jump-start your UI:

  * **Figma Starter:** *add your link here*
* You can **use, adapt, or ignore** this file. We are **not** grading for pixel-perfect fidelity; we’re looking for a cohesive, polished experience.

### Data Source (Flexible)

You choose how to power your data layer:

* **Jelly Belly Wiki API** : [https://jellybellywikiapi.onrender.com/swagger/index.html](https://jellybellywikiapi.onrender.com/swagger/index.html)
* **Any other public API**, or **your own API**
* **Local/mock data** (e.g., JSON files, fixtures) if you want to focus on interactions and visuals

---

### Features to Implement

> Considering a **list → detail** flow? additional instructions can be found in the companion doc: **[List + Details](./list-plus-detail.md/)**. Please follow these instructions if you choose this direction.

#### Data Resilience (API/Data Edge Cases)

* **Don’t stress about quirky data.** Be resilient and pragmatic—degrade gracefully, sanitize if needed, and keep the UX smooth.
* If you choose the Jelly Belly API, note it sometimes returns oddly formatted arrays. Treat lines as separate items if the api delivers it incorrecty:

```json
"ingredients": [
   "...",
  "1 cup Jelly Belly Jewel Valentine Mix (That's Jewel Bubble Gum",
  "Jewel Cream Soda and Jewel Very Cherry)",
  "..."
]
```

---

## Ideas for your submission

Pick **one** primary direction (or mix and match). You do **not** need fully responsive animations; if a behavior would change on resize, add a short code comment explaining where you’d handle it.

* **A simple home / listing page with dynamic routes** (see [Data Source](#data-source-flexible) for API/local data options)
* **A ThreeJS showcase** (e.g., GLTF model viewer, orbit controls, shader toy experiments)
* **A Motion/GSAP landing page** with an assortment of animations (hero, staggered reveals, scroll cues)
* **Scroll‑linked storytelling section** using CSS Scroll‑Driven Animations (`@scroll-timeline`) or a small controller
* **Interactive data viz** (D3/Canvas) with filtering and animated transitions
* **SVG micro‑interactions** (icon morphs, gooey menus, magnetic buttons)
* **Shared‑element route transitions** (e.g., Framer Motion `layoutId`) from list → detail or cards → modal
* **Video scrub‑on‑scroll hero** with play/pause affordances
* **Generative particles/backgrounds** (noise, flow fields) on Canvas/WebGL with simple controls

> Aim for smooth, performant motion (60fps where possible),  and sensible durations/easing.

---

## Extra Points

* Thoughtful **loading states** (skeletons/spinners) and error boundaries
* Implement **1–2** of the interaction ideas above using **GSAP** or **Motion**
* **Deploy** the application (e.g., **Vercel**) and include a link
* **Performance care** (code‑splitting, image optimization, avoiding layout thrash)
* **Accessibility** (keyboard navigation, ARIA where appropriate, `prefers-reduced-motion`)

---

## What We’re Evaluating

* **Code quality & structure:** clear components, types, state management, and data flow
* **Interaction & motion craft:** tasteful animations that enhance usability
* **UX polish & visual coherence:** consistent spacing, rhythm, type scale, and hierarchy
* **Resilience:** sensible handling of odd data and network states
* **Performance:** snappy interactions, minimal jank
* **Communication:** trade-offs and reasoning captured in your README, given the time expection we expect to see tradeoffs.

---

## Tell Us About Your Approach

If you encountered unexpected issues, made specific design decisions, or had to make trade‑offs, include a brief explanation with your submission (a short **README.md** is perfect). This helps us understand your reasoning beyond the code.

## Submission

* Link to your repository (with setup instructions)
* Deployed URL (if applicable)
* Short README covering:

  * Data source choice (API/local) and why
  * How you handled edge cases
  * Which interaction ideas you implemented
  * Any known limitations / next steps
