import { defineField, defineType } from "sanity";
import { quickDefineField } from "../utils";

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
        list: [
          { value: "github", title: "GitHub" },
          { value: "linkedin", title: "LinkedIn" },
          { value: "email", title: "Email" },
          { value: "link", title: "Link" },
        ],
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
