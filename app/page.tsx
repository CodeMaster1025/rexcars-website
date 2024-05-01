import Navbar from '@/components/ui/nav/Navbar';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <section className='flex mx-0 w-full place-content-center justify-center relative overflow-hidden'>
              <Image src={"/back-of-a-grey-sports-car-with-red-detail.jpg"} alt='Sports car image' priority={true} width={0} height={0} sizes='100vw' className='w-full max-h-[92vh] object-cover opacity-50'/>
              <div className='flex absolute inset-0 bg-gradient-to-b from-transparent to-black from-20%'>
                <div className='flex flex-row bg-transparent justify-center items-center w-full mb-48'>
                  <h1 className='text-5xl text-neutral-200'>Poczuj</h1>
                  <h1 className='text-5xl text-[#1dbfe9] pl-4'>Adrenalinę</h1>
                </div>
              </div>
            </section>
        </>
    );
} 
