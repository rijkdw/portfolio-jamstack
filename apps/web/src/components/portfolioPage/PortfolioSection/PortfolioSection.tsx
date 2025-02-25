import {
  type PortfolioSectionEntry as PortfolioSectionEntryType,
  type PortfolioSection,
} from "@portfolio/content/src/types/PortfolioSection";
import { MarkdownContent } from "@portfolio/content/src/types/MarkdownContent";
import PortfolioSectionEntryComponent from "./PortfolioSectionEntry";
import PortfolioSectionMarkdownContent from "./PortfolioSectionMarkdownContent";

type Props = {
  section: PortfolioSection;
};

export default function PortfolioSection({ section }: Props) {
  const { entries, slug, title } = section;

  return (
    <section id={slug} className="flex flex-col">
      <h2 className="uppercase text-everforest-fg-bright font-bold text-lg tracking-[2px]">
        {title}
      </h2>
      <div className="flex flex-col gap-12 mt-4">
        {entries.map((item) => (
          <PortfolioSectionChildWrapper key={getKey(item)} item={item} />
        ))}
      </div>
    </section>
  );
}

function getKey(item: PortfolioSectionEntryType | MarkdownContent) {
  switch (item.type) {
    case "markdownContent":
      return item.content;
    case "portfolioSectionEntry":
      return item.title;
    default:
      throw new Error("");
  }
}

type WrapperProps = { item: PortfolioSectionEntryType | MarkdownContent };

function PortfolioSectionChildWrapper({ item }: WrapperProps) {
  switch (item.type) {
    case "markdownContent":
      return (
        <PortfolioSectionMarkdownContent>
          {item.content}
        </PortfolioSectionMarkdownContent>
      );
    case "portfolioSectionEntry":
      return <PortfolioSectionEntryComponent entry={item} />;
    default:
      throw new Error("");
  }
}
