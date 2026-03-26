import type { Preview } from "@storybook/react";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#262626" },
        { name: "light", value: "#ffffff" },
        { name: "parchment", value: "#b99b7f" },
      ],
    },
    layout: "centered",
  },
};

export default preview;
