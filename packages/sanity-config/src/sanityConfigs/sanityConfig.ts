import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "../schemaTypes";
import { EarthGlobeIcon, ListIcon } from "@sanity/icons";
import { media } from "sanity-plugin-media";
import { markdownSchema } from "sanity-plugin-markdown";
import sanitizeEnv from "./sanitizeEnv";

// TODO dirty dirty dirty
const { SANITY_DATASET, SANITY_PROJECT } = sanitizeEnv(process.env);

const structure = structureTool({
  structure: (s) =>
    s
      .list()
      .title("Content")
      .items([
        // singleton site data
        s
          .listItem()
          .icon(EarthGlobeIcon)
          .id("siteData")
          .title("Site data")
          .child(
            s.document().schemaType("siteData").documentId("siteDataSingleton")
          ),
        // other
        s
          .documentTypeListItem("portfolioSection")
          .title("Portfolio Sections")
          .icon(ListIcon),
        s.divider(),
      ]),
});

export default defineConfig({
  name: "default",
  title: "Portfolio",

  projectId: SANITY_PROJECT,
  dataset: SANITY_DATASET,

  plugins: [structure, visionTool(), media(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
});
