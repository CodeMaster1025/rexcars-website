import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import ContactMethodEntry from './ContactMethodEntry';
import InstagramIcon from '@/components/icons/InstagramIcon';
import Link from 'next/link';

export default function ContactMethods() {
    return (
        <section className='flex flex-col md:w-[80%] w-[90%] mx-auto bg-neutral-800 rounded-2xl mt-[130px]'>
            <h2 className='text-left text-neutral-100 font-extralight md:text-4xl text-3xl py-4 px-4'>
                INNE MOŻLIWOŚCI KONTAKTU
            </h2>
            <div className='flex md:flex-row flex-col md:w-full pt-2 pb-8 px-6 md:justify-between'>
                <ContactMethodEntry>
                    <PhoneIcon className='text-blue-primary size-9' />
                    <Link href='tel:+48534668001'>
                        <h3 className='text-neutral-100 text-lg ml-4 group-hover:text-blue-primary ease-in-out duration-300'>
                            +48 534 668 001
                        </h3>
                    </Link>
                </ContactMethodEntry>
                <ContactMethodEntry>
                    <EnvelopeIcon className='text-blue-primary size-9' />
                    <Link href='mailto:kontakt@rexcars.pl'>
                        <h3 className='text-neutral-100 text-lg ml-4 group-hover:text-blue-primary ease-in-out duration-300'>
                            kontakt@rexcars.pl
                        </h3>
                    </Link>
                </ContactMethodEntry>
                <ContactMethodEntry>
                    <InstagramIcon
                        width={36}
                        height={36}
                        color='blue-primary'
                    />
                    <Link
                        href='https://www.instagram.com/rex_cars_wypozyczalnia'
                        rel='noopener norefferer'
                        target='_blank'
                    >
                        <h3 className='text-neutral-100 text-lg ml-4 group-hover:text-blue-primary ease-in-out duration-300'>
                            @rex_cars_wypozyczalnia
                        </h3>
                    </Link>
                </ContactMethodEntry>
            </div>
        </section>
    );
}
