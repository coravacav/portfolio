import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	reactStrictMode: true,
	experimental: {
		scrollRestoration: true,
	},
	webpack(config, { isServer, dev, webpack }) {
		// Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
		config.experiments = { ...config.experiments, asyncWebAssembly: true };

		config.module.rules.push({
			test: /\.wasm$/,
			type: 'asset/inline',
		});

		config.module.generator['asset/resource'] = config.module.generator['asset'];
		config.module.generator['asset/source'] = config.module.generator['asset'];
		delete config.module.generator['asset'];

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
