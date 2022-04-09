import path from 'path';
// import adapter from '@sveltejs/adapter-static';

const GITHUB_REPO = '/cv';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// appDir: 'internal',
		// paths: {
		// 	base: process.env.NODE_ENV === 'production' ? GITHUB_REPO : ''
		// },
		target: '#svelte',
		// adapter: adapter(),
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
