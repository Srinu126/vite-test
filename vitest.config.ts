import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "vitest.setup.ts",
  }
})
