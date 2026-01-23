import angularEslint from 'angular-eslint';
import { ESLint, Linter } from 'eslint';
import typescriptEslintPlugin from 'typescript-eslint';

export const angularInlineTemplateEslintConfig: Linter.Config[] = [
  {
    name: 'angular-inline-template-eslint/settings',
    languageOptions: {
      parser: <Linter.Parser>typescriptEslintPlugin.parser,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      '@angular-eslint/template': <ESLint.Plugin>angularEslint.templatePlugin,
    },
    files: ['**/*.ts'],
    processor: angularEslint.processInlineTemplates,
  },
];
