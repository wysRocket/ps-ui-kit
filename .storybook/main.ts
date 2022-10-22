const {mergeConfig} = require("vite");

module.exports = {
  core: {builder: "@storybook/builder-vite"},
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  async viteFinal(config: any) {
    // Add your configuration here

    return config;
  }
};
