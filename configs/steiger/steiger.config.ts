import fsd from '@feature-sliced/steiger-plugin';
import { defineConfig } from 'steiger';

export default defineConfig([
  ...fsd.configs.recommended,
  {
    rules: {
      'fsd/no-ui-in-app': 'off',
      'fsd/insignificant-slice': 'off',
    },
  },
  {
    files: ['src/entities/**'],
    rules: {
      'fsd/forbidden-imports': 'off',
    },
  },
]);
