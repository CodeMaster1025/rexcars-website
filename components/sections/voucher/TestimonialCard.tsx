import { ITestimonialCard } from "@/types/testimonial";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

export default function TestimonialCard({ content, rented_car, rating, customer, last}: ITestimonialCard) {
    console.log(content, rented_car, rating, customer)
    let stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<StarIconSolid key={i} className="h-6 w-6 text-yellow-400" />)
        } else {
            stars.push(<StarIconOutline key={i} className="h-6 w-6 text-yellow-400 " />)
        }
    }

    return (
        <div className={`flex flex-col justify-between min-w-full mx-auto mt-5 md:mt-0 bg-neutral-200/10 min-h-[300px] ${last ? "" : "mr-4"} lg:min-w-[49%] rounded-lg p-6 transition-colors ease-in-out duration-300 hover:bg-neutral-800/80`}>
            <div className="flex flex-col">
                <div className="flex flex-row justify-start">
                {stars}
            </div>

            <p className="text-neutral-200 md:text-lg text-base font-semibold mt-4">{content}</p>

            <p className="text-neutral-400 md:text-lg text-base italic mt-4">Wypożyczony samochód: <span className="text-blue-primary font-normal">{rented_car}</span></p>
            </div>
            

            <p className="text-neutral-400 md:text-lg text-base font-thin italic mt-4 ">Klient: {customer}</p>
        </div>
    );
}