import { z } from "zod";
import sanityClient from "../sanityClient";
import { portfolioSectionSchema } from "../validation";

const schema = z.array(portfolioSectionSchema);

export default async function getSections() {
  const result = await sanityClient.fetch(`*[_type == "section"]`);
  return schema.parse(result);
}
