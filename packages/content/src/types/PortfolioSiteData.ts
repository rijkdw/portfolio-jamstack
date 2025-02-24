import { MarkdownContent } from "./MarkdownContent";

type CurrentPosition = {
  title: string;
  company: string;
};

type SocialMediaIcon = {
  url: string;
  icon: string; // TODO enum
};

export type PortfolioSiteData = {
  name: string;
  socialMediaIcons: SocialMediaIcon[];
  currentPosition: CurrentPosition;
  footerText: MarkdownContent;
};
