import { fetchSections, fetchSiteData } from "@portfolio/content";
import PortfolioPage from "_/components/PortfolioPage";

export default async function Home() {
  const sections = await fetchSections();
  const siteData = await fetchSiteData();

  return <PortfolioPage sections={sections} siteData={siteData} />;
}
