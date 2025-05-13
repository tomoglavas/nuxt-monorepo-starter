import type { Directive } from 'vue'

export default {
  created: (el) => {
    console.warn('v-test', el)
  },
} as Directive
