import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000, // You can change this to any port you prefer
  },
  build: {
    outDir: 'out', // Output directory for the build
  },
});
