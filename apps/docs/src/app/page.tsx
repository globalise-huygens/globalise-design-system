import { Container, Section, Typography } from "@globalise/design-system";
import Link from "next/link";

export default function RootPage() {
  return (
    <Section background="dark" spacing="large">
      <Container>
        <div className="flex max-w-3xl flex-col items-start gap-s24">
          <Typography variant="h1">Globalise Design System</Typography>
          <Typography variant="p" className="text-brand-white/70">
            Documentation and component examples for the Globalise design
            system.
          </Typography>
          <Link
            href="/docs/getting-started"
            className="inline-flex h-s48 items-center justify-center bg-brand-white px-s56 font-sans text-sm font-medium leading-4 text-brand-black transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Open documentation
          </Link>
        </div>
      </Container>
    </Section>
  );
}
