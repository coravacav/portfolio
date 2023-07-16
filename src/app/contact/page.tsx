import { HelixAnimation } from '@/lib/helix';
import Link from 'next/link';

const Card = ({ children }) => {
    return (
        <div className="relative rounded-2xl bg-neutral-900 p-10 overflow-hidden group">
            {children}

            <HelixAnimation
                className="absolute bottom-0 left-0 right-0"
                strokeColor="stroke-seashell/10"
                groupHoverColor="group-hover:stroke-tropicalIndigo/20"
                duration={3000}
                height={20}
                style="none"
                svgWidth="100%"
            />
            <HelixAnimation
                className="absolute top-0 left-0 right-0"
                strokeColor="stroke-seashell/10"
                groupHoverColor="group-hover:stroke-tropicalIndigo/20"
                duration={3000}
                height={20}
                style="none"
                svgWidth="100%"
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
                                <h3 className="text-xl font-semibold leading-7 text-white">Email</h3>
                                <div className="mt-3 space-y-1 text-base leading-6 text-neutral-300">
                                    <Link
                                        className="font-semibold text-tangerine hover:text-tropicalIndigo transition-colors"
                                        href="mailto:stefan@stefanbt.com"
                                    >
                                        stefan@stefanbt.com
                                    </Link>
                                </div>
                            </Card>
                            <Card>
                                <h3 className="text-xl font-semibold leading-7 text-white">LinkedIn</h3>
                                <div className="mt-3 space-y-1 text-base leading-6 text-neutral-300">
                                    <Link
                                        className="font-semibold text-tangerine hover:text-tropicalIndigo transition-colors"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/stefanbt/"
                                    >
                                        stefanbt
                                    </Link>
                                </div>
                            </Card>
                            <Card>
                                <h3 className="text-xl font-semibold leading-7 text-white">GitHub</h3>
                                <div className="mt-3 space-y-1 text-base leading-6 text-neutral-300">
                                    <Link
                                        className="font-semibold text-tangerine hover:text-tropicalIndigo transition-colors"
                                        href="https://github.com/coravacav"
                                        target="_blank"
                                    >
                                        coravacav
                                    </Link>
                                </div>
                            </Card>
                            <Card>
                                <h3 className="text-xl font-semibold leading-7 text-white">Discord</h3>
                                <div className="mt-3 space-y-1 text-base leading-6 text-neutral-300">
                                    <span className="font-semibold text-tangerine">maskmonarch</span>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
