import { type EnvironmentVariables } from "@portfolio/shared/src/envVars";

declare global {
  namespace NodeJS {
    // TODO fix somehow
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends EnvironmentVariables {}
  }
}
