'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { HelixAnimation } from './helix';
import { Name, navigation } from './nav';

export default function MobileNav({ mobileMenuOpen, setMobileMenuOpen }) {
	return (
		<Dialog
			as="div"
			className="lg:hidden"
			open={mobileMenuOpen}
			onClose={setMobileMenuOpen}
		>
			<div className="fixed inset-0 z-10" />
			<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
				<div className="flex items-center justify-between">
					<Name hide />
					<button
						type="button"
						className="-m-2.5 rounded-md p-2.5 text-neutral-400"
						onClick={() => setMobileMenuOpen(false)}
					>
						<span className="sr-only">Close menu</span>
						<XMarkIcon
							className="h-6 w-6"
							aria-hidden="true"
						/>
					</button>
				</div>
				<div className="mt-6 flow-root">
					<div className="-my-6">
						<div className="space-y-2 py-6">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									onClick={() => setMobileMenuOpen(false)}
									className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-white hover:bg-neutral-800"
								>
									{item.name}
								</Link>
							))}
						</div>
						<HelixAnimation
							svgWidth="calc(100% + 3rem)"
							style="none"
							className="-mx-6"
							strokeColor="stroke-activatable/60"
						/>
						<div className="py-6">
							<Link
								href="#"
								onClick={() => setMobileMenuOpen(false)}
								className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 font-semibold text-white hover:bg-neutral-800"
							>
								Contact
							</Link>
						</div>
					</div>
				</div>
			</DialogPanel>
		</Dialog>
	);
}
