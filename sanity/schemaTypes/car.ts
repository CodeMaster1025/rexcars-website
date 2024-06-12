import {defineField, defineType} from 'sanity'

export const car = defineType({
  name: 'car',
  type: 'document',
  title: 'Samochód',

  fields: [
    defineField({
      name: 'carMake',
      type: 'string',
      title: 'Marka',
      validation: rule => rule.required(),
    }),

    defineField({
      name: 'carModel',
      type: 'string',
      title: 'Model',
      validation: rule => rule.required(),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Adres Url',
      validation: rule => rule.required(),
      options: {
        source: (doc, options) => {
            return `wynajem-${(doc.carMake as string).toLowerCase()}-${(doc.carModel as string).toLowerCase()}`
        }
      }
    }),

    defineField({
      name: 'images',
      type: 'array',
      title: 'Zdjęcia',
      of: [{type: 'image'}],
      validation: rule => rule.required(),
    //   .custom((imgArray) => imgArray?.length >= 5 ? true : "Dodaj przynajmniej 5 zdjęć"),
    }),

    defineField({
      name: 'technicalSpec',
      type: 'array',
      title: 'Dane Techniczne',
      of: [
        {
          type: 'object',
          name: 'technicalSpecEntry',
          fields: [
            {
              type: 'string',
              name: 'specType',
              title: 'Typ danych',
              options: {
                list: [
                  {title: 'Silnik', value: 'ENGINE'},
                  {title: 'Skrzynia', value: 'TRANSMISSION'},
                  {title: 'Napęd', value: 'DRIVETRAIN'},
                  {title: 'Miejsca', value: 'SEATS'},
                  {title: '0-100', value: 'ACCELERATION'},
                ],
              },
            },
            {type: 'string', name: 'heading', title: 'Nagłówek Danych'},
            {type: 'string', name: 'content', title: 'Zawartość opisu'},
          ],
        },
      ],
      validation: rule => rule.required().custom((technicalSpecArray) => (technicalSpecArray as object[])?.length >= 5 ? true : "Musisz dodać opis dla kazdego typu."),
    }),

    defineField({
        name: "equipment",
        title: "Wyposażenie",
        type: "array",
        of: [
            {
                type: "string",
                title: "Nazwa"
            }
        ],
        validation: rule => rule.required(),
    }),

    defineField({
        name: 'priceChart',
        type: 'array',
        title: 'Cennik',
        of: [
          {
            type: 'object',
            name: 'priceChartEntry',
            fields: [
              {type: 'string', name: 'duration', title: 'Okres najmu'},
              {type: 'number', name: 'price', title: 'Cena'},
              {type: "number", name: "kilometersLimit", title: "Limit kilometrów"},
              {type: "boolean", name: "perDay", title: "Na dzień?"}
            ],
          },
        ],
        validation: rule => rule.required(),
    }),

    defineField({
        name: 'pageContent',
        type: 'array',
        title: 'Opis na stronie',
        of: [
          {
            type: 'object',
            name: 'contentEntry',
            fields: [
              {type: 'string', name: 'heading', title: 'Nagłówek'},
              {type: 'string', name: 'content', title: 'Tekst'},
            ],
          },
        ],
        validation: rule => rule.required(),
    }),

    defineField({
        name: "bottonHeading",
        type: "string",
        title: "Dolny nagłówek",
    })
      
  ],
})
