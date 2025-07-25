import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/jess-dobkin-portfolio/",
  plugins: [
    react({
      babel: { plugins: ["styled-jsx/babel"] },
    }),
  ],
});
