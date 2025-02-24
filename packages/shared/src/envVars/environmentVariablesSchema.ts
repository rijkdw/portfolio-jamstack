import { z } from "zod";
import { EnvironmentVariables } from "./EnvironmentVariables";

const environmentVariablesSchema: z.Schema<EnvironmentVariables> = z.object({
  SANITY_DATASET: z.string(),
  SANITY_PROJECT: z.string(),
  SANITY_API_VERSION: z.string(),
});

export default environmentVariablesSchema;
