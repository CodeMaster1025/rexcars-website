import { getCurrentYear } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const copyright = String.fromCodePoint(0x00a9);
    const year = getCurrentYear();
    return (
        <footer className='flex lg:flex-row flex-col md:justify-between justify-center items-center mt-[8%] text-neutral-400 text-md font-light max-w-[90%] mx-auto py-3 antialiased'>
            <span className="md:text-left text-center">
                {copyright} {year} RexCars | Wszystkie prawa zastrzeżone.
            </span>

            <Link className="hover:text-blue-primary md:text-left text-center ease-in-out duration-300 md:py-0 py-1" href="/polityka-prywatnosci">Polityka Prywatności</Link>
            <div className="flex md:flex-row flex-col justify-between items-center">
                <span className='flex flex-row md:py-0 py-1 md:text-left justify-center'>
                    Coded with ❤️ by{' '}
                </span>
                <Link href={"https://www.instagram.com/cloudburst.agency/"} rel='noopener norefferer'>
                    <Image src={"cloudburst_logo.svg"} alt={"Logo firmy cloudburst"} width={140} height={0} style={{
                        height: "auto",
                    }} className={"hover:cursor-pointer"}/>
                </Link>
            </div>
        </footer>
    );  
}
