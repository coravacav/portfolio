'use client';

import { HelixAnimation, useHelixVisibility } from '@/lib/helix';
import Typewriter from '@/lib/typewriter';
import { pageWidth } from '@/styles/pageWidth';
import clsx from 'clsx';
import { atom, useAtom } from 'jotai';

const hasVisitedAtom = atom(true);
const stack = [16, 18, 38, 50, 80, 100];

export default function Home() {
    const [rotated, setRotated] = useAtom(hasVisitedAtom);
    const [_, setHelixesVisible] = useHelixVisibility();

    const helixStyles = rotated ? 'opacity-0' : 'opacity-20';

    return (
        <div className={clsx('mx-auto pt-16 sm:pt-24', pageWidth)}>
            <h1 className="text-white text-6xl leading-tight ">
                <Typewriter
                    text={'Hi.\nWelcome to my portfolio.'}
                    onFinished={() => {
                        setRotated(false);
                        setHelixesVisible(true);
                    }}
                    disable={!rotated}
                />
            </h1>
            {stack.map((height) => (
                <HelixAnimation
                    svgWidth="100%"
                    className={clsx(
                        'absolute w-full mt-3 left-0 transition-all duration-[4s] ease-out gap-x-4',
                        helixStyles
                    )}
                    strokeColor="stroke-tangerine"
                    height={height}
                    style="none"
                    direction="right"
                    key={height}
                />
            ))}
        </div>
    );
}
