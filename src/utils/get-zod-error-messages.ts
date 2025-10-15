import { z } from "zod";

export function getZodErrors(result: ReturnType<z.ZodTypeAny["safeParse"]>): string[] {
  if (result.success) return [];
  return result.error.issues.map(issue => {
    const path = issue.path.join(".");
    return path ? `${path}: ${issue.message}` : issue.message;
  });
}
