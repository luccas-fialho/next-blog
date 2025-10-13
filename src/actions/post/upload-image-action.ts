"use server";

import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants";

type UploadImageActionResult = {
  url: string;
  error: string;
};

export const uploadImageAction = async (
  formData: FormData
): Promise<UploadImageActionResult> => {
  const makeResult = ({ url = "", error = "" }) => {
    return { url, error };
  };

  if (!(formData instanceof FormData)) {
    return makeResult({ error: "Invalid data." });
  }

  const file = formData.get("file");

  if (!(file instanceof File)) {
    return makeResult({ error: "Invalid data." });
  }

  if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
    return makeResult({ error: "File size too big!" });
  }

  if (!file.type.startsWith("image/")) {
    return makeResult({ error: "Invalid image." });
  }

  return makeResult({ url: "URL" });
};
