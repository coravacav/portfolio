import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import bundleAnalyzer from '@next/bundle-analyzer';

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
		remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
		rehypePlugins: [['@mapbox/rehype-prism', { strict: true, throwOnError: true }]],
	},
});

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(withMDX(nextConfig));
