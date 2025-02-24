import { type PortfolioSectionEntry } from "@portfolio/content/src/types/PortfolioSection";
import PortfolioSectionEntryTitle from "./PortfolioSectionEntryTitle";
import Markdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

type Props = {
  entry: PortfolioSectionEntry;
};

export default function PortfolioSectionEntry({ entry }: Props) {
  const { body, date, image, links, subtitle, tags, title, url } = entry;

  const hasImage = !!image;

  const Left = () => (
    <div className="flex-[2]">
      {hasImage ? (
        <img src={image} />
      ) : (
        <p className="uppercase text-everforest-fg-dim">{date}</p>
      )}
    </div>
  );

  const Right = () => (
    <div className="flex-[5]">
      <PortfolioSectionEntryTitle title={title} url={url} />

      {subtitle && (
        <p className="font-[1.05rem] text-everforest-fg-dim">{subtitle}</p>
      )}

      <div className="mt-3">
        <Markdown
          components={{
            p: ({ children }) => (
              <p className="text-everforest-fg-normal text-justify mb-2 last-of-type:mb-0">
                {children}
              </p>
            ),
          }}
        >
          {body}
        </Markdown>
      </div>

      {links.length > 0 && (
        <ul className="list-none flex gap-3 gap-y-0 flex-wrap mt-3">
          {links.map((link, index) => (
            <a
              className="font-bold text-everforest-fg-bright flex flex-row gap-1"
              key={link.url + index}
              href={link.url}
              target="_blank"
            >
              <FontAwesomeIcon className="w-4" icon={faLink} />
              <p>{link.text}</p>
            </a>
          ))}
        </ul>
      )}

      {tags.length > 0 && (
        <ul className="list-none flex gap-2 flex-wrap mt-3">
          {tags.map((tag, index) => (
            <li
              className="bg-everforest-green-dim rounded-full text-everforest-bg-normal px-3 py-1 font-mono text-[0.9rem] font-bold"
              key={tag + index}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="flex flex-row w-full">
      <Left />
      <Right />
    </div>
  );
}
