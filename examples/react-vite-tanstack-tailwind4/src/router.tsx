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
import { useQuery } from "@tanstack/react-query";
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { ObjectCardWebappDemo } from "./components/object-card-demo/ObjectCardWebappDemo";
import { ObjectCardWebappOverlayDemo } from "./components/object-card-demo/ObjectCardWebappOverlayDemo";

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
  const integrationStatus = useQuery({
    queryKey: ["integration-status"],
    queryFn: async () => "TanStack Query provider is active",
    staleTime: Infinity,
  });

  return (
    <Section spacing="large">
      <Container>
        <Grid className="gap-y-8">
          <div className="slot-content-narrow flex flex-col gap-4">
            <Typography variant="label" className="text-brand-turquoise">
              Research Portal
            </Typography>
            <Typography variant="h2" className="text-white">
              React + Vite + TanStack Router + Tailwind v4 integration baseline
            </Typography>
            <Typography variant="lead" className="text-white/80">
              This page proves the design system works in a non-Next.js stack
              with React 19, Vite 8, TanStack Router, and TanStack Query.
            </Typography>
            <Typography variant="small" className="text-white/60">
              {integrationStatus.data ?? "Checking TanStack Query provider..."}
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

          <div className="slot-content-band mt-6">
            <Typography variant="h4" className="text-white">
              ObjectCard as an in-page webapp card
            </Typography>
            <Typography variant="small" className="mt-2 text-white/70">
              Structured as a dedicated demo module with separate data, similar
              to the DocumentDetailOverlay demo setup.
            </Typography>

            <div className="mt-4">
              <ObjectCardWebappDemo />
            </div>
          </div>

          <div className="slot-content-band mt-6">
            <Typography variant="h4" className="text-white">
              ObjectCard as a webapp modal overlay
            </Typography>
            <Typography variant="small" className="mt-2 text-white/70">
              Uses the same ObjectCard demo component in an ObjectCardOverlay,
              including scroll containers for Voyages and References.
            </Typography>

            <div className="mt-4">
              <ObjectCardWebappOverlayDemo />
            </div>
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
