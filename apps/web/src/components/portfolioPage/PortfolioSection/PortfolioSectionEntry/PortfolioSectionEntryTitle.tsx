import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  title: string;
  url?: string;
};

export default function PortfolioSectionEntryTitle({ title, url }: Props) {
  const baseClasses = "text-lg font-bold";

  if (url === undefined) {
    return (
      <h3 className={`${baseClasses} text-everforest-fg-normal`}>{title}</h3>
    );
  }

  return (
    <h3>
      <a
        className={`${baseClasses} text-everforest-green-normal hover:text-everforest-green-bright duration-100 group`}
        href={url}
        target="_blank"
      >
        {title}
        <FontAwesomeIcon
          className="w-3 ml-[0.35rem] -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 duration-100 inline"
          icon={faArrowRight}
        />
      </a>
    </h3>
  );
}
