# Sidebar UI Recreation

Pixel-perfect recreation of the Sidebar-07 dashboard layout using modern frontend architecture and accessibility-first patterns.

Inspired by the original reference design, but fully recreated from scratch without inspecting source code or using the original component implementation.

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Radix UI
- clsx
- tailwind-merge
- Biome
- Vitest
- React Testing Library

---

## Features

- Fully responsive sidebar layout
- Desktop expanded/collapsed states
- Mobile drawer behavior
- Collapsible navigation groups
- Keyboard accessible interactions
- Tooltip support for collapsed navigation
- Clean reusable component architecture
- Tailwind v4 design token setup
- Unit and integration test coverage
- Accessibility-focused implementation
- Zero prop drilling for shared layout state

---

# Local Setup

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Open:

```txt
http://localhost:3000
```

---

# Scripts

Run development server:

```bash
bun run dev
```

Build production app:

```bash
bun run build
```

Preview production build:

```bash
bun run preview
```

Run lint:

```bash
bun run lint
```

---

# Architecture Goals

This project intentionally focuses on frontend engineering quality, not just visual cloning.

Main goals:

- composition-first React architecture
- reusable UI primitives
- accessibility-first interactions
- minimal abstraction leakage
- scalable folder structure
- maintainable state management
- predictable styling patterns
- testable UI behavior

---

# Design Decisions

## No Prop Drilling

Sidebar state is managed through a provider-based architecture.

Shared layout state is accessed through:

```ts
useSidebar()
```

instead of deeply nested prop chains.

---

## Tailwind v4 Theme Variables

Reusable design tokens are defined through Tailwind v4 theme variables instead of hardcoded values.

Examples include:

- colors
- radius
- spacing
- sidebar surface styles

---

## Radix UI Usage

Radix primitives are only used for interaction behavior where accessibility and keyboard support matter.

Examples:

- tooltip behavior
- collapsible navigation groups

---

## Reusable UI Primitives

Reusable components are separated from layout/business logic.

Examples:

```txt
Button
Input
Tooltip
Avatar
NavItem
SidebarGroup
```

---

# Testing Strategy

## Unit Tests

Reusable components are tested for:

- accessibility behavior
- interaction behavior
- state rendering
- keyboard support

Avoided:

- implementation detail testing
- CSS class snapshots
- brittle DOM structure assertions

---

## Integration Tests

The complete layout flow is tested for:

- sidebar expand/collapse behavior
- mobile drawer interactions
- navigation group expansion
- responsive state transitions
- keyboard accessibility

---

# Accessibility

The implementation includes:

- semantic navigation structure
- proper button usage
- keyboard navigation
- focus-visible states
- aria-expanded handling
- accessible tooltip behavior

---

# Folder Structure

```txt
src/
  components/
    layout/
    navigation/
    ui/

  hooks/
  lib/
  providers/
  styles/
  test/
  pages/
```

---

# Utility Helpers

Shared utility:

```ts
cn()
```

combines:

- clsx
- tailwind-merge

to support safe conditional Tailwind class composition.

---

# Constraints Followed

- No source code copied
- No inspect element usage
- No direct shadcn/ui usage
- Full recreation implemented manually
- Original behavior recreated independently

---

# Development Notes

The implementation prioritizes:

- maintainability
- scalability
- accessibility
- frontend architecture maturity
- realistic production conventions

over quick one-file solutions.

---

# Reference

Original UI reference:

https://ui.shadcn.com/view/new-york-v4/sidebar-07

---

# Inspiration

README structure inspired by previous internal project documentation.
