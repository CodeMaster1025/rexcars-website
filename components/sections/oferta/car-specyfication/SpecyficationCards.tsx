import { carSpecyficationIcon, renderIcon } from '@/lib/renderIcon';
import SpecyficationCard from './SpecyficationCard';
import { UsersIcon } from '@heroicons/react/24/outline';
import { ISpecyficationCardsProps } from '@/types/pagePayload';

export default async function SpecyficationCards({ technicalSpec }: ISpecyficationCardsProps) {
    return (
        <>
            {/* FIRST ROW */}
            <section className='flex lg:flex-row flex-col md:justify-between w-full'>
                {technicalSpec.map(({ key, heading, content, specType }, index) => {
                    if (index <= 2) {
                        if (specType !== "seats") {
                            return <SpecyficationCard icon={renderIcon({
                                iconType: carSpecyficationIcon[
                                    specType.toUpperCase() as keyof typeof carSpecyficationIcon
                                ],
                                width: 100,
                                height: 100
                            })}
                            heading={heading}
                            content={content}
                            key={key}
                            className='flex md:flex-row flex-col justify-center lg:justify-start items-center md:basis-4/12 w-full mx-auto rounded-lg md:px-4 py-4 ease-in-out duration-300 hover:bg-neutral-800'
                            />
                        }
                    }
                })}
            </section>

            {/* SECOND ROW */}
            <section className='flex lg:flex-row flex-col w-full md:justify-between'>
                {technicalSpec.map(({ key, heading, content, specType }, index) => {
                    if (index > 2) {
                        
                        if (specType === "ACCELERATION") {
                            return (
                                <SpecyficationCard icon={renderIcon({
                                    iconType: carSpecyficationIcon.ACCELERATION,
                                    color: "blue-primary",
                                    size: 24,
                                })}
                                heading={heading}
                                content={content}
                                key={key}
                                className='flex md:flex-row flex-col items-center md:basis-2/4 justify-center rounded-lg md:px-4 py-4 ease-in-out duration-300 hover:bg-neutral-800'
                            />
                            )
                        }
                        else {
                            return <SpecyficationCard icon={<UsersIcon className='size-24 text-blue-primary'/>}
                            heading={heading}
                            content={content}
                            key={key}
                            className='flex md:flex-row flex-col items-center md:basis-2/4 justify-center rounded-lg md:px-4 py-4 ease-in-out duration-300 hover:bg-neutral-800'
                            />
                        }
                    }
                })}
                
            </section>
        </>
    );
}
