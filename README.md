# @globalise/design-system

React component library for the [Globalise](https://globalise.huygens.knaw.nl/) project, built with [React Aria Components](https://react-spectrum.adobe.com/react-aria/) and [Tailwind CSS v4](https://tailwindcss.com/).

**[Documentation site →](https://globalise-huygens.github.io/globalise-design-system/)**

## Repository structure

This is a pnpm monorepo:

```
├── packages/ui      # @globalise/design-system — the component library
├── apps/docs        # Next.js documentation & demo site
└── pnpm-workspace.yaml
```

## Installation

```bash
npm install @globalise/design-system
```

### Peer dependencies

| Package       | Version |
| ------------- | ------- |
| `react`       | >= 18   |
| `react-dom`   | >= 18   |
| `tailwindcss` | >= 4    |

## Setup

### 1. Import the design tokens

Add the design system styles and Tailwind source scanning to your global CSS:

```css
@import "tailwindcss";
@import "@globalise/design-system/styles.css";

/* Let Tailwind detect class names used by library components */
@source "../node_modules/@globalise/design-system/dist";
```

### 2. Configure fonts

The design system uses **Noto Sans** (body/UI) and **Noto Serif** (headings/editorial). Set them up via your framework's font loading (e.g. `next/font/google`) or a `<link>` tag and map the CSS variables:

```css
@theme inline {
  --font-sans: var(--font-noto-sans);
  --font-serif: var(--font-noto-serif);
}
```

## React + Vite Consumer Template

For a copy-ready integration targeting a non-Next.js stack, use:

`examples/react-vite-tanstack-tailwind4`

This template includes:

- React 19 + React DOM 19
- TypeScript 5.9
- Vite 8
- TanStack Router
- TanStack Query
- Tailwind CSS v4

Use it as the baseline for transferring this design system into:

`https://github.com/globalise-huygens/globalise-research-portal`

## Usage

```tsx
import { Button, Typography, Container } from "@globalise/design-system";

export function Page() {
  return (
    <Container>
      <Typography variant="h1">Hello Globalise</Typography>
      <Button>Get started</Button>
    </Container>
  );
}
```

## Components

### Layout

| Component        | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `Container`      | Responsive max-width wrapper with horizontal padding |
| `Grid`           | Responsive 4 / 8 / 16-column CSS grid                |
| `Section`        | Full-width band with background and spacing variants |
| `SectionDivider` | Convenience divider inside a Container               |
| `Divider`        | Semantic `<hr>` styled as a subtle white line        |

### Navigation

| Component      | Description                                 |
| -------------- | ------------------------------------------- |
| `Navbar`       | Top navigation bar with logo, search, links |
| `NavSearchBar` | Search input for the navbar                 |
| `NavLinks`     | Link group wrapper                          |
| `NavLink`      | Individual navigation link                  |

### Cards

| Component                   | Description                                                 |
| --------------------------- | ----------------------------------------------------------- |
| `CardBase`                  | Low-level card primitive with colour variants               |
| `CardArticle`               | Article card with image, label, title, CTA                  |
| `CardHero`                  | Full-bleed hero card with overlay                           |
| `CardFeatured`              | Featured content card with tabbed items                     |
| `CardGlance`                | Stats/at-a-glance card with colour accent                   |
| `ObjectCardOverlay`         | Grid-aware modal overlay shell for entity detail views      |
| `ObjectCard`                | Composable entity detail card shell for entity detail views |
| `ReferencePanel`           | Prebuilt reference column for object card layouts           |

### Content

| Component          | Description                                             |
| ------------------ | ------------------------------------------------------- |
| `Button`           | Pill-shaped button with brand variants                  |
| `Typography`       | Semantic text component with variant-to-element mapping |
| `NewsletterSignup` | Email signup form block                                 |

### Button

```tsx
import { Button } from "@globalise/design-system";

<Button variant="default">White Pill</Button>
<Button variant="outline">Outline Pill</Button>
<Button variant="link">Text CTA →</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="nav">Nav</Button>
```

| Prop      | Type                                                   | Default     |
| --------- | ------------------------------------------------------ | ----------- |
| `variant` | `"default" \| "outline" \| "link" \| "ghost" \| "nav"` | `"default"` |
| `size`    | `"default" \| "sm" \| "lg" \| "icon"`                  | `"default"` |
| `asChild` | `boolean`                                              | `false`     |

### Typography

```tsx
import { Typography } from "@globalise/design-system";

<Typography variant="h1">Heading 1</Typography>
<Typography variant="p">Body text</Typography>
<Typography variant="label">Label</Typography>
```

| Variant      | Element        | Font                       |
| ------------ | -------------- | -------------------------- |
| `h1`         | `<h1>`         | Noto Serif, 7xl            |
| `h2`         | `<h2>`         | Noto Serif, 6xl            |
| `h3`         | `<h3>`         | Noto Serif, 5xl            |
| `h4`         | `<h4>`         | Noto Serif, 4xl            |
| `p`          | `<p>`          | Noto Sans, base            |
| `lead`       | `<p>`          | Noto Sans, lg              |
| `small`      | `<small>`      | Noto Sans, sm              |
| `muted`      | `<p>`          | Noto Sans, sm, 60% opacity |
| `blockquote` | `<blockquote>` | Noto Serif, light, 4xl     |
| `label`      | `<span>`       | Noto Sans, xs, uppercase   |
| `subtitle`   | `<p>`          | Noto Serif, xl             |
| `code`       | `<code>`       | Mono, sm                   |
| `large`      | `<div>`        | Noto Sans, lg, semibold    |

### CardBase

Flat cards with brand colour variants (no rounded corners, no shadows).

```tsx
import {
  CardBase,
  CardBaseHeader,
  CardBaseTitle,
  CardBaseContent,
  CardBaseFooter,
} from "@globalise/design-system";

<CardBase variant="teal">
  <CardBaseHeader>
    <CardBaseTitle>Title</CardBaseTitle>
  </CardBaseHeader>
  <CardBaseContent>Content</CardBaseContent>
  <CardBaseFooter>Footer</CardBaseFooter>
</CardBase>;
```

| Variant   | Background              | Text  |
| --------- | ----------------------- | ----- |
| `default` | Archive Black (#262626) | White |
| `teal`    | Turquoise (#29BFCC)     | Black |
| `red`     | Vermilion (#FF543D)     | White |
| `emerald` | Mint (#36C6A7)          | Black |
| `stone`   | Parchment (#B99B7F)     | Black |
| `overlay` | Black gradient          | White |

### Section

Full-width layout band with background and spacing control.

```tsx
import { Section, Container, Typography } from "@globalise/design-system";

<Section background="dark" spacing="large">
  <Container>
    <Typography variant="h1" className="text-white">
      Hero
    </Typography>
  </Container>
</Section>;
```

| Prop         | Type                   | Default     |
| ------------ | ---------------------- | ----------- |
| `background` | `"dark" \| "light"`    | `"dark"`    |
| `spacing`    | `"default" \| "large"` | `"default"` |

### Navbar

```tsx
import {
  Navbar,
  NavSearchBar,
  NavLinks,
  NavLink,
  LogoNavbar,
} from "@globalise/design-system";

<Navbar logo={<LogoNavbar className="h-9 w-auto text-white" />}>
  <NavSearchBar placeholder="Search the archive" />
  <NavLinks>
    <NavLink href="/archive">Archive</NavLink>
    <NavLink href="/explore">Explore</NavLink>
  </NavLinks>
</Navbar>;
```

### ObjectCard

The Object Card family combines `ObjectCardOverlay`, `ObjectCard`, `ReferencePanel`, and the layout/content primitives below to build entity detail overlays for **Ship**, **Person**, **Concept**, **Voyage**, and **Letter** records.

```tsx
import {
  EntityBadge,
  ObjectCard,
  ObjectCardAction,
  ObjectCardBody,
  ObjectCardExternalLink,
  ObjectCardFooter,
  ObjectCardHeader,
  ObjectCardListItem,
  ObjectCardPanel,
  ObjectCardProperty,
  ObjectCardPropertyList,
  ReferencePanel,
  ObjectCardSection,
  ObjectCardStat,
  ObjectCardStats,
  ObjectCardTitle,
  IconCopy,
} from "@globalise/design-system";

<ObjectCard>
  <ObjectCardHeader onClose={() => {}}>
    <EntityBadge type="ship">Ship</EntityBadge>
    <ObjectCardTitle>Prins Eugenius</ObjectCardTitle>
    <ObjectCardStats>
      <ObjectCardStat>7 Voyages</ObjectCardStat>
      <ObjectCardStat>1,234 References</ObjectCardStat>
    </ObjectCardStats>
  </ObjectCardHeader>

  <ObjectCardBody className="h-[600px]">
    <ObjectCardPanel side="left">
      <ObjectCardSection title="General Properties">
        <ObjectCardPropertyList>
          <ObjectCardProperty label="Built" value="1703, Amsterdam" />
          <ObjectCardProperty label="Weight" value="874 tons" />
        </ObjectCardPropertyList>
      </ObjectCardSection>
      <ObjectCardFooter>
        <ObjectCardAction icon={<IconCopy className="h-s16 w-s16" />}>
          Copy URI
        </ObjectCardAction>
      </ObjectCardFooter>
    </ObjectCardPanel>

    <ReferencePanel
      title="References (1,234)"
      items={[
        {
          title: "p.264",
          snippet: "in 't geheel p:r de prins Eugenius...",
          metadata: "NL-HaNA 1.04.02 · 10070_0054 · 264",
          href: "#",
          uri: "https://example.com/reference/1764-0054-264",
        },
      ]}
    />
  </ObjectCardBody>
</ObjectCard>;
```

Pair `ObjectCard` with `ObjectCardOverlay` when you want modal presentation aligned to the responsive Globalise shell grid.

| Badge type | Color scheme |
| ---------- | ------------ |
| `ship`     | Turquoise    |
| `concept`  | Mint         |
| `voyage`   | Vermilion    |
| `letter`   | Parchment    |
| `person`   | Neutral      |

## Icons

All icons use `currentColor` and accept standard SVG props.

```tsx
import { IconArrowRight, IconSearch, IconAdd } from "@globalise/design-system";

<IconArrowRight className="h-5 w-5" />;
```

| Icon               | Purpose            |
| ------------------ | ------------------ |
| `IconAdd`          | Add / plus         |
| `IconArrowRight`   | Navigation arrow   |
| `IconChevronDown`  | Dropdown indicator |
| `IconClose`        | Dismiss / close    |
| `IconCopy`         | Copy to clipboard  |
| `IconDownload`     | Download           |
| `IconExternalLink` | External link      |
| `IconMenu`         | Hamburger menu     |
| `IconSearch`       | Search             |

## Logos

SVG logo components, also available as raw SVG files at `@globalise/design-system/assets/*`.

```tsx
import {
  LogoNavbar,
  Logomark,
  Logotype,
  LogoLockup,
} from "@globalise/design-system";

<LogoNavbar className="h-9 w-auto text-white" />;
```

| Logo         | Purpose                        |
| ------------ | ------------------------------ |
| `Logomark`   | Symbol only                    |
| `Logotype`   | Wordmark only                  |
| `LogoLockup` | Full brand (symbol + wordmark) |
| `LogoNavbar` | Compact navbar variant         |

## Brand colours

| Name          | CSS Variable        | Hex       | Usage              |
| ------------- | ------------------- | --------- | ------------------ |
| Archive Black | `--brand-black`     | `#262626` | Primary background |
| Paper White   | `--brand-white`     | `#FFFFFF` | Primary text       |
| Parchment     | `--brand-parchment` | `#B99B7F` | Secondary / muted  |
| Vermilion     | `--brand-vermilion` | `#FF543D` | Accent             |
| Turquoise     | `--brand-turquoise` | `#29BFCC` | Accent             |
| Mint          | `--brand-mint`      | `#36C6A7` | Accent             |

Full colour scales (50–900) are available for Neutral, Parchment, Vermilion, Turquoise, and Mint.

## Adding more shadcn/ui components

This project has a `components.json` for the shadcn CLI. Interactive components (buttons, links, form fields) use [React Aria Components](https://react-spectrum.adobe.com/react-aria/) directly. Run from the `packages/ui` directory to scaffold additional shadcn primitives:

```bash
cd packages/ui
npx shadcn@latest add <component-name>
```

## Development

```bash
# Prerequisites: pnpm >= 10, Node >= 22

pnpm install             # install all dependencies

# Design system (packages/ui)
pnpm build               # production build (tsup → dist/)
pnpm dev                 # watch mode (rebuilds on changes)
pnpm lint                # lint all packages
pnpm typecheck           # type-check all packages
pnpm format              # format all files

# Documentation site (apps/docs)
pnpm dev:docs            # build UI + start Next.js dev server (localhost:3000)
pnpm build:docs          # full production build (UI + static export)
```

The docs site is deployed to GitHub Pages automatically on push via GitHub Actions.

## License

MIT
