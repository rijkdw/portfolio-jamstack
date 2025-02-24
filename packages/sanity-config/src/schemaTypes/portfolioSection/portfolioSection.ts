import { defineField, defineType } from "sanity";
import { MAX_SLUG_LENGTH } from "../constants";
import { ListIcon } from "@sanity/icons";

export default defineType({
  name: "portfolioSection",
  title: "Portfolio section",
  type: "document",
  icon: ListIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: MAX_SLUG_LENGTH,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "weight",
      title: "Weight",
      type: "number",
      initialValue: 1,
    }),
    defineField({
      name: "entries",
      title: "Entries",
      type: "array",
      of: [{ type: "portfolioSectionEntry" }, { type: "markdownContent" }],
      validation: (rule) => rule.min(1),
    }),
  ],
  orderings: [
    {
      title: "By Weight (appearance order on web)",
      name: "byWeight",
      by: [{ field: "weight", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      entries: "entries",
    },
    prepare(data) {
      const n = (data.entries ?? []).length;
      return {
        title: data.title,
        subtitle: `${n} ${n === 1 ? "entry" : "entries"}`,
      };
    },
  },
});
