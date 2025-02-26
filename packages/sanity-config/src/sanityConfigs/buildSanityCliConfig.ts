import { defineCliConfig } from "sanity/cli";

type Params = {
  projectId: string;
  dataset: string;
};

export default function buildSanityCliConfig(params: Params) {
  return defineCliConfig({
    api: params,
    autoUpdates: true,
  });
}
