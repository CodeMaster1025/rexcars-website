import Button from '@/components/ui/Button';
import Image from 'next/image';
import TypewriterText from './TypewriterText';

export default function HeroBanner() {
    return (
        <section className='flex mx-0 w-full place-content-center justify-center relative overflow-hidden'>
            <Image
                src={'/back-of-a-grey-sports-car-with-red-detail.jpg'}
                alt='Sports car image'
                priority={true}
                width={0}
                height={0}
                sizes='100vw'
                className='w-full max-h-[92vh] object-cover opacity-50'
            />
            <div className='flex flex-col absolute inset-0 bg-gradient-to-b from-transparent to-black from-20%'>
                <div className='flex flex-row bg-transparent justify-center items-center w-full mt-36 mb-5'>
                    <h1 className='text-5xl text-neutral-200'>Poczuj</h1>
                    <TypewriterText strings={['Moc', 'Styl', 'Adrenalinę']} />
                </div>
                <div className='flex flex-col max-w-[50%] mx-auto items-center justify-center'>
                    <span className='text-lg text-neutral-200 text-center mb-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis perferendis, dolores ducimus obcaecati eaque
                        quod! Consequuntur impedit quae tenetur consectetur!
                    </span>
                    <Button
                        value='Zarezerwuj'
                        href='/zarezerwuj'
                    />
                </div>
            </div>
        </section>
    );
}
