import { z } from "zod";
import markdownContentSchema from "./markdownContentSchema";
import {
  PortfolioSection,
  PortfolioSectionEntry,
  PortfolioSectionEntryLink,
} from "../types/PortfolioSection";
import { IconEnum } from "@portfolio/shared/src/enums/IconEnum";

const portfolioSectionEntryLinkSchema: z.Schema<PortfolioSectionEntryLink> =
  z.object({
    url: z.string().url(),
    text: z.string(),
    icon: z.nativeEnum(IconEnum),
  });

const portfolioSectionEntrySchema: z.Schema<PortfolioSectionEntry> = z.object({
  title: z.string(),
  url: z.string().url().optional(),
  subtitle: z.string().optional(),
  date: z.string().optional(),
  image: z.string().optional(), // TODO verify wtf
  body: z.string(),
  links: z.array(portfolioSectionEntryLinkSchema),
  tags: z.array(z.string()),
});

const portfolioSectionSchema: z.Schema<PortfolioSection> = z.object({
  title: z.string(),
  slug: z.string(),
  weight: z.number(),
  entries: z.array(
    z.union([markdownContentSchema, portfolioSectionEntrySchema])
  ),
});

export default portfolioSectionSchema;
