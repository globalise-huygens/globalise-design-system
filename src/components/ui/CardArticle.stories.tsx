import type { Meta, StoryObj } from "@storybook/react";
import { CardArticle } from "./CardArticle";

const meta: Meta<typeof CardArticle> = {
  title: "UI/CardArticle",
  component: CardArticle,
  parameters: { layout: "padded" },
  argTypes: {
    image: { table: { disable: true } },
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
type Story = StoryObj<typeof CardArticle>;

export const Default: Story = {
  args: {
    label: "Article",
    title:
      "Thesaurus Treasures: Why We're Creating a Hierarchical Lexicon of Commodities",
    className: "text-white",
  },
};

export const WithLink: Story = {
  args: {
    label: "News",
    title: "Looking Back and Ahead: Access and Research in a Changing Archive",
    href: "#",
    className: "text-white",
  },
};

export const WithImage: Story = {
  args: {
    label: "Article",
    title:
      "Thesaurus Treasures: Why We're Creating a Hierarchical Lexicon of Commodities",
    href: "#",
    className: "text-white",
    image: (
      <img
        src="/images/article-1.png"
        alt=""
        className="w-full h-full object-cover"
      />
    ),
  },
};

export const DarkOnLight: Story = {
  args: {
    label: "Article",
    title: "Looking back on a successful kickoff meeting",
    href: "#",
    className: "text-black",
    image: (
      <img
        src="/images/article-2.png"
        alt=""
        className="w-full h-full object-cover"
      />
    ),
  },
  parameters: {
    backgrounds: { default: "light" },
  },
};
