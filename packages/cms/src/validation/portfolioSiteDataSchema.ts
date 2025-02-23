import { z } from "zod";

const currentPositionSchema = z.object({
  title: z.string(),
  company: z.string(),
});

const socialMediaIconSchema = z.object({
  url: z.string(),
  icon: z.string(), // TODO enum?
});

const portfolioSiteDataSchema = z.object({
  name: z.string(),
  socialMediaIcons: z.array(socialMediaIconSchema),
  currentPosition: currentPositionSchema,
  footerText: z.any(), // TODO figure out wtf
});

export type PortfolioSiteData = z.infer<typeof portfolioSiteDataSchema>;

export default portfolioSiteDataSchema;
