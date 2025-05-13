import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
	modules: [
		'@unocss/nuxt',
		'@nuxt/eslint',
	],
	components: [
		{ path: '~ui/components', prefix: 'Ui' },
	],
	alias: { '~ui': resolve('./') },
	eslint: {
		config: {
      standalone: false,
		},
	},
});
