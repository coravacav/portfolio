import { pageWidth } from '@/styles/pageWidth';
import clsx from 'clsx';

export default function ProjectsPage() {
    return (
        <div className={clsx('mx-auto pt-16 sm:pt-24', pageWidth)}>
            <h1 className="text-3xl font-bold tracking-tight text-white">Resume</h1>
        </div>
    );
}
