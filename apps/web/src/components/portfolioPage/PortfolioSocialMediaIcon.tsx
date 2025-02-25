import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLink,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconEnum } from "@portfolio/shared/src/enums/IconEnum";
import { PropsWithChildren } from "react";

type IconProp = IconEnum | `${IconEnum}`;

type Props = {
  icon: IconProp;
  url: string;
};

export default function PortfolioSocialMediaIcon({ icon, url }: Props) {
  return (
    <li>
      <a href={url} target="_blank">
        <FontAwesomeIcon
          className="w-6 sm:w-8 text-everforest-fg-normal hover:text-everforest-green-bright hover:scale-105 duration-100"
          icon={getIconDefinition(icon)}
        />
      </a>
    </li>
  );
}

function getIconDefinition(icon: IconProp): IconDefinition {
  switch (icon) {
    case IconEnum.chainlink:
      return faLink;
    case IconEnum.envelope:
      return faEnvelope;
    case IconEnum.github:
      return faGithub;
    case IconEnum.linkedin:
      return faLinkedin;
    default:
      throw new Error("Unknown icon " + icon);
  }
}

function PortfolioSocialMediaIconList({ children }: PropsWithChildren) {
  return <ul className="flex flex-row gap-5 items-center">{children}</ul>;
}

PortfolioSocialMediaIcon.List = PortfolioSocialMediaIconList;
