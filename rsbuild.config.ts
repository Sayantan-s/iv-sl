import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000,
    open: true,
  },
  dev: {
    lazyCompilation: true, // Fast start times
  },
});
