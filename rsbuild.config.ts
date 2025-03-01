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
  source: {
    alias: {
      "@components": "./src/components",
      "@store": "./src/store",
      "@hooks": "./src/hooks",
      "@utils": "./src/utils",
    },
  },
  html: {
    tags: [
      {
        tag: "link",
        attrs: { href: "https://fonts.googleapis.com", rel: "preconnect" },
      },
      {
        tag: "link",
        attrs: {
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
          crossorigin: true,
        },
      },
      {
        tag: "link",
        attrs: {
          href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap",
          rel: "stylesheet",
        },
      },
    ],
  },
});
