import type { Meta, StoryObj } from "@storybook/react";
import { CardFeatured } from "./CardFeatured";

const meta: Meta<typeof CardFeatured> = {
  title: "UI/CardFeatured",
  component: CardFeatured,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl">
        <Story />
      </div>
    ),
  ],
} as const;

export default meta;
type Story = StoryObj<typeof CardFeatured>;

export const Default: Story = {
  args: {
    className: "lg:h-90",
    items: [
      {
        color: "var(--brand-turquoise)",
        label: "Event",
        title: "Globalise\nConference 2026",
        cta: "Register now",
      },
      {
        color: "var(--brand-parchment)",
        label: "Resources",
        title: "Reading VOC\ndocuments",
        cta: "Start reading",
      },
      {
        color: "var(--brand-vermilion)",
        label: "History",
        title: "Lives and labour\nin the VOC world",
        cta: "Explore",
      },
    ],
  },
};

export const WithImageBackground: Story = {
  args: {
    className: "lg:h-90",
    defaultExpanded: 0,
    items: [
      {
        color: "var(--brand-mint)",
        label: "Collection",
        title: "New collection:\nWomen & Family",
        cta: "Explore",
        darkBackground: true,
        image: (
          <img
            src="/images/featured-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        ),
      },
      {
        color: "var(--brand-mint)",
        label: "Guide",
        title: "Getting started\nwith Globalise",
        cta: "Read the guide",
      },
    ],
  },
};

export const FourItems: Story = {
  args: {
    className: "lg:h-[487px]",
    items: [
      {
        color: "var(--brand-mint)",
        label: "Collection",
        title: "New collection:\nWomen & Family\nin Colonial Contexts",
        cta: "Explore the collection",
      },
      {
        color: "var(--brand-turquoise)",
        label: "Event",
        title: "Globalise\nConference 2026",
        cta: "Learn more",
      },
      {
        color: "var(--brand-parchment)",
        label: "Resources",
        title: "Reading VOC\ndocuments critically",
        cta: "Start reading",
      },
      {
        color: "var(--brand-vermilion)",
        label: "History",
        title: "Lives and labour\nin the VOC world",
        cta: "Explore",
      },
    ],
  },
};
