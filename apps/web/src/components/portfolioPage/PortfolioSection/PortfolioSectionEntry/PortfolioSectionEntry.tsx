import { type PortfolioSectionEntry } from "@portfolio/content/src/types/PortfolioSection";
import PortfolioSectionEntryTitle from "./PortfolioSectionEntryTitle";
import Markdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function PortfolioSectionEntry(props: PortfolioSectionEntry) {
  return (
    <div className="sm:flex sm:flex-row gap-4 w-full">
      <LeftPane {...props} />
      <RightPane {...props} />
      {props.image && (
        <Image
          className="border-everforest-green-normal border-2 rounded-sm sm:hidden max-w-60 w-full mt-4"
          src={props.image}
          alt={props.title}
          width={300}
          height={0}
        />
      )}
    </div>
  );
}

function LeftPane({ image, title, date }: PortfolioSectionEntry) {
  return (
    <div className="flex-[2]">
      {image ? (
        <Image
          className="border-everforest-green-normal border-2 rounded-sm hidden sm:block w-60 lg:w-full mt-1"
          src={image}
          alt={title}
          width={300}
          height={0}
        />
      ) : (
        <p className="uppercase text-everforest-fg-dim">{date}</p>
      )}
    </div>
  );
}

function RightPane({
  title,
  subtitle,
  url,
  body,
  links,
  tags,
}: PortfolioSectionEntry) {
  return (
    <div className="flex-[5]">
      <PortfolioSectionEntryTitle title={title} url={url} />
      {subtitle && (
        <p className="font-[1.05rem] text-everforest-fg-dim">{subtitle}</p>
      )}

      <div className="mt-2">
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
            <li key={link.url + index}>
              <a
                className="font-bold text-everforest-fg-bright hover:text-everforest-green-bright duration-100 flex flex-row gap-1"
                href={link.url}
                target="_blank"
              >
                <FontAwesomeIcon className="w-4" icon={faLink} />
                <p>{link.text}</p>
              </a>
            </li>
          ))}
        </ul>
      )}

      {tags.length > 0 && (
        <ul className="list-none flex gap-2 flex-wrap mt-3">
          {tags.map((tag, index) => (
            <li
              className="bg-everforest-green-dim opacity-75 rounded-full text-everforest-bg-normal px-3 py-[2px] font-mono text-[0.9rem] font-bold"
              key={tag + index}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
