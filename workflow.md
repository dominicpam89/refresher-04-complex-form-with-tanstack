## 2. `workflow.md`

```markdown
# Workflow & File Usage Context

This document explains how the project’s folders and files interact, intended as a reference for LLMs and developers.

## Core Routing & Layout

- `src/lib/router.ts` – defines two routes:
  - `/` → `PageHome` (landing page with form level cards)
  - `/forms` → `LayoutCommon` (wraps `PageForms`)
- `PageForms` reads URL `?level=` parameter to display the selected form level (1‑6) and stores it in localStorage via `useLocalStorage`.

## State Management

- **TanStack Query** – configured in `src/lib/query-client-provider.ts`. Provides `useGetAuthor`, `useGetTodos` (in `features/forms/hooks/`).
- **localStorage** – `src/hooks/useLocalStorage.ts` handles persistent storage (e.g., last visited form level, theme).
- **Theme** – `src/context/ThemeContext.ts` manages dark/light/system themes, synced with `localStorage`.

## Forms Architecture

All form logic lives in `src/features/forms/`:

- **`schemas/`** – Zod schemas for each form level (author, register, skill, todo). Exported for validation.
- **`api.fake.ts`** – mock API functions (`getTodos`, `createTodo`, `getAuthor`, etc.) with artificial delay.
- **`db.fake.ts`** – in‑memory data (todos, authors, country dial codes).
- **`components/`**:
  - `FormLevel1` – basic uncontrolled form.
  - `FormLevel2` – field‑level Zod validation.
  - `FormLevel3` – async username validation.
  - `FormLevel4` – custom form hooks (`useAppForm`), async email check, select field.
  - `FormLevel5` – prefilled with data from `useGetAuthor`.
  - `FormLevel6` – dynamic array of skills (add/remove).
  - `FormWrapper` / `FormContainer` – reusable card layouts.
  - `LevelSelect` – dropdown to switch form levels (updates URL).
- **`context/`** – `form.context.ts` creates TanStack Form hook contexts (`useFieldContext`, etc.) used by custom field components.
- **`inputs/`, `inputs2/`, `inputLevel6/`** – reusable field components that consume `useFieldContext` (e.g., `InputField`, `PasswordField`, `SelectField`, `InputTextGroup`).

## Homepage (`src/components/homepage/`)

- `BackgroundDecorations.tsx` – floating animated blobs.
- `Header.tsx` – navigation bar with “Get Started” button and theme toggle.
- `HeroSection.tsx` – hero text, CTA, and statistics cards (animated with Motion).
- `Features.tsx` – displays 6 feature cards. Clicking a card navigates to `/forms?level=X`. Stores `data-level` for scroll‑back functionality.
- `TechStackSection.tsx` – technology grid with hover rotations.
- `CTASection.tsx` – personal “hire me” section with GitHub and email links.
- `ScrollToTopButton.tsx` – appears after scrolling 600px, animated with Motion.

## UI Components (`src/components/ui/`)

Customised shadcn/ui components (button, card, input, select, field, badge, separator, sonner toaster). They use `class-variance-authority` and Radix primitives. All styles are defined in `src/index.css` with CSS variables.

## Global Utilities

- `src/lib/utils.ts` – `cn()` (class merging), `delay()`, `generateRandomString()`.
- `src/lib/query-client-provider.ts` – shared `QueryClient`.
- `src/hooks/useLocalStorage.ts` – generic localStorage hook with JSON serialisation and cross‑tab sync.

## Data Flow Example (Form Level 5)

1. `PageForms` extracts `level=5` from URL → renders `FormLevel5`.
2. `FormLevel5` calls `useGetAuthor('johndoe123')` (TanStack Query).
3. While loading, the form uses empty defaults; when data arrives, the form is populated.
4. On submit, it logs the form values (mock API can be plugged).
5. The form uses custom field components (`InputText`, `InputTextGroup`) that read from `useFieldContext`.
6. Async username validation calls `isUsernameTaken` (from `author.schema`).

## Integration Points

- **URL ↔ localStorage** – `PageForms` writes the current level to localStorage; `PageHome` reads it on mount and scrolls to the corresponding card.
- **Theme** – `ThemeToggle` (in `components/ThemeToggle.tsx`) uses `useTheme` from `context/ThemeContext`. Changes are stored in localStorage and applied to `<html>` class.
- **Motion animations** – used across homepage components for entrance, hover, and scroll‑triggered effects. Defined via `motion` elements and variants.

## Notes for LLMs

- When editing forms, always update the corresponding Zod schema in `schemas/`.
- Adding a new form level requires:
  1. Creating a new component in `features/forms/components/`.
  2. Adding its route logic in `PageForms` (conditional rendering).
  3. Updating `formLevels` constant in `features/forms/utils.ts`.
- Custom field components must be wrapped with `createFormHook` (see `FormLevel4` / `FormLevel5`) to access `useFieldContext`.
- The mock API uses `delay(1200)` – real endpoints can replace it later.
- Tailwind classes use `bg-linear-*` instead of `bg-gradient-*` (Tailwind 4).
```
