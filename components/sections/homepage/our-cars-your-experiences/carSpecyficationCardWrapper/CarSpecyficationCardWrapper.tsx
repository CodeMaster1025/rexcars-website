'use client';
import './carSpecyficationCardWrapper.css';

import { useRef, useState } from 'react';
import CarSpecyficationCard from '../CarSpecyficationCard';
import {
    ArrowLongRightIcon,
    ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { carSpecyficationIcon, renderIcon } from '@/lib/renderIcon';
import { TechnicalSpecEntry } from '@/types/Car';

export default function CarSpecyficationCardWrapper({
    technicalSpecArray,
    url,
    price
}: {
    technicalSpecArray: TechnicalSpecEntry[];
    url: string;
    price: number;
}) {
    // Track the state of car specyfication bar
    const [unwinded, setUnwinded] = useState(false);
    const contentHeight = useRef(null)

    return (
        <section
            ref={contentHeight}
            className='flex flex-col md:w-[80%] w-full items-center mx-auto transition-all duration-700 ease-in-out z-10'
        >
            <section
                className={`flex md:flex-row flex-col w-full mx-auto overflow-hidden items-center rounded-b-lg bg-neutral-900 px-2 transition-all duration-700 ease-in-out ${
                    unwinded ? 'py-8 opacity-100' : "opacity-100"
                }`}
            >
                {technicalSpecArray.map((technicalSpecEntry, index) => {
                    return (
                        <CarSpecyficationCard
                            key={url + index}
                            icon={renderIcon({
                                iconType:
                                    carSpecyficationIcon[
                                        technicalSpecEntry.specType.toUpperCase() as keyof typeof carSpecyficationIcon
                                    ],
                                width: 64,
                                height: 64,
                            })}
                            heading={technicalSpecEntry.heading}
                            secondaryText={technicalSpecEntry.content}
                            unwinded={unwinded}
                        />
                    );
                })}
            </section>
            <div
                className='flex group mx-auto cursor-pointer w-full justify-center items-center bg-blue-secondary'
                onClick={() => setUnwinded(!unwinded)}
            >
                <h4
                    className='text-neutral-200 md:text-2xl text-lg font-medium md:my-2 my-1 mx-2'
                >
                    Dane techniczne
                </h4>
                <ChevronDoubleDownIcon
                    className={`text-neutral-200 size-9 justify-center transition-translate duration-700 ease-in-out ${
                        unwinded
                            ? 'rotate-180 scale-110'
                            : 'group-hover:scale-110 '
                    }`}
                />
            </div>
            <div
                className='w-full bg-blue-800 rounded-b-lg'
            >
                <Link href={`/oferta/${url}`}>
                    <button className='flex flex-row group md:text-2xl text-xl md:py-4 py-2 justify-center w-full items-center font-semibold text-neutral-200 bg-transparent shadow-lg active:scale-[0.9]'>
                        Już od {price}zł
                        <ArrowLongRightIcon className='text-neutral-200 size-8 ml-3 stroke-2 ease-in-out duration-300 translate-x-1 group-hover:rotate-[-45deg]' />
                    </button>
                </Link>
            </div>
        </section>
    );
}
