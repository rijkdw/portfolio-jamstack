import {
  type PortfolioSectionEntry as PortfolioSectionEntryType,
  type PortfolioSection,
} from "@portfolio/content/src/types/PortfolioSection";
import { MarkdownContent } from "@portfolio/content/src/types/MarkdownContent";
import PortfolioSectionTitle from "./PortfolioSectionTitle";
import PortfolioSectionEntryComponent from "./PortfolioSectionEntry";
import PortfolioSectionMarkdownContent from "./PortfolioSectionMarkdownContent";

type Props = {
  section: PortfolioSection;
};

export default function PortfolioSection({ section }: Props) {
  const { entries, slug, title } = section;

  return (
    <section className="flex flex-col">
      <PortfolioSectionTitle id={slug}>{title}</PortfolioSectionTitle>
      <div className="flex flex-col gap-8 mt-4">
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
