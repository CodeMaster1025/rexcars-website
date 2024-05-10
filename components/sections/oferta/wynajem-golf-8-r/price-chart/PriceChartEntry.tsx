type priceChartEntryProps = {
    rentDuration: string;
    price: string;
    kilometersLimit: string;
    perDay?: boolean;
}

export default function PriceChartEntry({rentDuration, price, kilometersLimit, perDay}: priceChartEntryProps) {
    return (
        <li className="flex flex-row justify-between w-full py-4 px-4">
            <div className="flex flex-col">
                <h3 className="md:text-lg text-xl text-neutral-200 font-medium">{rentDuration}</h3>
                <p className="text-neutral-400 md:text-sm text-xs  ">{"Limit kilometrów: " + kilometersLimit + "km"}</p>
            </div>
            <h3 className="md:text-lg text-xl text-blue-secondary font-medium">{perDay ? price + "pln / doba" : price + "pln"}</h3>
        </li>
    );
}