import { thinPageWidth } from '@/styles/pageWidth';
import { proseSection } from '@/styles/prose';
import clsx from 'clsx';
import Link from 'next/link';

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={thinPageWidth}>
            <nav
                aria-label="Blog Navigation"
                className={clsx('relative mx-auto flex justify-between')}
            >
                <Link
                    href="/blog"
                    className="group my-4 flex items-center gap-2 rounded-lg bg-neutral-900 p-2 text-base font-semibold leading-6 text-white transition-colors hover:bg-neutral-900/50 2xl:text-xl"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
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
