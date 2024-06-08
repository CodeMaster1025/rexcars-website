import { motion } from 'framer-motion';

type carSpecyficationCardProps = {
    icon: JSX.Element | null;
    heading: string;
    secondaryText: string;
};

export default function CarSpecyficationCard({
    icon,
    heading,
    secondaryText,
}: carSpecyficationCardProps) {

    return (
        <motion.section
            layout='position'
            className='flex flex-col md:basis-4/12 mb-6 md:pb-0 flex-initial items-center transition-all bg-neutral-900 ease-in-out duration-300'
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 1,
                    staggerChildren: 0.2,
                },
            }}
        >
            <motion.div layout='position'>{icon}</motion.div>
            <motion.section
                className='flex-col justify-center ease-in-out bg-neutral-900 animate-fadeIn'
                layout='position'
            >
                <motion.h4
                    layout='position'
                    className='text-neutral-200 font-semibold text-base text-center'
                >
                    {heading}
                </motion.h4>
                <motion.p className='text-neutral-400 text-sm text-center'>
                    {secondaryText}
                </motion.p>
            </motion.section>
        </motion.section>
    );
}
