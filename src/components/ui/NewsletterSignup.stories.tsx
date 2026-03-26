import type { Meta, StoryObj } from "@storybook/react";
import { NewsletterSignup } from "./NewsletterSignup";

const meta: Meta<typeof NewsletterSignup> = {
  title: "UI/NewsletterSignup",
  component: NewsletterSignup,
  parameters: {
    layout: "padded",
    backgrounds: { default: "light" },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl">
        <Story />
      </div>
    ),
  ],
} as const;

export default meta;
type Story = StoryObj<typeof NewsletterSignup>;

export const Default: Story = {
  args: {
    heading: "Subscribe to our Newsletter",
    description:
      "Sign up to discover new research pathways, featured collections, and reflections on how historical records continue to shape our understanding of global connections.",
    privacyText: (
      <>
        By subscribing, you agree to Globalise&rsquo;s{" "}
        <span className="underline">Privacy Policy</span>.
      </>
    ),
  },
};

export const WithImage: Story = {
  args: {
    heading: "Subscribe to our Newsletter",
    description:
      "Sign up to discover new research pathways, featured collections, and reflections on how historical records continue to shape our understanding of global connections.",
    image: (
      <img
        src="/images/newsletter.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    ),
    privacyText: (
      <>
        By subscribing, you agree to Globalise&rsquo;s{" "}
        <span className="underline">Privacy Policy</span>.
      </>
    ),
  },
};

export const CustomLabels: Story = {
  args: {
    heading: "Stay in the loop",
    description: "Get updates on new collections and research tools.",
    inputPlaceholder: "Enter your email address",
    submitLabel: "Sign up",
  },
};
