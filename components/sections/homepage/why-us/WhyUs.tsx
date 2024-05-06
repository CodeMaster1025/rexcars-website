import CardWrapper from "@/components/sections/homepage/why-us/CardWrapper";
import Card, { CardIcon } from "@/components/sections/homepage/why-us/Card";

export default function WhyUs() {
    return (
        <section className='flex flex-col w-[80%] mx-auto'>
            <h2 className='text-neutral-200 text-4xl my-5 mb-14'>
                Dlaczego akurat{' '}
                <span className="font-semibold">Rex</span>
                <span className='text-blue-primary font-semibold'>Cars</span>
                <span className="font-semibold">?</span>
            </h2>
            <CardWrapper>
                <Card heading="Lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. " icon={CardIcon.CHECK}/>
                <Card heading="Lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." icon={CardIcon.MONEY}/>
                <Card heading="Lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit." icon={CardIcon.SMILE}/>
            </CardWrapper>
        </section>
    );
}
