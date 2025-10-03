# Codarambha 2025

A modern React application scaffolded with Vite and styled with Tailwind CSS. This repository powers the Codarambha Hackfest 2025 web experience, focusing on fast development, clean styling primitives, and smooth animations.

## Tech Stack

- React 19 + React DOM
- Vite 6
- Tailwind CSS 3
- PostCSS + Autoprefixer
- Motion (for lightweight web animations)
- React Icons
- Utility helpers: clsx, class-variance-authority, tailwind-merge

Key configs:
- [vite.config.js](vite.config.js)
- [tailwind.config.js](tailwind.config.js)
- [postcss.config.js](postcss.config.js)
- [netlify.toml](netlify.toml) (Netlify deployment)
- [firebase.json](firebase.json) and [.firebaserc](.firebaserc) (Firebase Hosting)

## Getting Started

Prerequisites:
- Node.js 18+ (LTS recommended)
- npm (comes with Node)

Install dependencies:
```bash
npm install
```

Start the local dev server:
```bash
npm run dev
```
Vite will print a local URL (typically http://localhost:5173).

Create a production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Available Scripts

- `npm run dev` — Start Vite in development mode.
- `npm run build` — Build the app for production.
- `npm run preview` — Preview the production build locally.

See [package.json](package.json) for the complete scripts and dependency lists.

## Project Structure

A high-level view of the repository:

```
.
├─ .firebase/                 # Firebase local hosting artifacts
├─ components/                # Reusable UI components
├─ lib/                       # Shared utilities/helpers
├─ public/                    # Static assets served as-is
├─ src/                       # Application source
├─ App.jsx                    # Root application component (entry composition)
├─ index.html                 # HTML template used by Vite
├─ index.jsx                  # React entry point (mounts the app)
├─ metadata.json              # App/site metadata
├─ postcss.config.js          # PostCSS configuration
├─ tailwind.config.js         # Tailwind configuration
├─ vite.config.js             # Vite configuration
├─ netlify.toml               # Netlify deployment configuration
├─ firebase.json              # Firebase Hosting configuration
└─ package.json               # Scripts and dependencies
```

Notes:
- Tailwind is wired via PostCSS; ensure the `content` paths in [tailwind.config.js](tailwind.config.js) cover your component directories.
- Static assets placed in `public/` are available at the app root during dev and build.

## Styling and UI

- Tailwind CSS provides utility-first styling.
- `clsx` and `class-variance-authority` help compose conditional and variant-driven class names.
- `tailwind-merge` ensures conflicting Tailwind classes resolve predictably.

## Animations

- The [motion](https://www.npmjs.com/package/motion) package powers performant, declarative animations and transitions.

## Deployment

You can deploy with either Netlify or Firebase Hosting (both configs exist in the repo). Use the provider that matches your workflow.

### Netlify

1. Ensure [netlify.toml](netlify.toml) is present (already included).
2. Connect the repository in Netlify or use the CLI:
   ```bash
   npm install -g netlify-cli
   netlify init    # one-time, link site
   netlify deploy  # deploy a draft
   netlify deploy --prod  # deploy to production
   ```

### Firebase Hosting

1. Ensure [firebase-tools](https://firebase.google.com/docs/cli) are installed:
   ```bash
   npm install -g firebase-tools
   ```
2. Login and initialize (if not already configured):
   ```bash
   firebase login
   firebase use <your-project-id>
   ```
3. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

Review and adjust [firebase.json](firebase.json) and [.firebaserc](.firebaserc) as needed for your environment.

## Contributing

Contributions are welcome!

- Fork the repo and create a feature branch.
- Keep changes focused and add helpful commit messages.
- Open a pull request describing the change and rationale.

## License

No license file is currently included in this repository. If you intend to reuse or distribute this code, please contact the repository owner to clarify licensing terms.

## Maintainer

- GitHub: [mahatoankit](https://github.com/mahatoankit)

---
Built with React, Vite, and Tailwind CSS for a fast, modern developer experience.
