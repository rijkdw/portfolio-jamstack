import sanityClient from "../sanityClient";
import { portfolioSiteDataSchema } from "../validation";

export default function getSiteData() {
  const result = sanityClient.fetch(`*[_type == "siteData"][0]`);
  return portfolioSiteDataSchema.parse(result);
}
