import { getZodErrors } from "@/utils/get-zod-error-messages";
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

const obj = {
  $ACTION_REF_1: "",
  "$ACTION_1:0":
    '{"id":"7fd4f5986fbb7dc716db50c0841645acf0994e7f4f","bound":"$@1"}',
  "$ACTION_1:1":
    '[{"formState":{"id":"99f8add4-7684-4c16-a316-616271db199e","slug":"rotina-matinal-de-pessoas-altamente-eficazes","title":"Rotina matinal de pessoas altamente eficazes","excerpt":"O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.","author":"Isabela Nunes","content":"O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.","coverImageUrl":"/images/bryen_8.png","createdAt":"2025-04-08T00:24:38.616Z","published":true},"errors":[]}]',
  $ACTION_KEY: "ke0b291b3048c7831ac76473e268024cf",
  id: "99f8add4-7684-4c16-a316-616271db199e",
  slug: "rotina-matinal-de-pessoas-altamente-eficazes",
  author: "Isabela Nunes",
  title: "Rotina matinal de pessoas altamente eficazes",
  excerpt:
    "O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.",
  content:
    "O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.",
  file: {
    size: 0,
    type: "application/octet-stream",
    name: "undefined",
    lastModified: 1760463329569,
  },
  coverImageUrl: "",
  published: "on",
};

const zodParsedObj = PostCreateSchema.safeParse(obj);

if (!zodParsedObj.success) {
  const errors = getZodErrors(zodParsedObj);
  console.log(errors);
}
