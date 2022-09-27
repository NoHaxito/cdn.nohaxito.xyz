import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
 /* vite: {
    build: {
      // Example: Force a broken package to skip SSR processing, if needed
      rollupOptions: {
        external: '@headlessui/react',
      },
    },
  }, */
});
