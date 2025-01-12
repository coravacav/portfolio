import Helix from './helix';

export type Project = {
	name: string;
	description: string;
	href: string;
	tech: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<article className="flex flex-col justify-between overflow-hidden rounded-lg bg-neutral-900 shadow-md lg:flex-row">
			<div className="grow p-4 lg:p-6">
				<h3 className="text-lg font-bold text-white">{project.name}</h3>
				<p className="mt-4 text-base whitespace-pre-line text-neutral-300">{project.description}</p>
				<div className="mt-6 flex flex-wrap gap-2">
					{project.tech.map((tech) => (
						<span
							key={tech}
							className="rounded-full bg-neutral-700 px-2 py-1 text-sm font-semibold text-neutral-100"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
			{project.href && (
				<a
					href={project.href}
					target="_blank"
					className="group border-activatable hover:border-hover mb-4 flex items-center justify-center border-t-2 pt-2 whitespace-nowrap transition-colors sm:pt-4 sm:pb-2 lg:mb-0 lg:ml-8 lg:border-t-0 lg:border-l-2 lg:px-4 lg:pt-0 lg:pb-0"
				>
					<Helix>
						<span className="flex items-center text-white">
							See it here
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
									d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
								/>
							</svg>
						</span>
					</Helix>
				</a>
			)}
		</article>
	);
}
