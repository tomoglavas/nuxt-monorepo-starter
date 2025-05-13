import antfu from '@antfu/eslint-config'

const antfuConfigBase = {
  stylistic: true,
  typescript: {
    // https://typescript-eslint.io/getting-started/typed-linting/
    // This slows down linting a lot, so only enable manually/periodically
    // tsconfigPath: 'tsconfig.json',
  },
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
    /**
     * Format Markdown files
     * Supports Prettier and dprint
     * By default uses Prettier
     */
    markdown: 'prettier',
  },
  import: false,
  vue: {
    a11y: true,
  },
  nocss: true,
  ignores: [
    '**/node_modules',
    '**/public',
    '**/vendor',
    '**/dist',
    '**/.nuxt',
  ],
}

export const eslintConfigBase = antfu(
  antfuConfigBase,
  {},
)

export const eslintConfigNuxt = antfu(
  {
    ...antfuConfigBase,
    unocss: true,
  },
  {},
)
