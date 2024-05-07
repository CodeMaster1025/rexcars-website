'use client';

import EngineIcon from '@/components/icons/EngineIcon';
import TransmissionIcon from '@/components/icons/TransmissionIcon';
import WheelIcon from '@/components/icons/WheelIcon';
import {
    ChevronDoubleDownIcon,
    ChevronDoubleUpIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

type carSpecyficationCardProps = {
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
}: carSpecyficationCardProps) {
    const [unwinded, setUnwinded] = useState(false);

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
        <section className='flex flex-col items-center transition-all ease-in-out duration-300'>
            {iconToRender}

            {/* Conditionally render arrows up or down, depending on a component state */}
            {!unwinded && (
                <ChevronDoubleDownIcon
                    className='text-blue-secondary size-12 mt-2 hover:cursor-pointer'
                    onClick={() => setUnwinded(!unwinded)}
                />
            )}
            <section
                className={`${
                    unwinded ? 'flex' : 'hidden'
                } flex-col justify-center`}
            >
                <h4 className='text-neutral-200 font-semibold text-xl text-center'>
                    {heading}
                </h4>
                <p className='text-neutral-400 text-lg text-center'>{secondaryText}</p>
            </section>
            {unwinded && (
                <ChevronDoubleUpIcon
                    className='text-blue-secondary size-12 mt-2 text-center hover:cursor-pointer'
                    onClick={() => setUnwinded(!unwinded)}
                />
            )}
        </section>
    );
}
