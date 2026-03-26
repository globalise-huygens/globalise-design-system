import type { Meta, StoryObj } from "@storybook/react";
import { CardHero } from "./CardHero";

const meta = {
  title: "UI/CardHero",
  component: CardHero,
  argTypes: {
    hoverColor: {
      control: "select",
      options: ["turquoise", "vermilion", "mint", "parchment"],
    },
  },
} satisfies Meta<typeof CardHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Turquoise: Story = {
  args: {
    hoverColor: "turquoise",
    label: "Archive",
    title: "Ship journals\ncollection",
    className: "w-52 h-52",
    children: (
      <img
        src="/images/hero-card-1.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    ),
  },
};

export const Vermilion: Story = {
  args: {
    hoverColor: "vermilion",
    label: "Video",
    title: "Interview with\nMatthias van Rossum",
    className: "w-52 h-52",
    children: (
      <img
        src="/images/hero-card-3.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    ),
  },
};

export const Mint: Story = {
  args: {
    hoverColor: "mint",
    label: "Collection",
    title: "Women & Family\nin Colonial Contexts",
    className: "w-52 h-52",
    children: (
      <img
        src="/images/hero-card-5.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    ),
  },
};

export const Parchment: Story = {
  args: {
    hoverColor: "parchment",
    label: "Article",
    title: "Reading VOC\ndocuments critically",
    className: "w-52 h-52",
    children: (
      <img
        src="/images/hero-card-6.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    ),
  },
};

export const WithLink: Story = {
  args: {
    hoverColor: "turquoise",
    label: "External link",
    title: "Opens a page\non click",
    href: "#",
    className: "w-52 h-52",
    children: (
      <img
        src="/images/hero-card-7.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    ),
  },
};

export const CardStrip: StoryObj = {
  render: () => (
    <div className="flex gap-5 overflow-hidden">
      {(
        [
          {
            hoverColor: "turquoise" as const,
            label: "Archive",
            title: "Ship journals\ncollection",
            image: "/images/hero-card-1.png",
          },
          {
            hoverColor: "vermilion" as const,
            label: "Video",
            title: "Interview with\nMatthias van Rossum",
            image: "/images/hero-card-3.png",
          },
          {
            hoverColor: "parchment" as const,
            label: "Research",
            title: "Mapping colonial\ntrade routes",
            image: "/images/hero-card-5.png",
          },
          {
            hoverColor: "mint" as const,
            label: "Collection",
            title: "Women & Family\nin Colonial Contexts",
            image: "/images/hero-card-6.png",
          },
        ] as const
      ).map((card) => (
        <CardHero
          key={card.label}
          hoverColor={card.hoverColor}
          label={card.label}
          title={card.title}
          className="w-52 h-56 shrink-0"
        >
          <img
            src={card.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </CardHero>
      ))}
    </div>
  ),
  parameters: { layout: "padded" },
};
