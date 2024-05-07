import '@/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import NavbarItemList from './NavbarItemList';

export default function Navbar() {
    return (
        <nav className='flex flex-row items-center justify-between py-0 px-[10%] w-full mx-auto bg-black md:sticky md:top-0 z-50'>
            <Link href={'/'}>
                <Image
                    src={'/REX_CARS_LOGO-BIALEpoziom_beztla.png'}
                    alt='RexCars Logo'
                    width={200}
                    height={48}
                    priority={true}
                />
            </Link>
            <NavbarItemList />
        </nav>
    );
}
