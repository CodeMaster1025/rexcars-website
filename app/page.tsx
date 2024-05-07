import AboutUs from "@/components/sections/homepage/about-us/AboutUs";
import HeroBanner from "@/components/sections/homepage/hero-banner/HeroBanner";
import WhyUs from "@/components/sections/homepage/why-us/WhyUs";

export default function Home() {
    return (
        <>
            <HeroBanner />
            <WhyUs />
            <AboutUs />
        </>
    );
}
