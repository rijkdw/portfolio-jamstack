import { defineField, defineType } from "sanity";
import quickDefineField from "./utils/quickDefineField";
import { ICON_OPTIONS } from "./constants";

export const currentPosition = defineType({
  name: "currentPosition",
  type: "object",
  fields: [
    quickDefineField("title", "Title", "string", "required"),
    quickDefineField("company", "Company", "string", "required"),
  ],
});

export const socialMediaIcon = defineType({
  name: "socialMediaIcon",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) =>
        rule.required().uri({ scheme: ["http", "https", "mailto", "tel"] }),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: ICON_OPTIONS,
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      icon: "icon",
      url: "url",
    },
    prepare({ icon, url }) {
      return { title: icon, subtitle: url };
    },
  },
});

export default defineType({
  name: "siteData",
  title: "Site data",
  type: "document",
  fields: [
    quickDefineField("name", "Name", "string", "required"),
    defineField({
      name: "socialMediaIcons",
      title: "Social media icons",
      type: "array",
      of: [{ type: "socialMediaIcon" }],
    }),
    quickDefineField(
      "currentPosition",
      "Current position",
      "currentPosition",
      "required"
    ),
    quickDefineField("footerText", "Footer text", "markdown", "required"),
  ],
  preview: {
    prepare() {
      return {
        title: "Global data",
      };
    },
  },
});
