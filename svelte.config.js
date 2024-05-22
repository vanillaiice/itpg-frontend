import adapterBun from 'svelte-adapter-bun';
import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

let adapter;

switch (process.env.ADAPTER || 'static') {
	case 'static':
		adapter = adapterStatic;
		break;
	case 'bun':
		adapter = adapterBun;
		break;
	case 'node':
		adapter = adapterNode;
		break;
	default:
		throw new Error('Unknown adapter: ' + process.env.ADAPTER);
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({ fallback: 'index.html', pages: process.env.OUTDIR })
	}
};

export default config;
