import { z } from "zod";

export function getZodErrors(
  result: ReturnType<z.ZodTypeAny["safeParse"]>
): string[] {
  if (result.success) return [];
  return result.error.issues.map((issue) => {
    return issue.message;
  });
}
