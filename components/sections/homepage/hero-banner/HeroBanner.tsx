"use client"

import Button from '@/components/ui/Button';
import Image from 'next/image';
import TypewriterText from './TypewriterText';
import InstagramIcon from '@/components/icons/InstagramIcon';
import TiktokIcon from '@/components/icons/TiktokIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import { InView } from 'react-intersection-observer';
import { useIsElementOutOfView } from '@/context/IsElementOutOfViewContext';

export default function HeroBanner() {
    const { setIsElementOutOfView } = useIsElementOutOfView();

    return (
        <article className='flex mx-0 w-full place-content-center justify-center relative overflow-hidden'>
            <figure className='w-full max-h-[92vh]'>
                <Image
                    src={'/back-of-a-grey-sports-car-with-red-detail.jpg'}
                    alt='Sports car image'
                    priority={true}
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='w-full max-h-[92vh] object-cover opacity-50'
                />
            </figure>
            <div className='flex flex-col absolute inset-0 bg-gradient-to-b from-transparent to-black from-20%'>
                <div className='flex flex-row bg-transparent justify-center items-center w-full mt-36 mb-5'>
                    <h1 className='text-6xl text-neutral-200'>Poczuj</h1>
                    <TypewriterText strings={['Moc', 'Styl', 'Adrenalinę']} />
                </div>
                <div className='flex flex-col max-w-[50%] mx-auto items-center justify-center'>
                    <span className='text-xl text-neutral-200 text-center mb-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis perferendis, dolores ducimus obcaecati eaque
                        quod! Consequuntur impedit quae tenetur consectetur!
                    </span>
                    <div className='flex flex-row items-center justify-between mb-8 w-[20%]'>
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
                    <InView
                        as='div'
                        onChange={(inView) => setIsElementOutOfView(!inView)}
                        threshold={0.99}
                    >
                        <Button
                            value='Zarezerwuj'
                            href='/zarezerwuj'
                            styles='py-2 px-14 text-2xl'
                        />
                    </InView>
                </div>
            </div>
        </article>
    );
}
