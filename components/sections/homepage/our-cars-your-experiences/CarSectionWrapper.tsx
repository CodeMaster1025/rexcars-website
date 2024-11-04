import fetchCarsSectionData from '@/data/fetchCarsSectionData';
import CarCard from './CarCard';

export default async function CarsSection() {
    const cars = await fetchCarsSectionData();

    return (
        <section className='flex flex-col lg:flex-row  mt-10 bg-neutral-950 rounded-md pb-[5%] transition-all duration-300 ease-in-out'>
            {cars?.map((car) => {
                return (
                    <CarCard
                        key={car.key}
                        car={car}
                    />
                );
            })}
        </section>
    );
}
