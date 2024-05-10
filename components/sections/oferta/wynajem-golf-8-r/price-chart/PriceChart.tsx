import OutlineButton from "@/components/ui/OutlineButton";
import PriceChartEntry from "./PriceChartEntry";
import Button from "@/components/ui/Button";

export default function PriceChart() {
    return (
        <section className="flex flex-col md:basis-1/4 bg-neutral-800 md:py-6 py-4 rounded-lg">
            <h2 className="text-3xl text-blue-primary font-semibold text-center pb-6 ">Cennik wynajmu</h2>
            <ul className="flex flex-col">
                <PriceChartEntry rentDuration="1 Doba" kilometersLimit="250" price="650" perDay={true}/>
                <PriceChartEntry rentDuration="2-3 Doby" kilometersLimit="250" price="600" perDay={true}/>
                <PriceChartEntry rentDuration="4-6 Dób" kilometersLimit="250" price="500" perDay={true}/>
                <PriceChartEntry rentDuration="7-13 Dób" kilometersLimit="250" price="450" perDay={true}/>
                <PriceChartEntry rentDuration="14-29 Dób" kilometersLimit="250" price="350" perDay={true}/>
                <PriceChartEntry rentDuration="Miesiąc" kilometersLimit="250" price="7500"/>
            </ul>
            <h4 className="text-center text-neutral-400 text-sm font-thin italic">*Wszystkie podane ceny są cenami brutto.</h4>
            <OutlineButton value="Porozmawiajmy" href="/kontakt" styles="w-[90%] py-2 mx-auto mt-4 font-semibold text-lg"/>
            <Button value="Zarezerwuj" href="/zarezerwuj" styles="w-[90%] py-2 mx-auto mt-2 text-neutral-200 font-semibold text-lg" />
        </section>
    );
}