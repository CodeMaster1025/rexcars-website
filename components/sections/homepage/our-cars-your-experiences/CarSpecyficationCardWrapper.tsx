'use client';

import { useState } from 'react';
import CarSpecyficationCard from './CarSpecyficationCard';
import {
    ArrowLongRightIcon,
    ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';
import {  motion } from 'framer-motion';
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

    return (
        <motion.section
            className='flex flex-col md:w-[80%] w-full items-center mx-auto'
            layout="position"
            transition={{
                layout: { duration: 0.6 },
                type: 'spring',
                stiffness: 90,
            }}
        >
                {unwinded && (
                    <motion.section
                        layout="position"
                        className={`flex md:flex-row flex-col w-full mx-auto md:min-h-[250px] items-center rounded-b-lg bg-neutral-900 px-2 transition-all ease-in-out duration-300 ${
                            unwinded ? 'py-8' : ''
                        }`}
                        transition={{ layout: { duration: 0.6 } }}

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
                                />
                            );
                        })}
                    </motion.section>
                )}
            <motion.div
                layout='position'
                className='flex group mx-auto cursor-pointer w-full justify-center items-center bg-blue-secondary'
                transition={{
                    layout: { duration: 0.4 },
                    type: 'spring',
                    stiffness: 100,
                }}
                whileHover={{ opacity: 0.6, transition: { duration: 0.3 } }}
                onClick={() => setUnwinded(!unwinded)}
            >
                <motion.h4
                    layout='position'
                    className='text-neutral-200 md:text-2xl text-lg font-medium md:my-2 my-1 mx-2'
                >
                    Dane techniczne
                </motion.h4>
                <ChevronDoubleDownIcon
                    className={`text-neutral-200 size-9 transition-transform justify-center ease-in-out duration-[350ms]  ${
                        unwinded
                            ? 'rotate-180 scale-110'
                            : 'group-hover:scale-110 '
                    }`}
                />
            </motion.div>
            <motion.div
                layout='position'
                transition={{
                    layout: { duration: 0.4 },
                    type: 'spring',
                    stiffness: 90,
                }}
                className='w-full bg-blue-800 rounded-b-lg'
                whileHover={{
                    backgroundColor: '#1e3a8a',
                    transition: { duration: 0.3 },
                }}
            >
                <Link href={`/oferta/${url}`}>
                    <button className='flex flex-row group md:text-2xl text-xl md:py-4 py-2 justify-center w-full items-center font-semibold text-neutral-200 bg-transparent shadow-lg active:scale-[0.9]'>
                        Już od {price}zł
                        <ArrowLongRightIcon className='text-neutral-200 size-8 ml-3 stroke-2 ease-in-out duration-300 translate-x-1 group-hover:rotate-[-45deg]' />
                    </button>
                </Link>
            </motion.div>
        </motion.section>
    );
}
