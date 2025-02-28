import StudioComponent from "../components/StudioComponent";

export default function StudioSubpage() {
  const {
    SANITY_PROJECT,
    SANITY_DATASET,
    STUDIO_HOMEPAGE_URL,
    STUDIO_REVALIDATE_URL,
  } = process.env;

  if (!SANITY_PROJECT || !SANITY_DATASET) {
    throw new Error("Needs SANITY_PROJECT and SANITY_DATASET");
  }

  return (
    <StudioComponent
      projectId={SANITY_PROJECT}
      dataset={SANITY_DATASET}
      homeUrl={STUDIO_HOMEPAGE_URL}
      revalidateUrl={STUDIO_REVALIDATE_URL}
    />
  );
}
