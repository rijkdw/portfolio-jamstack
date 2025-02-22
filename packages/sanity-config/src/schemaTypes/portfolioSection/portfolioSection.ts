import { defineField, defineType } from "sanity";
import { MAX_SLUG_LENGTH } from "../constants";
import { ListIcon } from "@sanity/icons";

export const blockContents = defineType({
  name: "blockContents",
  title: "Block Contents",
  type: "object",
  fields: [
    defineField({ name: "blocks", title: "Blocks", type: "blockContent" }),
  ],
});

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
      of: [
        { type: "portfolioSectionEntry" },
        {
          name: "Block content",
          type: "object",
          fields: [
            {
              name: "content",
              title: "content",
              type: "blockContent",
            },
          ],
          preview: {
            select: {
              content: "content",
            },
            prepare({ content }) {
              return {
                title: content
                  // @ts-expect-error idk how to make this work with the types Sanity expects
                  .flatMap(({ children }) => children.flatMap((c) => c.text))
                  .join(" "),
              };
            },
          },
        },
      ],
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
      const n = data.entries.length;
      return {
        title: data.title,
        subtitle: `${n} ${n > 1 ? "entries" : "entry"}`,
      };
    },
  },
});
