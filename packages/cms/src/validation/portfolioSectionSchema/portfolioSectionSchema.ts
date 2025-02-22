import { z } from "zod";
import portfolioSectionEntrySchema from "./portfolioSectionEntrySchema";

const portfolioSectionSchema = z.object({
  title: z.string(),
  slug: z.string(),
  weight: z.number(),
  entries: z.array(
    z.union([
      z.any(), // for blocks
      portfolioSectionEntrySchema, // for entries
    ])
  ),
});

export type PortfolioSection = z.infer<typeof portfolioSectionSchema>;

export default portfolioSectionSchema;
