import Link from 'next/link';
import fs from 'fs';
import PageContainer from '@/lib/pageContainer';

export default async function BlogPage() {
    const posts = (
        await Promise.all(
            fs
                .readdirSync('articles')
                .map(async (filename) => (await import('../../../articles/' + filename)).frontmatter)
        )
    ).filter(Boolean);

    return (
        <PageContainer
            title="Blog"
            className="grid gap-x-8 gap-y-16 p-4 lg:grid-cols-2"
            description="I write about things I like, things I don't like, and things I'm learning."
        >
            {posts.map(({ href = '', title = '', description = '', date, datetime }) => (
                <Link
                    href={href}
                    key={title}
                >
                    <article className="group flex flex-col items-start justify-between rounded bg-neutral-900 p-8 transition-colors">
                        <div className="w-full">
                            <h3 className="w-full border-b-2 border-b-activatable text-xl font-semibold leading-6 text-white transition-colors group-hover:border-b-active">
                                {title}
                            </h3>
                            <p className="text-md mt-5 leading-6 text-neutral-300">{description}</p>
                        </div>
                        {date && datetime && (
                            <div className="mt-3 flex items-center gap-x-4 text-xs">
                                <time
                                    dateTime={datetime}
                                    className="text-neutral-500"
                                >
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
