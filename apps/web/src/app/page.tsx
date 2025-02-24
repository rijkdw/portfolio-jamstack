import { fetchSections, fetchSiteData } from "@portfolio/content";

export default async function Home() {
  const sections = await fetchSections();
  const siteData = await fetchSiteData();

  return (
    <div>
      <p>{JSON.stringify(sections)}</p>
      <p>{JSON.stringify(siteData)}</p>
    </div>
  );
}
