import Button from '@/components/ui/Button';
import { fetchAboutUsImage } from '@/data/fetchHomepagePayload';
import Image from 'next/image';

export default async function AboutUs() {
    const imageData = await fetchAboutUsImage();

    return (
        <article className='flex flex-col md:w-[80%] w-[90%] mx-auto mt-[8%]'>
            <h2 className='text-neutral-200 md:text-5xl text-2xl text-right md:mb-8 mb-6'>
                Firma prowadzona{' '}
                <span className='text-blue-primary font-semibold'>z Pasją</span>
            </h2>
            <section className='flex lg:flex-row flex-col ease-in-out duration-300 bg-neutral-950 hover:bg-neutral-900 hover:scale-105 rounded-lg py-10 lg:pl-16'>
                <figure className='flex md:w-full md:justify-center'>
                    <Image
                        className='rounded-xl mb-6 md:mb-0 mx-auto md:mx-0'
                        src={`${imageData?.aboutUs}?h=500&q=100`}
                        quality={100}
                        alt='Sports car image'
                        height={500}
                        width={400}
                    />
                </figure>
                <div className='xl:text-xl text-lg 2xl:text-2xl lg:pt-0 pt-6 text-neutral-200 text-center h-full my-auto justify-center items-center'>
                    <section className='w-[85%] mx-auto justify-center items-center mb-10'>
                        <span className='font-semibold'>Rex</span>
                        <span className='text-blue-primary font-semibold'>
                            Cars
                        </span>{' '}
                        to nie tylko wypożyczalnia aut sportowych oraz
                        luksusowych a coś więcej, to miejsce gdzie możesz
                        wynająć swój wymarzony samochód i przeżyć niezapomniane
                        chwile za jego kierownicą.{' '}
                        <span>
                            Nasze motto nie wzięło się znikąd:{' '}
                            <p className='py-4 font-semibold text-center'>
                                „Nasze auta,{' '}
                                <span className='text-blue-primary'>
                                    Twoje przeżycia
                                </span>
                                ”
                            </p>
                        </span>{' '}
                        Wiemy czego oczekują nasi klienci, dlatego nasze auta
                        zostały zmodyfikowane specjalnie dla was.
                    </section>
                    <Button
                        value='Zarezerwuj teraz'
                        href='?reserve=true'
                        styles='w-[85%] mx-auto md:text-2xl text-xl py-2'
                        scroll={false}
                    />
                </div>
            </section>
        </article>
    );
}
