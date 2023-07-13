'use client';

import useMeasure from 'react-use-measure';
import { CSSProperties, ReactNode, useEffect, useId, useState } from 'react';
import clsx from 'clsx';
import { Transition } from '@headlessui/react';
import { pinkColor } from '@/styles/pinkColor';

type HelixAnimationProps = {
    show?: boolean;
    duration?: number;
    style?: 'topright' | 'topleft' | 'none';
    color?: string;
    className?: string;
    strokeWidth?: string;
    height?: number;
    svgWidth?: number | string;
    extendLeft?: number;
    extendRight?: number;
    svgHeight?: number;
};

export function HelixAnimation({
    show = true,
    className,
    svgWidth,
    height = 10,
    color = pinkColor,
    duration = 1000,
    extendLeft = 0,
    extendRight = 0,
    style = 'topright',
    strokeWidth = '1.5px',
}: HelixAnimationProps) {
    const [svgRef, setSvgRef] = useState<SVGSVGElement | null>(null);

    const patternId = useId();
    const fill = `url(#${patternId})`;

    const styles = {
        width: typeof svgWidth === 'string' ? svgWidth : svgWidth + extendLeft + extendRight,
        height: height + 'px',
    };

    useEffect(() => {
        if (!svgRef) return;
        if (!show) return;

        const newspaperSpinning = [{ transform: 'translateX(0)' }, { transform: `translateX(-${height}px)` }];

        const newspaperTiming: KeyframeAnimationOptions = {
            duration,
            easing: 'linear',
            iterations: Infinity,
        };

        const newspapers = svgRef.querySelectorAll('path');

        const animations: Animation[] = [];

        newspapers.forEach((newspaper) => animations.push(newspaper.animate(newspaperSpinning, newspaperTiming)));

        return () => {
            animations.forEach((animation) => animation.cancel());
        };
    }, [height, duration, show, svgRef]);

    const hHeight = height / 2;
    const dHeight = height * 2;

    return (
        <svg
            {...styles}
            className={className}
            role="none"
            ref={setSvgRef}
            style={generateSvgStyles({
                extendLeft,
                extendRight,
                style,
            })}
        >
            <rect {...styles} style={{ fill }} />
            <defs>
                <pattern id={patternId} width={height} height={height} patternUnits="userSpaceOnUse">
                    <path
                        className="fill-transparent"
                        d={`M 0 ${hHeight} Q ${hHeight} 0 ${height} ${hHeight} T ${dHeight} ${hHeight}`}
                        style={{ stroke: color, strokeWidth }}
                    />
                    <path
                        className="fill-transparent"
                        d={`M 0 ${hHeight} Q ${hHeight} ${height} ${height} ${hHeight} T ${dHeight} ${hHeight}`}
                        style={{ stroke: color, strokeWidth }}
                    />
                </pattern>
            </defs>
        </svg>
    );
}

export default function Helix({
    className,
    children,
    ...rest
}: {
    children: ReactNode;
} & HelixAnimationProps) {
    const [contentRef, bounds] = useMeasure();
    const [renderHelix, setRenderHelix] = useState(false);

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
                <HelixAnimation className="absolute top-full" show={renderHelix} svgWidth={bounds.width} {...rest} />
            </Transition>
        </div>
    );
}

function generateSvgStyles({ extendLeft, extendRight, style }) {
    const svgStyles: CSSProperties = {
        left: -extendLeft + 'px',
        right: -extendRight + 'px',
    };

    if (style !== 'none') {
        svgStyles[
            'WebkitMaskImage'
        ] = `linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0)), linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))`;
        svgStyles['WebkitMaskSize'] = '100% 50%';
        svgStyles['WebkitMaskRepeat'] = 'no-repeat';

        if (style === 'topright') {
            svgStyles['WebkitMaskPosition'] = 'left top, right bottom';
        } else if (style === 'topleft') {
            svgStyles['WebkitMaskPosition'] = 'left bottom, right top';
        }
    }

    return svgStyles;
}
