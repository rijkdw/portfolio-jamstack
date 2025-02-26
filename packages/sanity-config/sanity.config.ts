import buildSanityConfig from "./src/sanityConfigs/buildSanityConfig";

const { SANITY_DATASET, SANITY_PROJECT } = process.env;

export default buildSanityConfig({
  dataset: SANITY_DATASET,
  projectId: SANITY_PROJECT,
});
