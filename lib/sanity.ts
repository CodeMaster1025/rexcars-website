import { createClient } from 'next-sanity';

export const sanityClient = createClient({
    dataset: "production",
    projectId: process.env.SANITY_PROJECT_ID || "ERROR",
    apiVersion: "2024-05-20",
    useCdn: process.env.ENVIROMENT === "PRODUCTION" ? true : false,
});