import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "link", "ghost", "nav"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    disabled: { control: "boolean" },
    asChild: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "White Pill" },
};

export const Outline: Story = {
  args: { children: "Outline Pill", variant: "outline" },
};

export const Link: Story = {
  args: { children: "Text CTA →", variant: "link", className: "text-white" },
};

export const Ghost: Story = {
  args: { children: "Ghost", variant: "ghost", className: "text-white" },
};

export const Nav: Story = {
  args: { children: "Nav", variant: "nav" },
};

export const Small: Story = {
  args: { children: "Small", size: "sm" },
};

export const Large: Story = {
  args: { children: "Large", size: "lg" },
};

export const Icon: Story = {
  args: { children: "★", size: "icon" },
};

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
};
