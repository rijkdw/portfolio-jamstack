import { defineConfig, StudioComponentsPluginOptions } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "../schemaTypes";
import { EarthGlobeIcon, ListIcon } from "@sanity/icons";
import { media } from "sanity-plugin-media";

// required to fix styles in studio when mounted
import { markdownSchema } from "sanity-plugin-markdown/next";
import "easymde/dist/easymde.min.css";

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

type Params = {
  projectId: string;
  dataset: string;
  studioComponents?: StudioComponentsPluginOptions;
};

export default function buildSanityConfig({
  studioComponents,
  ...rest
}: Params) {
  return defineConfig({
    name: "default",
    title: "Portfolio",
    ...rest,

    plugins: [structure, visionTool(), media(), markdownSchema()],

    schema: {
      types: schemaTypes,
    },
    studio: {
      components: studioComponents,
    },
  });
}
