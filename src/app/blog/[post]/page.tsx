import { pageWidth } from '@/styles/pageWidth';

export default function BlogPost({ params: { post } }: { params: { post: string } }) {
    const Component = require(`../../../../articles/${post}.mdx`).default;
    return (
        <>
            <nav aria-label="Blog Navigation" className={pageWidth}></nav>
            <Component />
        </>
    );
}
