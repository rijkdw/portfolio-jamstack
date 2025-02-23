import sanityClient from "../sanityClient";
import { portfolioSectionSchema } from "../validation";
import validate from "../validation/validate";

const SECTIONS_QUERY = `
*[_type == "portfolioSection"] | order(weight desc) {
  ...,
  "slug": slug.current,
  "entries": entries[] {
    _type == "markdownContent" => {
      ...
    },
    _type == "portfolioSectionEntry" => {
      ...,
      "links": coalesce(links, []),
      "tags": coalesce(tags, []),
    }
  }
}
`;

export default async function getSections() {
  const result = await sanityClient.fetch(SECTIONS_QUERY);
  return validate(portfolioSectionSchema.array(), result);
}
