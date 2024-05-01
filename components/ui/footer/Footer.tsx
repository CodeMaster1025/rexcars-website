import { getCurrentYear } from "@/lib/utils";

export default function Footer() {
    const copyright = String.fromCodePoint(0x00a9);
    const year = getCurrentYear();
    return (
        <footer className='flex flex-row justify-between text-neutral-400 text-sm font-light max-w-[1140px] mx-auto py-3 antialiased'>
            <span>
                {copyright} {year} RexCars | Wszystkie prawa zastrzeżone.
            </span>
            <span className='flex flex-row'>
                Coded with ❤️ by{' '}
                <p className='font-medium text-blue-500 ps-1'> {"<"}CloudBurst {"/>"}</p>
            </span>
        </footer>
    );
}
