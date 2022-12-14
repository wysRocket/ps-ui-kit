import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "PS-UI-Kit",
      fileName: (format) => `ps-ui-kit.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "@storybook/client-api"],
      output: {globals: {react: "React"}}
    }
  },
  plugins: [react(), tsconfigPaths(), svgr({svgrOptions: {icon: true}})]
});
