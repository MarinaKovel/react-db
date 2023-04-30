import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: ['cypress/**/*.*', 'types.ts'],
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3030',
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      return config;
    },
  },
});
