# TanStack Form Complex Demo

A progressive demo showcasing advanced form patterns with **TanStack Form**, **Zod**, **TanStack Query**, and **Motion** animations.

[View Source on GitHub](https://github.com/dominicpam89/refresher-04-complex-form-with-tanstack)

## Tech Stack

- React 19 + TypeScript
- TanStack Form + TanStack Query
- Zod validation
- Tailwind CSS 4 + shadcn/ui
- Motion (Framer Motion) animations

## Form Levels

| Level | Concept                                    |
| ----- | ------------------------------------------ |
| 1     | Basic form structure                       |
| 2     | Field-level Zod validation                 |
| 3     | Async username check (debounced)           |
| 4     | Custom form hooks + async email validation |
| 5     | Form populated via TanStack Query          |
| 6     | Dynamic array fields (add/remove skills)   |

## Project Structure

```
refresher-04-complex-form-with-tanstack/
├── .vscode/
├── public/
├── src/
│   ├── components/
│   │   ├── homepage/
│   │   ├── ui/
│   │   ├── inputs/
│   │   ├── Loading.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ErrorDisplay.tsx
│   ├── context/
│   ├── features/
│   │   └── forms/
│   │       ├── api.fake.ts
│   │       ├── db.fake.ts
│   │       ├── utils.ts
│   │       ├── components/
│   │       ├── context/
│   │       ├── hooks/
│   │       ├── schemas/
│   │       └── inputs/ & inputs2/ & inputLevel6/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .eslint.config.js
├── .prettierrc
├── components.json
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Quick Start

```bash
npm install
npm run dev
```

## Features

##

- Type-safe forms with inferred schemas
- Async validation with loading states
- Responsive UI with dark/light theme
- Smooth scroll animations and "scroll to top" button

## Author

##

Dominic Pam – [GitHub](https://github.com/dominicpam89) – Email

---

Built as a portfolio piece for Web & Mobile Frontend Development.
