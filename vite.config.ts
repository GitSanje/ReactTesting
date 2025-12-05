import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //@ts-ignore
   test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
     coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/components/**/*.{ts,tsx}"],
      exclude: [ "src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}"],
      thresholds: {
        statements: -10, // less than 10% decrease allowed
        branches: 80,
        functions: 80,
        lines: 80,
    }
  }
  },

})
