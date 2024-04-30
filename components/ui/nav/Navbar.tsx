import '@/app/globals.css';
import Image from 'next/image';
import NavbarItem from './NavbarItem';
import NavbarDivider from './NavbarDivider';

export default function Navbar() {
    const DIVIDER_MARGIN = 'mx-1';

    return (
        <nav className='flex flex-row items-center justify-between py-2 max-w-[1140px] mx-auto '>
            <Image
                src={'/REX_CARS_LOGO-BIALEpoziom_beztla.png'}
                alt='RexCars LOGO'
                width={200}
                height={48}
            />
            <ul className='flex flex-row items-center text-blue-500 py-2'>
                <NavbarItem
                    value='Strona Główna'
                    url=''
                />
                <NavbarDivider margin={DIVIDER_MARGIN} />
                <NavbarItem
                    value='Samochody'
                    url=''
                />
                <NavbarDivider margin={DIVIDER_MARGIN} />
                <NavbarItem
                    value='Voucher'
                    url=''
                />
                <NavbarDivider margin={DIVIDER_MARGIN} />
                <NavbarItem
                    value='FAQ'
                    url=''
                />
                <NavbarDivider margin={DIVIDER_MARGIN} />
                <NavbarItem
                    value='Kontakt'
                    url=''
                />
            </ul>
        </nav>
    );
}
