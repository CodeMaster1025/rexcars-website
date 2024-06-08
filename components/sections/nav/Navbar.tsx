import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import NavbarItemList from './NavbarItemList';
import Modal from '@/components/ui/modal/Modal';
import MobileNavbarItemList from './MobileNavbarItemList';
import { Suspense } from 'react';

export default function Navbar() {
    return (
        <nav className='flex flex-row items-center justify-between py-0 px-[10%] w-full mx-auto bg-black sticky top-0 z-40'>
            <Link href={'/'}>
                <Image
                    src={'/REX_CARS_LOGO-BIALEpoziom_beztla.png'}
                    alt='RexCars Logo'
                    style={{
                        width: "auto"
                    }}
                    width={150}
                    height={48}
                    priority={true}
                />
            </Link>
            <NavbarItemList />
            <MobileNavbarItemList />
            <Suspense>
                <Modal />
            </Suspense>
        </nav>
    );
}
