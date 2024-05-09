import { getCurrentYear } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
    const copyright = String.fromCodePoint(0x00a9);
    const year = getCurrentYear();
    return (
        <footer className='flex md:flex-row flex-col md:justify-between justify-center mt-[8%] text-neutral-400 text-md font-light max-w-[90%] mx-auto py-3 antialiased'>
            <span className="md:text-left text-center">
                {copyright} {year} RexCars | Wszystkie prawa zastrzeżone.
            </span>
            <Link className="hover:text-blue-primary md:text-left text-center ease-in-out duration-300 md:py-0 py-1" href="/polityka-prywatnosci">Polityka Prywatności</Link>
            <Link className="hover:text-blue-primary md:text-left text-center ease-in-out duration-300 md:py-0 py-1" href="/regulamin">Regulamin</Link>
            <Link className="hover:text-blue-primary md:text-left text-center ease-in-out duration-300 md:py-0 py-1" href="/tabela-oplat">Opłaty</Link>
            <span className='flex flex-row md:py-0 py-1 md:text-left justify-center'>
                Coded with ❤️ by{' '}
                <p className='font-medium text-blue-500 ps-1'> {"<"}CloudBurst {"/>"}</p>
            </span>
        </footer>
    );
}
