import { IconEnum } from "@portfolio/shared/src/enums/IconEnum";

type CurrentPosition = {
  title: string;
  company: string;
};

type SocialMediaIcon = {
  url: string;
  icon: IconEnum;
};

export type PortfolioSiteData = {
  name: string;
  socialMediaIcons: SocialMediaIcon[];
  currentPosition: CurrentPosition;
  footerText: string;
};
