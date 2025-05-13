import uiPreset from '@nuxt-monorepo/ui/preset'
import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [uiPreset],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      app: 'red',
    },
  },
})
