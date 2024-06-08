import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port: "",
                pathname: `/images/${process.env.SANITY_PROJECT_ID}/production/**`
            }
        ]
    }
};

export default withPlaiceholder(config)