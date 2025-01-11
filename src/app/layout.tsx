import Nav from '@/lib/nav';
import { Inter } from 'next/font/google';
import { EnsureHelixesAreVisible } from '@/lib/helix';
import FirefoxAnimationWarning from '@/lib/firefoxAnimationWarning';
import './app.css';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'Stefan Todorov',
	description: 'Stefan Todorov - Software Engineer',
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={inter.className}
		>
			<body className="relative bg-neutral-800 pb-10">
				<Nav />
				<EnsureHelixesAreVisible />
				<FirefoxAnimationWarning />
				{children}
			</body>
		</html>
	);
}
