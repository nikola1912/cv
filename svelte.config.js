import path from 'path';

import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: 'app',
		paths: {
			base: '/cv'
		},
		target: '#svelte',
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$data: path.resolve('./src/data'),
					$components: path.resolve('./src/components')
				}
			}
		}
	}
};

export default config;
