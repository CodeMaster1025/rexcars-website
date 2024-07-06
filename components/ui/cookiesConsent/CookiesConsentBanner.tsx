'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google';

export default function CookiesConsentBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookiesConsent');

        if (!consent) {
            setShowBanner(true);
            sendGAEvent("consent", "default", {
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500,
            })
        }

        else {
            if (consent === "true") {
                sendGAEvent("consent", "update", {
                    ad_user_data: 'granted',
                    ad_personalization: 'granted',
                    ad_storage: 'granted',
                    analytics_storage: 'granted'
                });
            } else {
                sendGAEvent("consent", "update", {
                    ad_user_data: 'denied',
                    ad_personalization: "denied",
                    ad_storage: "denied",
                    analytics_storage: "denied"
                });
            }
        }
    }, []);

    const handleAcceptCookies = () => {
        localStorage.setItem("cookiesConsent", "true");

        sendGAEvent("consent", "update", {
            ad_user_data: 'granted',
            ad_personalization: 'granted',
            ad_storage: 'granted',
            analytics_storage: 'granted'
        });

        setShowBanner(false);
    };

    const handleRejectCookies = () => {
        localStorage.setItem("cookiesConsent", "false");

        sendGAEvent("consent", "update", {
            ad_user_data: 'denied',
            ad_personalization: "denied",
            ad_storage: "denied",
            analytics_storage: "denied"
        });

        setShowBanner(false);
    };

    return (
        showBanner && (
            <div className='flex flex-col fixed bottom-0 left-0 w-full rounded-3xl bg-neutral-800 '>
                <h2 className='text-blue-primary font-semibold md:text-3xl md:text-left text-center text-2xl md:pl-12 pt-4'>
                    Dbamy o twoją prywatność
                </h2>
                <p className='text-center pb-2 pt-4 px-8 text-base justify-center text-neutral-200'>
                Używamy plików cookies, aby zapewnić naszym użytkownikom jak najlepsze doświadczenia z korzystania z naszej strony oraz do analizy ruchu na niej. Klikając przycisk &quot;Zgadzam się&quot;, wyrażasz zgodę na zbieranie przez nas plików cookies.
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
