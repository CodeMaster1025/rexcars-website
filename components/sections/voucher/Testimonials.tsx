"use client";

import { ITestimonial } from "@/types/testimonial";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { usePrevNextButtons } from "@/hooks/usePrevNextButtons";

export default function Testimonials({ testimonials } : { testimonials: ITestimonial[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
    

    return (
        <div className="overflow-hidden w-full">
            <div ref={emblaRef}>
                <div className="flex">
                {testimonials.map(({key, ...testimonial}, index) => <TestimonialCard key={key} { ...testimonial } last={index === testimonials.length - 1} />)}
                </div>
            </div>
            
            <div className="flex flex-row justify-between items-center w-full mx-auto pt-4 ">
                <ChevronLeftIcon onClick={onPrevButtonClick} className={`lg:h-12 lg:w-12 h-8 w-8 cursor-pointer ${prevBtnDisabled ? "text-neutral-400" : "text-neutral-200 transition-all ease-in-out duration-300 hover:scale-125 hover:text-blue-primary active:scale-95"}`}/>
                <ChevronRightIcon onClick={onNextButtonClick} className={`lg:h-12 lg:w-12 h-8 w-8 cursor-pointer ${nextBtnDisabled ? "text-neutral-400" : "text-neutral-200 transition-all ease-in-out duration-300 hover:scale-125 hover:text-blue-primary active:scale-95"}`}/>
            </div>
        </div>
    );
}