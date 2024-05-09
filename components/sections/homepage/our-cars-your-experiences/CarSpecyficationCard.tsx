import EngineIcon from '@/components/icons/EngineIcon';
import TransmissionIcon from '@/components/icons/TransmissionIcon';
import WheelIcon from '@/components/icons/WheelIcon';
import { motion } from 'framer-motion';

type carSpecyficationCardProps = {
    active: boolean;
    iconType: carSpecyficationIcon;
    heading: string;
    secondaryText: string;
};

export enum carSpecyficationIcon {
    ENGINE,
    TRANSMISSION,
    DRIVETRAIN,
}

export default function CarSpecyficationCard({
    iconType,
    heading,
    secondaryText,
    active,
}: carSpecyficationCardProps) {
    // Conditionally render icon given iconType prop
    let iconToRender;
    switch (iconType) {
        case carSpecyficationIcon.ENGINE:
            iconToRender = (
                <EngineIcon
                    width={80}
                    height={100}
                />
            );
            break;

        case carSpecyficationIcon.TRANSMISSION:
            iconToRender = (
                <TransmissionIcon
                    width={80}
                    height={100}
                />
            );
            break;

        case carSpecyficationIcon.DRIVETRAIN:
            iconToRender = (
                <WheelIcon
                    width={80}
                    height={100}
                />
            );
            break;

        default:
            iconToRender = null;
            break;
    }

    return (
        <motion.section
            layout="position"
            className='flex flex-col basis-4/12 flex-initial items-center transition-all bg-neutral-900 ease-in-out duration-300'
            initial={{opacity: 0,
            }}
            animate={{opacity: 1, transition: {
                duration: 1,
                staggerChildren: .2
            }}}
        >
            {active && <motion.div layout="position">{iconToRender}</motion.div>}
            {active && (
                <motion.section className='flex-col justify-center ease-in-out bg-neutral-900 animate-fadeIn'>
                    <motion.h4 layout="position" className='text-neutral-200 font-semibold text-xl text-center'>
                        {heading}
                    </motion.h4>
                    <motion.p className='text-neutral-400 text-lg text-center'>
                        {secondaryText}
                    </motion.p>
                </motion.section>
            )}
        </motion.section>
    );
}
