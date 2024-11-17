import { IPriceChartEntry } from "@/types/priceChart";


export default function PriceChartEntry({duration, price, kilometersLimit, perDay, _key, index}: IPriceChartEntry) {
    return (
        <li className="flex flex-row justify-between w-full py-2 px-4" key={_key} itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <div className="flex flex-col">
                <p className="md:text-lg text-xl text-neutral-200 font-medium">{duration}</p>
                <p className="text-neutral-400 md:text-sm text-xs  ">{!perDay ? kilometersLimit + "km" : kilometersLimit + "km /dobę"}</p>
            </div>
            <p className="md:text-lg text-xl text-blue-primary font-medium" itemProp={index === 0 ? "highPrice" : index === 5 || index === 6 ? "lowPrice" : ""}>{perDay ? price + "pln /doba" : price + "pln"}</p>
        </li>
    );
}