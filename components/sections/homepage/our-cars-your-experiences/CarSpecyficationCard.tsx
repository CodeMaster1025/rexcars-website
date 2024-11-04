"use client"
import { useRef } from 'react';

type carSpecyficationCardProps = {
    icon: JSX.Element | null;
    heading: string;
    secondaryText: string;
    unwinded: boolean;
};

export default function CarSpecyficationCard({
    icon,
    heading,
    secondaryText,
    unwinded,
}: carSpecyficationCardProps) {
    const contentHeight = useRef<HTMLDivElement>(null);
    console.log(contentHeight.current?.scrollHeight);
    return (
        <section
        ref={contentHeight}
            className={`flex flex-col md:basis-4/12 md:pb-0 flex-initial items-center transition-transform bg-neutral-900 duration-700 ${
                unwinded ? `h-[${contentHeight.current?.scrollHeight}px] mb-6` : 'opacity-0 h-0'
            }`}
        >
            <div >{icon}</div>
            <section
                className='flex-col justify-center ease-in-out bg-neutral-900'
            >
                <h4
                    className='text-neutral-200 font-semibold text-base text-center'
                >
                    {heading}
                </h4>
                <p className='text-neutral-400 text-sm text-center'>
                    {secondaryText}
                </p>
            </section>
        </section>
    );
}
