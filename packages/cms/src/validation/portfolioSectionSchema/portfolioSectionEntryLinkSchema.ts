import { z } from "zod";

const portfolioSectionEntryLinkSchema = z.object({
  url: z.string().url(),
  text: z.string(),
  icon: z.string(), // TODO enum?
});

export type PortfolioSectionEntryLink = z.infer<
  typeof portfolioSectionEntryLinkSchema
>;

export default portfolioSectionEntryLinkSchema;
