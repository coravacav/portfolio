import { notFound } from 'next/navigation';
import fs from 'fs';

export async function generateStaticParams() {
	return (
		await Promise.all(
			fs.readdirSync('articles').map(async (filename) => ({
				...(await import('../../../../articles/' + filename)).frontmatter,
				filename: filename.replace('.mdx', ''),
			}))
		)
	)
		.filter(Boolean)
		.filter(({ draft }) => draft === false)
		.map((post) => ({ post: post.filename }));
}

export default async function BlogPost({ params }) {
	const post: string = (await params).post;
	const { default: Component, frontmatter } = await import(`../../../../articles/${post}.mdx`);

	if (frontmatter.draft !== false) {
		notFound();
	}

	return <Component />;
}
