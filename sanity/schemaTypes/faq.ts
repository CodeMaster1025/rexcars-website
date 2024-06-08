import { defineField, defineType } from "sanity";

export const faq = defineType({
    name: "faq",
    type: "document",
    title: "FAQ",

    fields: [
        defineField({
            name: "heading",
            title: "Nagłówek",
            type: "string",
            validation: rule => rule.required(),
        }),

        defineField({
            name: "content",
            title: "Zawartość",
            type: "string",
            validation: rule => rule.required(),
        })
    ]
})