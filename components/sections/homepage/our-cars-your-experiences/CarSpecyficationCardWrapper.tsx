'use client';

import { useState } from 'react';
import CarSpecyficationCard, {
    carSpecyficationIcon,
} from './CarSpecyficationCard';
import {
    ArrowLongRightIcon,
    ChevronDoubleDownIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function CarSpecyficationCardWrapper() {
    // Track the state of car specyfication bar
    const [unwinded, setUnwinded] = useState(false);

    return (
        <motion.section
            layout='position'
            className='flex flex-col w-[80%] items-center'
            transition={{ layout: {duration: .6}, type: 'spring', stiffness: 90 }}
        >
            <motion.section
                layout='position'
                transition={{ layout: { duration: 0.6 } }}
                className={`flex w-full mx-auto items-center rounded-b-lg bg-neutral-900 px-2 transition-all ease-in-out duration-300 ${
                    unwinded ? 'py-8' : ''
                }`}
            >
                <CarSpecyficationCard
                    iconType={carSpecyficationIcon.ENGINE}
                    heading='2.0l R4 Turbo'
                    secondaryText='350KM / 450Nm'
                    active={unwinded}
                />
                <CarSpecyficationCard
                    iconType={carSpecyficationIcon.TRANSMISSION}
                    heading='7-biegowa automatyczna'
                    secondaryText='Dwusprzęgłowa DSG'
                    active={unwinded}
                />
                <CarSpecyficationCard
                    iconType={carSpecyficationIcon.DRIVETRAIN}
                    heading='Napęd 4Motion'
                    secondaryText='Sportowy mechanizm różnicowy'
                    active={unwinded}
                />
            </motion.section>
            <motion.div
                layout='position'
                className='flex group mx-auto cursor-pointer w-full justify-center items-center bg-blue-secondary'
                transition={{ layout: { duration: 0.4 }, type: "spring", stiffness: 100 }}
                whileHover={{opacity: .6, transition: {duration: .3}}}
                onClick={() => setUnwinded(!unwinded)}
            >
                <motion.h4
                    layout='position'
                    className='text-neutral-200 text-2xl font-medium my-2 mx-2'
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
                transition={{ layout: { duration: 0.4 }, type: "spring", stiffness: 90 }}
                className='w-full bg-blue-800 rounded-b-lg'
                whileHover={{backgroundColor: "#1e3a8a",
                    transition: {duration: .3}
                }}
            >
                <Link href={'/oferta/wynajem-golf-8-r'}>
                    <button className='flex flex-row group text-2xl py-4 justify-center w-full items-center font-semibold text-neutral-200 bg-transparent shadow-lg active:scale-[0.9]'>
                        Już od 650zł
                        <ArrowLongRightIcon className='text-neutral-200 size-8 ml-3 stroke-2 ease-in-out duration-300 translate-x-1 group-hover:rotate-[-45deg]' />
                    </button>
                </Link>
            </motion.div>
        </motion.section>
    );
}
