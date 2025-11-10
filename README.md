Hosted Link : https://tech123-seven.vercel.app/
# NFT & Meme Crypto Website

A responsive React single-page site for Meme coin and NFT discovery/trading, inspired by the provided template.

Features:
- Hero with CTA and animated chart placeholder
- Live-like Stats, Trending Tokens table, NFT gallery
- How it works, Roadmap, and FAQ accordion
- Themed glassmorphism + light/dark theme toggle
- Built with React + Vite (no backend required)

## Getting started

Prerequisites: Node.js 18+

```bash
npm install
npm run dev
```

Then open the printed local URL, typically http://localhost:5173

## Deploy

- Static hosting (Vercel/Netlify/GitHub Pages):
  ```bash
  npm run build
  ```
  Deploy the `dist/` directory.

## Customize

- Update token data in `src/components/TokenMarkets.jsx`
- Update sample NFTs in `src/components/NFTGallery.jsx`
- Change theme colors in `src/styles.css` (CSS variables)

## Notes
This is a frontend-only demo. Hook it up to your data sources, wallets, and smart contracts as needed.
