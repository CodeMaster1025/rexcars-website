import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/sections/nav/Navbar';
import Footer from '@/components/sections/footer/Footer';
import { IsElementOutOfViewProvider } from '@/context/IsElementOutOfViewContext';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import CookiesConsentBanner from '@/components/ui/cookiesConsent/CookiesConsentBanner';
import PopupModal from '@/components/ui/popupModal/PopupModal';
import MarqueeText from '@/components/ui/marqueeText/MarqueeText';
import { cn } from '@/lib/utils';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600'],
    style: ['normal', 'italic'],
});

export const metadata: Metadata = {
    title: {
        template: '%s | Wypożyczalnia samochodów sportowych RexCars',
        default: 'Wypożyczalnia samochodów sportowych | RexCars',
      },
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
            <body className={cn(
                'bg-black',
                poppins.className,
                'min-h-screen',
            )}>
                <IsElementOutOfViewProvider>
                        <Navbar />
                        <MarqueeText 
                    words={["Promocja!", "Nawet 40% taniej!", "3 dni w cenie 2!", "5 dni w cenie 3!", "7 dni w cenie 5!"]}
                            ariaLabel="Announcement banner for RexCars"
                        />
                        <main className="flex-1">
                            {children}
                        </main>
                        <Footer />
                </IsElementOutOfViewProvider>

                <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID as string} />
                <CookiesConsentBanner />
                <div id='overlay'></div>
                <PopupModal />
                <SpeedInsights />
            </body>
        </html>
    );
}
