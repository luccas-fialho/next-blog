"use server";

import { mkdir, writeFile } from "fs/promises";
import { extname, resolve } from "path";

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

  const IMAGE_UPLOAD_MAX_SIZE =
    Number(process.env.NEXT_PUBLIC_IMAGE_UPLOAD_MAX_SIZE) || 921600;

  if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
    return makeResult({ error: "File size too big!" });
  }

  if (!file.type.startsWith("image/")) {
    return makeResult({ error: "Invalid image." });
  }

  const imageExtension = extname(file.name);
  const uniqueImageName = `${Date.now()}${imageExtension}`;

  const IMAGE_UPLOAD_DIR = process.env.IMAGE_UPLOAD_DIR || "uploads";
  const uploadFullPath = resolve(process.cwd(), "public", IMAGE_UPLOAD_DIR);
  await mkdir(uploadFullPath, { recursive: true });

  const fileArrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(fileArrayBuffer);

  const fileFullPath = resolve(uploadFullPath, uniqueImageName);

  await writeFile(fileFullPath, buffer);

  const IMAGE_SERVER_URL =
    process.env.IMAGE_SERVER_URL || "http://localhost:3000/uploads";
  const url = `${IMAGE_SERVER_URL}/${uniqueImageName}`;

  return makeResult({ url });
};
