'use client';

import useMeasure from 'react-use-measure';
import { ReactNode, useEffect, useId, useState } from 'react';
import clsx from 'clsx';
import { Transition } from '@headlessui/react';

export default function Helix({
    className,
    children,
    height = 10,
    color = '#a01a58',
    duration = 1000,
    extendLeft = 0,
    extendRight = 0,
}: {
    className?: string;
    children: ReactNode;
    height?: number;
    color?: string;
    duration?: number;
    extendLeft?: number;
    extendRight?: number;
}) {
    const [contentRef, bounds] = useMeasure();
    const [svgRef, setSvgRef] = useState<SVGSVGElement | null>(null);
    const [renderHelix, setRenderHelix] = useState(false);

    const patternId = useId();
    const fill = `url(#${patternId})`;

    const width = bounds.width ? bounds.width + extendLeft + extendRight : 0;

    const styles = {
        width,
        height: height + 'px',
    };

    useEffect(() => {
        if (!svgRef) return;
        if (!renderHelix) return;

        const newspaperSpinning = [{ transform: 'translateX(0)' }, { transform: `translateX(-${height}px)` }];

        const newspaperTiming: KeyframeAnimationOptions = {
            duration,
            easing: 'linear',
            iterations: Infinity,
        };

        const newspapers = svgRef.querySelectorAll('.wave');

        const animations: Animation[] = [];

        newspapers.forEach((newspaper) => animations.push(newspaper.animate(newspaperSpinning, newspaperTiming)));

        return () => {
            animations.forEach((animation) => animation.cancel());
        };
    }, [height, duration, renderHelix, svgRef]);

    const hHeight = height / 2;
    const dHeight = height * 2;

    return (
        <div
            className={clsx('relative w-min whitespace-nowrap', className)}
            ref={(ref) => {
                contentRef(ref);
                setRenderHelix(true);
            }}
        >
            {children}
            <Transition
                show={renderHelix}
                enter="transition-opacity duration-[4s] ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
            >
                <svg
                    {...styles}
                    className="absolute top-full"
                    role="none"
                    ref={setSvgRef}
                    style={{
                        left: -extendLeft + 'px',
                        right: -extendRight + 'px',
                        // @ts-expect-error -webkit-mask-image is not in the types
                        '-webkit-mask-image':
                            'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0)), linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
                        '-webkit-mask-size': '100% 50%',
                        '-webkit-mask-repeat': 'no-repeat',
                        '-webkit-mask-position': 'left top, left bottom',
                    }}
                >
                    <rect {...styles} style={{ fill }} />
                    <defs>
                        <pattern id={patternId} width={height} height={height} patternUnits="userSpaceOnUse">
                            <path
                                className="fill-transparent stroke-[1.5px] wave"
                                d={`M 0 ${hHeight} Q ${hHeight} 0 ${height} ${hHeight} T ${dHeight} ${hHeight}`}
                                style={{ stroke: color }}
                            />
                            <path
                                className="fill-transparent stroke-[1.5px] wave"
                                d={`M 0 ${hHeight} Q ${hHeight} ${height} ${height} ${hHeight} T ${dHeight} ${hHeight}`}
                                style={{ stroke: color }}
                            />
                        </pattern>
                    </defs>
                </svg>
            </Transition>
        </div>
    );
}
