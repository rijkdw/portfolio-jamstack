import { ZodError } from "zod";
import environmentVariablesSchema from "./environmentVariablesSchema";

export default function validateEnvironmentVariables(
  env: Record<string, string | undefined>
) {
  try {
    return environmentVariablesSchema.parse(env);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new Error(
        `Environment variables do not match schema:\n${JSON.stringify(env)}`
      );
    } else {
      throw error;
    }
  }
}
