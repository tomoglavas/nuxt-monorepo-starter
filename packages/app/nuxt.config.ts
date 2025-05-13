// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt-monorepo/ui'],
  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
})
