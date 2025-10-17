import { isUrlOrRelativePath } from "@/utils/is-url-or-relative-path";
import sanitizeHtml from "sanitize-html";
import { z } from "zod";

const PostBaseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must have 3 characters min")
    .max(120, "Title must have 120 characters max"),
  content: z
    .string()
    .trim()
    .min(3, "Must have a content")
    .transform((val) => sanitizeHtml(val)),
  author: z
    .string()
    .trim()
    .min(4, "Author must have 4 characters min")
    .max(100, "Author name can't have more than 100 characters"),
  excerpt: z
    .string()
    .trim()
    .min(3, "Excerpt must have 3 characters min")
    .max(200, "Excerpt must have 200 characters max"),
  coverImageUrl: z.string().trim().refine(isUrlOrRelativePath, {
    message: "Cover URL must be an URL or path to the image",
  }),
  published: z
    .union([
      z.literal("on"),
      z.literal("true"),
      z.literal("false"),
      z.literal(true),
      z.literal(false),
      z.literal(null),
      z.literal(undefined),
    ])
    .default(false)
    .transform((val) => val === "on" || val === "true" || val === true),
});

// PostCreateSchema: same as base for now
export const PostCreateSchema = PostBaseSchema;

// PostUpdateSchema: can include extra fields in the future (ex: id)
export const PostUpdateSchema = PostBaseSchema.extend({
  // id: z.string().uuid('Invalid ID'),
});
