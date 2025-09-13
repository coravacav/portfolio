import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		a: Link,
		code: ({ children }) => <code className="not-prose bg-neutral-800">{children}</code>,
		pre: ({ children }) => <pre className="not-prose rounded-lg bg-neutral-800 p-2">{children}</pre>,
		...components,
	};
}
