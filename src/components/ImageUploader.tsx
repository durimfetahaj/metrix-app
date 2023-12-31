import { storage } from "@/firebase/firebaseConfig";
import { ChangeEvent, useRef, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { DisplayImage } from "./DisplayImage";
import { useField, useFormikContext } from "formik";
import { Skeleton } from "./ui/skeleton";
import { UploadImage } from "./UploadImage";
import { Icons } from "./Icons";

interface DisplayImageProps {
  size?: "default" | "lg";
  initialValue?: string;
  name: string;
}

const ImageUploader = ({ size, name, initialValue }: DisplayImageProps) => {
  const [selectedImage, setSelectedImage] = useState(initialValue || "");
  const [isLoading, setIsLoading] = useState(false);
  const { setFieldValue } = useFormikContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    const file = event.target.files?.[0];
    const storageRef = ref(storage, `images/${file?.name}`);
    await uploadBytes(storageRef, file as Blob);
    const downloadURL = await getDownloadURL(storageRef);
    setSelectedImage(downloadURL);
    setFieldValue(name, [downloadURL]);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Skeleton className={`rounded-xl ${size ? "h-96 w-96" : "h-40 w-44"} `} />
    );
  }

  return (
    <div>
      {selectedImage ? (
        <div className="relative">
          <DisplayImage src={selectedImage} alt="uploaded-img" size={size} />
          <div className="absolute top-2 right-2 flex gap-2 cursor-pointer">
            <Icons.remove
              onClick={() => {
                setSelectedImage("");
                setFieldValue("image", "");
              }}
            />
            <Icons.uploadCloud onClick={() => fileInputRef.current?.click()} />
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="invisible w-0 h-0"
              onChange={handleImageUpload}
            />
          </div>
        </div>
      ) : (
        <div className="relative mb-5">
          <UploadImage
            onChange={handleImageUpload}
            size={size}
            className={hasError ? "border-red-500" : ""}
          />
          {hasError && (
            <p className="text-red-500 text-sm absolute -bottom-6 whitespace-nowrap">
              {meta.error}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
