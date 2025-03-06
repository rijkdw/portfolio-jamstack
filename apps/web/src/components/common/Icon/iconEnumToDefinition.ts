import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLink,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { IconEnum } from "@portfolio/shared/src/enums/IconEnum";

type IconProp = IconEnum | `${IconEnum}`;

export default function iconEnumToDefinition(icon: IconProp): IconDefinition {
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
