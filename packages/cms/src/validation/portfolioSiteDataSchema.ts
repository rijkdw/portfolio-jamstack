import { z } from "zod";

const { string, object, array } = z;

const currentPositionSchema = object({
  title: string(),
  company: string(),
});

const socialMediaIconSchema = object({
  url: string(),
  icon: string(), // TODO enum?
});

const portfolioSiteDataSchema = object({
  name: string(),
  socialMediaIcons: array(socialMediaIconSchema),
  currentPosition: currentPositionSchema,
  footerText: string(), // TODO figure out wtf
});

export type PortfolioSiteData = z.infer<typeof portfolioSiteDataSchema>;

export default portfolioSiteDataSchema;
