import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: Link,
    code: ({ children }) => <code>{children}</code>,
    pre: ({ children }) => <pre className="not-prose">{children}</pre>,
    ...components,
  };
}
