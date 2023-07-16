import { pageTop, pageWidth } from '@/styles/pageWidth';
import clsx from 'clsx';
import { ReactNode } from 'react';
import { HelixAnimation } from './helix';

type Props = {
    title: string;
    description: string;
    children?: ReactNode;
    className?: string;
};

export default function PageContainer({ className, title, description, children }: Props) {
    return (
        <div className={clsx('mx-auto lg:px-8', pageTop, pageWidth)}>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:mb-9 mb-3">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
                <p className="mt-2 text-lg leading-8 text-neutral-300">{description}</p>
            </div>
            <HelixAnimation
                svgWidth="100%"
                className="absolute w-full left-0 right-0"
                strokeColor="stroke-dark"
                height={16}
                style="none"
                direction="right"
            />
            <div className={clsx('mt-8 lg:mt-20 mx-auto max-w-2xl lg:mx-0 lg:max-w-none', className)}>{children}</div>
        </div>
    );
}
