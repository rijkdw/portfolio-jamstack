import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { EarthGlobeIcon, ListIcon } from "@sanity/icons";
import { media } from "sanity-plugin-media";

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
          .child(s.document().schemaType("siteData").documentId("siteData")),
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

  projectId: "sjpys6vt",
  dataset: "production",

  plugins: [structure, visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
});
