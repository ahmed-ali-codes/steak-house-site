# Steak House | Fine Dining Landing Page

![Steak House Preview](./public/images/preview.png)

A premium, cinematic landing page for a high-end steakhouse, built with modern web technologies. This project focuses on high-end visual aesthetics, dark-mode design principles, and complex scroll-linked animations to deliver an unforgettable user experience.

## ✨ Features

- **Cinematic Dark Theme:** A carefully curated color palette featuring deep blacks (`#141414`), warm off-whites, and a dusty rose accent (`#c98b7d`).
- **Advanced GSAP Animations:** 
  - A scroll-pinned tasting menu where plates and descriptions crossfade sequentially.
  - Mathematically calculated timeline syncing to prevent sequence overwrites during scroll rewinds.
- **Spinning Lazy Susan Effect:** A signature dishes section featuring plates that rotate around their own axes within circular masks, powered by Framer Motion.
- **Premium Typography:** Utilizes `Cormorant Garamond` for elegant headings and `Outfit` for clean, readable body text.
- **Fully Responsive:** Optimized for both desktop and mobile devices.

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** 
  - [GSAP](https://gsap.com/) + ScrollTrigger
  - [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Phosphor Icons](https://phosphoricons.com/)

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design Notes

The UI avoids generic templated layouts in favor of asymmetric arrangements, generous negative space, and deep textures. The plates are carefully masked and animated to give the illusion of dishes being served directly to the user's viewport.
