"use client";

import Button from "@/components/Button";
import { UploadIcon } from "lucide-react";
import { useRef } from "react";

const ImageUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadImage = () => {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={handleUploadImage} type="button" className="self-start">
        <UploadIcon />
        Upload an image
      </Button>
      <input
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
