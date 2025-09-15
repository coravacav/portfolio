import Nav from '@/lib/nav';
import { Atkinson_Hyperlegible_Next, Atkinson_Hyperlegible_Mono } from 'next/font/google';
import './app.css';

// Load Atkinson Hyperlegible (Next) for sans and Atkinson Hyperlegible Mono for code
const atkinsonNext = Atkinson_Hyperlegible_Next({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-atkinson-next',
});

const atkinsonMono = Atkinson_Hyperlegible_Mono({
	subsets: ['latin'],
	display: 'swap',
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
