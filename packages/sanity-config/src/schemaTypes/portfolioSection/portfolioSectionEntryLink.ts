import { defineField, defineType } from "sanity";
import quickDefineField from "../utils/quickDefineField";
import { ICON_OPTIONS } from "../constants";

export default defineType({
  name: "portfolioSectionEntryLink",
  title: "Link",
  type: "object",
  fields: [
    quickDefineField("url", "URL", "url", "required"),
    quickDefineField("text", "Text", "string", "required"),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: ICON_OPTIONS,
      },
      initialValue: "link",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      text: "text",
      url: "url",
    },
    prepare(value) {
      return { title: value.text, subtitle: value.url };
    },
  },
});
