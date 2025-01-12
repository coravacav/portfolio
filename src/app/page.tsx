import { cn } from '@/lib/cn';
import { HelixAnimation } from '@/lib/helix';
import { pageWidth } from '@/styles/pageWidth';

export default function Home() {
	return (
		<div className={cn('mx-auto pt-16 sm:pt-24', pageWidth)}>
			<h1 className="text-5xl leading-tight text-white">{'Hi.\nWelcome to my portfolio.'}</h1>
			<HelixAnimation
				className={'absolute left-0 mt-4 w-full gap-x-4 opacity-20 transition-all duration-[4s] ease-out md:mt-3'}
				strokeStyles="stroke-neutral-950 stroke-[.25px]"
				rectStyles="scale-[10]"
				height={144}
				style="none"
				direction="right"
			/>
		</div>
	);
}
