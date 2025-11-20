# Kiosk Product Calculator

> Simple parking kiosk product calculator built with Next.js and Tailwind CSS.

Live: https://kiosk-calculator.vercel.app/

## What it is

This lightweight app lets you select common kiosk items (pack lunch, biscuits, water, etc.), set quantities (including quick bulk selection), enter the cash collected, and get the total cost and return change.

Key features:
- Select product quantities with +/- buttons
- Quick bulk quantity dropdown for common quantities
- Enter money collected and see calculated change
- Reset button to clear selections

## Tech stack
- Next.js 16
- React 19
- Tailwind CSS (used via PostCSS)
- `tw-animate-css` (optional animation helpers installed as a dependency)

## Project structure (important files)
- `app/layout.tsx` — root layout and global imports
- `app/globals.css` — global CSS custom properties (colors, fonts)
- `app/page.tsx` — main app page, mounts the component
- `components/kiosk-calculator.tsx` — main calculator UI and logic
- `tailwind.config.cjs` — Tailwind configuration
- `package.json` — scripts and dependencies

## Setup / Run (Windows PowerShell)

1. Install dependencies (run from project root):

```powershell
npm install
```

2. Run the dev server:

```powershell
npm run dev
```

3. Open the app in your browser:

http://localhost:3000

Build for production:

```powershell
npm run build
npm run start
```

## How to use the app

1. On the page you will see a list of products. Each product card shows the name and price per item.
2. Increase or decrease quantity with the green (`+`) and red (`-`) buttons.
3. Use the yellow dropdown button to quickly set a bulk quantity (e.g., 6, 12, 24).
4. Enter the total money collected in the `Money Collected (₹)` input near the top.
5. The `Total Cost` and `Return Cash` will update automatically.
6. Click the reset (circular arrow) button to clear product quantities and the money input.

## Contact / Deployment

- Deployed on Vercel: https://kiosk-calculator.vercel.app/

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
