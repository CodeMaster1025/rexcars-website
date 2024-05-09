import { getCurrentYear } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
    const copyright = String.fromCodePoint(0x00a9);
    const year = getCurrentYear();
    return (
        <footer className='flex flex-row justify-between mt-[8%] text-neutral-400 text-md font-light max-w-[90%] mx-auto py-3 antialiased'>
            <span>
                {copyright} {year} RexCars | Wszystkie prawa zastrzeżone.
            </span>
            <Link className="hover:text-blue-primary ease-in-out duration-300" href="/polityka-prywatnosci">Polityka Prywatności</Link>
            <Link className="hover:text-blue-primary ease-in-out duration-300" href="/regulamin">Regulamin</Link>
            <Link className="hover:text-blue-primary ease-in-out duration-300" href="/tabela-oplat">Opłaty</Link>
            <span className='flex flex-row'>
                Coded with ❤️ by{' '}
                <p className='font-medium text-blue-500 ps-1'> {"<"}CloudBurst {"/>"}</p>
            </span>
        </footer>
    );
}
