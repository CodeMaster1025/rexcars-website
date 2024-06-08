import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

type buttonProps = {
    value: string;
    href: string;
    styles?: string;
    scroll?: boolean;
};

export default function Button({ value, href, styles, scroll }: buttonProps) {
    // Check if the component needs additional styling
    const stylesToAppend = styles ? ' ' + styles : '';

    return (
        <Link href={href} scroll={scroll}>
            <button
                className={
                    'flex flex-row group justify-center items-center font-semibold text-blue-primary border-2 border-blue-primary ho bg-transparent shadow-lg rounded-lg hover:bg-blue-primary hover:text-slate-800 ease-in-out duration-300' +
                    stylesToAppend
                }
            >
                {value}

                <ArrowLongRightIcon className='size-6 ml-3 stroke-2 text-blue-primary ease-in-out duration-300 translate-x-1 group-hover:text-slate-800 group-hover:rotate-[-45deg]' />
            </button>
        </Link>
    );
}
