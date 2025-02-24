import { defineCliConfig } from "sanity/cli";
import sanitizeEnv from "./sanitizeEnv";

const { SANITY_DATASET, SANITY_PROJECT } = sanitizeEnv(process.env);

export default defineCliConfig({
  api: {
    projectId: SANITY_PROJECT,
    dataset: SANITY_DATASET,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
});
