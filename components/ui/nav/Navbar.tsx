import '@/app/globals.css';
import Image from 'next/image';
import NavbarItem from './NavbarItem';
import NavbarDivider from './NavbarDivider';

export default function Navbar() {
    const DIVIDER_MARGIN = 'mx-3';

    return (
        <nav className='bg-black w-full md:sticky md:top-0 z-50'>
            <div className='flex flex-row items-center justify-between py-0 max-w-[1140px] mx-auto z-50'>
                <Image
                    src={'/REX_CARS_LOGO-BIALEpoziom_beztla.png'}
                    alt='RexCars Logo'
                    width={200}
                    height={48}
                    priority={true}
                />
                <ul className='flex flex-row items-center text-blue-500 py-2'>
                    <NavbarItem
                        value='Strona Główna'
                        url='/'
                    />
                    <NavbarDivider margin={DIVIDER_MARGIN} />
                    <NavbarItem
                        value='Samochody'
                        url='/oferta'
                    />
                    <NavbarDivider margin={DIVIDER_MARGIN} />
                    <NavbarItem
                        value='Voucher'
                        url='/voucher'
                    />
                    <NavbarDivider margin={DIVIDER_MARGIN} />
                    <NavbarItem
                        value='FAQ'
                        url='/faq'
                    />
                    <NavbarDivider margin={DIVIDER_MARGIN} />
                    <NavbarItem
                        value='Kontakt'
                        url='/kontakt'
                    />
                </ul>
            </div>
        </nav>
    );
}
