import react from '@vitejs/plugin-react';
import type { UserConfig } from 'vite';

export default {
  plugins: [react()],
  publicDir: '/',
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
  },
  appType: 'spa',
  server: { open: true },
} satisfies UserConfig;
