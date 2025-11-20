import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

export default defineConfig({
 
  plugins: [react()],
});
