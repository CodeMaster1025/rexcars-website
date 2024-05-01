import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/nav/Navbar';
import Footer from '@/components/ui/footer/Footer';

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "600"], style: ["normal", "italic"] });

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
                />
            </head>
            <body className={'bg-black ' + poppins.className + " antialiased"}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
