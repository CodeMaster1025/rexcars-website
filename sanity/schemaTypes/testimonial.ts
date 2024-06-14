// An export constant created just like other schema types, but with following fields:
// - name: "testimonial"
// - title: "Opinie klientów"
// - type: "document"
// - fields: array of fields:
//   - name: "content"
//   - title: "Zawartość"
//   - type: "string"
//   - validation: required
//   - name: "rented_car"
//   - title: "Samochód"
//   - type: "string"
//   - validation: required
//   - name: "rating"
//   - title: "Ocena"
//   - type: "number"
//   - validation: required, min 1, max 5
//   - name: "customer"
//   - title: "Klient"
//   - type: "string"

import { defineField, defineType } from "sanity";

export const testimonial = defineType({
    name: "testimonial",
    title: "Opinie klientów",
    type: "document",

    fields: [
        defineField({
            name: "content",
            title: "Zawartość",
            type: "string",
            validation: rule => rule.required(),
        }),

        defineField({
            name: "rented_car",
            title: "Samochód",
            type: "string",
            validation: rule => rule.required(),
        }),

        defineField({
            name: "rating",
            title: "Ocena",
            type: "number",
            validation: rule => rule.required().min(1).max(5),
        }),

        defineField({
            name: "customer",
            title: "Klient",
            type: "string",
        })
    ]
})