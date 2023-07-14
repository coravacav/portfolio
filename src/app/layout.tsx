import Nav from '@/lib/nav';
import './globals.css';
import { Inter } from 'next/font/google';
import Helix, { HelixAnimation } from '@/lib/helix';
import { pinkColor } from '@/styles/pinkColor';

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
            <body className="bg-gray-800 min-h-screen">
                <Nav />
                {children}
                <HelixAnimation
                    duration={300}
                    height={20}
                    strokeWidth="2px"
                    style="none"
                    color={pinkColor + '10'}
                    svgWidth="100%"
                    className="absolute bottom-0 left-0 right-0"
                />
                <HelixAnimation
                    duration={400}
                    height={30}
                    strokeWidth="3px"
                    style="none"
                    color={pinkColor + '10'}
                    svgWidth="100%"
                    className="absolute bottom-0 left-0 right-0"
                />
                <HelixAnimation
                    duration={500}
                    height={40}
                    strokeWidth="4px"
                    style="none"
                    color={pinkColor + '10'}
                    svgWidth="100%"
                    className="absolute bottom-0 left-0 right-0"
                />
                <HelixAnimation
                    duration={600}
                    height={50}
                    strokeWidth="5px"
                    style="none"
                    color={pinkColor + '10'}
                    svgWidth="100%"
                    className="absolute bottom-0 left-0 right-0"
                />
            </body>
        </html>
    );
}
