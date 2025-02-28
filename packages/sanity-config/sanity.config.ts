import buildSanityConfig from "./src/sanityConfigs/buildSanityConfig";

const { SANITY_STUDIO_SANITY_DATASET, SANITY_STUDIO_SANITY_PROJECT} = process.env;

if (!SANITY_STUDIO_SANITY_DATASET || !SANITY_STUDIO_SANITY_PROJECT) {
  throw new Error("To run sanity dev, you need SANITY_STUDIO_SANITY_DATASET and SANITY_STUDIO_SANITY_PROJECT");
}

export default buildSanityConfig({
  dataset: SANITY_STUDIO_SANITY_DATASET,
  projectId: SANITY_STUDIO_SANITY_PROJECT,
});
