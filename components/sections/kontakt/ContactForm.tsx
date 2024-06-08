"use client";

import { submitContactForm } from "@/actions/submitContactForm";
import { toast } from "sonner";

export default function ContactForm() {

    const processForm = () => {
        toast.success("Wiadomość została wysłana!")
    }


    return (
        <form onSubmit={processForm} action={submitContactForm} className="flex flex-col md:w-[60%] w-[90%] mx-auto bg-neutral-800 justify-center rounded-xl md:mt-[175px] mt-[150px] drop-shadow-2xl shadow-black md:py-10 py-6">
            <h1 className="text-center md:text-4xl text-3xl font-light tracking-tighter text-neutral-100 py-4">NAPISZ DO NAS</h1>
            <div className="flex md:flex-row flex-col w-[60%] mx-auto justify-between pt-4">
                <input type="text" name="name" required placeholder="Imię..." className="md:w-[50%] w-full border-2 border-spacing-2 border-blue-primary py-2 md:px-4 px-1 rounded-lg bg-transparent focus:outline-none md:mr-1 text-neutral-200"/>
                <input type="text" name="surname" required placeholder="Nazwisko..." className="md:w-[50%] w-full border-2 border-blue-primary py-2 md:px-4 px-1 md:ml-1 rounded-lg mt-4 md:mt-0 bg-transparent focus:outline-none text-neutral-200"/>
            </div>
            <input type="email" name="email" required placeholder="Adres e-mail..." className="w-[60%] mx-auto border-2 border-spacing-2 border-blue-primary py-2 md:px-4 px-1 rounded-lg bg-transparent md:mb-0 mt-4 focus:outline-none text-neutral-200"/>
            <input type="text" name="subject" required placeholder="Temat wiadomości..." className="w-[60%] mx-auto border-2 border-spacing-2 border-blue-primary py-2 md:px-4 px-1 rounded-lg bg-transparent md:mb-0 mt-4 focus:outline-none text-neutral-200"/>
            <textarea name="content" required placeholder="Treść wiadomości..." className=" text-left w-[60%] min-h-[150px] text mx-auto border-2 border-spacing-2 border-blue-primary py-2 md:px-4 px-1 rounded-lg bg-transparent md:mb-0 mt-4 focus:outline-none text-neutral-200"/>
            <input type="submit" value={"WYŚLIJ"} className="md:text-2xl font-semibold text-black w-[60%] mx-auto my-4 bg-blue-primary py-2 rounded-3xl cursor-pointer hover:scale-105 ease-in-out duration-300"/>
        </form>
    );
}