import buildSanityCliConfig from "./src/sanityConfigs/buildSanityCliConfig";

const { SANITY_DATASET, SANITY_PROJECT } = process.env;

export default buildSanityCliConfig({
  dataset: SANITY_DATASET,
  projectId: SANITY_PROJECT,
});
