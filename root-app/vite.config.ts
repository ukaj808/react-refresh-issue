// vite.config.js
// @ts-ignore
import { defineConfig } from 'vite';
// @ts-ignore
import { importMaps } from 'vite-plugin-import-maps';

// @ts-ignore
export default defineConfig({
  plugins: [
    // @ts-ignore
    importMaps([
      {
        imports: {
            reactlibrary1: "http://localhost:5174/src/main.tsx",
            reactlibrary2: "http://localhost:5175/src/main.tsx"
        },
      },
    ]),
  ],
})