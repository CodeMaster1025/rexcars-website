'use client';

import { InView } from 'react-intersection-observer';
import { useIsElementOutOfView } from '@/context/IsElementOutOfViewContext';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function ButtonInView() {
    const { setIsElementOutOfView } = useIsElementOutOfView();

    return (
        <InView
            as='div'
            onChange={(inView) => setIsElementOutOfView(!inView)}
            threshold={0.99}
        >
            <Link href={"#our-cars"}>
                <button
                    className={
                        'flex flex-row group justify-center items-center font-semibold text-slate-800 bg-blue-primary shadow-lg rounded-lg ease-in-out duration-300 md:py-2 md:px-14 md:text-2xl py-1 px-8 text-lg hover:scale-110 active:scale-95'
                    }
                >
                    Nasze auta
                    <ArrowDownIcon className='size-6 ml-3 stroke-black stroke-[2.7px] ease-in-out duration-300' />
                </button>
            </Link>
        </InView>
    );
}
