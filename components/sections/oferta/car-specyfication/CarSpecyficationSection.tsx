import { ISpecyficationCardsProps } from '@/types/pagePayload';
import SpecyficationCards from './SpecyficationCards';

export default function CarSpecyficationSection({ technicalSpec }: ISpecyficationCardsProps) {
    return (
        <article className='flex flex-col w-full mx-auto bg-neutral-900 mt-[5%] rounded-lg md:px-6 px-4 md:py-6 py-4' itemProp="features">
            <p className='md:text-5xl text-4xl text-blue-primary mb-4'>
                Dane techniczne:
            </p>

            <SpecyficationCards technicalSpec={technicalSpec}/>
        </article>
    );
}
