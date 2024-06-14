import HowItWorks from "@/components/sections/voucher/HowItWorks";
import VoucherHeader from "@/components/sections/voucher/VoucherHeader";
import WhatOurCustomersThink from "@/components/sections/voucher/WhatOurCustomersThink";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kup voucher",
    description: "Kup bon podarunkowy na wypożyczenie samochodu sportowego. Podaruj wyjątkowy prezent swoim bliskim!",
    robots: "index, follow",
    openGraph: {
        title: "Voucher | RexCars",
        description: "Kup bon podarunkowy na wypożyczenie samochodu sportowego. Podaruj wyjątkowy prezent swoim bliskim!",
        type: "website",
        siteName: "Wypożyczalnia samochodów sportowych | RexCars",
        locale: "pl/PL"
    }
};

export default function VoucherPage() {
    return (
        <article className='flex flex-col items-center min-h-screen w-full mx-auto bg-gradient-to-b from-[#182b3a10] via-[#0c659ccf] via-50% to-black  to-95%'>
            <VoucherHeader />
            <HowItWorks />
            <WhatOurCustomersThink />
        </article>
    );
}
