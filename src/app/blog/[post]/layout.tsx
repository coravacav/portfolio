import { thinPageWidth } from '@/styles/pageWidth';
import { proseSection } from '@/styles/prose';
import clsx from 'clsx';
import Link from 'next/link';

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={thinPageWidth}>
            <nav aria-label="Blog Navigation" className={clsx('flex relative mx-auto justify-between')}>
                <Link
                    href="/blog"
                    className="my-4 text-base 2xl:text-xl font-semibold leading-6 text-white group hover:bg-pink/60 transition-colors flex items-center gap-2 bg-pink/40 rounded-lg p-2"
                >
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
                </Link>
            </nav>
            <article className={clsx('', proseSection)}>{children}</article>
        </div>
    );
}
