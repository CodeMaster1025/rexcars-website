import AboutUs from "@/components/sections/homepage/about-us/AboutUs";
import HeroBanner from "@/components/sections/homepage/hero-banner/HeroBanner";
import OurCarsYourExperiences from "@/components/sections/homepage/our-cars-your-experiences/OurCarsYourExperiences";
import WhyUs from "@/components/sections/homepage/why-us/WhyUs";
import YourRaceBeginsNow from "@/components/sections/homepage/your-race-begins-now/YourRaceBeginsNow";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wypożyczalnia samochodów sportowych | RexCars",
    description: "Wypożyczalnia samochodów sportowych z dowozem na całą Polskę. Szeroka gama dostępnych aut sportowych na wynajem. Spełnij swoje motoryzacyjne marzenia już dziś!",
    robots: "index, follow",
    openGraph: {
        title: "Wypożyczalnia samochodów sportowych | RexCars",
        description: "Wypożyczalnia samochodów sportowych z dowozem na całą Polskę. Szeroka gama dostępnych aut sportowych na wynajem. Spełnij swoje motoryzacyjne marzenia już dziś!",
        type: "website",
        siteName: "Wypożyczalnia samochodów sportowych | RexCars",
        locale: "pl/PL",
        images: [
            {
                url: "https://cdn.sanity.io/images/pfrvgfvt/production/f5d944de5a4800c6a7b69848e7a9f8c04b4ac9c9-5732x3224.jpg?h=576",
                width: 1024,
                height: 576,
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
