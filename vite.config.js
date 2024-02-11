import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import eslint from "vite-plugin-eslint"
import tsconfigPaths from "vite-tsconfig-paths" // For path aliasing with TypeScript

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    // vite config
    define: {
      // test: import.meta.env.TEST,
    },

    plugins: [
      react(),
      eslint(),
      tsconfigPaths(), // For path aliasing with TypeScript
    ],
    server: {
      port: "3000",
    },
  }
})
