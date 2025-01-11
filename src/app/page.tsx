import { HelixAnimation } from '@/lib/helix';
import { pageWidth } from '@/styles/pageWidth';
import clsx from 'clsx';

export default function Home() {
	return (
		<div className={clsx('mx-auto pt-16 sm:pt-24', pageWidth)}>
			<h1 className="text-5xl leading-tight text-white">{'Hi.\nWelcome to my portfolio.'}</h1>
			<HelixAnimation
				svgWidth="100%"
				className={'absolute left-0 mt-4 w-full gap-x-4 opacity-20 transition-all duration-[4s] ease-out md:mt-3'}
				strokeColor="stroke-neutral-950"
				height={100}
				style="none"
				direction="right"
			/>
		</div>
	);
}
