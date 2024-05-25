import { carSpecyficationIcon, renderIcon } from '@/lib/renderIcon';
import SpecyficationCard from './SpecyficationCard';
import { UsersIcon } from '@heroicons/react/24/outline';

export default async function SpecyficationCards() {
    return (
        <>
            {/* FIRST ROW */}
            <section className='flex lg:flex-row flex-col md:justify-between w-full'>
                <SpecyficationCard
                    icon={renderIcon({
                        iconType: carSpecyficationIcon.ENGINE,
                        width: 100,
                        height: 100,
                    })}
                    heading='2.0l R4 Turbo'
                    content='350KM / 450Nm'
                    className='flex md:flex-row flex-col justify-center lg:justify-start items-center md:basis-4/12 w-full rounded-lg md:px-4 py-4 ease-in-out duration-300 hover:bg-neutral-800'
                />
                
                <SpecyficationCard
                    icon={renderIcon({
                        iconType: carSpecyficationIcon.TRANSMISSION,
                        width: 100,
                        height: 100,
                    })}
                    heading='7-biegowa'
                    content='Dwusprzęgłowa DSG'
                    className='flex md:flex-row flex-col justify-center lg:justify-start items-center md:basis-4/12 w-full rounded-lg md:px-4 py-4 ease-in-out duration-300 hover:bg-neutral-800'
                />

                <SpecyficationCard
                    icon={renderIcon({
                        iconType: carSpecyficationIcon.DRIVETRAIN,
                        width: 100,
                        height: 100,
                    })}
                    heading='Napęd 4x4 4Motion'
                    content='Sportowy mechanizm różnicowy'
                    className='flex md:flex-row flex-col justify-center lg:justify-start items-center md:basis-4/12 w-full rounded-lg md:px-4 py-4 ease-in-out duration-300 hover:bg-neutral-800'
                />
            </section>

            {/* SECOND ROW */}
            <section className='flex lg:flex-row flex-col w-full md:justify-between'>
                <SpecyficationCard
                    icon={renderIcon({
                        iconType: carSpecyficationIcon.PEOPLE,
                        size: 24,
                        color: 'blue-primary',
                    })}
                    heading='5 Miejsc'
                    content='Gwarantowany komfort jazdy'
                    className='flex md:flex-row flex-col items-center md:basis-2/4 justify-center rounded-lg md:px-4 py-4 ease-in-out duration-300 hover:bg-neutral-800'
                />

                <SpecyficationCard
                    icon={renderIcon({
                        iconType: carSpecyficationIcon.DRIVETRAIN,
                        width: 100,
                        height: 100,
                    })}
                    heading='Napęd 4x4 4Motion'
                    content='Sportowy mechanizm różnicowy'
                    className='flex md:flex-row flex-col items-center md:basis-2/4 justify-center rounded-lg md:px-4 py-4 ease-in-out duration-300 hover:bg-neutral-800'
                />
            </section>
        </>
    );
}
