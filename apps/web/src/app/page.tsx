import { fetchSections, fetchSiteData } from "@portfolio/content";
import PortfolioTitle from "../components/portfolioPage/PortfolioTitle";
import PortfolioSubtitle from "../components/portfolioPage/PortfolioSubtitle";
import PortfolioSection from "../components/portfolioPage/PortfolioSection";
import PortfolioSocialMediaIcon from "_/components/portfolioPage/PortfolioSocialMediaIcon";

export default async function Home() {
  const sections = await fetchSections();
  const siteData = await fetchSiteData();

  return (
    <div>
      <header>
        <PortfolioTitle>{siteData.name}</PortfolioTitle>
        <PortfolioSubtitle>
          <PortfolioSubtitle.Strong>
            {siteData.currentPosition.title}
          </PortfolioSubtitle.Strong>
          {" at "}
          <PortfolioSubtitle.Strong>
            {siteData.currentPosition.company}
          </PortfolioSubtitle.Strong>
        </PortfolioSubtitle>
        <PortfolioSocialMediaIcon.Row>
          {siteData.socialMediaIcons.map(({ icon, url }) => (
            <PortfolioSocialMediaIcon key={url + icon} icon={icon} url={url} />
          ))}
        </PortfolioSocialMediaIcon.Row>
      </header>

      <div className="flex flex-col gap-16">
        {sections.map((section) => (
          <PortfolioSection key={section.slug} section={section} />
        ))}
      </div>
    </div>
  );
}
