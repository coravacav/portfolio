'use client';

import useMeasure from 'react-use-measure';
import { ReactNode, useEffect, useId, useRef } from 'react';
import clsx from 'clsx';

export default function Wave({
    className,
    children,
    height = 10,
}: {
    className?: string;
    children: ReactNode;
    height?: number;
}) {
    const [contentRef, bounds] = useMeasure();
    const svgRef = useRef<SVGSVGElement>();

    const gradientId = useId();
    const patternId = useId();

    const fill = `url(#${patternId})`;

    const styles = {
        width: bounds.width + 'px',
        height: height + 'px',
    };

    const newspaperSpinning = [{ transform: 'translateX(0)' }, { transform: `translateX(-${height}px)` }];

    const newspaperTiming: KeyframeAnimationOptions = {
        duration: 1000,
        easing: 'linear',
        iterations: Infinity,
    };

    useEffect(() => {
        if (!svgRef.current) return;

        const newspapers = svgRef.current.querySelectorAll('.wave');

        const animations: Animation[] = [];

        newspapers.forEach((newspaper) => animations.push(newspaper.animate(newspaperSpinning, newspaperTiming)));

        return () => {
            animations.forEach((animation) => animation.cancel());
        };
    }, []);

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
                            className="fill-transparent stroke-[1.5px] stroke-[#a01a58] wave"
                            d={`M 0 ${height / 2} Q ${height / 2} 0 ${height} ${height / 2} T ${height * 2} ${
                                height / 2
                            }`}
                        />
                        <path
                            className="fill-transparent stroke-[1.5px] stroke-[#a01a58] wave"
                            d={`M 0 ${height / 2} Q ${height / 2} ${height} ${height} ${height / 2} T ${height * 2} ${
                                height / 2
                            }`}
                        />
                    </pattern>
                </defs>
            </svg>
        </div>
    );
}
