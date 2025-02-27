import { fetchSections, fetchSiteData } from "@portfolio/content";
import { type PortfolioSection as PortfolioSectionType } from "@portfolio/content/src/types/PortfolioSection";
import { type PortfolioSiteData } from "@portfolio/content/src/types/PortfolioSiteData";

import PortfolioTitle from "../components/portfolioPage/PortfolioTitle";
import PortfolioSubtitle from "../components/portfolioPage/PortfolioSubtitle";
import PortfolioSection from "../components/portfolioPage/PortfolioSection";
import PortfolioSocialMediaIcon from "../components/portfolioPage/PortfolioSocialMediaIcon";
import PortfolioNavbar from "../components/portfolioPage/PortfolioNavbar";
import PortfolioFooter from "../components/portfolioPage/PortfolioFooter";

import "./portfolio.css";

export default async function Home() {
  const sections = await fetchSections();
  const siteData = await fetchSiteData();

  return <PortfolioPage sections={sections} siteData={siteData} />;
}

type PortfolioPageProps = {
  sections: PortfolioSectionType[];
  siteData: PortfolioSiteData;
};

function PortfolioPage({ sections, siteData }: PortfolioPageProps) {
  return (
    <div className="max-w-[1128px] px-8 sm:px-16 py-10 sm:py-20 mx-auto lg:flex flex-row gap-20">
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

        <PortfolioFooter className="hidden lg:block w-4/5">
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
