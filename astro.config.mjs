import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.fkutsche.dev",
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
});
