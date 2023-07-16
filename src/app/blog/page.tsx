import { HelixAnimation } from '@/lib/helix';
import { pageWidth } from '@/styles/pageWidth';
import clsx from 'clsx';
import Link from 'next/link';
import fs from 'fs';

export default function BlogPage() {
    const posts = fs
        .readdirSync('articles')
        .map((filename) => require('articles/' + filename).frontmatter)
        .filter(Boolean);

    return (
        <div className="pt-16 sm:pt-24">
            <div className={clsx('mx-auto lg:px-8', pageWidth)}>
                <div className="mx-auto max-w-2xl lg:mx-0 lg:mb-9 mb-3">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-300">
                        I write about things I like, things I don&apos;t like, and things I&apos;m learning.
                    </p>
                </div>
                <HelixAnimation
                    svgWidth="100%"
                    className="absolute w-full left-0 right-0"
                    strokeColor="stroke-raisinBlack"
                    height={16}
                    style="none"
                    direction="right"
                />
                <div className="mt-8 lg:mt-20 mx-auto p-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map(({ href = '', title = '', description = '', date, datetime }) => (
                        <Link href={href} key={title}>
                            <article className="flex flex-col items-start group justify-between p-4 rounded bg-tropicalIndigo/5 hover:bg-tropicalIndigo/10 transition-colors">
                                <div>
                                    <h3 className="text-xl font-semibold leading-6 text-white transition-colors">
                                        {title}
                                    </h3>
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
                </div>
            </div>
        </div>
    );
}
