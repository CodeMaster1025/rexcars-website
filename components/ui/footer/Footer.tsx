type footerProps = {
    year: number;
};

export default function Footer({ year }: footerProps) {
    const copyright = String.fromCodePoint(0x00a9);
    return (
        <footer className='flex flex-row justify-between text-neutral-500 text-sm font-light max-w-[1200px] mx-auto antialiased'>
            <span>
                {copyright} {year} RexCars | Wszystkie prawa zastrzeżone.
            </span>
            <span className='flex flex-row'>
                Coded with ❤️ by{' '}
                <p className='font-medium text-blue-500 ps-1'> CloudBurst /></p>
            </span>
        </footer>
    );
}
