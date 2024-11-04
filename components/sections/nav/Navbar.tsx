import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import NavbarItemList from './NavbarItemList';
import Modal from '@/components/ui/modal/Modal';
import MobileNavbarItemList from './MobileNavbarItemList';
import { Suspense } from 'react';
import { cn } from '@/lib/utils';

export default function Navbar() {
    return (
        <nav className={cn(
            "flex flex-row items-center justify-between",
            "py-0 px-[5%] sm:px-[10%]", // Responsive padding
            "w-full mx-auto bg-black",
            "sticky top-0 z-40", // Using custom utility
            "transition-colors duration-200"
        )}>
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
            <Suspense fallback={null}>
                <Modal />
            </Suspense>
        </nav>
    );
}
