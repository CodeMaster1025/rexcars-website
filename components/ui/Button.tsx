import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

type buttonProps = {
    value: string;
    href: string;
    styles?: string;
};

export default function Button({ value, href, styles }: buttonProps) {
    // Check if the component needs additional styling
    const stylesToAppend = styles ? ' ' + styles : '';

    return (
        <Link href={href}>
            <button
                className={
                    'flex flex-row group justify-center items-center font-semibold text-slate-800 bg-blue-primary shadow-lg rounded-lg ease-in-out duration-300 hover:scale-90 active:scale-[0.8]' +
                    stylesToAppend
                }
            >
                {value}

                <ArrowLongRightIcon className='size-6 ml-3 stroke-2 ease-in-out duration-300 translate-x-1 group-hover:rotate-[-45deg]' />
            </button>
        </Link>
    );
}
