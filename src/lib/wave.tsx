'use client';

import useMeasure from 'react-use-measure';
import styles from './wave/wave.module.scss';
import { ReactNode } from 'react';

export default function Wave({ className, children }: { className?: string; children: ReactNode }) {
    const [ref, bounds] = useMeasure();

    return (
        <div className={className}>
            <div ref={ref} className="w-min whitespace-nowrap">
                {children}
            </div>
            <svg width={bounds.width + 'px'} viewBox="0 0 40 10">
                <path id={styles['wave']} d="M 0 5 Q 5 0 10 5 T 20 5 T 30 5 T 40 5 T 50 5" />
                <path id={styles['wave']} d="M 0 5 Q 5 10 10 5 T 20 5 T 30 5 T 40 5 T 50 5" />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                        <animate attributeName="x1" dur="5s" values="0%;100%" repeatCount="indefinite" />
                        <animate attributeName="x2" dur="5s" values="0%;100%" repeatCount="indefinite" />
                        <stop offset="0%" style={{ stopColor: 'red', stopOpacity: 1 }}></stop>
                        <stop offset="20%" style={{ stopColor: 'orange', stopOpacity: 1 }}></stop>
                        <stop offset="40%" style={{ stopColor: 'yellow', stopOpacity: 1 }}></stop>
                        <stop offset="60%" style={{ stopColor: 'green', stopOpacity: 1 }}></stop>
                        <stop offset="80%" style={{ stopColor: 'blue', stopOpacity: 1 }}></stop>
                        <stop offset="100%" style={{ stopColor: 'violet', stopOpacity: 1 }}></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
