import blockContent from "./blockContent";
import {
  portfolioSection,
  portfolioSectionEntry,
  portfolioSectionEntryLink,
} from "./portfolioSection";
import siteData, { currentPosition, socialMediaIcon } from "./siteData";

export const schemaTypes = [
  // site data
  siteData,
  currentPosition,
  socialMediaIcon,
  // sections
  portfolioSection,
  portfolioSectionEntry,
  portfolioSectionEntryLink,
  // misc
  blockContent,
];
