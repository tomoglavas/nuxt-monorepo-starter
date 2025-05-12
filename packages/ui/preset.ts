import presetWind4 from '@unocss/preset-wind4'
import { definePreset } from 'unocss';

export default definePreset({
  name: 'ui-layer',
  presets: [
    presetWind4({
      preflights: { 
        reset: true, 
      } 
    }),
  ],
  theme: {
    colors: {
      'app': 'blue', // get override by packages/app/unocss.config.ts
      'ui': 'green'
    }
  }
});