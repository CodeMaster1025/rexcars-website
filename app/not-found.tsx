import Button from "@/components/ui/Button";

export default function NotFound() {
    return (
        <article className="flex flex-col w-full h-screen">
            <h1 className="font-bold text-blue-primary md:text-5xl text-3xl text-center pt-[200px]">Nie znaleziono wyszukiwanej strony.</h1>
            <Button value="Wróć do strony głownej" href="/" styles="py-4 md:w-[40%] w-[60%] mx-auto mt-12"/>
        </article>
    )
}