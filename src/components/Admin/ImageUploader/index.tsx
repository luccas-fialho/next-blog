"use client";

import { uploadImageAction } from "@/actions/upload/upload-image-action";
import Button from "@/components/Button";
import { UploadIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { toast } from "react-toastify";

type ImageUploaderProps = {
  disabled?: boolean;
};

const ImageUploader = ({ disabled = false }: ImageUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState("");

  const handleUploadImage = () => {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  };

  const handleChange = () => {
    toast.dismiss();

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];
    if (!file) {
      setImageUrl("");
      return;
    }

    const IMAGE_UPLOAD_MAX_SIZE =
      Number(process.env.NEXT_PUBLIC_IMAGE_UPLOAD_MAX_SIZE) || 921600;

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableMaxSize = (IMAGE_UPLOAD_MAX_SIZE / 1024).toFixed(2);
      toast.error(
        "The image is too large. Max size is " + readableMaxSize + " KB"
      );
      fileInput.value = "";
      setImageUrl("");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    // TODO: upload the image to the server
    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(result.error);
        fileInput.value = "";
        setImageUrl("");
        return;
      }

      setImageUrl(result.url);
      toast.success("Image sent!");
    });

    fileInput.value = "";
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={handleUploadImage}
        type="button"
        className="self-start"
        disabled={isUploading || disabled}
      >
        <UploadIcon />
        Upload an image
      </Button>

      {!!imageUrl && (
        <div className="flex flex-col gap-4">
          <p>
            <b>URL:</b> {imageUrl}
          </p>

          {/* eslint-disable-next-line */}
          <img className="rounded-lg" src={imageUrl} alt="" />
        </div>
      )}

      <input
        onChange={handleChange}
        ref={fileInputRef}
        className="hidden"
        name="file"
        type="file"
        accept="image/*"
        disabled={isUploading || disabled}
      />
    </div>
  );
};

export default ImageUploader;
