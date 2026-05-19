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

refresher-04-complex-form-with-tanstack/
├── .vscode/ # VS Code settings and recommended extensions
├── public/ # Static assets (favicon, etc.)
├── src/
│ ├── components/
│ │ ├── homepage/ # Homepage sections (Hero, Features, CTA, etc.)
│ │ ├── ui/ # shadcn/ui primitives (button, card, input, select, etc.)
│ │ ├── inputs/ # Basic input components (InputText, InputPassword)
│ │ ├── Loading.tsx
│ │ ├── ThemeToggle.tsx
│ │ └── ErrorDisplay.tsx
│ ├── context/ # Theme context provider
│ ├── features/
│ │ └── forms/
│ │ ├── api.fake.ts # Mock API (todos, authors)
│ │ ├── db.fake.ts # Fake data stores
│ │ ├── utils.ts # Form level constants
│ │ ├── components/ # Form level 1‑6, wrappers, LevelSelect, TodoCard
│ │ ├── context/ # TanStack Form hook contexts
│ │ ├── hooks/ # useGetAuthor, useGetTodos, useAnimate
│ │ ├── schemas/ # Zod schemas (author, register, skill, todo)
│ │ └── inputs/ & inputs2/ & inputLevel6/ # Reusable form field components
│ ├── hooks/ # Global hooks (useLocalStorage)
│ ├── lib/ # Utilities (cn, delay, router, query client)
│ ├── pages/ # PageHome, PageForms, LayoutCommon
│ ├── types/ # Global type definitions
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── .eslint.config.js
├── .prettierrc
├── components.json # shadcn configuration
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md

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
