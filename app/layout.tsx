import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/nav/Navbar';
import Footer from '@/components/ui/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Wypożyczalnia samochodów sportowych | RexCars',
    description:
        'Wypożyczalnia samochodów sportowych z dowozem na całą Polskę. Szeroka gama dostępnych aut sportowych na wynajem. Spełnij swoje motoryzacyjne marzenia już dziś!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='pl'>
            <head>
                <link
                    rel='icon'
                    href='/favicon.ico'
                ></link>
            </head>
            <body className='bg-black'>
                <Navbar />
                {children}
                {/* <Footer year={2024} /> */}
            </body>
        </html>
    );
}
