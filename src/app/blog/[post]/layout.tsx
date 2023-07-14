import Helix from '@/lib/helix';
import { pageWidth } from '@/styles/pageWidth';
import { prose } from '@/styles/prose';
import clsx from 'clsx';
import Link from 'next/link';

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav aria-label="Blog Navigation" className="flex justify-center relative">
                <Link
                    href="/blog"
                    className="absolute top-4 text-base 2xl:text-xl font-semibold leading-6 text-white group hover:text-tangerine transition-colors"
                >
                    <Helix
                        height={12}
                        extendLeft={5}
                        extendRight={5}
                        groupHoverColor="group-hover:stroke-tangerine"
                        direction="right"
                        style="topleft"
                    >
                        <span className="flex align-middle gap-2 ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                                />
                            </svg>
                            Back to all blog posts
                        </span>
                    </Helix>
                </Link>
            </nav>
            <article className={clsx('mx-auto pt-16 sm:pt-24', prose, pageWidth)}>{children}</article>
        </>
    );
}
