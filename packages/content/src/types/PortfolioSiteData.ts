import { IconEnum } from "@portfolio/shared/src/enums/IconEnum";

export type CurrentPosition = {
  title: string;
  company: string;
};

export type SocialMediaIcon = {
  url: string;
  icon: IconEnum;
};

export type PortfolioSiteData = {
  name: string;
  socialMediaIcons: SocialMediaIcon[];
  currentPosition: CurrentPosition;
  footerText: string;
};
