import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.js",
      name: "MyPackage",
    },
    rollupOptions: {
      external: ["vue"], // Add external dependencies here
      output: {
        globals: {
          vue: "Vue", // Map external dependencies to global variables
        },
      },
    },
  },
});
