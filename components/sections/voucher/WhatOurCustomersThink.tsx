import { fetchTestimonials } from "@/data/fetchVoucherPagePayload";
import Testimonials from "./Testimonials";

export default async function WhatOurCustomersThink() {
    const testimonials = await fetchTestimonials();

    return (
        <section
            className='flex flex-col w-[80%] mx-auto justify-center md:pt-[100px] pt-[50px]'
        >
            <h2 className='md:text-left text-center text-neutral-200 font-light md:text-5xl text-3xl'>
                Co myślą o nas klienci?
            </h2>
            <div className='flex items-center justify-center w-full mx-auto lg:mt-8 mt-2'>
                <Testimonials testimonials={testimonials}/>
            </div>
        </section>
    );
}   