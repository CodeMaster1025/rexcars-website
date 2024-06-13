import { ICarDescriptionData } from "@/types/pagePayload";
import CarDescriptionEntry from "./CarDescriptionEntry";

export default function CarDescriptionSection({header, bottomContent}: ICarDescriptionData) {
    return (
        <article className='flex flex-col w-full md:mt-[8%] mt-[15%]'>
            <h2 className='md:text-5xl text-3xl font-semibold text-neutral-200 md:mb-10 mb-4'>
                {header.carMake}{' '}
                <span className='text-blue-primary'>{header.carModel}</span>
            </h2>
            
            {bottomContent.pageContent.map(({heading, content, key}) => {
                return (<CarDescriptionEntry heading={heading} content={content} key={key}/>);
            })}

            <br />
            <h3 className='text-blue-primary md:text-3xl text-xl font-semibold pb-2 text-center'>
                {bottomContent.bottonHeading}
            </h3>
        </article>
    );
}
