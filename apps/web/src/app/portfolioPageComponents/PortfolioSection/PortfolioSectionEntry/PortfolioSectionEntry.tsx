import { type PortfolioSectionEntry } from "@portfolio/content/src/types/PortfolioSection";
import PortfolioSectionEntryTitle from "./PortfolioSectionEntryTitle";
import Markdown from "react-markdown";

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

      <Markdown
        components={{
          p: ({ children }) => (
            <p className="text-everforest-fg-normal">{children}</p>
          ),
        }}
      >
        {body}
      </Markdown>

      <ul className="list-none flex gap-2 flex-wrap">
        {links.map((link, index) => (
          <a key={link.url + index} href={link.url}>
            <p className="font-bold text-everforest-fg-bright">
              ({link.icon}) {link.text}
            </p>
          </a>
        ))}
      </ul>

      <ul className="list-none flex gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <li
            className="bg-everforest-green-dim rounded-full text-everforest-bg-normal px-3 py-1 font-mono"
            key={tag + index}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex flex-row w-full">
      <Left />
      <Right />
    </div>
  );
}
