import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import type { UserConfig as ViteUserConfig } from 'vite';
import type { InlineConfig } from 'vitest';

interface UserConfig extends ViteUserConfig {
  test?: InlineConfig;
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
} as UserConfig);
