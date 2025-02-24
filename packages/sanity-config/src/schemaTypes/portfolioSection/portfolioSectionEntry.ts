import { defineField, defineType } from "sanity";
import quickDefineField from "../utils/quickDefineField";

export default defineType({
  name: "portfolioSectionEntry",
  title: "Portfolio Section Entry",
  type: "object",
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
    quickDefineField("body", "Body", "markdown", "required"),
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
