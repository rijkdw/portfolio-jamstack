import sanityClient from "../sanityClient";
import { portfolioSiteDataSchema } from "../validation";
import validate from "../validation/validate";

const SITE_DATA_QUERY = `
*[_type == "siteData"][0]{
  ...,
  "slug": slug.current,
  "socialMediaIcons": coalesce(socialMediaIcons, [])
}
`;

export default async function getSiteData() {
  return validate(
    portfolioSiteDataSchema,
    await sanityClient.fetch(SITE_DATA_QUERY)
  );
}
