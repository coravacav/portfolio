'use client';

import useMeasure from 'react-use-measure';
import { ReactNode, useId } from 'react';
import clsx from 'clsx';

export default function Wave({ className, children }: { className?: string; children: ReactNode }) {
    const [ref, bounds] = useMeasure();
    const uniqueId = useId();

    const stroke = `url(#${uniqueId})`;

    return (
        <div className={clsx('relative', className)}>
            <div ref={ref} className="w-min whitespace-nowrap">
                {children}
            </div>
            <svg
                width={bounds.width + 'px'}
                height="8px"
                viewBox="0 2 50 6"
                preserveAspectRatio="none"
                className="absolute top-full"
                role="none"
            >
                <path
                    className="fill-transparent stroke-1 animate-waveleft"
                    d="M 0 5 Q 5 0 10 5 T 20 5 T 30 5 T 40 5 T 50 5"
                    style={{ stroke }}
                />
                <path
                    className="fill-transparent stroke-1 animate-waveleft"
                    d="M 0 5 Q 5 10 10 5 T 20 5 T 30 5 T 40 5 T 50 5"
                    style={{ stroke }}
                />
                <path
                    className="fill-transparent stroke-1 animate-waveright"
                    d="M 0 5 Q 5 0 10 5 T 20 5 T 30 5 T 40 5 T 50 5"
                    style={{ stroke }}
                />
                <path
                    className="fill-transparent stroke-1 animate-waveright"
                    d="M 0 5 Q 5 10 10 5 T 20 5 T 30 5 T 40 5 T 50 5"
                    style={{ stroke }}
                />
                <defs>
                    <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                        {/* <animate attributeName="x1" dur="5s" values="0%;100%" repeatCount="indefinite" />
                        <animate attributeName="x2" dur="5s" values="0%;100%" repeatCount="indefinite" /> */}
                        <stop offset="0%" style={{ stopColor: '#723c70' }}></stop>
                        <stop offset="25%" style={{ stopColor: '#a01a58' }}></stop>
                        <stop offset="50%" style={{ stopColor: '#b7094c' }}></stop>
                        <stop offset="75%" style={{ stopColor: '#a01a58' }}></stop>
                        <stop offset="100%" style={{ stopColor: '#723c70' }}></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
