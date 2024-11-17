import OutlineButton from '@/components/ui/OutlineButton';
import PriceChartEntry from './PriceChartEntry';
import Button from '@/components/ui/Button';
import PriceChartAddonEntry from './PriceChartAddonEntry';
import { IPriceChartEntry } from '@/types/priceChart';

type IPriceChartProps = {
    entries: IPriceChartEntry[];
}

export default async function PriceChart({ entries }: IPriceChartProps) {
    return (
        <section className='flex flex-col lg:basis-3/12 md:basis-4/12 bg-neutral-800 py-4 rounded-lg' itemProp="offers" itemScope itemType="https://schema.org/AggregateOffer">
            <meta itemProp="priceCurrency" content="PLN"/>
            <p className='text-3xl text-blue-primary font-semibold text-center pb-6 '>
                Cennik wynajmu
            </p>
            <ul className='flex flex-col'>
                {entries.map(
                    ({ duration, price, kilometersLimit, perDay, _key }, index) => (
                        <PriceChartEntry duration={duration} price={price} kilometersLimit={kilometersLimit} perDay={perDay} key={_key} _key={_key} index={index}/>
                    )
                )}
            </ul>
            <p className='text-neutral-400 pl-4 text-sm font-thin italic'>
                Dodatkowy km - 2 pln
            </p>

            <h4 className='text-3xl text-blue-primary font-semibold pt-4 pl-4 '>
                Dodatki:
            </h4>
            <ul className='flex flex-col'>
            {/* PRICE CHART ADDONS */}
            <PriceChartAddonEntry addonName='Dodatkowe 100km limitu' price={150}/>
            <PriceChartAddonEntry addonName='Dodatkowe 200km limitu' price={250}/>
            <PriceChartAddonEntry addonName='Dodatkowy kierowca' price={200}/>
            </ul>

            <h4 className='text-center text-neutral-400 text-sm font-thin italic'>
                *Wszystkie podane ceny są cenami brutto.
            </h4>

            <OutlineButton
                value='Porozmawiajmy'
                href='/kontakt'
                styles='w-[90%] py-2 mx-auto mt-4 font-semibold text-lg'
            />
            <Button
                value='Zarezerwuj'
                href='?reserve=true'
                styles='w-[90%] py-2 mx-auto mt-2 text-neutral-200 font-semibold text-lg'
                scroll={false}
            />
        </section>
    );
}
