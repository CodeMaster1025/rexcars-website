import {
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
} from '@heroicons/react/24/outline';
import VoucherCard from './VoucherCard';
import RoundedButton from '@/components/ui/RoundedButton';

export default function HowItWorks() {
    return (
        <section
            id='howItWorks'
            className='flex flex-col w-[80%] mx-auto justify-center md:pt-[300px] pt-[200px]'
        >
            <h2 className='md:text-left text-center text-neutral-200 font-light md:text-5xl text-3xl'>
                Jak to działa?
            </h2>
            <p className='md:text-left text-center text-neutral-400 font-light md:text-xl text-base'>
                W naszej firmie proces zakupu vouchera na samochód jest bardzo
                prosty. Całość odbywa się w tylko 3 krokach:
            </p>

            <div className='flex flex-col lg:flex-row md:justify-between mt-10'>
                <VoucherCard
                    step={1}
                    title={'Wybierz samochód'}
                    description={
                        'Wybierz jeden z samochodów dostępnych w naszej ofercie.'
                    }
                >
                    <RoundedButton href='/#our-cars' value='ZOBACZ OFERTĘ' styles='w-full'/>
                </VoucherCard>

                <div className='hidden lg:flex justify-center items-center'>
                    <ArrowRightIcon className='h-12 w-12 text-blue-primary items-center mx-1' />
                </div>

                <div className='flex lg:hidden justify-center items-center mt-4'>
                    <ArrowDownIcon className='h-12 w-12 text-blue-primary items-center' />
                </div>

                <VoucherCard
                    step={2}
                    title={'Skontaktuj się z nami'}
                    description={
                        'Skontaktuj się z nami w celu ustalenia szczegółów dotyczących zakupu vouchera.'
                    }
                >
                    <RoundedButton href='/kontakt' value='SKONTAKTUJ SIĘ' styles='w-full'/>
                </VoucherCard>

                <div className='hidden lg:flex justify-center items-center'>
                    <ArrowRightIcon className='h-12 w-12 text-blue-primary items-center mx-1' />
                </div>

                <div className='flex lg:hidden justify-center items-center mt-4'>
                    <ArrowDownIcon className='h-12 w-12 text-blue-primary items-center' />
                </div>

                <VoucherCard
                    step={3}
                    title={'Odbierz voucher'}
                    description={
                        'Odbierz voucher w formie papierowej, lub otrzymaj go jako PDF na swoją skrzynkę mailową.'
                    }
                />
            </div>
        </section>
    );
}
