# React 19 + Vite 8 Integration Template

Copy-ready starter for integrating `@globalise/design-system` into a React-only stack:

- React 19 + React DOM 19
- TypeScript 5.9
- Vite 8
- TanStack Router
- TanStack Query
- Tailwind CSS v4

## Quick start (inside this folder)

```bash
pnpm install
pnpm dev
```

## Transfer to `globalise-research-portal`

1. Copy all files in this folder into the target repo root (or into a dedicated app folder such as `apps/portal-ui`).
2. Install dependencies with your package manager.
3. Ensure your app imports `src/styles.css` from `src/main.tsx`.
4. Start the app and verify design system styles load correctly.

## Notes

- The critical Tailwind v4 integration line is:

```css
@source "../node_modules/@globalise/design-system/dist";
```

- If this template is moved to another path, adjust the `@source` relative path accordingly.
- If this template is copied outside this monorepo after publication, replace `"@globalise/design-system": "workspace:*"` with the published npm version.
- If your target repo already has a router setup, keep its route tree and copy only styling + design system imports first.
