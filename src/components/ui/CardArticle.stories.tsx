import type { Meta, StoryObj } from "@storybook/react";
import { CardArticle } from "./CardArticle";
import { Container } from "./Container";
import { Section } from "./Section";
import { Typography } from "./Typography";

const meta: Meta<typeof CardArticle> = {
  title: "UI/CardArticle",
  component: CardArticle,
  parameters: { layout: "padded" },
  argTypes: {
    image: { table: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
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

export const LatestFromGlobalise: StoryObj = {
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <Section background="light" spacing="large">
      <Container>
        <div className="flex flex-col gap-6">
          <Typography variant="h4" className="text-black">
            Latest from Globalise
          </Typography>
          <div className="h-px bg-black/40" />
          <div className="flex flex-col lg:flex-row gap-6">
            {[
              {
                image: "/images/article-1.png",
                title:
                  "Thesaurus Treasures: Why We're Creating a Hierarchical Lexicon of Commodities",
              },
              {
                image: "/images/article-2.png",
                title:
                  "Looking Back and Ahead: Access and Research in a Changing Archive",
              },
              {
                image: "/images/article-3.png",
                title: "Looking back on a successful kickoff meeting",
              },
              {
                image: "/images/article-1.png",
                title: "Thesaurus Treasures: Creating a Hierarchical Lexicon",
              },
            ].map((article, i) => (
              <div key={i} className="flex flex-1 gap-6">
                <CardArticle
                  label="Article"
                  title={article.title}
                  href="#"
                  className="flex-1 text-black"
                  image={
                    <img
                      src={article.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  }
                />
                {i < 3 && (
                  <div className="hidden lg:block w-px bg-black/40 self-stretch" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  ),
  parameters: { layout: "fullscreen" },
};
