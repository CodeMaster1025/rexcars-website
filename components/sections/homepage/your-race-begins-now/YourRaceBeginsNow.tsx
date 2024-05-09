import Button from "@/components/ui/OutlineButton";

export default function YourRaceBeginsNow() {
    return (
        <article className='flex w-full mt-[8%] bg-neutral-800 py-40'>
            <section className="w-[80%] mx-auto">
                <h2 className='text-neutral-200 text-5xl mb-4'>
                    Twój wyścig zaczyna się <span className="text-blue-primary font-semibold">dziś.</span>
                </h2>
                <h4 className="text-neutral-400 text-xl mb-7">Jeśli masz jakieś pytania, skontaktuj się z nami i pozwól nam rozwiać Twoje wątpliwości</h4>
                <Button value="Porozmawiajmy" href="/kontakt" styles="w-[25%] py-3"/>
            </section>
        </article>
    );
}
