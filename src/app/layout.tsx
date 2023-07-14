import Nav from '@/lib/nav';
import './globals.css';
import { Inter } from 'next/font/google';
import Helix, { HelixAnimation } from '@/lib/helix';
import { pink } from '@/styles/colors';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
    title: 'Stefan Todorov',
    description: 'Stefan Todorov - Software Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
            <body className="bg-gray-800 min-h-screen relative">
                <Nav />
                {children}
            </body>
        </html>
    );
}
