import { ReactNode, useId } from 'react';
import { cn } from './cn';

type HelixAnimationProps = {
	show?: boolean;
	style?: 'topright' | 'topleft' | 'none';
	strokeStyles?: string;
	rectStyles?: string;
	containerStyles?: string;
	className?: string;
	height?: number;
	direction?: 'left' | 'right';
};

export function HelixAnimation({
	className,
	height = 10,
	strokeStyles,
	direction = 'left',
	rectStyles,
	style = 'topright',
}: HelixAnimationProps) {
	const patternId = useId();
	const fill = `url(#${patternId})`;

	const pathStyles = cn(
		'fill-transparent transition-all duration-300 stroke-activatable group-hover:stroke-hover stroke-[1.5px]',
		{
			'animate-helix-left': direction === 'left',
			'animate-helix-right': direction === 'right',
		},
		strokeStyles
	);

	return (
		<svg
			style={{
				height: height + 'px',
			}}
			className={cn(
				'h-full w-full print:hidden',
				{
					'svg-mask svg-mask-topright': style === 'topright',
					'svg-mask svg-mask-topleft': style === 'topleft',
				},
				className
			)}
			role="none"
		>
			<rect
				className={cn('h-full w-full', rectStyles)}
				style={{ fill }}
			/>
			<defs>
				<pattern
					id={patternId}
					width={12}
					height="100%"
					patternUnits="userSpaceOnUse"
				>
					<path
						className={pathStyles}
						d="M 0 6 Q 6 0 12 6 T 24 6"
					></path>
					<path
						className={pathStyles}
						d="M 0 6 Q 6 12 12 6 T 24 6"
					></path>
				</pattern>
			</defs>
		</svg>
	);
}

export default function Helix({
	className,
	children,
	containerStyles,
	...rest
}: {
	children: ReactNode;
} & HelixAnimationProps) {
	return (
		<div className={cn('relative w-min whitespace-nowrap', containerStyles)}>
			{children}
			<HelixAnimation
				className={cn('fade-in absolute top-full', className)}
				{...rest}
			/>
		</div>
	);
}
