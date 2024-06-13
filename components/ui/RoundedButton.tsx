import Link from "next/link";

type IRoundedButton = {
    href: string;
    value: string;
    styles?: string;
};

export default function RoundedButton({href, value, styles}: IRoundedButton) {
    return (
    <Link href={href} className="justify-center mx-auto mt-10">
        <button className={"py-3 px-6 bg-blue-primary rounded-[26px] text-center font-semibold text-black text-base justify-center items-center hover:scale-110 active:scale-95 ease-in-out duration-300 " + styles}>
            {value}
        </button>
    </Link>
    );
}