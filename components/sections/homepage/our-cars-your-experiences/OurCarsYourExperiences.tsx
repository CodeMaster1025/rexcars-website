"use client";

import Image from 'next/image';
import CarSpecyficationCard, {
    carSpecyficationIcon,
} from './CarSpecyficationCard';
import CarSpecyficationCardWrapper from './CarSpecyficationCardWrapper';

export default function OurCarsYourExperiences() {
    return (
        <article className='flex flex-col w-[80%] mx-auto mt-[8%]'>
            <h2 className='text-neutral-200 text-5xl text-center'>
                Nasze auta -{' '}
                <span className='text-blue-primary font-semibold'>
                    Twoje przeżycia
                </span>
            </h2>
            <section className='flex flex-col mt-10 bg-neutral-950 rounded-md items-center transition-all ease-in-out duration-300'>
                <h3 className='text-center text-4xl text-neutral-400 my-6'>
                    Volkswagen{' '}
                    <span className='text-neutral-200 font-semibold'>GOLF</span>{' '}
                    <span className='text-blue-secondary font-semibold'>
                        8R
                    </span>
                </h3>
                <Image
                    className='w-[80%] opacity-60 rounded-t-lg'
                    src={'/golf-8-r.jpg'}
                    alt='An image of Golf 8R available for rent'
                    width={800}
                    height={500}
                />
                <CarSpecyficationCardWrapper>
                    <CarSpecyficationCard
                        iconType={carSpecyficationIcon.ENGINE}
                        heading='2.0l R4 Turbo'
                        secondaryText='Zmodyfikowany układ wydechowy'
                    />
                    <CarSpecyficationCard
                        iconType={carSpecyficationIcon.TRANSMISSION}
                        heading='7-biegowa dwusprzęgłowa'
                        secondaryText='DSG'
                    />
                    <CarSpecyficationCard
                        iconType={carSpecyficationIcon.DRIVETRAIN}
                        heading='4x4'
                        secondaryText='Sportowy mechanizm różnicowy'
                    />
                </CarSpecyficationCardWrapper>
            </section>
        </article>
    );
}
