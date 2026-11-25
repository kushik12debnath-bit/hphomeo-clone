# hpHomeo Clone

A pixel-accurate, fully responsive React + Vite + Tailwind CSS recreation of the [hpHomeo](https://hphomeo.com) homepage, with working appointment booking, doctor search and demo authentication flows.

**Designed & built by [Kaushik Debnath](https://github.com/kushik12debnath-bit).**

## Live demo

- Vercel: https://hphomeo-clone.vercel.app
- GitHub: https://github.com/kushik12debnath-bit/hphomeo-clone

## Features

- Sticky pill navigation with scroll state and a full-screen mobile menu
- Hero section with the original brand typography, accents and illustration
- "Why Homeopathy" and "How It Works" sections with custom SVG icons
- Doctors preview carousel-style row with 8 mock practitioners
- Doctors directory modal with live name/concern search and specialty filters
- Booking modal with consultation type, date and time-slot selection, form validation and success state
- Demo patient/doctor auth modal with role tabs
- Fully responsive from 320px up, with a mobile sticky booking CTA
- Accessible modals: focus handling, Escape to close, scroll lock, labelled controls

## Tech stack

- React 18 (functional components + hooks)
- Vite 6
- Tailwind CSS 3.4
- lucide-react icons
- Local assets in `public/images` (logo, hero illustration, custom icons, doctor photos)

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (defaults to http://127.0.0.1:5173).

### Production build

```bash
npm run build
npm run preview
```

## Project structure

```
hphomeo-clone/
├── public/
│   └── images/
│       ├── doctors/            # 8 local doctor portraits
│       ├── hero-illustration.webp
│       ├── logo.svg
│       └── icon-*.svg
├── src/
│   ├── components/
│   │   ├── AuthModal.jsx
│   │   ├── BookingModal.jsx
│   │   ├── DoctorsDirectoryModal.jsx
│   │   ├── DoctorsPreview.jsx
│   │   ├── Footer.jsx
│   │   ├── HealSection.jsx
│   │   ├── Hero.jsx
│   │   ├── Journey.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   └── WhyHomeopathy.jsx
│   ├── data/mockData.js
│   ├── hooks/useScrollLock.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Deployment

The repository is Vercel-ready. Import the GitHub repo in the Vercel dashboard, or deploy from the CLI:

```bash
npm i -g vercel
vercel --prod
```

Vercel auto-detects Vite, runs `npm run build` and serves `dist`.

## License

MIT © 2026 Kaushik Debnath. See [LICENSE](LICENSE).

## Disclaimer

This project is an educational UI clone. It is not affiliated with hpHomeo. All appointment, doctor and login data is mocked locally; no requests are sent to a backend.

---

© 2026 hpHomeo clone · Made with care in Kolkata · Designed & built by [Kaushik Debnath](https://github.com/kushik12debnath-bit)
