# Astro Portfolio Template

A clean, modern and fully customizable portfolio template built with Astro.
Designed for developers who want a fast, accessible and elegant starting point for their personal portfolio.

👉 This repository contains demo content only (John Doe placeholders).
It is intended as a starter template, not a real portfolio.

---

## ✨ Features

- ⚡ Built with Astro (fast by default)

- 🎨 Light / Dark mode (CSS variables driven)

- 🧩 Component-based architecture

- 📱 Fully responsive layout

- ♿ Accessibility-friendly & Lighthouse-oriented

- 🗂 JSON-driven content (projects, certifications, reviews)

- 🎭 Easy theming via design tokens (CSS variables)

- 🧊 Glass / neon UI effects (optional, reusable)

---

## 🚀 Getting Started
### 1. Install dependencies
```bash
npm install  
```
### 2. Start the dev server
```bash
npm run dev  
```

The site will be available at:

http://localhost:4321

---

## 🧱 Project Structure
src/
 ├─ components/
 ├─ layouts/
 ├─ pages/
 ├─ data/
 │   ├─ projects.template.json
 │   ├─ certifications.template.json
 │   └─ reviews.template.json
 └─ styles/
     ├─ variables.css   # design tokens (colors, shadows, radius, etc.)
     ├─ effects.css     # animations & visual effects
     └─ global.css      # base styles & reusable UI components

---

## 🎨 Customization
### Colors & Theme

All theming is driven by CSS variables.  

Edit:

src/styles/variables.css


This file is the single source of truth for:

- colors  

- light / dark mode  

- gradients  

- shadows  

- glass effects  

You can completely re-theme the site by modifying only a few variables.  

Tailwind classes (bg-*, text-*, etc.) are mapped to these variables via tailwind.config.js.  

### Content

Replace demo data in:

src/data/


- projects.template.json  

- certifications.template.json  

- reviews.template.json  

The JSON structure is intentionally explicit and beginner-friendly.

---

## 🧪 Demo vs Real Data (recommended workflow)

This template is designed to support two modes:

*.template.json → public demo / template

*.prod.json → real portfolio content (private or personal repo)

This makes it easy to:

keep this repository public

maintain a separate private portfolio using the same structure

---

## 🧊 UI & Components

Reusable UI patterns are defined via Tailwind @layer components, for example:

- glass cards  

- hover lift effects  

- avatars  

- badges  

This keeps markup clean while remaining fully customizable.

---

## 📦 Build for Production

Build the site:

```bash
npm run build  
```

Preview locally:

```bash
npm run preview  
```
---

## 🔐 Environment Variables

This template does not require any environment variables by default.

No Cloudinary, API keys or secrets are needed for the demo version.

If you extend the template, you may add your own variables using a .env file.

---

## 📄 License

MIT — free to use, modify and share.

---

## 🙌 Credits

Built with ❤️ using Astro.
Template architecture & design system crafted for flexibility and performance.

---

## ☕ Support the Project

If you find this template useful and want to support its development,  
you can buy me a coffee ☕✨

<a href="https://buymeacoffee.com/lalicornecg?utm_source=github&utm_medium=readme&utm_campaign=support" target="_blank">
  <img src="https://img.shields.io/badge/Buy%20Me%20a%20Coffee-support-%23FFDD00?style=flat&logo=buymeacoffee&logoColor=black" />
</a>
<a href="https://buymeacoffee.com/lalicornecg?utm_source=github&utm_medium=readme&utm_campaign=support" target="_blank">
<img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
---
