import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { resolve } from "path";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  server: {
    host: true,
    cors: true,
    port: 9000,
  },
  envPrefix: "REACT_APP_",
  resolve: {
    alias: [
      { find: "src", replacement: resolve(__dirname, "./src") },
      { find: "api", replacement: resolve(__dirname, "./src/api") },
      { find: "assets", replacement: resolve(__dirname, "./src/assets") },
      { find: "components", replacement: resolve(__dirname, "./src/components") },
      { find: "helpers", replacement: resolve(__dirname, "./src/helpers") },
      { find: "hooks", replacement: resolve(__dirname, "./src/hooks") },
      { find: "screens", replacement: resolve(__dirname, "./src/screens") },
      { find: "store", replacement: resolve(__dirname, "./src/store") },
      { find: "styles", replacement: resolve(__dirname, "./src/styles") },
    ],
  },
  build: {
    outDir: "build",
    target: ["es2019", "edge88", "firefox78", "chrome87", "safari13.1"],
    cssTarget: ["es2019", "edge88", "firefox78", "chrome87", "safari13.1"],
    assetsDir: "assets",
    minify: "esbuild",
    cssCodeSplit: true,
    reportCompressedSize: true,
    polyfillModulePreload: true,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        manualChunks: {
          "react-venders": ["react", "react-dom"],
        },
      },
    },
  },
});
