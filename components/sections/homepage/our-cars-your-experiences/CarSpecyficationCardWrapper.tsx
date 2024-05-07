"use client";

export default function CarSpecyficationCardWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className='flex w-[80%] mx-auto py-8 justify-around items-center rounded-b-lg bg-neutral-900 transition-all ease-in-out duration-300'>
            {children}
        </section>
    );
}
