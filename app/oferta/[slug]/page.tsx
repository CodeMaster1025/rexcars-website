import CarDescriptionSection from '@/components/sections/oferta/car-description/CarDescriptionSection';
import CarSpecyficationSection from '@/components/sections/oferta/car-specyfication/CarSpecyficationSection';
import FAQSection from '@/components/sections/oferta/faq-section/FAQSection';
import ImagesGallery from '@/components/sections/oferta/image-gallery/ImagesGallery';
import PriceChart from '@/components/sections/oferta/price-chart/PriceChart';
import { fetchPageHeaderPayload, fetchPriceChartData, fetchSpecyficationCardData, fetchPageContentData, fetchPageFAQData, fetchPageImagesData, fetchAllPageSlugs, fetchMetadataPayload } from '@/data/fetchPagePayload';
import { ICarDescriptionData } from '@/types/pagePayload';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 3600 // revalidate at most every hour

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const data = await fetchMetadataPayload(params.slug);

    if (!data) notFound();

    const metadata: Metadata = {
        title: `Wynajem ${data.carMake} ${data.carModel}`,
        description: `${data.carMake} ${data.carModel} na wynajem w całej Polsce. Możliwość dowozu samochodu do klienta. Spełnij swoje motoryzacyjne marzenia już dziś i wynajmij sportowy samochód.`,
        robots: "index, follow",
        openGraph: {
            title: `${data.carMake} ${data.carModel} dostępny na wynajem | Wypożyczalnia samochodów sportowych RexCars`,
            description: `Samochód sportowy ${data.carMake} ${data.carModel} na wynajem. Dowóz auta na całą Polskę.`,
            type: "website",
            siteName: `Wynajem ${data.carMake} ${data.carModel} | Wypożyczalnia samochodów sportowych RexCars`,
            locale: "pl/PL",
            images: [
                {
                    url: `${data.images.url}?h=450`,
                    width: 800,
                    height: 450,
                    alt: `${data.carMake} ${data.carModel} na wynajem`
                },
                {
                    url: `${data.images.url}?h=1080`,
                    width: 1920,
                    height: 1080,
                    alt: `${data.carMake} ${data.carModel} na wynajem`
                }
            ]
        }
    };

    return metadata;
}

export default async function CarPage({ params }: { params: { slug: string } }) {
    const [headerData, priceChartData, technicalSpecData, pageDescriptionData, faqSectionData, imagesData] = await Promise.all([
        fetchPageHeaderPayload(params.slug),
        fetchPriceChartData(params.slug),
        fetchSpecyficationCardData(params.slug),
        fetchPageContentData(params.slug),
        fetchPageFAQData(),
        fetchPageImagesData(params.slug),
    ]);

    if (!headerData || !priceChartData) notFound();

    const pageDescriptionPayload: ICarDescriptionData = {
        bottomContent: pageDescriptionData,
        header: headerData
    };

    return (
        <>
            <header className='flex flex-col md:mt-[4%] md:mb-[2%] my-[10%]'>
                <h1 className='text-neutral-200 md:text-5xl text-3xl text-center font-semibold w-full'>
                    Wynajem {headerData.carMake} <span className='text-blue-primary'>{headerData.carModel}</span>
                </h1>
            </header>

            <main className='flex flex-col md:w-[80%] w-[90%] mx-auto'>
                <article className='flex lg:flex-row flex-col'>
                    <section className='flex lg:basis-9/12 mb-10 md:mb-0 bg-neutral-900 rounded-lg px-2'>
                        <ImagesGallery images={imagesData}/>
                    </section>
                    <PriceChart entries={priceChartData}/>
                </article>

                <CarSpecyficationSection technicalSpec={technicalSpecData}/>

                <CarDescriptionSection { ...pageDescriptionPayload }/>

                <FAQSection entries={faqSectionData}/>
            </main>
        </>
    );
}


export async function generateStaticParams() {
    // Fetch the slugs for all the pages
    const slugs = await fetchAllPageSlugs();

    // Generate the static params for each slug
    const staticParams = slugs.map((slug) => ({
        params: { slug },
    }));

    return staticParams;
}