import CardWrapper from '@/components/sections/homepage/why-us/CardWrapper';
import Card, { CardIcon } from '@/components/sections/homepage/why-us/Card';

export default function WhyUs() {
    return (
        <section className='flex flex-col md:w-[80%] w-[90%] mx-auto mb-10'>
            <h2 className='text-neutral-200 md:text-5xl text-2xl my-5 mb-14'>
                Dlaczego akurat <span className='font-semibold'>Rex</span>
                <span className='text-blue-primary font-semibold'>Cars</span>
                <span className='font-semibold'>?</span>
            </h2>
            <CardWrapper>
                <Card
                    heading='Brak wieku minimalnego'
                    description='Aby skorzystać z naszej oferty wystarczy że posiadasz prawo jazdy przez min. 1 miesiąc! Przy odbiorze auta jedynie czego wymagamy to wcześniej wspomniane prawo jazdy oraz dowód osobisty - tak, to takie proste!'
                    icon={CardIcon.EIGHTEEN}
                />
                <Card
                    heading='Brak kaucji'
                    description='Oferujemy wynajem aut bez kaucji. Jeśli zdecydujesz się wpłacić zwrotną kaucje - otrzymasz rabat w wysokości 10%!'
                    icon={CardIcon.WALLET}
                />
                <Card
                    heading='Dostawa pod wskazany adres'
                    description='Jeżeli nie masz czasu, lub chęci samodzielnie odebrać auta, to zrobimy to za ciebie! Podaj tylko adres gdzie dostarczyć samochód a stworzymy dla ciebie indywidualną ofertę.'
                    icon={CardIcon.TRUCK}
                />
            </CardWrapper>
        </section>
    );
}
