'use client';

import useMeasure from 'react-use-measure';
import { ReactNode, useEffect, useId, useRef } from 'react';
import clsx from 'clsx';

export default function Wave({
    className,
    children,
    height = 10,
    color = '#a01a58',
    duration = 1000,
}: {
    className?: string;
    children: ReactNode;
    height?: number;
    color?: string;
    duration?: number;
}) {
    const [contentRef, bounds] = useMeasure();
    const svgRef = useRef<SVGSVGElement>();

    const patternId = useId();
    const fill = `url(#${patternId})`;

    const styles = {
        width: bounds.width + 'px',
        height: height + 'px',
    };

    useEffect(() => {
        if (!svgRef.current) return;

        const newspaperSpinning = [{ transform: 'translateX(0)' }, { transform: `translateX(-${height}px)` }];

        const newspaperTiming: KeyframeAnimationOptions = {
            duration,
            easing: 'linear',
            iterations: Infinity,
        };

        const newspapers = svgRef.current.querySelectorAll('.wave');

        const animations: Animation[] = [];

        newspapers.forEach((newspaper) => animations.push(newspaper.animate(newspaperSpinning, newspaperTiming)));

        return () => {
            animations.forEach((animation) => animation.cancel());
        };
    }, [height, duration]);

    const hHeight = height / 2;
    const dHeight = height * 2;

    return (
        <div className={clsx('relative', className)}>
            <div ref={contentRef} className="w-min whitespace-nowrap">
                {children}
            </div>
            <svg {...styles} className="absolute top-full" role="none" ref={svgRef}>
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
        </div>
    );
}
