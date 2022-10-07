import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const sanity = SanityClient({
    projectId: process.env.REACT_APP_PROJECT_ID,
    dataset:"production",
    apiVersion:"2022-02-01",
    useCdn: true,
    token: process.env.REACT_APP_PROJECT_TOKEN,
});


const builder = ImageUrlBuilder(sanity);

export const urlFor = (source) => builder.image(source);