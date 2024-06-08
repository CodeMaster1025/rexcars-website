'use client';

import {
    DocumentTextIcon,
    EnvelopeIcon,
    PhoneIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import InstagramIcon from '@/components/icons/InstagramIcon';
import ModalContactMethodEntry from './ModalContactMethodEntry';
import ModalContactMethodEntryHeading from './ModalContactMethodEntryHeading';


export default function Modal() {
    const [domReady, setDomReady] = useState(false);
    const searchParams = useSearchParams();
    const reserve = searchParams.get('reserve');
    const pathname = usePathname();
    useEffect(() => setDomReady(true), []);

    return (
            (reserve === 'true' &&
            domReady) &&
            createPortal(
                <dialog
                    className='fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur drop-shadow-2xl flex justify-center items-center'>
                    
                    <div className='min-w-[60%] max-w-[95%] bg-neutral-800 flex flex-col rounded-2xl'>
                        <figure className='flex justify-end'>
                            <Link
                                href={pathname}
                                scroll={false}
                                className='flex pt-2 pr-2 cursor-pointer w-14 h-14 rounded border-none'
                            >
                                <XMarkIcon className='size-12 text-neutral-200 hover:text-blue-primary ease-in-out duration-300' />
                            </Link>
                        </figure>
                        <div className='flex flex-col px-5 pb-6'>
                            <h1 className='md:text-[64px] text-4xl text-blue-primary font-semibold text-center py-2 leading-none'>
                                Rezerwacja
                            </h1>
                            <p className='text-neutral-300 md:text-base text-sm font-normal text-center md:max-w-[55%] max-w-[90%] mx-auto leading-relaxed py-2'>
                                W celu zarezerwowania pojazdu, uprzejmie prosimy o
                                skontaktowanie się z nami za pomocą jednego z
                                poniższych środków komunikacji:
                            </p>


                            <ul className='md:w-[400px] w-[90%] mx-auto flex flex-col items-center pt-8'>

                                <ModalContactMethodEntry>
                                    <PhoneIcon className='size-12 text-blue-primary' />
                                    <Link href={'callto:+48 534 668 001'}>
                                        <ModalContactMethodEntryHeading value='+48 534 668 001'/>
                                    </Link>
                                </ModalContactMethodEntry>

                                <ModalContactMethodEntry>
                                    <EnvelopeIcon className='size-12 text-blue-primary' />
                                    <Link
                                        href={
                                            'mailto:rezerwacja@rexcars.pl?subject=Rezerwacja'
                                        }
                                    >
                                        <ModalContactMethodEntryHeading value='rezerwacja@rexcars.pl'/>
                                    </Link>
                                </ModalContactMethodEntry>

                                <ModalContactMethodEntry>
                                    <InstagramIcon
                                        width={48}
                                        height={48}
                                        color='blue-primary'
                                    />
                                    <Link
                                        href='https://www.instagram.com/rex_cars_wypozyczalnia'
                                        rel='noopener norefferer'
                                        target='_blank'
                                    >
                                        <ModalContactMethodEntryHeading value='@rex_cars_wypozyczalnia'/>
                                    </Link>
                                </ModalContactMethodEntry>

                                <ModalContactMethodEntry>
                                    <DocumentTextIcon className='size-12 text-blue-primary' />
                                    <Link href={'/kontakt'}>
                                        <ModalContactMethodEntryHeading value="Formularz kontaktowy"/>
                                    </Link>
                                </ModalContactMethodEntry>

                            </ul>

                        </div>
                    </div>
                </dialog>,
                document.getElementById('overlay') as Element
            )
    );
}
