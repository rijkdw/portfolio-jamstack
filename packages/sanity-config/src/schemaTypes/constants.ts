import { IconEnum } from "@portfolio/shared/src/enums/IconEnum";

type IconOption = {
  value: IconEnum;
  title: string;
};

export const ICON_OPTIONS: IconOption[] = [
  { value: IconEnum.github, title: "GitHub" },
  { value: IconEnum.linkedin, title: "LinkedIn" },
  { value: IconEnum.envelope, title: "Envelope" },
  { value: IconEnum.chainlink, title: "Link" },
];

export const MAX_SLUG_LENGTH = 96;
