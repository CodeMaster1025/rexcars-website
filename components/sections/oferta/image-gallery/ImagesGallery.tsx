'use client';

import { IImagesData } from '@/types/pagePayload';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Suspense, useCallback, useState } from 'react';
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import 'yet-another-react-lightbox/styles.css';

export default function ImagesGallery({ images }: { images: IImagesData }) {
    const emblaOptions = {
        loop: true,
    }

    const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions, [
        Autoplay({ playOnInit: true, delay: 3500, stopOnMouseEnter: true }),
    ]);
    
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);


    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const getCurrentIndex = useCallback(() => {
        if (emblaApi) return emblaApi.selectedScrollSnap();
    }, [emblaApi]);

    const emblaJumpToIndex = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index, true);
    }, [emblaApi])

    const imgSlides = images.images.map(({ url }) => {
        return {
            src: `${url}?h=1080`,
            alt: 'RexCars car available for rent image',
            width: 1920,
            height: 1080,
            srcSet: [
                { src: `${url}?h=230`, width: 410, height: 230 },
                { src: `${url}?h=350`, width: 620, height: 350 },
                { src: `${url}?h=550`, width: 980, height: 550 },
                { src: `${url}?h=750`, width: 1330, height: 750 },
                { src: `${url}?h=1080`, width: 1920, height: 1080 },
            ],
        };
    });

    return (
        <div className='relative flex items-center overflow-hidden min-h-full embla'>
            <div
                className='embla__viewport'
                ref={emblaRef}
            >
                <div className='flex embla__container rounded-lg'>
                    {images.images.map(({ key, url }, index) => {
                        return (
                                <Image
                                    src={`${url}?h=750`}
                                    width={1330}
                                    height={400}
                                    priority={index === 0 ? true : false}
                                    key={key}
                                    quality={100}
                                    alt='RexCars car available for rent image'
                                    className='embla__slide object-cover rounded-lg h-[180px] min-[370px]:h-[230px] min-[475px]:h-[270px] min-[555px]:h-[350px] md:h-[420px] lg:h-[450px] xl:h-[550px] 2xl:h-[700px]'
                                    sizes='(max-width: 1024px) 100vw, 67vw'
                                    // srcSet={`${url}?h=230 410w, ${url}?h=350 620w, ${url}?h=550 980w, ${url}?h=750 1330w`}
                                    onClick={() => {
                                        setIsLightboxOpen(true);
                                    }}
                                />
                        );
                    })}
                </div>
            </div>
            <div className='md:flex hidden absolute h-full left-0 items-center z-10'>
                <button
                    className='h-full bg-neutral-900/50 px-1'
                    onClick={scrollPrev}
                >
                    <ChevronLeftIcon className='text-blue-primary size-10 stroke-2 transition-transform ease-in-out duration-200 hover:scale-125 active:scale-95' />
                </button>
            </div>
            <div className='md:flex hidden absolute h-full right-0 items-center z-10'>
                <button
                    className='h-full bg-neutral-900/50 px-1'
                    onClick={scrollNext}
                >
                    <ChevronRightIcon className='text-blue-primary size-10 stroke-2 transition-transform ease-in-out duration-200 hover:scale-125 active:scale-95' />
                </button>
            </div>
            <Suspense>
            <Lightbox
                open={isLightboxOpen}
                index={getCurrentIndex()}
                close={() => setIsLightboxOpen(false)}
                slides={imgSlides}
                controller={{
                    closeOnPullDown: true,
                    closeOnBackdropClick: true,
                }}
                plugins={[Zoom]}
                zoom={{
                    doubleClickMaxStops: 1
                }}
                on={{
                    view: ({ index: currentIndex }) => {
                        emblaJumpToIndex(currentIndex);
                    },
                }}
                render={{
                    buttonZoom: () => null,
                    iconPrev: () => <ChevronLeftIcon className='text-blue-primary size-8 md:size-10 md:stroke-2 transition-all ease-in-out duration-300 hover:scale-125 active:scale-95' />,
                    iconNext: () => <ChevronRightIcon className='text-blue-primary size-8 md:size-10 md:stroke-2 transition-all ease-in-out duration-300 hover:scale-125 active:scale-95' />,
                    iconClose: () => <XMarkIcon className='text-blue-primary size-8 md:size-10 md:stroke-2 transition-all ease-in-out duration-300 hover:scale-125 active:scale-95' />,
                }}
            />
            </Suspense>
        </div>
    );
}
