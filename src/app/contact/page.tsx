import { HelixAnimation } from '@/lib/helix';
import Link from 'next/link';

const Card = ({ children }) => {
	return (
		<div className="group relative overflow-hidden rounded-2xl bg-neutral-900 p-10">
			{children}
			<HelixAnimation
				className="absolute right-0 bottom-0 left-0 w-full"
				rectStyles="scale-150"
				height={18}
				strokeStyles="stroke-light/10 group-hover:stroke-active/20 stroke-[1.5px]"
				style="none"
			/>
			<HelixAnimation
				className="absolute top-0 right-0 left-0 w-full"
				rectStyles="scale-150"
				height={18}
				strokeStyles="stroke-light/10 group-hover:stroke-active/20 stroke-[1.5px]"
				style="none"
				direction="right"
			/>
		</div>
	);
};

export default function ContactPage() {
	return (
		<div className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl space-y-16 divide-y divide-neutral-100 lg:mx-0 lg:max-w-none">
					<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
							<p className="mt-4 leading-7 text-neutral-300">
								Together, we can create amazing things.
								<br />
								Reach out!
							</p>
						</div>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
							<Card>
								<h3 className="text-xl leading-7 font-semibold text-white">Email</h3>
								<div className="mt-3 space-y-1 text-base leading-6 text-neutral-300">
									<Link
										className="text-hover hover:text-active font-semibold transition-colors"
										href="mailto:stefan@stefanbt.com"
									>
										stefan@stefanbt.com
									</Link>
								</div>
							</Card>
							<Card>
								<h3 className="text-xl leading-7 font-semibold text-white">LinkedIn</h3>
								<div className="mt-3 space-y-1 text-base leading-6 text-neutral-300">
									<Link
										className="text-hover hover:text-active font-semibold transition-colors"
										target="_blank"
										href="https://www.linkedin.com/in/stefanbt/"
									>
										stefanbt
									</Link>
								</div>
							</Card>
							<Card>
								<h3 className="text-xl leading-7 font-semibold text-white">GitHub</h3>
								<div className="mt-3 space-y-1 text-base leading-6 text-neutral-300">
									<Link
										className="text-hover hover:text-active font-semibold transition-colors"
										href="https://github.com/coravacav"
										target="_blank"
									>
										coravacav
									</Link>
								</div>
							</Card>
							<Card>
								<h3 className="text-xl leading-7 font-semibold text-white">Discord</h3>
								<div className="mt-3 space-y-1 text-base leading-6 text-neutral-300">
									<span className="text-hover font-semibold">maskmonarch</span>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
