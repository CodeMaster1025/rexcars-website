import type { JSX } from "react";
export default function SpecyficationCard({
    icon,
    heading,
    content,
    className,
}: {
    icon: JSX.Element | null;
    heading: string;
    content: string;
    className: string;
}) {
    return (
        <div className={className}>
            {icon}
            <div className='flex flex-col justify-center items-center md:pl-6 pt-2 md:pt-0'>
                <h3 className='md:text-2xl text-neutral-200 font-semibold'>
                    {heading}
                </h3>
                <p className='md:text-xl text-neutral-400 text-center'>
                    {content}
                </p>
            </div>
        </div>
    );
}
