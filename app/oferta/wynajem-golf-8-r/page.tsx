import CarDescriptionSection from '@/components/sections/oferta/wynajem-golf-8-r/car-description/CarDescriptionSection';
import CarSpecyficationSection from '@/components/sections/oferta/wynajem-golf-8-r/car-specyfication/CarSpecyficationSection';
import FAQSection from '@/components/sections/oferta/wynajem-golf-8-r/faq-section/FAQSection';
import PriceChart from '@/components/sections/oferta/wynajem-golf-8-r/price-chart/PriceChart';
import Head from 'next/head';

export default function PageGolf8R() {
    return (
        <>
            <Head>
                {/* Standard tags */}
                <title key={"pageTitle"}>Wynajem Volkswagen Golf 8R | RexCars</title>
                <meta
                    key={"descriptionTag"}
                    name='description'
                    content='Volkswagen Golf 8R na wynajem w całej Polsce. Możliwość dowozu samochodu do klienta. Spełnij swoje motoryzacyjne marzenia już dziś i wynajmij sportowy samochód.'
                />

                <meta
                    key={"viewportTag"}
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />

                {/* Robots */}
                <meta
                    key={"Robots"}
                    name='robots'
                    content='index, follow'
                />

                {/* OpenGraph */}
                <meta
                    key={"ogTitle"}
                    name='og:title'
                    content='Volkswagen Golf 8R dostępny na wynajem | Wypożyczalnia samochów sportowych RexCars'
                />
                <meta
                    key={"ogDescription"}
                    name='og:description'
                    content='Samochód sportowy Volkswagen Golf 8R na wynajem. Dowóz auta na całą Polskę.'
                />
                <meta
                    key={"ogType"}
                    name='og:type'
                    content='website'
                />
                <meta
                    key={"ogSiteName"}
                    name='og:site_name'
                    content='Wypożyczalnia samochodów sportowych | RexCars'
                />
                <meta
                    key={"ogLocale"}
                    name='og:locale'
                    content='pl/PL'
                />
            </Head>

            <header className='flex flex-col md:mt-[4%] md:mb-[2%] my-[10%]'>
                <h1 className='text-neutral-200 md:text-5xl text-3xl text-center font-semibold w-full'>
                    Wynajem <span className='text-neutral-400'>Volkswagen</span>{' '}
                    Golf <span className='text-blue-primary'>8R</span>
                </h1>
            </header>

            <main className='flex flex-col md:w-[80%] w-[90%] mx-auto'>
                <article className='flex md:flex-row flex-col'>
                    <section className='flex lg:basis-9/12 md:basis-8/12 bg-neutral-900 rounded-lg px-2'>
                        <h1>Im here</h1>
                    </section>
                    <PriceChart />
                </article>

                <CarSpecyficationSection />

                <CarDescriptionSection />

                <FAQSection />
            </main>
        </>
    );
}
