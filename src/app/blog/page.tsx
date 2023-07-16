import Link from 'next/link';
import fs from 'fs';
import PageContainer from '@/lib/pageContainer';

export default function BlogPage() {
    const posts = fs
        .readdirSync('articles')
        .map((filename) => require('articles/' + filename).frontmatter)
        .filter(Boolean);

    return (
        <PageContainer
            title="Blog"
            description="I write about things I like, things I don't like, and things I'm learning."
        >
            {posts.map(({ href = '', title = '', description = '', date, datetime }) => (
                <Link href={href} key={title}>
                    <article className="flex flex-col items-start group justify-between p-4 rounded bg-tropicalIndigo/5 hover:bg-tropicalIndigo/10 transition-colors">
                        <div>
                            <h3 className="text-xl font-semibold leading-6 text-white transition-colors">{title}</h3>
                            <p className="mt-5 text-md leading-6 text-gray-300">{description}</p>
                        </div>
                        {date && datetime && (
                            <div className="mt-3 flex items-center gap-x-4 text-xs">
                                <time dateTime={datetime} className="text-gray-500">
                                    {date}
                                </time>
                            </div>
                        )}
                    </article>
                </Link>
            ))}
        </PageContainer>
    );
}
