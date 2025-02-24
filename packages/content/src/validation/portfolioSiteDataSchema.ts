import { z } from "zod";
import { IconEnum } from "@portfolio/shared/src/enums/IconEnum";
import { PortfolioSiteData } from "../types/PortfolioSiteData";

const currentPositionSchema = z.object({
  title: z.string(),
  company: z.string(),
});

const socialMediaIconSchema = z.object({
  url: z.string(),
  icon: z.nativeEnum(IconEnum),
});

const portfolioSiteDataSchema: z.Schema<PortfolioSiteData> = z.object({
  name: z.string(),
  socialMediaIcons: z.array(socialMediaIconSchema),
  currentPosition: currentPositionSchema,
  footerText: z.string(),
});

export default portfolioSiteDataSchema;
