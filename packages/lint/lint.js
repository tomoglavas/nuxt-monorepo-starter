import antfu from '@antfu/eslint-config'

export const eslintConfigBase = antfu(
  {
    stylistic: true,
    typescript: true,
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
  },
)
