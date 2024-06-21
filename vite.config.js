// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/hoch-weisel/',
  optimizeDeps: {
    include: ['react-i18next']
  },
  build: {
    assetsInlineLimit: 0,
  }
});
