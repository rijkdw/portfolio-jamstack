import { EnvVariables } from "@portfolio/shared/src/envVars/EnvVariables";

declare global {
  namespace NodeJS {
    // TODO remove need for this
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends EnvVariables {}
  }
}
