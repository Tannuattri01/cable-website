import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cable-website/', // Include trailing slash (optional but recommended)
  plugins: [react()],
});
