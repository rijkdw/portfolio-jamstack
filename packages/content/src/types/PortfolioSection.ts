import { IconEnum } from "@portfolio/shared/src/enums/IconEnum";
import { MarkdownContent } from "./MarkdownContent";

export type PortfolioSection = {
  title: string;
  slug: string;
  weight: number;
  entries: (PortfolioSectionEntry | MarkdownContent)[];
};

export type PortfolioSectionEntry = {
  type: "portfolioSectionEntry";
  title: string;
  url?: string;
  subtitle?: string;
  date?: string;
  image?: string;
  body: string;
  links: PortfolioSectionEntryLink[];
  tags: string[];
};

export type PortfolioSectionEntryLink = {
  url: string;
  text: string;
  icon: IconEnum;
};
