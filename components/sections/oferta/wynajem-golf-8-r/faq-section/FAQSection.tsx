import { PlusCircleIcon, PlusIcon } from '@heroicons/react/24/outline';
import FAQSectionEntry from './FAQSectionEntry';
import FAQSectionWrapper from './FAQSectionWrapper';

export default function FAQSection() {
    return (
        <article className='flex flex-col w-full mt-[8%]'>
            <div className='flex flex-row items-center md:items-start'>
                <PlusCircleIcon className='text-blue-primary md:size-12 size-10 md:mb-0 mb-4 mr-2'/>
                <h2 className='md:text-5xl text-xl text-neutral-200 md:mb-6 mb-4'>Najczęściej zadawane pytania</h2>
            </div>
            
            <FAQSectionWrapper>
                <FAQSectionEntry
                    heading='Lorem'
                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad eveniet voluptate error officiis fugit fugiat blanditiis eligendi vero quasi. Ex ad, similique nulla corrupti perspiciatis doloribus ut modi neque?'
                />
                <FAQSectionEntry
                    heading='Lorem'
                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad eveniet voluptate error officiis fugit fugiat blanditiis eligendi vero quasi. Ex ad, similique nulla corrupti perspiciatis doloribus ut modi neque?'
                />
                <FAQSectionEntry
                    heading='Lorem'
                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad eveniet voluptate error officiis fugit fugiat blanditiis eligendi vero quasi. Ex ad, similique nulla corrupti perspiciatis doloribus ut modi neque?'
                />
            </FAQSectionWrapper>
        </article>
    );
}
