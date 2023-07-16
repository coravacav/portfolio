import Helix from './helix';

export type Project = {
    name: string;
    description: string;
    href: string;
    tech: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="bg-gray-900 rounded-lg shadow-md flex sm:flex-row flex-col justify-between overflow-hidden">
            <div className="p-4 sm:p-6 flex-grow">
                <h3 className="text-lg font-bold text-white">{project.name}</h3>
                <p className="mt-4 text-base text-gray-300 whitespace-pre-line">{project.description}</p>
                <div className="mt-6 flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-sm font-semibold text-gray-100 bg-gray-700 rounded-full"
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
                    className="pt-2 mb-4 sm:mb-0 sm:ml-8 sm:pt-0 sm:px-4 group whitespace-nowrap sm:border-l-2 border-t-2 sm:border-t-0 hover:border-tangerine transition-colors border-tropicalIndigo/50 flex items-center justify-center"
                >
                    <Helix groupHoverColor="group-hover:stroke-tangerine">
                        <span className="text-white flex items-center">
                            See it here
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
