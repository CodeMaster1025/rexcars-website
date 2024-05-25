export type priceChartAddonEntry = {
    addonName: string;
    price: string;
};

export default function PriceChartEntry({
    addonName,
    price,
}: priceChartAddonEntry) {
    return (
        <li className='flex flex-row justify-between w-full py-2 px-4'>
            <h3 className='md:text-base text-xl text-neutral-200 font-medium'>
                {addonName}
            </h3>

            <h3 className='md:text-base text-xl text-blue-primary font-medium'>
                {price + 'pln'}
            </h3>
        </li>
    );
}
