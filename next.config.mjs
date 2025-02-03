import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	reactStrictMode: true,
	experimental: {
		scrollRestoration: true,
	},
	webpack(config, { isServer, dev, webpack }) {
		// Use the client static directory in the server bundle and prod mode
		// Fixes `Error occurred prerendering page "/"`
		config.output.webassemblyModuleFilename =
			isServer && !dev ? '../static/pkg/[modulehash].wasm' : 'static/pkg/[modulehash].wasm';

		// Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
		config.experiments = { ...config.experiments, asyncWebAssembly: true };

		// https://nextjs.org/docs/app/building-your-application/optimizing/memory-usage#disable-webpack-cache
		// This just stops building altogether:
		// if (config.cache && !dev) {
		//     config.cache = Object.freeze({
		//         type: 'memory',
		//     })
		// }

		// Deubbing (vercel/next.js/issues/27650)
		// config.infrastructureLogging = { debug: /PackFileCache/ };

		return config;
	},
};

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [['remark-frontmatter'], ['remark-mdx-frontmatter'], ['remark-gfm']],
		rehypePlugins: [
			[
				'@shikijs/rehype',
				{
					inline: 'tailing-curly-colon',
					theme: 'aurora-x',
				},
			],
		],
	},
});

// const withBundleAnalyzer = bundleAnalyzer({
// 	enabled: process.env.ANALYZE === 'true',
// });

export default withMDX(nextConfig);
