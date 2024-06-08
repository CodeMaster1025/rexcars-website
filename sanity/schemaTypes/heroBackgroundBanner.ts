import { defineField, defineType } from "sanity";

export const heroBackgroundBanner = defineType({
    name: 'images',
    title: "Zdjęcia",
    type: "document",

    fieldsets: [
        {
            name: "home",
            title: "Strona Główna"
        }
    ],

    fields: [
        defineField({
            name: "homepageBanner",
            type: "image",
            title: "Główny Banner",
            fieldset: "home",
            validation: rule => rule.required(),
        }),

        defineField({
            name: "aboutUs",
            type: "image",
            title: "Firma Prowadzona z Pasją",
            fieldset: "home",
            validation: rule => rule.required(),
        }),
    ],
});