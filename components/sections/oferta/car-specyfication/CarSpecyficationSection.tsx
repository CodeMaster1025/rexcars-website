import { ISpecyficationCardsProps } from '@/types/pagePayload';
import SpecyficationCards from './SpecyficationCards';

export default function CarSpecyficationSection({ technicalSpec }: ISpecyficationCardsProps) {
    return (
        <article className='flex flex-col w-full mx-auto bg-neutral-900 mt-[5%] rounded-lg md:px-6 px-4 md:py-6 py-4'>
            <h2 className='md:text-5xl text-4xl text-blue-primary mb-4'>
                Dane techniczne:
            </h2>

            <SpecyficationCards technicalSpec={technicalSpec}/>
        </article>
    );
}
