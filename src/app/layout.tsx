import Nav from '@/lib/nav';
import './globals.css';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import { EnsureHelixesAreVisible } from '@/lib/helix';
import FirefoxAnimationWarning from '@/lib/firefoxAnimationWarning';

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
        <html lang="en" className={clsx('', inter.className)}>
            <body className="bg-gray-800 min-h-screen relative pb-10">
                <Nav />
                <EnsureHelixesAreVisible />
                <FirefoxAnimationWarning />
                {children}
            </body>
        </html>
    );
}
