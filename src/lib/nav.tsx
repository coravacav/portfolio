'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { pageWidth } from '@/styles/pageWidth';
import Helix, { HelixAnimation } from './helix';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navigation = [
    { name: 'Blog', href: '/blog' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resume', href: '/resume' },
];

const Name = ({ hide = false }) => (
    <Link
        href="/"
        className="-m-1.5 p-1.5 text-white font-semibold text-2xl 2xl:text-3xl group hover:text-tangerine transition-colors"
    >
        <Helix
            height={16}
            show={!hide}
            extendLeft={10}
            extendRight={10}
            style="none"
            strokeColor="stroke-pink/60"
            className="lg:hidden"
            groupHoverColor="group-hover:stroke-tangerine"
        >
            Stefan Todorov
        </Helix>
    </Link>
);

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathName = usePathname();

    return (
        <header className="bg-gray-900 border-b-2 border-b-gray-900 -ml-[calc(100vw-100%)] pl-[calc(100vw-100%)]">
            <nav
                className={clsx('mx-auto flex items-center justify-between py-6 2xl:py-8', pageWidth)}
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Name />
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-base 2xl:text-xl font-semibold leading-6 text-white group hover:text-tangerine transition-colors"
                        >
                            <Helix
                                height={12}
                                extendLeft={5}
                                extendRight={5}
                                strokeColor={
                                    pathName == item.href || (item.href.length > 1 && pathName.startsWith(item.href))
                                        ? 'stroke-tropicalIndigo'
                                        : undefined
                                }
                                groupHoverColor="group-hover:stroke-tangerine"
                            >
                                {item.name}
                            </Helix>
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href="/contact"
                        className="text-base 2xl:text-xl font-semibold leading-6 text-white group hover:text-tangerine transition-colors"
                    >
                        <Helix
                            height={12}
                            style="topleft"
                            groupHoverColor="group-hover:stroke-tangerine"
                            strokeColor={pathName === '/contact' ? 'stroke-tropicalIndigo' : undefined}
                        >
                            <span className="flex align-middle gap-2 ">
                                Contact
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
                    </Link>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 ">
                    <div className="flex items-center justify-between">
                        <Name hide />
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
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
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <HelixAnimation
                                svgWidth="calc(100% + 3rem)"
                                style="none"
                                className="-mx-6"
                                strokeColor="stroke-pink/60"
                            />
                            <div className="py-6">
                                <Link
                                    href="#"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
