'use client';

import { useIsElementOutOfView } from "@/context/IsElementOutOfViewContext";
import NavbarItem from "./NavbarItem";
import NavbarDivider from "./NavbarDivider";
import OutlineButton from "@/components/ui/OutlineButton";

export default function NavbarItemList() {
    const DIVIDER_MARGIN = 'mx-3';
    const { isElementOutOfView } = useIsElementOutOfView();
    
    return (
        <ul className='flex flex-row items-center text-blue-500 py-2 transition-all ease-in-out duration-400'>
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
                styles={isElementOutOfView === true ? "mr-6" : ""}
            />
            {isElementOutOfView && (
                <li>
                    <OutlineButton
                        value='Zarezerwuj'
                        href='/zarezerwuj'
                        styles='py-1 mb-1 px-6 transition-opacity duration-400 ease-in-out opacity-100 animate-fadeIn'
                    />
                </li>
            )}
        </ul>
    );
}
