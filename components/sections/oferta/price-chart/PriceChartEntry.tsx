import { IPriceChartEntry } from "@/types/priceChart";


export default function PriceChartEntry({duration, price, kilometersLimit, perDay, _key}: IPriceChartEntry) {
    return (
        <li className="flex flex-row justify-between w-full py-2 px-4" key={_key}>
            <div className="flex flex-col">
                <h3 className="md:text-lg text-xl text-neutral-200 font-medium">{duration}</h3>
                <p className="text-neutral-400 md:text-sm text-xs  ">{!perDay ? kilometersLimit + "km" : kilometersLimit + "km /dobę"}</p>
            </div>
            <h3 className="md:text-lg text-xl text-blue-primary font-medium">{perDay ? price + "pln /doba" : price + "pln"}</h3>
        </li>
    );
}