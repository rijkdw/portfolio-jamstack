import { createClient } from "@sanity/client";

export default createClient({
  projectId: "sjpys6vt",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-02-22",
});
