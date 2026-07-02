# Globalise Design System

Internal React component app for the [Globalise](https://globalise.huygens.knaw.nl/) project.

The project is now a single React/Vite source tree. The showcase imports the same local components it demonstrates, so there is no separate package app and no second example implementation to maintain.

## Structure

```text
src/
├── App.tsx
├── components/
│   ├── ui/
│   │   ├── *.tsx
│   │   ├── *.css
│   │   └── ui.css
│   ├── document-detail/
│   │   ├── *.tsx
│   │   └── document-detail.css
│   ├── document-detail-demo/
│   │   ├── *.tsx
│   │   ├── *.css
│   │   └── documentDetailContent.ts
│   └── object-card-demo/
│       ├── *.tsx
│       └── data.ts
├── lib/
├── styles/
│   └── globals.css
└── styles.css
```

## Styling

- Plain CSS only; no Tailwind and no Next.js runtime.
- Global tokens, layout variables, and reset styles live in `src/styles/globals.css`.
- Reusable UI components should own their base styles in adjacent `Component.css` files under `src/components/ui/`.
- `src/components/ui/ui.css` is the shared entrypoint that imports those reusable UI styles once for the app.
- `src/components/document-detail/document-detail.css` keeps feature-level layout styling and context-specific overrides for document-detail surfaces.
- Demo-specific composition and content live next to the demo components.

In practice: keep intrinsic component styling with the component, and keep cross-component orchestration or feature-context overrides in the feature stylesheet.

Component classes use the `gds-` prefix for reusable design-system pieces. Demo classes use feature-specific prefixes such as `webapp-object-card` and `document-detail-demo`.

## Local Usage

Import components directly from the local source tree:

```tsx
import { Button, Container, Typography } from "@/index";

export function Page() {
  return (
    <Container>
      <Typography variant="h1">Hello Globalise</Typography>
      <Button>Explore records</Button>
    </Container>
  );
}
```

The root `src/styles.css` imports the global tokens and component CSS once for the app.

## Development

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm lint
pnpm build
```

## Main Component Areas

- Layout primitives: `Container`, `Grid`, `Section`, `Divider`, `SectionDivider`.
- Navigation primitives: `Navbar`, `NavSearchBar`, `NavLinks`, `NavLink`.
- Content primitives: `Button`, `Typography`, `NewsletterSignup`, cards, badges, tags, and icons.
- Object detail UI: `ObjectCard`, `ObjectCardOverlay`, `ReferencePanel`.
- Document detail UI: `DocumentDetailOverlay` plus top/bottom bars, metadata sidebar, split viewer panes, canvases, toolbars, controls, reference cards, and entity highlight controls.

## License

MIT
