import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta = {
  title: "UI/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "p",
        "lead",
        "large",
        "small",
        "muted",
        "blockquote",
        "code",
        "label",
        "subtitle",
      ],
    },
    asChild: { table: { disable: true } },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Discover the VOC archives",
    className: "text-white",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Research & collections",
    className: "text-white",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "About the project",
    className: "text-white",
  },
};

export const Heading4: Story = {
  args: {
    variant: "h4",
    children:
      "Globalise opens access to early modern colonial archives through research-driven digital infrastructure.",
    className: "text-white",
  },
};

export const Paragraph: Story = {
  args: {
    variant: "p",
    children:
      "Globalise aims to transform access to early modern Dutch colonial archives by enabling new forms of research, discovery and critical engagement.",
    className: "text-white max-w-prose",
  },
};

export const Lead: Story = {
  args: {
    variant: "lead",
    children:
      "Built for researchers, educators and curious audiences worldwide.",
    className: "text-white",
  },
};

export const Large: Story = {
  args: {
    variant: "large",
    children: "Emphasized body text",
    className: "text-white",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    children: "Featured",
    className: "text-white",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "De-emphasized supporting text",
  },
};

export const Blockquote: Story = {
  args: {
    variant: "blockquote",
    children:
      "\u201CGlobalise connects documents, people, and places to make colonial history researchable at scale\u201D",
    className: "text-white max-w-lg",
  },
};

export const Code: Story = {
  args: {
    variant: "code",
    children: "npm install @globalise/design-system",
  },
};

export const Label: Story = {
  args: {
    variant: "label",
    children: "Category label",
    className: "text-white",
  },
};

export const Subtitle: Story = {
  args: {
    variant: "subtitle",
    children: "Section subtitle",
    className: "text-white",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 text-white max-w-2xl">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="subtitle">Subtitle</Typography>
      <Typography variant="lead">Lead text</Typography>
      <Typography variant="large">Large text</Typography>
      <Typography variant="p">
        Paragraph body text with regular weight and size.
      </Typography>
      <Typography variant="small">Small text</Typography>
      <Typography variant="muted">Muted text</Typography>
      <Typography variant="blockquote">
        &ldquo;Blockquote text&rdquo;
      </Typography>
      <Typography variant="code">code snippet</Typography>
      <Typography variant="label">Label text</Typography>
    </div>
  ),
  parameters: { layout: "padded" },
};
