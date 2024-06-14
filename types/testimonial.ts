// Create an export type for the testimonial schema type.

export type ITestimonial = {
  key: string;
  content: string;
  rented_car: string;
  rating: number;
  customer: string;
};

export type ITestimonialCard = {
    content: string;
    rented_car: string;
    rating: number;
    customer: string;
    last?: boolean;
  };