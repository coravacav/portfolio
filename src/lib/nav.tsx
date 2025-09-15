'use client';

import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { pageWidth } from '@/styles/pageWidth';
import Helix from './helix';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { cn } from './cn';

const MobileNav = dynamic(() => import('./mobileNav'));

export const navigation = [
	{ name: 'Blog', href: '/blog' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'Resume', href: '/resume' },
];

export const Name = ({ hide = false }) => (
	<Link
		href="/"
		className="group -m-1.5 p-1.5 text-2xl font-semibold 2xl:text-3xl"
	>
		<Helix
			height={16}
			show={!hide}
			style="none"
			strokeStyles="stroke-activatable/60 stroke-[1.5px]"
			containerStyles="text-transparent bg-clip-text from-active via-activatable to-hover transition-gradient-hover bg-gradient-to-r transition-all duration-500"
			className="right-[-10px] left-[-10px] w-[calc(100%+20px)] transition-colors lg:hidden"
		>
			Stefan Todorov
		</Helix>
	</Link>
);

export default function Nav() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathName = usePathname();

	return (
		<header className="border-b-2 border-b-neutral-900 bg-neutral-900 print:hidden">
			<nav
				className={cn('mx-auto flex items-center justify-between py-6 2xl:py-8', pageWidth)}
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Name />
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-400"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon
							className="h-6 w-6"
							aria-hidden="true"
						/>
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => {
						const active = pathName == item.href || (item.href.length > 1 && pathName.startsWith(item.href));

						return (
							<Link
								key={item.name}
								href={item.href}
								className="group hover:text-hover text-base leading-6 font-semibold text-white transition-colors 2xl:text-xl"
							>
								<Helix
									height={12}
									className="right-[-5px] left-[-5px] w-[calc(100%+10px)]"
									strokeStyles={cn({
										'stroke-active': active,
									})}
								>
									{item.name}
								</Helix>
							</Link>
						);
					})}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Link
						href="/contact"
						className="group hover:text-hover text-base leading-6 font-semibold text-white transition-colors 2xl:text-xl"
					>
						<Helix
							height={12}
							style="topleft"
							className="right-[-5px] left-[-5px] w-[calc(100%+10px)]"
							strokeStyles={pathName === '/contact' ? 'stroke-active' : undefined}
						>
							<span className="flex gap-2 align-middle">
								Contact
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
					</Link>
				</div>
			</nav>
			{mobileMenuOpen && (
				<MobileNav
					mobileMenuOpen={mobileMenuOpen}
					setMobileMenuOpen={setMobileMenuOpen}
				/>
			)}
		</header>
	);
}
