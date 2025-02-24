import { fetchSections, fetchSiteData } from "@portfolio/content";
import PortfolioHeader from "./portfolioPageComponents/PortfolioHeader";
import PortfolioSubtitle from "./portfolioPageComponents/PortfolioSubtitle";
import PortfolioSection from "./portfolioPageComponents/PortfolioSection";

export default async function Home() {
  const sections = await fetchSections();
  const siteData = await fetchSiteData();

  return (
    <div>
      <PortfolioHeader>{siteData.name}</PortfolioHeader>
      <PortfolioSubtitle>
        <PortfolioSubtitle.Strong>
          {siteData.currentPosition.title}
        </PortfolioSubtitle.Strong>
        {" at "}
        <PortfolioSubtitle.Strong>
          {siteData.currentPosition.company}
        </PortfolioSubtitle.Strong>
      </PortfolioSubtitle>

      <div className="flex flex-col gap-12">
        {sections.map((section) => (
          <PortfolioSection key={section.slug} section={section} />
        ))}
      </div>
    </div>
  );
}
