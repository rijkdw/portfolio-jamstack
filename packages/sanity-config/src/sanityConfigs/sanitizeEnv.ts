import {
  EnvironmentVariables,
  validateEnvironmentVariables,
} from "@portfolio/shared/src/envVars";

export default function sanitizeEnv(
  env: Record<string, string | undefined>
): EnvironmentVariables {
  return validateEnvironmentVariables(
    Object.fromEntries(
      Object.entries(env).map(([key, value]) => [
        key.replace(/^SANITY_STUDIO_/g, ""),
        value,
      ])
    )
  );
}
