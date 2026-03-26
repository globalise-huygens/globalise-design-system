import type { Meta, StoryObj } from "@storybook/react";
import {
  CardBase,
  CardBaseHeader,
  CardBaseTitle,
  CardBaseDescription,
  CardBaseContent,
  CardBaseFooter,
} from "./CardBase";
import { Button } from "./Button";

const meta: Meta<typeof CardBase> = {
  title: "UI/CardBase",
  component: CardBase,
  parameters: { layout: "padded" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "teal", "red", "emerald", "stone", "overlay"],
    },
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
type Story = StoryObj<typeof CardBase>;

export const Default: Story = {
  render: (args) => (
    <CardBase {...args}>
      <CardBaseHeader>
        <CardBaseTitle>Card Title</CardBaseTitle>
        <CardBaseDescription>
          Supporting description text for the card.
        </CardBaseDescription>
      </CardBaseHeader>
      <CardBaseContent>
        <p className="text-sm">Card content goes here.</p>
      </CardBaseContent>
      <CardBaseFooter>
        <Button size="sm">Action</Button>
      </CardBaseFooter>
    </CardBase>
  ),
};

export const Teal: Story = {
  render: () => (
    <CardBase variant="teal">
      <CardBaseHeader>
        <CardBaseTitle>Turquoise Card</CardBaseTitle>
      </CardBaseHeader>
      <CardBaseContent>
        <p className="text-sm">Content on a turquoise background.</p>
      </CardBaseContent>
    </CardBase>
  ),
};

export const Red: Story = {
  render: () => (
    <CardBase variant="red">
      <CardBaseHeader>
        <CardBaseTitle>Vermilion Card</CardBaseTitle>
      </CardBaseHeader>
      <CardBaseContent>
        <p className="text-sm">Content on a vermilion background.</p>
      </CardBaseContent>
    </CardBase>
  ),
};

export const Emerald: Story = {
  render: () => (
    <CardBase variant="emerald">
      <CardBaseHeader>
        <CardBaseTitle>Mint Card</CardBaseTitle>
      </CardBaseHeader>
      <CardBaseContent>
        <p className="text-sm">Content on a mint background.</p>
      </CardBaseContent>
    </CardBase>
  ),
};

export const Stone: Story = {
  render: () => (
    <CardBase variant="stone">
      <CardBaseHeader>
        <CardBaseTitle>Parchment Card</CardBaseTitle>
      </CardBaseHeader>
      <CardBaseContent>
        <p className="text-sm">Content on a parchment background.</p>
      </CardBaseContent>
    </CardBase>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4" style={{ maxWidth: "600px" }}>
      {(["default", "teal", "red", "emerald", "stone"] as const).map(
        (variant) => (
          <CardBase key={variant} variant={variant}>
            <CardBaseHeader>
              <CardBaseTitle>{variant}</CardBaseTitle>
              <CardBaseDescription>Variant preview</CardBaseDescription>
            </CardBaseHeader>
            <CardBaseContent>
              <p className="text-sm">Card content</p>
            </CardBaseContent>
          </CardBase>
        ),
      )}
    </div>
  ),
  decorators: [
    (Story) => (
      <div className="max-w-2xl">
        <Story />
      </div>
    ),
  ],
};
