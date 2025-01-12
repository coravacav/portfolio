import { cn } from '@/lib/cn';
import PageContainer from '@/lib/pageContainer';
import { prose } from '@/styles/prose';

const Item = ({ children }) => (
	<li className="list-none rounded-full bg-neutral-700 px-2 py-1 text-sm font-semibold text-neutral-100">{children}</li>
);

export default function ProjectsPage() {
	return (
		<PageContainer
			title="Resume"
			className={cn('print:not-prose', prose)}
			description="My qualifications and experience."
		>
			<section>
				<h2 className="-ml-2 rounded-md bg-neutral-900 p-2">Experience</h2>
				<article>
					<h3 className="-ml-2 rounded-md bg-neutral-900/50 p-2">
						Software Developer <span className="inline-block text-neutral-500">/ Epic Systems (6/2024 - Present)</span>
					</h3>
					<p>The healthcare company.</p>
					<p>M</p>
				</article>
				<article>
					<h3 className="-ml-2 rounded-md bg-neutral-900/50 p-2">
						Senior Design System Engineer{' '}
						<span className="inline-block text-neutral-500">/ Auction Technology Group (9/2023 - 5/2024)</span>
					</h3>
					<p>Primary maintainer and developer for a multi company design system / software library.</p>
					<p>
						Included projects are a basic component library, as well as a few client side apps like checkout
						functionality and a search page, tied together with comprehensive documentation and multiple degrees of
						testing.
					</p>
					<p>
						The library is a Typescript React PNPM monorepo that boasts nearly 100% unit and integration testing
						coverage, fast and stable CI configuration, package deployment, automation, and SEO considerations.
					</p>
				</article>
				<article>
					<h3 className="-ml-2 rounded-md bg-neutral-900/50 p-2">
						Software Developer{' '}
						<span className="inline-block text-neutral-500">/ LiveAuctioneers (7/2019 – 9/2022)</span>
					</h3>
					<p>
						A React engineer creating solutions ranging from simply using the backend for API requests or handling
						complex CSS, to handling the upgrading of various major libraries used in the application (webpack, react,
						redux, etc.)
					</p>
				</article>
			</section>
			<section>
				<article>
					<h2 className="-ml-2 rounded-md bg-neutral-900 p-2">Proficient Technologies</h2>
					<div className="not-prose">
						<ul className="not-prose flex flex-wrap gap-3">
							<Item>React</Item>
							<Item>Javascript</Item>
							<Item>Typescript</Item>
							<Item>Redux</Item>
							<Item>Webpack</Item>
							<Item>CSS</Item>
							<Item>Storybook</Item>
							<Item>PNPM</Item>
							<Item>Next.js</Item>
							<Item>Svelte</Item>
							<Item>Node.js</Item>
							<Item>Express</Item>
							<Item>SQL</Item>
							<Item>Rust</Item>
							<Item>Tokio</Item>
							<Item>Axum</Item>
						</ul>
					</div>
				</article>
			</section>
			<section>
				<article>
					<h2 className="-ml-2 rounded-md bg-neutral-900 p-2">Ceritifcations</h2>
					<p>A lot of these do not show value. Hence why I&apos;m missing them for the languages I use daily</p>
					<div className="not-prose">
						<ul className="not-prose flex flex-wrap gap-3">
							<Item>Java</Item>
							<Item>Python</Item>
							<Item>C#</Item>
							<Item>C</Item>
							<Item>C++</Item>
							<Item>CompTIA Network+</Item>
							<Item>CompTIA Security+</Item>
							<Item>CompTIA Linux+</Item>
						</ul>
					</div>
				</article>
			</section>
			<section>
				<article>
					<h2 className="-ml-2 rounded-md bg-neutral-900 p-2">Education</h2>

					<h3 className="-ml-2 rounded-md bg-neutral-900/50 p-2">
						University of Utah <span className="inline-block text-neutral-500">/ Bachelors of Computer Science</span>
					</h3>
					<p>
						Wrote a compiler from lexer to assembly involving both low and high level optimizations and type checking
						with both Rust and Typescript.
					</p>
					<p>
						Written a fully functional proxy for http requests (up to HTTP 2), including the HTTP and portions of the
						TCP protocol (TCP Reno).
					</p>
				</article>
			</section>
			<section>
				<article>
					<h2 className="-ml-2 rounded-md bg-neutral-900 p-2">Fun facts</h2>
					<ul>
						<li>Bilingual with English and Bulgarian</li>
						<li>I got my first programming book at 6 years old. Good ol&apos; Java 8 OOP.</li>
					</ul>
				</article>
			</section>
		</PageContainer>
	);
}
