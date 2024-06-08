export default function ContactMethodEntry({ children }: {children: React.ReactNode}) {
    return (
        <div className="flex flex-row md:basis-4/12 md:justify-center justify-between items-center group md:py-0 py-2">
            {children}
        </div>
    );
}