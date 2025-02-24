import { createClient } from "@sanity/client";

const { SANITY_DATASET, SANITY_PROJECT, SANITY_API_VERSION } = process.env;

export default createClient({
  projectId: SANITY_PROJECT,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true,
});
