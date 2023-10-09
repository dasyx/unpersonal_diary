import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  renderers: ["@astrojs/renderer-svelte"],
  output: "server",
  adapter: vercel(),
});
