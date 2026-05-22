## Tech Stack

- React
- Vite
- Tailwind v4
- Radix UI primitives
- Bun
- TypeScript
- Biome

## Code Style

### General

- Use named exports for project code.
- Use named function declarations over arrow functions except for callbacks.
- Refer to `.guidelines/` for coding standards.
- Do not use Shadcn UI directly. Recreate the relevant composition with Radix UI primitives and local components.

### TypeScript

- Use `type` over `interface`.
- Never use `any`.
- Add explicit return types for exported functions.

### Naming

| Element   | Convention       | Example                 |
| --------- | ---------------- | ----------------------- |
| Files     | kebab-case       | `sidebar-provider.tsx`  |
| Functions | camelCase        | `getSidebarState`       |
| Variables | camelCase        | `sidebarState`          |
| Constants | UPPER_SNAKE_CASE | `SIDEBAR_WIDTH`         |
| Types     | PascalCase       | `SidebarState`          |

## Commands

```bash
bun run dev
bun run fun
bun run check
bun run check-types
bun run test
```

When adding dependencies, use `bun add <pkg>` from the project root.

## Best Practices for This Codebase

1. Keep feature code under `src/features`.
2. Keep framework entry points under `src/app` thin and compositional.
3. Prefer Radix UI primitives for dropdowns, collapsibles, portals, and tooltips.
4. Use Tailwind v4 theme variables from `src/index.css`; avoid hardcoded one-off colors where a token exists.
5. Test behavior from the user perspective with accessible queries.
