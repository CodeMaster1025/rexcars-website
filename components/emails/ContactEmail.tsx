export type IContactEmailProps = {
    name: string;
    surname: string;
    email: string;
    subject: string;
    content: string;
}

export default function ContactEmail({name, surname, email, subject, content}: IContactEmailProps) {
    return (
        <div className="flex flex-col w-full justify-center bg-black">
            <h1 className="text-4xl font-semibold text-blue-primary text-center">Otrzymałeś nową wiadomość!</h1>
            <p className="text-xl text-neutral-200 text-center pt-10">Treść wiadomości:</p>
            <div className="flex flex-col w-[80%] mx-auto bg-neutral-700 justify-center mt-10">
                <h2 className="text-2xl text-neutral-200 text-center pt-5">Imię: {name}</h2>
                <h2 className="text-2xl text-neutral-200 text-center pt-5">Nazwisko: {surname}</h2>
                <h2 className="text-2xl text-neutral-200 text-center pt-5">E-mail: {email}</h2>
                <h2 className="text-2xl text-neutral-200 text-center pt-5">Temat: {subject}</h2>
                <h2 className="text-2xl text-neutral-200 text-center pt-5">Treść:</h2>
                <p className="text-xl text-neutral-200 text-center pt-10">{content}</p>
            </div>
        </div>
    )
}