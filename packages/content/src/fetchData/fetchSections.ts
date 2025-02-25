import sanityClient from "../sanityClient";
import { portfolioSectionSchema } from "../validation";
import validate from "../validation/validate";

const SECTIONS_QUERY = `
*[_type == "portfolioSection" && length(entries) > 0] | order(weight desc) {
  ...,
  "slug": slug.current,
  "entries": entries[] {
    _type == "markdownContent" => {
      "type": "markdownContent",
      ...
    },
    _type == "portfolioSectionEntry" => {
      "type": "portfolioSectionEntry",
      ...,
      "links": coalesce(links, []),
      "tags": coalesce(tags, []),
      image != null => {"image": image.asset->url},
    }
  }
}
`;

export default async function getSections() {
  return validate(
    portfolioSectionSchema.array(),
    await sanityClient.fetch(SECTIONS_QUERY)
  );
}
