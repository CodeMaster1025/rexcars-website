import AboutUs from "@/components/sections/homepage/about-us/AboutUs";
import HeroBanner from "@/components/sections/homepage/hero-banner/HeroBanner";
import OurCarsYourExperiences from "@/components/sections/homepage/our-cars-your-experiences/OurCarsYourExperiences";
import WhyUs from "@/components/sections/homepage/why-us/WhyUs";

export default function Home() {
    return (
        <>
            <HeroBanner />
            <WhyUs />
            <AboutUs />
            <OurCarsYourExperiences />
        </>
    );
}
