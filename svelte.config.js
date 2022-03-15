// TODO: Consider pre-render as static HTML...
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				writing: 'src/routes/writing/_post.svelte'
			}
		})
	]
};

export default config;
