import angularEslint from 'angular-eslint';
import { ESLint, Linter } from 'eslint';

export const angularTemplateEslintConfig: Linter.Config[] = [
  {
    name: 'angular-template-eslint/settings',
    languageOptions: {
      parser: <Linter.Parser>angularEslint.templateParser,
    },
    plugins: {
      '@angular-eslint/template': <ESLint.Plugin>angularEslint.templatePlugin,
    },
    files: ['**/*.html'],
    rules: {
      // Набор рекомендованных правил для Angular-шаблонов
      '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/eqeqeq': 'error',
      '@angular-eslint/template/no-negated-async': 'error',
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
      '@angular-eslint/template/attributes-order': 'error',
      '@angular-eslint/template/no-any': 'error',
      '@angular-eslint/template/no-duplicate-attributes': 'error',
    },
  },
];
