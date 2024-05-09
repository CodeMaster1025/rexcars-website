import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function AboutUs() {
    return (
        <article className='flex flex-col md:w-[80%] w-[90%] mx-auto mt-[8%]'>
            <h2 className='text-neutral-200 md:text-5xl text-2xl text-right md:mb-8 mb-4'>
                Firma prowadzona{' '}
                <span className='text-blue-primary font-semibold'>z Pasją</span>
            </h2>
            <section className='flex md:flex-row flex-col ease-in-out duration-300 bg-neutral-950 hover:bg-neutral-900 hover:scale-105 rounded-lg py-10 md:pl-16'>
                <figure className='md:w-full'>
                    <Image
                        className='rounded-xl opacity-70 mb-6 md:mb-0 mx-auto md:mx-0'
                        src={'/back-of-a-grey-sports-car-with-red-detail.jpg'}
                        alt='Sports car image'
                        height={500}
                        width={350}
                    />
                </figure>
                <div className='md:text-2xl text-xl text-neutral-200 text-center h-full my-auto justify-center items-center'>
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
                        href='/zarezerwuj'
                        styles='w-[85%] mx-auto md:text-2xl text-xl py-2'
                    />
                </div>
            </section>
        </article>
    );
}
