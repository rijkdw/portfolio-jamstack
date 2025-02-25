import { fetchSections, fetchSiteData } from "@portfolio/content";
import PortfolioTitle from "../components/portfolioPage/PortfolioTitle";
import PortfolioSubtitle from "../components/portfolioPage/PortfolioSubtitle";
import PortfolioSection from "../components/portfolioPage/PortfolioSection";
import PortfolioSocialMediaIcon from "_/components/portfolioPage/PortfolioSocialMediaIcon";
import PortfolioNavbar from "_/components/portfolioPage/PortfolioNavbar";

import "./portfolio.css";
import PortfolioFooter from "_/components/portfolioPage/PortfolioFooter";

export default async function Home() {
  const sections = await fetchSections();
  const siteData = await fetchSiteData();

  return (
    <div className="max-w-[1000px] mx-20 lg:mx-auto lg:flex flex-row py-16 gap-20">
      {/* Left */}
      <div className="flex flex-col justify-between flex-1 lg:sticky lg:top-20 lg:h-[80vh]">
        {/* Header and nav */}
        <div className="flex flex-col">
          <header className="mb-16">
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
            <PortfolioSocialMediaIcon.List>
              {siteData.socialMediaIcons.map(({ icon, url }) => (
                <PortfolioSocialMediaIcon
                  key={url + icon}
                  icon={icon}
                  url={url}
                />
              ))}
            </PortfolioSocialMediaIcon.List>
          </header>
          <PortfolioNavbar sections={sections} />
        </div>
        <PortfolioFooter className="hidden lg:block">
          {siteData.footerText}
        </PortfolioFooter>
      </div>

      {/* Right */}
      <div className="flex flex-col flex-1">
        <div className="flex flex-col gap-16">
          {sections.map((section) => (
            <PortfolioSection key={section.slug} section={section} />
          ))}
        </div>
      </div>

      <PortfolioFooter className="block lg:hidden mt-20">
        {siteData.footerText}
      </PortfolioFooter>
    </div>
  );
}
