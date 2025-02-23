import sanityClient from "../sanityClient";
import { portfolioSiteDataSchema } from "../validation";

const SITE_DATA_QUERY = `
*[_type == "siteData"][0]{
  ...,
  "slug": slug.current,
  "socialMediaIcons": coalesce(socialMediaIcons, [])
}
`;

export default async function getSiteData() {
  const result = await sanityClient.fetch(SITE_DATA_QUERY);
  return portfolioSiteDataSchema.strip().parse(result);
}
