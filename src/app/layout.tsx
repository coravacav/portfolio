import Nav from '@/lib/nav';
import localFont from 'next/font/local';
import './app.css';

const atkinsonNext = localFont({
	src: [
		{ path: './fonts/atkinson-hyperlegible-next-400.ttf', weight: '400', style: 'normal' },
		{ path: './fonts/atkinson-hyperlegible-next-500.ttf', weight: '500', style: 'normal' },
		{ path: './fonts/atkinson-hyperlegible-next-600.ttf', weight: '600', style: 'normal' },
		{ path: './fonts/atkinson-hyperlegible-next-700.ttf', weight: '700', style: 'normal' },
	],
	display: 'swap',
	adjustFontFallback: false,
	variable: '--font-atkinson-next',
});

const atkinsonMono = localFont({
	src: [
		{ path: './fonts/atkinson-hyperlegible-mono-400.ttf', weight: '400', style: 'normal' },
		{ path: './fonts/atkinson-hyperlegible-mono-500.ttf', weight: '500', style: 'normal' },
		{ path: './fonts/atkinson-hyperlegible-mono-600.ttf', weight: '600', style: 'normal' },
		{ path: './fonts/atkinson-hyperlegible-mono-700.ttf', weight: '700', style: 'normal' },
	],
	display: 'swap',
	adjustFontFallback: false,
	variable: '--font-atkinson-mono',
});

export const metadata = {
	title: 'Stefan Todorov',
	description: 'Stefan Todorov - Software Engineer',
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${atkinsonNext.variable} ${atkinsonMono.variable}`}
		>
			<body className="relative bg-neutral-800 pb-10 font-sans antialiased">
				<Nav />
				{children}
			</body>
		</html>
	);
}
