---
name: javascript
description: Best practices and coding guidelines for JavaScript projects. Also applicable when a superset of JS (like TypeScript, CoffeeScript) is also used.
---

Checklist Items:

- Use `camelCase` for variables, functions, and method names.
- Use `PascalCase` for classes and constructor functions.
- Use `SCREAMING_SNAKE_CASE` for constants and environment variables.
- Name event handlers with `handle` prefix (e.g., `handleClick`, `handleSubmit`).
- Name event handler callbacks with `on` prefix when passed as props (e.g., `onClick`, `onSuccess`).
- Avoid magic numbers/strings; extract them into named constants.
- Ensure each function does one thing and does it well.
- Limit function parameters to 3; use an options object for more.
- Never mutate function arguments; return new values instead.
- Use nullish coalescing (`??`) instead of `||` for default values with falsy possibilities.
- Use optional chaining (`?.`) for safe property access on nullable objects.
- Use `try/catch` for operations that may throw.
- Use `Promise.all()` for parallel independent async operations.
- Avoid mixing `async/await` with `.then()` in the same function.
- Return promises directly; don't `await` then immediately return.
- Mark functions as `async` only if they use `await`.
- Use `AbortController` whenever needed.
- Prefer template literals over string concatenation; ensure those expressions don’t evaluate to `undefined` or `null`.
- Prefer standard APIs over libraries when sufficient. (like native `fetch` over `axios` etc)
- Choose the simplest, most readable solution; avoid clever patterns or unusual syntax when straightforward alternatives exist.
- Lazy load non-critical resources.
- Use validation libraries like Zod (or similar) for runtime validations over manual complex conditional validations.
