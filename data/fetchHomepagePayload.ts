import { sanityClient } from "@/lib/sanity";
import { IAboutUsImage, IHomepageBanner } from "@/types/homepagePayload";


export async function fetchHomepageBannerImage() {
    const query = `
        *[_type == "images"] {
            "homepageBanner": homepageBanner.asset->url,
        }
      `;

    try {
        const data = await sanityClient.fetch(query);
        return data[0] as IHomepageBanner;
    } catch(err) {
        console.error(err);
        return null;
    }
}

export async function fetchAboutUsImage() {
    const query = `
        *[_type == "images"] {
            "aboutUs": aboutUs.asset->url,
        }
      `;

    try {
        const data = await sanityClient.fetch(query);
        return data[0] as IAboutUsImage;
    } catch(err) {
        console.error(err);
        return null;
    }
}