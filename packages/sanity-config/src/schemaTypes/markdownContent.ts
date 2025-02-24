import { defineField, defineType } from "sanity";

export default defineType({
  type: "object",
  name: "markdownContent",
  title: "Markdown",
  fields: [
    defineField({
      type: "markdown",
      name: "content",
      title: "Content",
    }),
  ],
  preview: {
    select: { content: "content" },
    prepare: ({ content }) => ({
      title: content,
    }),
  },
});
