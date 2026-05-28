import {
  Button,
  Container,
  Divider,
  Grid,
  LogoNavbar,
  Navbar,
  NavLink,
  NavLinks,
  NavSearchBar,
  Section,
  Typography,
} from "@globalise/design-system";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

function ShellLayout() {
  return (
    <>
      <Navbar logo={<LogoNavbar className="h-10 w-auto text-white" />}>
        <NavSearchBar placeholder="Search the portal" />
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink
            href="https://globalise.huygens.knaw.nl/"
            target="_blank"
            rel="noreferrer"
          >
            Globalise
          </NavLink>
        </NavLinks>
      </Navbar>

      <main className="pb-16">
        <Outlet />
      </main>
    </>
  );
}

function HomePage() {
  return (
    <Section spacing="large">
      <Container>
        <Grid className="gap-y-8">
          <div className="slot-content-narrow flex flex-col gap-4">
            <Typography variant="label" className="text-brand-accent">
              Research Portal
            </Typography>
            <Typography variant="h2" className="text-white">
              React + Vite + TanStack Router + Tailwind v4 integration baseline
            </Typography>
            <Typography variant="lead" className="text-white/80">
              This page proves the design system works in a non-Next.js stack
              with React 19 and Vite 8.
            </Typography>
            <div className="mt-2 flex flex-wrap gap-3">
              <Button>Explore records</Button>
              <Button variant="outline">View voyages</Button>
            </div>
          </div>

          <Divider className="slot-content-band" />

          <div className="slot-content-left">
            <Typography variant="h4" className="text-white">
              Why this template exists
            </Typography>
            <Typography variant="p" className="mt-3 text-white/80">
              It provides a copy-friendly starter that can be moved directly
              into the Globalise Research Portal repository.
            </Typography>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}

const rootRoute = createRootRoute({
  component: ShellLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
