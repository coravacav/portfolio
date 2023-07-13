import Nav from '@/lib/nav';
import './globals.css';

export const metadata = {
    title: 'Stefan Todorov',
    description: 'Stefan Todorov - Software Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-gray-800">
                <Nav />
                {children}
            </body>
        </html>
    );
}
