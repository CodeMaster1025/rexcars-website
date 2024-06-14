import CompanyInfo from "@/components/sections/kontakt/CompanyInfo";
import ContactForm from "@/components/sections/kontakt/ContactForm";
import ContactMethods from "@/components/sections/kontakt/ContactMethods";
import Header from "@/components/sections/kontakt/Header";
import { Metadata } from "next";
import { Toaster } from 'sonner';

export const metadata: Metadata = {
    title: "Kontakt",
    description: "Skontaktuj się z nami już dziś! Wypełnij formularz kontaktowy, skorzystaj z naszych danych kontaktowych lub odwiedź nas osobiście.",
    robots: "index, follow",
    openGraph: {
        title: "Kontakt | RexCars",
        description: "Skontaktuj się z nami już dziś! Wypełnij formularz kontaktowy, skorzystaj z naszych danych kontaktowych lub odwiedź nas osobiście.",
        type: "website",
        siteName: "Wypożyczalnia samochodów sportowych | RexCars",
        locale: "pl/PL"
    
    }
};

export default function Page() {
    return (
        <article className="flex flex-col min-h-screen w-full mx-auto bg-gradient-to-b from-[#182b3a10] via-[#0c659ccf] via-50% to-black  to-95%">
            <Toaster position="bottom-right" richColors/>
            <Header />
            <div id="contactForm"/>
            <ContactForm />
            <ContactMethods />
            <CompanyInfo />
        </article>
    );
}