import FAQSectionEntry from './FAQSectionEntry';
import FAQSectionWrapper from './FAQSectionWrapper';

export default function FAQSection() {
    return (
        <article className='flex flex-col w-full mt-[8%]'>
            <h2 className='md:text-5xl text-xl text-neutral-200 md:mb-6 mb-4'>Najczęściej zadawane pytania</h2>
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
