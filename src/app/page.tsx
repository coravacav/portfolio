import { HelixAnimation } from '@/lib/helix';
import { pageWidth } from '@/styles/pageWidth';
import clsx from 'clsx';

export default function Home() {
    return (
        <div className={clsx('mx-auto pt-16 sm:pt-24', pageWidth)}>
            <h1 className="text-white text-6xl">
                Hi.
                <br />
                Welcome to my portfolio.
            </h1>
            <HelixAnimation
                svgWidth="100%"
                className="absolute w-full mt-3 left-0 right-0"
                strokeColor="stroke-tangerine"
                height={16}
                style="none"
                direction="right"
            />
        </div>
    );
}
