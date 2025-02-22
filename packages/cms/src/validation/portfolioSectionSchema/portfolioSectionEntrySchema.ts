import { z } from "zod";
import portfolioSectionEntryLinkSchema from "./portfolioSectionEntryLinkSchema";

const portfolioSectionEntrySchema = z.object({
  title: z.string(),
  url: z.string().url(),
  subtitle: z.string().optional(),
  date: z.string().optional(),
  image: z.string().optional(), // TODO verify wtf
  body: z.array(z.any()), // TODO verify wtf
  links: z.array(portfolioSectionEntryLinkSchema),
  tags: z.array(z.string()),
});

export type PortfolioSectionEntry = z.infer<typeof portfolioSectionEntrySchema>;

export default portfolioSectionEntrySchema;
