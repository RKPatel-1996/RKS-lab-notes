import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { siteConfig } from "./scripts/site-config.js";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? siteConfig.derived.productionBase : "/",
  server: {
    host: "127.0.0.1",
    port: 3000,
  }
}));
