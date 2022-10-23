module.exports = {
  core: {builder: "@storybook/builder-vite"},
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",

  async viteFinal(config) {
    // customize the Vite config here
    return config;
  }
};
