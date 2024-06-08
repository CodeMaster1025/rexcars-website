import { sanityClient } from "@/lib/sanity";
import ICar from "@/types/Car";

export default async function fetchCarsSectionData() {
    const query = `
    *[_type == "car"] {
        "key": _id,
        carMake,
        carModel,
        "url": slug.current,
        images[0] {
          "url": asset->url
        },
        technicalSpec[0..2] {
            heading,
            content,
            specType
        },
        "price": priceChart[0].price
      }
    `;
    
    try {
        const data = await sanityClient.fetch(query);
        return data as ICar[];
    } catch(err) {
        console.error(err);
        return null;
    }
}