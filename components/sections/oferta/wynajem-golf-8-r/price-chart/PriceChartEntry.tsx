export type priceChartEntry = {
    rentDuration: string;
    price: number;
    kilometersLimit: number;
    perDay?: boolean;
}

export default function PriceChartEntry({rentDuration, price, kilometersLimit, perDay}: priceChartEntry) {
    return (
        <li className="flex flex-row justify-between w-full py-2 px-4">
            <div className="flex flex-col">
                <h3 className="md:text-lg text-xl text-neutral-200 font-medium">{rentDuration}</h3>
                <p className="text-neutral-400 md:text-sm text-xs  ">{!perDay ? kilometersLimit + "km" : kilometersLimit + "km /dobę"}</p>
            </div>
            <h3 className="md:text-lg text-xl text-blue-primary font-medium">{perDay ? price + "pln /doba" : price + "pln"}</h3>
        </li>
    );
}