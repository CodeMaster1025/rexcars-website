import Image from 'next/image';
import TypewriterText from './TypewriterText';
import InstagramIcon from '@/components/icons/InstagramIcon';
import TiktokIcon from '@/components/icons/TiktokIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import { ButtonInView } from './ButtonInView';

export default function HeroBanner() {
    return (
        <article className='flex mx-0 w-full place-content-center justify-center relative overflow-hidden'>
            <figure className='w-full md:max-h-[92vh] h-full'>
                <Image
                    src={'/back-of-a-grey-sports-car-with-red-detail.jpg'}
                    alt='Sports car image'
                    priority={true}
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full md:max-h-[92vh] max-h-[100vh] object-cover opacity-50'
                />
            </figure>
            <div className='flex flex-col absolute inset-0 bg-gradient-to-b from-transparent to-black from-20%'>
                <div className='flex flex-row bg-transparent justify-center items-center w-full md:mt-36 mt-24 mb-5'>
                    <h1 className='text-3xl md:text-6xl text-neutral-200'>
                        Poczuj
                    </h1>
                    <TypewriterText strings={['Moc', 'Styl', 'Adrenalinę']} />
                </div>
                <section className='flex flex-col md:max-w-[50%] max-w-[80%] mx-auto items-center justify-center'>
                    <span className='md:text-lg text-md text-neutral-200 text-center mb-2'>
                        Każde z aut jest jedyne w swoim rodzaju. Mimo tego,
                        że producenci tych zabawek stanęli na wysokości zadania,
                        My poprawiamy fabrykę. Udoskonalamy je tak, aby nasze
                        samochody były unikatowe i dawały jeszcze więcej radości
                        z jazdy. Nie ma na co czekać, sam/a się przekonaj i już
                        dziś zarezerwuj najbliższy termin!
                    </span>
                    <div className='flex flex-row items-center justify-between mb-8 md:w-[20%] w-[40%]'>
                        <InstagramIcon
                            width={32}
                            height={32}
                        />
                        <TiktokIcon
                            width={32}
                            height={32}
                        />
                        <FacebookIcon
                            width={32}
                            height={32}
                        />
                    </div>
                    <ButtonInView />
                </section>
            </div>
        </article>
    );
}
