import Link from "next/link"

export default function Header() {
    return (
        <div className="flex flex-col w-[80%] mx-auto justify-center md:pt-[5%] pt-[15%]">
            <h1 className=" md:text-[64px] text-4xl font-extralight tracking-tighter text-center text-white w-full">POROZMAWIAJMY.</h1>
            <p className="text-neutral-400 font-light md:text-base text-sm text-center md:pt-4 pt-2 md:max-w-[40%] max-w-[90%] mx-auto">Jeśli chcesz zarezewować jeden z naszych samochodów, lub uzyskać więcej informacji o usługach, które świadczymy, skontaktuj się z nami.</p>
            <Link href={"#contactForm"} className="flex justify-center mt-10">
                <button className="py-3 px-6 bg-blue-primary rounded-[26px] text-center font-semibold text-black text-base justify-center items-center hover:scale-110 ease-in-out duration-300">
                    SKONTAKTUJ SIĘ
                </button>
            </Link>
        </div>
    );
}