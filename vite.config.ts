/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { UserConfig, configDefaults } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';
import * as path from 'path';

const test = {
  globals: true,
  environment: 'jsdom',
  setupFiles: ['src/setupTests.ts'],
  threads: false,
  watch: false,
  coverage: {
    enabled: true,
    provider: 'c8',
    all: true,
    exclude: [...configDefaults.coverage.exclude, 'types.ts', 'dist/*'],
  },
} as UserConfig['test'];

export default defineConfig({
  resolve: {
    alias: {
      '@types': path.resolve(__dirname, './types'),
      '@mocks': path.resolve(__dirname, './src/mocks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
      '@pages': path.resolve(__dirname, './src/pages/index'),
      '@components': path.resolve(__dirname, 'src/components/index'),
    },
  },
  root: '',
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  server: {
    host: true,
    port: 3030,
    watch: { ignored: '**/coverage/**' },
  },
  build: { minify: false, sourcemap: 'inline' },
  test,
});
