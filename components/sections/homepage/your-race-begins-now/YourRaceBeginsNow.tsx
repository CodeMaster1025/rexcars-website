import Button from "@/components/ui/OutlineButton";

export default function YourRaceBeginsNow() {
    return (
        <article className='flex w-full mt-[8%] bg-neutral-800 py-40'>
            <section className="md:w-[80%] max-w-[90%] mx-auto">
                <h2 className='text-neutral-200 md:text-5xl text-2xl mb-4'>
                    Twój wyścig zaczyna się <span className="text-blue-primary font-semibold">dziś.</span>
                </h2>
                <h4 className="text-neutral-400 md:text-xl text-md mb-7">Jeśli masz jakieś pytania, skontaktuj się z nami i pozwól nam rozwiać Twoje wątpliwości</h4>
                <Button value="Porozmawiajmy" href="/kontakt" scroll={true} styles="lg:w-[25%] w-[70%] sm:w-[55%] py-3"/>
            </section>
        </article>
    );
}
