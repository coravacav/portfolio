import { pageWidth } from '@/styles/pageWidth';
import clsx from 'clsx';

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={clsx('prose prose-sm xl:prose-base 2xl:prose-md dark:prose-invert mx-auto py-16', pageWidth)}>
            {children}
        </div>
    );
}
