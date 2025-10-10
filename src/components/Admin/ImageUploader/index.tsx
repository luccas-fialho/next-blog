"use client";

import { uploadImageAction } from "@/actions/post/upload-image-action";
import Button from "@/components/Button";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants";
import { UploadIcon } from "lucide-react";
import { useRef, useTransition } from "react";
import { toast } from "react-toastify";

const ImageUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();

  const handleUploadImage = () => {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  };

  const handleChange = () => {
    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];
    if (!file) return;
    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOAD_MAX_SIZE / 1024;
      toast.error(
        "The image is too large. Max size is " + readableMaxSize + " KB"
      );
      fileInput.value = "";
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    // TODO: upload the image to the server
    startTransition(async () => {
      const result = await uploadImageAction();
      console.log(result);
    });

    fileInput.value = "";
    toast.success("Image uploaded successfully (not really, this is a demo)");
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={handleUploadImage}
        type="button"
        className="self-start"
        disabled={isUploading}
      >
        <UploadIcon />
        Upload an image
      </Button>
      <input
        onChange={handleChange}
        ref={fileInputRef}
        className="hidden"
        name="file"
        type="file"
        accept="image/*"
      />
    </div>
  );
};

export default ImageUploader;
