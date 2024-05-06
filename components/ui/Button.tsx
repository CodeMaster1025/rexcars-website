import Link from 'next/link';
import { redirect } from 'next/navigation';

type buttonProps = {
    value: string;
    href: string;
};

export default function Button({ value, href }: buttonProps) {
    return (
        <Link href={href}>
            <button className='py-2 px-14 text-2xl font-semibold text-slate-800 bg-gradient-to-r from-blue-primary to-blue-secondary shadow-lg rounded-lg ease-in-out duration-300 hover:scale-90'>
                {value}
            </button>
        </Link>
    );
}
