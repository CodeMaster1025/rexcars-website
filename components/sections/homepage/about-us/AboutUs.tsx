import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function AboutUs() {
    return (
        <article className='flex flex-col w-[80%] mx-auto mt-[8%]'>
            <h2 className='text-neutral-200 text-5xl text-right mb-8'>
                Firma prowadzona{' '}
                <span className='text-blue-primary font-semibold'>z Pasją</span>
            </h2>
            <section className='flex flex-row ease-in-out duration-300 bg-neutral-950 hover:bg-neutral-900 hover:scale-105 rounded-lg py-10 pl-16'>
                <figure className='md:w-full'>
                    <Image
                        className='rounded-xl opacity-70'
                        src={'/back-of-a-grey-sports-car-with-red-detail.jpg'}
                        alt='Sports car image'
                        height={500}
                        width={350}
                    />
                </figure>
                <div className='text-2xl text-neutral-200 text-center h-full my-auto justify-center items-center'>
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
                        styles='w-[85%] mx-auto text-2xl py-2'
                    />
                </div>
            </section>
        </article>
    );
}
