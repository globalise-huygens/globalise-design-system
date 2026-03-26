# @globalise/design-system

React component library for the [Globalise](https://globalise.huygens.knaw.nl/) project, built with [shadcn/ui](https://ui.shadcn.com/) and [Tailwind CSS v4](https://tailwindcss.com/).

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

The design system uses **Noto Sans** (body/UI) and **Noto Serif** (headings/editorial). Set them up via your framework's font loading (e.g. `next/font/google`) and map the CSS variables:

```css
@theme inline {
  --font-sans: var(--font-noto-sans);
  --font-serif: var(--font-noto-serif);
}
```

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

### Button

Pill-shaped action buttons with brand variants.

```tsx
import { Button } from "@globalise/design-system";

<Button variant="default">White Pill</Button>
<Button variant="outline">Outline Pill</Button>
<Button variant="link">Text CTA →</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="nav">Nav</Button>

<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">★</Button>
```

| Prop      | Type                                                   | Default     |
| --------- | ------------------------------------------------------ | ----------- |
| `variant` | `"default" \| "outline" \| "link" \| "ghost" \| "nav"` | `"default"` |
| `size`    | `"default" \| "sm" \| "lg" \| "icon"`                  | `"default"` |
| `asChild` | `boolean`                                              | `false`     |

### Typography

Semantic text component with variant-to-element mapping.

```tsx
import { Typography } from "@globalise/design-system";

<Typography variant="h1">Heading 1</Typography>
<Typography variant="p">Body text</Typography>
<Typography variant="blockquote">Quoted text</Typography>
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

Flat cards with brand color variants (no rounded corners, no shadows).

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

### Container

Layout wrapper with responsive max-width and padding.

```tsx
import { Container } from "@globalise/design-system";

<Container>{/* max-w-[1440px], responsive horizontal padding */}</Container>;
```

### Divider

Semantic horizontal rule styled as a subtle white line.

```tsx
import { Divider } from "@globalise/design-system";

<Divider />;
```

### Navbar

Navigation bar with centred search and right-aligned links.

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
    <NavLink href="/about">About</NavLink>
  </NavLinks>
</Navbar>;
```

### Dialog

Modal dialog built on Radix UI, styled with dark background.

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@globalise/design-system";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>;
```

## Icons

All icons use `currentColor` and accept standard SVG props.

```tsx
import { IconArrowRight, IconSearch, IconAdd } from "@globalise/design-system";

<IconArrowRight className="h-5 w-5" />;
```

| Icon              | Purpose            |
| ----------------- | ------------------ |
| `IconAdd`         | Add / plus         |
| `IconArrowRight`  | Navigation arrow   |
| `IconChevronDown` | Dropdown indicator |
| `IconClose`       | Dismiss / close    |
| `IconEast`        | Directional east   |
| `IconSearch`      | Search             |

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

### Raw SVG assets

```ts
// Import paths for non-React usage
import logoBlack from "@globalise/design-system/assets/logo/lockup-black.svg";
import searchIcon from "@globalise/design-system/assets/icons/search.svg";
```

## Brand colours

| Name          | CSS Variable        | Hex       | Usage              |
| ------------- | ------------------- | --------- | ------------------ |
| Archive Black | `--brand-black`     | `#262626` | Primary background |
| Paper White   | `--brand-white`     | `#FFFFFF` | Primary text       |
| Parchment     | `--brand-parchment` | `#B99B7F` | Secondary / muted  |
| Vermilion     | `--brand-vermilion` | `#FF543D` | Accent             |
| Turquoise     | `--brand-turquoise` | `#29BFCC` | Accent             |
| Mint          | `--brand-mint`      | `#36C6A7` | Accent             |

## Adding more shadcn/ui components

This project has a `components.json` for the shadcn CLI. To add new components:

```bash
npx shadcn@latest add <component-name>
```

## Development

```bash
npm run dev             # watch mode (rebuilds on changes)
npm run build           # production build
npm run typecheck       # type check
npm run lint            # lint
npm run format          # format code
npm run storybook       # start Storybook on http://localhost:6006
npm run build-storybook # build static Storybook site
```

## License

-
