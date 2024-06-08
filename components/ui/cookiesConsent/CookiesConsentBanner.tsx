'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CookiesConsentBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookiesConsent');

        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        localStorage.setItem("cookiesConsent", "true");
        setShowBanner(false);
    };

    const handleRejectCookies = () => {
        localStorage.setItem("cookiesConsent", "false");
        setShowBanner(false);
    };

    return (
        showBanner && (
            <div className='flex flex-col fixed bottom-0 left-0 w-full rounded-3xl bg-neutral-800 '>
                <h2 className='text-blue-primary font-semibold md:text-3xl md:text-left text-center text-2xl md:pl-12 pt-4'>
                    Dbamy o twoją prywatność
                </h2>
                <p className='text-center pb-2 pt-4 px-8 text-base justify-center text-neutral-200'>
                    Korzystamy z plików Cookies, w celu zapewnienia naszym
                    użytkownikom najlepszych odczuć z korzystania z naszej
                    strony, oraz do analizy ruchu na naszej stronie. Klikając
                    przycisk &quot;Zgadzam się&quot;, zgadzasz się na gromadzenie przez
                    nas plików Cookies.
                </p>
                <Link href={'/polityka-prywatnosci'}>
                    <p className='text-center text-lg text-blue-primary'>
                        Polityka Prywatności
                    </p>
                </Link>

                <div className='flex md:flex-row flex-col w-full justify-center mb-4 pt-4'>
                    <button className='md:w-[180px] py-2 rounded-lg md:mb-0 mb-2 md:mx-0 mx-4 text-blue-primary border-2 border-blue-primary font-semibold text-xl'
                    onClick={handleRejectCookies}
                    >
                        Nie zgadzam się
                    </button>

                    <button className='md:w-[180px] py-2 rounded-lg text-black md:ml-2 md:mx-0 mx-4 bg-blue-primary font-semibold text-xl'
                    onClick={handleAcceptCookies}
                    >
                        Zgadzam się
                    </button>
                </div>
            </div>
        )
    );
}
