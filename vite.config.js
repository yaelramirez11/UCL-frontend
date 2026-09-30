import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const footballDataProxy = {
  "/football-data": {
    target: "https://api.football-data.org",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/football-data/, ""),
  },
};

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: footballDataProxy,
  },
  preview: {
    proxy: footballDataProxy,
  },
});
