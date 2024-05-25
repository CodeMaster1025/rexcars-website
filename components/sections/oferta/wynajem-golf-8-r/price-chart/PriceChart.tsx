import OutlineButton from '@/components/ui/OutlineButton';
import PriceChartEntry from './PriceChartEntry';
import Button from '@/components/ui/Button';
import PriceChartAddonEntry from './PriceChartAddonEntry';
import getPriceChartData from '@/data/priceChart';


export default async function PriceChart() {
    const priceChartData = await getPriceChartData();

    return (
        <section className='flex flex-col lg:basis-3/12 md:basis-4/12 bg-neutral-800 py-4 rounded-lg'>
            <h2 className='text-3xl text-blue-primary font-semibold text-center pb-6 '>
                Cennik wynajmu
            </h2>
            <ul className='flex flex-col'>
                {priceChartData.entries.map(
                    ({ rentDuration, price, kilometersLimit, perDay }, index) => (
                        <PriceChartEntry rentDuration={rentDuration} price={price} kilometersLimit={kilometersLimit} perDay={perDay} key={"entry" + index}/>
                    )
                )}
            </ul>
            <h4 className='text-neutral-400 pl-4 text-sm font-thin italic'>
                Dodatkowy km - 2 pln
            </h4>

            <h2 className='text-3xl text-blue-primary font-semibold pt-4 pl-4 '>
                Dodatki:
            </h2>
            <ul className='flex flex-col'>
            {priceChartData.addons.map(
                    ({ price, addonName }, index) => (
                        <PriceChartAddonEntry addonName={addonName} price={price} key={"addon" + index}/>
                    )
                )}
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
                href='/zarezerwuj'
                styles='w-[90%] py-2 mx-auto mt-2 text-neutral-200 font-semibold text-lg'
            />
        </section>
    );
}
