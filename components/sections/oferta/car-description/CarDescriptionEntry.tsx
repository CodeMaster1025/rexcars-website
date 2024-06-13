import { IPageContent } from "@/types/pagePayload";

export default function CarDescriptionEntry({heading, content}: IPageContent) {

    return (<>
        <h3 className='text-blue-primary md:text-3xl text-xl font-semibold pb-2'>{heading}</h3>
        <p className='text-neutral-200 md:text-2xl'>{content}</p>
        <br />
    </>);
}