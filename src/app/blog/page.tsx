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
            className="p-4 grid gap-x-8 gap-y-16 lg:grid-cols-2"
            description="I write about things I like, things I don't like, and things I'm learning."
        >
            {posts.map(({ href = '', title = '', description = '', date, datetime }) => (
                <Link href={href} key={title}>
                    <article className="flex flex-col items-start group justify-between p-8 rounded bg-neutral-900 transition-colors">
                        <div className="w-full">
                            <h3 className="text-xl font-semibold leading-6 text-white transition-colors border-b-2 border-b-activatable w-full group-hover:border-b-active">
                                {title}
                            </h3>
                            <p className="mt-5 text-md leading-6 text-neutral-300">{description}</p>
                        </div>
                        {date && datetime && (
                            <div className="mt-3 flex items-center gap-x-4 text-xs">
                                <time dateTime={datetime} className="text-neutral-500">
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
