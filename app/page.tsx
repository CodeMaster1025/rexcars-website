import AboutUs from "@/components/sections/homepage/about-us/AboutUs";
import HeroBanner from "@/components/sections/homepage/hero-banner/HeroBanner";
import OurCarsYourExperiences from "@/components/sections/homepage/our-cars-your-experiences/OurCarsYourExperiences";
import WhyUs from "@/components/sections/homepage/why-us/WhyUs";
import YourRaceBeginsNow from "@/components/sections/homepage/your-race-begins-now/YourRaceBeginsNow";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wypożyczalnia samochodów sportowych | RexCars",
    description: "Wypożyczalnia samochodów sportowych - ✓ dowóz na całą Polskę ✓ Wynajem bez kaucji ✓ Konkurencyjne ceny ✓ Wypożycz samochód sportowy już dziś!",
    robots: "index, follow",
    openGraph: {
        title: "Wypożyczalnia samochodów sportowych | RexCars",
        description: "Wypożyczalnia samochodów sportowych - ✓ dowóz na całą Polskę ✓ Wynajem bez kaucji ✓ Konkurencyjne ceny ✓ Wypożycz samochód sportowy już dziś!",
        type: "website",
        siteName: "Wypożyczalnia samochodów sportowych | RexCars",
        locale: "pl/PL",
        images: [
            {
                url: "https://cdn.sanity.io/images/pfrvgfvt/production/f5d944de5a4800c6a7b69848e7a9f8c04b4ac9c9-5732x3224.jpg?h=600",
                width: 800,
                height: 600,
                alt: "Samochody sportowe dostępne do wynajęcia w wypożyczalni RexCars",
            },
            {
                url: "https://cdn.sanity.io/images/pfrvgfvt/production/f5d944de5a4800c6a7b69848e7a9f8c04b4ac9c9-5732x3224.jpg?h=1080",
                width: 1920,
                height: 1080,
                alt: "Samochody sportowe dostępne do wynajęcia w wypożyczalni RexCars",
            },
        ],
    }

};

export default function Home() {
    return (
        <>
            <HeroBanner />
            <WhyUs />
            <AboutUs />
            <OurCarsYourExperiences />
            <YourRaceBeginsNow />
        </>
    );
}
