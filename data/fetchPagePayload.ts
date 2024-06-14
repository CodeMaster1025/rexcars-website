import { sanityClient } from "@/lib/sanity";
import { TechnicalSpecEntry } from "@/types/Car";
import { ICarDescriptionPayload, IFAQEntryPayload, IImagesData, IPageContent, IPageHeaderPayload, IPageMetadata } from "@/types/pagePayload";
import { IPriceChartEntry } from "@/types/priceChart";

export async function fetchMetadataPayload(url: string) {
    const query = `
        *[slug.current == "${url}"] {
            carMake,
            carModel,
            images[0] {
                "url": asset->url
            }
        }
    `;

    try {
        const data = await sanityClient.fetch(query);
        return data[0] as IPageMetadata;
    
    }
    catch (err) {
        console.error(err);
        throw new Error("Error while fetching metadata payload.");
    }
}

export async function fetchAllPageSlugs() {
    const query = `
        *[_type == "car"] {
            "slug": slug.current
        }
    `;
    try {
        const data = await sanityClient.fetch(query);
        return data.map((page: any) => page.slug) as string[];
    } catch (err) {
        console.error(err);
        throw new Error("Error while fetching all page slugs.");
    }
}

export async function fetchPageHeaderPayload(url: string) {
    console.log("FETCHNING PAGE PAYLOAD");
    const query = `
        *[slug.current == "${url}"] {
            carMake,
            carModel
        }
    `;

    try {
        const data = await sanityClient.fetch(query);
        return data[0] as IPageHeaderPayload;
    } catch(err) {
        console.log("DATABASE ERROR: ", err)
        throw new Error("Failed to fetch page header payload.")
    }
}

export async function fetchPriceChartData(url: string) {
    const query = `
    *[slug.current == "${url}"] {
        priceChart[] {
          _key,
          price,
          kilometersLimit,
          perDay,
          duration
        }
      }
    `;

    try {
        const data = await sanityClient.fetch(query);
        return data[0]?.priceChart as IPriceChartEntry[];

    } catch(err) {

        console.error(err);
        throw new Error(`Error while fetching price chart data for ${url}`);
    }
}

export async function fetchSpecyficationCardData(url: string) {
    const query = `
    *[slug.current == "${url}"][0]  {
        technicalSpec[] {
          specType,
          heading,
          content,
          "key": _key
        }
      }
    `;

    try {
        const data = await sanityClient.fetch(query);
        return data?.technicalSpec as TechnicalSpecEntry[];

    } catch (err) {

        console.error(err);
        throw new Error(`Error while fetching Technical Spec for ${url}`)
    }
}

export async function fetchPageContentData(url: string) {
    const query = `
    *[slug.current == "${url}"][0] {
        pageContent[] {
          heading,
          content,
          "key": _key
        },
        bottonHeading
      }
      
    `;

    try {
        const data = await sanityClient.fetch(query);
        return data as ICarDescriptionPayload;

    } catch (err) {
        
        console.error(err);
        throw new Error(`Error while fetching Page Content for ${url}`)
    }
}

export async function fetchPageFAQData() {
    const query = `
    *[_type == "faq"] {
        heading,
          content,
          "key": _id
      }
    `;

    try {
        const data = await sanityClient.fetch(query);
        return data as IFAQEntryPayload[];

    } catch (err) {
        
        console.error(err);
        throw new Error(`Error while fetching Page FAQ Section data.`)
    }
}

export async function fetchPageImagesData(url: string) {
    const query = `
    *[slug.current == "${url}"][0] {
        images[] {
          "key": _key,
          "url": asset->url,
        }
      }
    `;

    try {
        const data = await sanityClient.fetch(query);
        return data as IImagesData;
    } catch (err) {
        console.log(`An error occured while fetching Images data for ${url}.`);
        throw new Error("Error while fetching Images data.");
    }
}