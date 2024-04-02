/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';


export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/flashcards',

  plugins: [react(), nxViteTsPaths()],

  test: {
    setupFiles: ['test-setup.ts'],
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['./tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/flashcards',
      provider: 'v8',
    },
  },
});
