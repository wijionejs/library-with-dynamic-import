import { defineConfig } from "vite";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default defineConfig({
  build: {
    lib: {
      entry: "./main.js",
      name: "flow-ui-web-ui-controls",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      plugins: [peerDepsExternal()],
    },
    outDir: "build",
    emptyOutDir: true,
  }
});
