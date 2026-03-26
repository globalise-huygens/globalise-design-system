import type { Meta, StoryObj } from "@storybook/react";
import { CardGlance } from "./CardGlance";

const meta: Meta<typeof CardGlance> = {
  title: "UI/CardGlance",
  component: CardGlance,
  parameters: { layout: "padded" },
  argTypes: {
    color: {
      control: "select",
      options: ["turquoise", "vermilion", "mint", "parchment"],
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-xs">
        <Story />
      </div>
    ),
  ],
} as const;

export default meta;
type Story = StoryObj<typeof CardGlance>;

export const Turquoise: Story = {
  args: {
    color: "turquoise",
    heading: "Research",
    subtitle: "Digital innovation",
    description:
      "Globalise develops tools for enriched metadata, entity linking and thematic exploration.",
    cta: "How the platform works",
  },
};

export const Vermilion: Story = {
  args: {
    color: "vermilion",
    heading: "Archives",
    subtitle: "Core collections",
    description:
      "The platform brings together large-scale archival material from the Dutch East India Company.",
    cta: "Explore the collections",
  },
};

export const Mint: Story = {
  args: {
    color: "mint",
    heading: "Access",
    subtitle: "Global audiences",
    description:
      "Designed for scholars, educators and wider publics, the platform supports multilingual discovery.",
    cta: "Start exploring",
  },
};

export const Parchment: Story = {
  args: {
    color: "parchment",
    heading: "2020",
    subtitle: "Project initiated",
    description:
      "Globalise was launched as a long-term research initiative to improve access to Dutch colonial archives.",
    cta: "Learn about the project",
  },
};

export const WithLink: Story = {
  args: {
    color: "turquoise",
    heading: "Research",
    subtitle: "Digital innovation",
    description:
      "Globalise develops tools for enriched metadata, entity linking and thematic exploration.",
    cta: "How the platform works",
    href: "#",
  },
};

export const AllColors: StoryObj = {
  render: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <CardGlance
        color="parchment"
        heading="2020"
        subtitle="Project initiated"
        description="Globalise was launched as a long-term research initiative."
        cta="Learn about the project"
      />
      <CardGlance
        color="vermilion"
        heading="Archives"
        subtitle="Core collections"
        description="The platform brings together large-scale archival material."
        cta="Explore the collections"
      />
      <CardGlance
        color="turquoise"
        heading="Research"
        subtitle="Digital innovation"
        description="Globalise develops tools for enriched metadata and entity linking."
        cta="How the platform works"
      />
      <CardGlance
        color="mint"
        heading="Access"
        subtitle="Global audiences"
        description="Designed for scholars, educators and wider publics."
        cta="Start exploring"
      />
    </div>
  ),
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
};
