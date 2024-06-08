
export default interface ICar {
    key: string;
    carMake: string;
    carModel: string;
    url: string;
    images: {url: string;};
    price: number;
    technicalSpec: TechnicalSpecEntry[];
}

export type TechnicalSpecEntry = {
    heading: string;
    content: string;
    specType: string;
    key: string;
}