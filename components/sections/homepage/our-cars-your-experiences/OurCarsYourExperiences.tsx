import EngineIcon from "@/components/icons/EngineIcon";
import TransmissionIcon from "@/components/icons/TransmissionIcon";
import WheelIcon from "@/components/icons/WheelIcon";
import Image from "next/image";

export default function OurCarsYourExperiences() {
    return (
        <article className='flex flex-col w-[80%] mx-auto mt-[8%]'>
            <h2 className='text-neutral-200 text-5xl text-center'>
                Nasze auta -{' '}
                <span className='text-blue-primary font-semibold'>
                    Twoje przeżycia
                </span>
            </h2>
            <section className='flex flex-col mt-10 bg-neutral-950 rounded-md items-center ease-in-out duration-300 hover:scale-105'>
                <h3 className='text-center text-4xl text-neutral-400 my-6'>
                    Volkswagen{' '}
                    <span className='text-neutral-200 font-semibold'>GOLF</span>{' '}
                    <span className='text-blue-secondary font-semibold'>8R</span>
                </h3>
                <Image className="w-[80%] opacity-70 rounded-t-lg" src={"/golf-8-r.jpg"} alt="An image of Golf 8R available for rent" width={800} height={500} />
                <section className="flex w-[80%] mx-auto py-8 justify-around items-center rounded-b-lg bg-neutral-900">
                    <section className="flex flex-col items-center">
                        <EngineIcon width={100} height={80}/>
                    </section>
                    <section className="flex flex-col items-center">
                        <TransmissionIcon width={100} height={80} />
                    </section>
                    <section className="flex flex-col">
                        <WheelIcon width={100} height={80} />
                    </section>
                </section>
            </section>
        </article>
    );
}
