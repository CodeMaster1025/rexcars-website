"use client";
import {motion} from 'framer-motion';

export default function CarSectionWrapper({children}: {children: React.ReactNode}) {
    return (
        <motion.section layout transition={{duration: 1}} className='flex flex-col mt-10 bg-neutral-950 rounded-md items-center pb-[5%]'>
            {children}
        </motion.section>
    );
}