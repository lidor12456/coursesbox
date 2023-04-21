import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ['../pages/**/*.stories.mdx',
  '../pages/**/*.stories.@(js|jsx|ts|tsx)',
  '../components/**/*.stories.mdx',
  '../components/**/*.stories.@(js|jsx|ts|tsx)',],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
