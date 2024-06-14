import { sanityClient } from "@/lib/sanity";
import { ITestimonial } from "@/types/testimonial";

export async function fetchTestimonials() {
    const query = `
        *[_type == "testimonial"] {
            "key": _id,
            content,
            rented_car,
            rating,
            customer,
        }`;

    try {
        const data = await sanityClient.fetch(query);

        return data as ITestimonial[];
    } 
    catch (error) {
        console.error(error);
        throw new Error("Failed to fetch testimonials");
    }
}