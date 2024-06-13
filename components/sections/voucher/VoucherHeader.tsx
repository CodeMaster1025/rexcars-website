import RoundedButton from "@/components/ui/RoundedButton";
import Link from "next/link";

export default function VoucherHeader() {
    return (
        <header className='flex flex-col justify-center md:w-[80%] mx-auto md:mt-[100px] mt-[50px]'>
                <h1 className='md:text-[64px] text-4xl font-extralight tracking-tighter text-center text-white w-full'>
                    Voucher <span className='font-light'>Rex</span>
                    <span className='text-blue-primary font-light'>Cars</span>
                </h1>
                <h2 className='md:text-4xl text-xl font-extralight tracking-tighter text-center text-neutral-200 max-w-[90%] mx-auto md:mt-3'>
                    Jedyny prezent, którego <span className='text-blue-primary font-light'>potrzebujesz.</span>
                </h2>

                <p className="text-neutral-300 font-light md:text-lg text-xs text-center md:pt-4 pt-2 md:max-w-[75%] max-w-[85%] mx-auto mt-2 md:mt-0">
                    Kup voucher na samochód sportowy od RexCars i spełnij motoryzacyjne marzenia swoich bliskich już dziś!
                </p>

                <RoundedButton href="#howItWorks" value="JAK TO DZIAŁA?"/>
            </header>
    );
}


