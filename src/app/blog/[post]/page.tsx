import { notFound } from 'next/navigation';

export default async function BlogPost({ params }) {
	try {
		const post = (await params).post;
		const path = `../../../../articles/${post}.mdx`;

		const { default: Component, frontmatter } = await require(path);

		if (frontmatter.draft !== false) {
			notFound();
		}

		return <Component />;
	} catch {
		notFound();
	}
}
