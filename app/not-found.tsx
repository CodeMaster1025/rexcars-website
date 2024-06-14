import Button from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nie znaleziono strony",
    description: "Nie znaleziono strony, której szukasz. Sprawdź, czy adres URL jest poprawny.",
    robots: "noindex, nofollow",
    openGraph: {
        title: "Nie znaleziono strony | RexCars",
        description: "Nie znaleziono strony, której szukasz. Sprawdź, czy adres URL jest poprawny.",
        type: "website",
        siteName: "Wypożyczalnia samochodów sportowych | RexCars",
        locale: "pl/PL"
    }

};

export default function NotFound() {
    return (
        <article className="flex flex-col w-full h-screen">
            <h1 className="font-bold text-blue-primary md:text-5xl text-3xl text-center pt-[200px]">Nie znaleziono wyszukiwanej strony.</h1>
            <Button value="Wróć do strony głownej" href="/" styles="py-4 md:w-[40%] w-[60%] mx-auto mt-12"/>
        </article>
    )
}