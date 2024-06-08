import CarsSection from './CarSectionWrapper';

export default function OurCarsYourExperiences() {
    console.log(typeof window === 'undefined');
    return (
        <article
            className='flex flex-col md:w-[80%] w-[90%] mx-auto mt-[8%]'
            id='our-cars'
        >
            <h2 className='text-neutral-200 md:text-5xl text-2xl text-center'>
                Nasze auta -{' '}
                <span className='text-blue-primary font-semibold'>
                    Twoje przeżycia
                </span>
            </h2>
                <CarsSection />
        </article>
    );
}
