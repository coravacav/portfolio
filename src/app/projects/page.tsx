import PageContainer from '@/lib/pageContainer';
import ProjectCard, { Project } from '@/lib/projectCard';

const projects: Project[] = [
	{
		name: 'Portfolio',
		description: 'This website! Built with standard code standards and practices.',
		href: 'https://github.com/coravacav/portfolio',
		tech: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
	},
	{
		name: 'Auction Technology Group - Design System',
		description:
			"A design system for Auction Technology Group and all it's child marketplaces. This is the work I've done from 2022 ~ 2023.",
		href: 'https://hammerui.auctiontechnologygroup.com',
		tech: [
			'React',
			'TypeScript',
			'Storybook',
			'Tailwind',
			'Jest',
			'Testing Library',
			'ESBuild',
			'tsup',
			'styled-components',
		],
	},
];

export default function ProjectsPage() {
	return (
		<PageContainer
			title="My projects"
			className="flex flex-col gap-4 p-4"
			description="A list of projects I've worked on, and a little bit about them."
		>
			{projects.map((project) => (
				<ProjectCard
					key={project.name}
					project={project}
				/>
			))}
		</PageContainer>
	);
}
