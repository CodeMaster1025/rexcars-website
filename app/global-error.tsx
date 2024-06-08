"use client";

import Error from "next/error";
import Link from "next/link";

export default function GlobalError({
    error,
    reset
}: {
    error: Error & {digest?: string}
    reset: () => void
}) {
    <html>
        <body className="flex flex-col bg-black min-h-screen w-full">
            <h1 className="font-bold text-blue-primary md:text-5xl text-3xl text-center pt-[200px]">Coś poszło nie tak.</h1>
            <button
                className={
                    'flex flex-row group justify-center items-center font-semibold text-slate-800 bg-blue-primary shadow-lg rounded-lg ease-in-out duration-300 hover:scale-90 active:scale-[0.8] py-4 w-[40%] mx-auto mt-12' 
                }
                onClick={() => reset()}
            >
                Spróbuj ponownie
            </button>
            <Link href={"/"}>
            <button
                className={
                    'flex flex-row group justify-center items-center font-semibold text-slate-800 bg-blue-primary shadow-lg rounded-lg ease-in-out duration-300 hover:scale-90 active:scale-[0.8] py-4 w-[40%] mx-auto mt-12' 
                }
            >
                Wróć do strony głównej
            </button>
            </Link>
        </body>
    </html>
}