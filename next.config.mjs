import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	reactStrictMode: true,
	experimental: {
		scrollRestoration: true,
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
