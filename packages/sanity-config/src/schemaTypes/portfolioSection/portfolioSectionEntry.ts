import { defineField, defineType } from "sanity";
import { quickDefineField } from "../utils";
import { InlineIcon } from "@sanity/icons";

export default defineType({
  name: "portfolioSectionEntry",
  title: "Entry",
  type: "object",
  icon: InlineIcon,
  fields: [
    quickDefineField("title", "Title", "string", "required"),
    quickDefineField("url", "URL", "url"),
    quickDefineField("subtitle", "Subtitle", "string"),
    quickDefineField("date", "Date", "string"),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    quickDefineField("body", "Body", "blockContent", "required"),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "portfolioSectionEntryLink" }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
    prepare(data) {
      data.subtitle = data.subtitle ?? "(no subtitle)";
      return data;
    },
  },
});
