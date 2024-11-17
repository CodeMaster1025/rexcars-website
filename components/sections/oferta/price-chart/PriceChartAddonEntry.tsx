export type priceChartAddonEntry = {
    addonName: string;
    price: number;
};

export default function PriceChartEntry({
    addonName,
    price,
}: priceChartAddonEntry) {
    return (
        <li className='flex flex-row justify-between w-full py-2 px-4'>
            <p className='md:text-base text-xl text-neutral-200 font-medium'>
                {addonName}
            </p>

            <p className='md:text-base text-xl text-blue-primary font-medium'>
                {price + 'pln'}
            </p>
        </li>
    );
}
