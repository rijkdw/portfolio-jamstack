import {
  type PortfolioSectionEntry as PortfolioSectionEntryType,
  type PortfolioSection,
} from "@portfolio/content/src/types/PortfolioSection";
import { MarkdownContent } from "@portfolio/content/src/types/MarkdownContent";
import PortfolioSectionTitle from "./PortfolioSectionTitle";
import PortfolioSectionEntryComponent from "./PortfolioSectionEntry";

type Props = {
  section: PortfolioSection;
};

export default function PortfolioSection({ section }: Props) {
  const { entries, slug, title } = section;

  return (
    <div className="flex flex-col gap-4">
      <PortfolioSectionTitle id={slug}>{title}</PortfolioSectionTitle>
      {entries.map((item) => (
        <PortfolioSectionEntryWrapper key={getKey(item)} item={item} />
      ))}
    </div>
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

function PortfolioSectionEntryWrapper({ item }: WrapperProps) {
  switch (item.type) {
    case "markdownContent":
      return <p>{item.content}</p>;
    case "portfolioSectionEntry":
      return <PortfolioSectionEntryComponent entry={item} />;
    default:
      throw new Error("");
  }
}
