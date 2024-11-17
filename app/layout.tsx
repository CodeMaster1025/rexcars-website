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
import Script from "next/script";

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
    // @ts-ignore
    return (
        <html lang='pl'>
            <body className={cn(
                'bg-black',
                poppins.className,
                'min-h-screen',
            )}>
            <Script id="schema-org" type="application/ld+json">
                {
                    {// @ts-ignore
                    "@context": "https://schema.org",
                    "@type": "AutoRental",
                    "name": "Wypożyczalnia samochodów sportowych RexCars",
                    "image": "https://www.rexcars.pl/_next/image?url=%2FREX_CARS_LOGO-BIALEpoziom_beztla.png",
                    "priceRange": "$$",
                    "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Ignacego Mościckiego 4",
                    "addressLocality": "Skarżysko-Kamienna",
                    "addressRegion": "Świętokrzyskie",
                    "postalCode": "26-110",
                    "addressCountry": "PL"
                },
                    "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "08:00",
                    "closes": "20:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday",
                    "opens": "10:00",
                    "closes": "20:00"
                }
                    ],
                    "telephone": "+48 534 668 001",
                    "email": "kontakt@rexcars.pl",
                    "url": "https://www.rexcars.pl",
                    "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Available Rental Cars",
                    "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                    "@type": "Car",
                    "name": "BMW M2",
                    "manufacturer": "BMW",
                    "vehicleConfiguration": "Coupe",
                    "image": "https://cdn.sanity.io/images/pfrvgfvt/production/f57b2d5c8b4828b67c7cf04d4ccd85594688ff37-5094x2865.jpg"
                },
                    "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "750",
                    "priceCurrency": "PLN",
                    "unitCode": "DAY"
                }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                    "@type": "Car",
                    "name": "Audi S3",
                    "manufacturer": "Audi",
                    "vehicleConfiguration": "Sedan",
                    "image": "https://cdn.sanity.io/images/pfrvgfvt/production/a1be0ce2815a83982448f3d76cb7ade1700cd917-5996x3373.jpg"
                },
                    "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "550",
                    "priceCurrency": "PLN",
                    "unitCode": "DAY"
                }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                    "@type": "Car",
                    "name": "Volkswagen Golf 8R",
                    "manufacturer": "Volkswagen",
                    "vehicleConfiguration": "Hot-hatch",
                    "image": "https://cdn.sanity.io/images/pfrvgfvt/production/6f68c142f51afea4745f8f21d80e30b809754ebe-5908x3323.jpg"
                },
                    "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "650",
                    "priceCurrency": "PLN",
                    "unitCode": "DAY"
                }
                }
                    ]
                },
                    "potentialAction": {
                    "@type": "RentAction",
                    "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.rexcars.pl/?reserve=true",
                    "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                    ]
                }
                },
                    "paymentAccepted": [
                    "Cash",
                    "Credit Card",
                    "Debit Card",
                    "Bank Transfer"
                    ],
                    "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "reviewCount": "20",
                    "bestRating": "5",
                    "worstRating": "5"
                },
                    "review": [
                {
                    "@type": "Review",
                    "author": {
                    "@type": "Person",
                    "name": "Łukasz Kula"
                },
                    "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                    "reviewBody": "Zdecydowanie polecam. Kontakt z właścicielem był na najwyższym poziomie. Wynająłem M2, które prezentuje się niesamowicie. Jazda nim dostarcza wielu emocji."
                },
                {
                    "@type": "Review",
                    "author": {
                    "@type": "Person",
                    "name": "Bartek Szaruch"
                },
                    "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                    "reviewBody": "Polecam jak najbardziej, wynajmujący dobry kontakt, żadnych problemów i wymyśleń, przy zwrocie wszystko co w umowie się zgadza, fajne samochody… wynajmowałem 8R jak najbardziej polecam 😃"
                },
                {
                    "@type": "Review",
                    "author": {
                    "@type": "Person",
                    "name": "Oliwia Dulęba"
                },
                    "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                    "reviewBody": "M2 polecam gorąco, właściciel sympatyczny, dobry kontakt przy załatwianiu wszystkich formalności, samochód czysty i zadbany 🔥"
                },
                {
                    "@type": "Review",
                    "author": {
                    "@type": "Person",
                    "name": "Ala"
                },
                    "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                    "reviewBody": "Mielismy z chłopakiem M2 na weekend, to autko to totalna petarda i robi robote. Właściciel bardzo miły i kontaktowy. Polecam ☺️"
                },
                {
                    "@type": "Review",
                    "author": {
                    "@type": "Person",
                    "name": "Dominika"
                },
                    "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                },
                    "reviewBody": "Wypożyczalnia świetna i fachowa obsługa. Auta wysokiej klasy, czyste zadbane. Polecam!!"
                }
                    ]
                }
                }
            </Script>
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
