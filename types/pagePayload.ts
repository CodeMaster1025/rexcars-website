import { TechnicalSpecEntry } from "./Car";

export type IPageHeaderPayload = {
    carMake: string;
    carModel: string;
}

export type ISpecyficationCardsProps = {
    technicalSpec: TechnicalSpecEntry[];
}

export type IPageContent = {
    heading: string;
    content: string;
    key: string;
}

export type ICarDescriptionPayload = {
    pageContent: IPageContent[];
    bottonHeading: string;
}

export type ICarDescriptionData = {
    bottomContent: ICarDescriptionPayload;
    header: IPageHeaderPayload;
}

export type IFAQEntryPayload = {
    heading: string;
    content: string;
    key: string;
}

export type IFAQSectionData = {
    entries: IFAQEntryPayload[];
}

export type IImage = {
    key: string,
    url: string,
}

export type IImagesData = {
    images: IImage[]
}



