import Image from 'next/image';
import CarSpecyficationCardWrapper from './CarSpecyficationCardWrapper';
import CarSectionWrapper from './CarSectionWrapper';
import Link from 'next/link';

export default function OurCarsYourExperiences() {
    console.log(typeof window === 'undefined');
    return (
        <article className='flex flex-col md:w-[80%] w-[90%] mx-auto mt-[8%]' id='our-cars'>
            <h2 className='text-neutral-200 md:text-5xl text-2xl text-center'>
                Nasze auta -{' '}
                <span className='text-blue-primary font-semibold'>
                    Twoje przeżycia
                </span>
            </h2>
            {/* <section className='flex flex-col mt-10 bg-neutral-950 rounded-md items-center transition-all ease-in-out duration-300'> */}
            <CarSectionWrapper>
                <h3 className='text-center md:text-4xl text-2xl text-neutral-400 my-6'>
                    Volkswagen{' '}
                    <span className='text-neutral-200 font-semibold'>GOLF</span>{' '}
                    <span className='text-blue-primary font-semibold'>
                        8R
                    </span>
                </h3>
                <Link href={'/oferta/wynajem-golf-8-r'} className='md:w-[80%] w-full'>
                    <Image
                        className='opacity-60 rounded-t-lg w-full'
                        src={'/golf-8-r.jpg'}
                        alt='An image of Golf 8R available for rent'
                        width={800}
                        height={500}
                    />
                </Link>
                <CarSpecyficationCardWrapper />
            </CarSectionWrapper>
            {/* </section> */}
        </article>
    );
}
