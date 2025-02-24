import { z } from "zod";
import { MarkdownContent } from "../types/MarkdownContent";

const markdownContentSchema: z.Schema<MarkdownContent> = z.object({
  type: z.literal("markdownContent"),
  content: z.string(),
});

export default markdownContentSchema;
