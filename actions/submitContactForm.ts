"use server";

import ContactEmail from "@/components/emails/ContactEmail";
import resend from "@/lib/resend";
import { cookies } from "next/headers";

export async function submitContactForm(formData: FormData) {
    const cookiesObj = await cookies();

    if (!cookiesObj.has("usedContactForm")) {
        const oneHour = 1000 * 60 * 60;
        cookiesObj.set("usedContactForm", "true", { expires: Date.now() + oneHour })

        const rawFormData = {
            name: formData.get("name") as string,
            surname: formData.get("surname") as string,
            email: formData.get("email") as string,
            subject: formData.get("subject") as string,
            content: formData.get("content") as string
        }

            const { error } = await resend.emails.send({
                from: "Powiadomienia RexCars <powiadomienia@updates.rexcars.pl>",
                to: ["kontakt@rexcars.pl"],
                subject: "Masz nową wiadomość",
                react: ContactEmail(rawFormData)
            });

            if (error) {
                console.log("ERROR WHILE SENDING A MESSAGE");
                console.log(error.message);
                return;
            }

            console.log("MESSAGE SENT SUCCESSFULLY")
            return;
    }
    else {
        console.log("RATE LIMITING");
        return;
    }

}