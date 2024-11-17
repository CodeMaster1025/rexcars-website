import ICar from "@/types/Car";
import Link from "next/link";
import Image from "next/image";
import CarSpecyficationCardWrapper from "./carSpecyficationCardWrapper/CarSpecyficationCardWrapper";

export default function CarCard({ car }: { car: ICar }) {
    return (
        <div className="flex flex-col">
            <h3 className='text-center md:text-4xl text-2xl text-neutral-200 md:my-4 mb-2'>
                {car.carMake}
                {" "}
                <span className="text-blue-primary font-semibold">{car.carModel}</span>
            </h3>
            <Link href={`/oferta/${car.url}`} className='md:w-[80%] w-full mx-auto'>
                <Image
                    className='rounded-t-lg w-full'
                    src={`${car.images.url}?h=400`}
                    alt={`An image of ${car.carMake} ${car.carModel} available for rent`}
                    width={640}
                    height={400}
                />
            </Link>
            <CarSpecyficationCardWrapper technicalSpecArray={car.technicalSpec} url={car.url} price={car.price}/>
        </div>
    );
}