import { MapPinIcon } from "@heroicons/react/24/outline";

export default function CompanyInfo() {
    return (
        <section className="flex flex-col md:w-[60%] w-[90%] mx-auto bg-neutral-800/70 mt-[130px] rounded-2xl pb-4">
            <h2 className='text-left text-neutral-100 font-extralight md:text-4xl text-3xl py-4 px-4'>
                DANE ADRESOWE FIRMY
            </h2>

            <div className="flex flex-row justify-center items-center w-full mx-auto">
                <MapPinIcon className="text-blue-primary size-14 md:ml-0 ml-4" />
                <div className="flex flex-col pl-4">
                    <p className="text-neutral-200 text-base md:text-left text-center">ul. Ignacego Mościckiego 4, 26-110 Skarżysko-Kamienna</p>
                    <p className="text-neutral-200 text-base md:text-left text-center">Rex Cars Adrian Pacholczyk</p>
                    <p className="text-neutral-200 text-base md:text-left text-center">NIP: 6631889173</p>
                </div>
            </div>
        </section>
    );
}