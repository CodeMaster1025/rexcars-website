import Image from 'next/image';
import CarSpecyficationCardWrapper from './CarSpecyficationCardWrapper';
import { motion } from 'framer-motion';
import CarSectionWrapper from './CarSectionWrapper';
import Link from 'next/link';

export default function OurCarsYourExperiences() {
    console.log(typeof window === 'undefined');
    return (
        <article className='flex flex-col w-[80%] mx-auto mt-[8%]'>
            <h2 className='text-neutral-200 text-5xl text-center'>
                Nasze auta -{' '}
                <span className='text-blue-primary font-semibold'>
                    Twoje przeżycia
                </span>
            </h2>
            {/* <section className='flex flex-col mt-10 bg-neutral-950 rounded-md items-center transition-all ease-in-out duration-300'> */}
            <CarSectionWrapper>
                <h3 className='text-center text-4xl text-neutral-400 my-6'>
                    Volkswagen{' '}
                    <span className='text-neutral-200 font-semibold'>GOLF</span>{' '}
                    <span className='text-blue-secondary font-semibold'>
                        8R
                    </span>
                </h3>
                <Link href={'/oferta/wynajem-golf-8-r'} className='w-[80%]'>
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
