import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";
import { Divider } from "./Divider";
import { Grid } from "./Grid";
import { Section } from "./Section";
import { SectionDivider } from "./SectionDivider";
import { Typography } from "./Typography";

// ── Container ──────────────────────────────────────

const containerMeta = {
  title: "Layout/Container",
  component: Container,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Container>;

export default containerMeta;
type ContainerStory = StoryObj<typeof containerMeta>;

export const Default: ContainerStory = {
  render: () => (
    <Container className="py-8">
      <div className="bg-(--brand-turquoise)/20 p-6 text-white font-sans text-sm">
        Content inside Container — max-width 1440px with responsive padding
      </div>
    </Container>
  ),
};

// ── Divider ────────────────────────────────────────

export const DividerStory: ContainerStory = {
  name: "Divider",
  render: () => (
    <Container className="py-8 space-y-4">
      <Typography variant="p" className="text-white">
        Content above
      </Typography>
      <Divider />
      <Typography variant="p" className="text-white">
        Content below
      </Typography>
    </Container>
  ),
};

// ── Grid ───────────────────────────────────────────

export const GridStory: ContainerStory = {
  name: "Grid (12 columns)",
  render: () => (
    <div className="py-8">
      <Grid>
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="col-span-1 bg-(--brand-turquoise)/20 p-4 text-center text-white text-xs font-sans"
          >
            {i + 1}
          </div>
        ))}
      </Grid>
      <Grid className="mt-8">
        <div className="col-span-4 sm:col-span-4 lg:col-span-4 bg-(--brand-vermilion)/20 p-4 text-white text-sm font-sans">
          4 cols
        </div>
        <div className="col-span-4 sm:col-span-4 lg:col-span-8 bg-(--brand-mint)/20 p-4 text-white text-sm font-sans">
          8 cols
        </div>
      </Grid>
    </div>
  ),
};

// ── Section ────────────────────────────────────────

export const SectionDark: ContainerStory = {
  name: "Section (dark)",
  render: () => (
    <Section background="dark">
      <Container>
        <Typography variant="h4" className="text-white">
          Dark section
        </Typography>
        <Typography variant="p" className="text-white">
          Default dark background section with standard spacing.
        </Typography>
      </Container>
    </Section>
  ),
};

export const SectionLight: ContainerStory = {
  name: "Section (light)",
  render: () => (
    <Section background="light">
      <Container>
        <Typography variant="h4" className="text-black">
          Light section
        </Typography>
        <Typography variant="p" className="text-black">
          White background section with standard spacing.
        </Typography>
      </Container>
    </Section>
  ),
};

export const SectionLargeSpacing: ContainerStory = {
  name: "Section (large spacing)",
  render: () => (
    <Section background="light" spacing="large">
      <Container>
        <Typography variant="h4" className="text-black">
          Large spacing section
        </Typography>
        <Typography variant="p" className="text-black">
          Section with increased vertical padding for major content divisions.
        </Typography>
      </Container>
    </Section>
  ),
};

// ── SectionDivider ─────────────────────────────────

export const SectionDividerStory: ContainerStory = {
  name: "SectionDivider",
  render: () => (
    <div>
      <Container className="py-8">
        <Typography variant="h4" className="text-white">
          Content above
        </Typography>
      </Container>
      <SectionDivider />
      <Container className="py-8">
        <Typography variant="h4" className="text-white">
          Content below
        </Typography>
      </Container>
    </div>
  ),
};
