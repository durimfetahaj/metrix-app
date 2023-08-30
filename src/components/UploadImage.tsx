import { FC, HTMLAttributes, useRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Icons } from "./Icons";

const uploadImageVariants = cva(
  "relative rounded-xl border-solid border-gray-200 bg-white bg-brand-background border",
  {
    variants: {
      size: {
        default: "lg:h-40 lg:w-40 px-4 py-7",
        lg: "lg:h-96 px-4 py-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface UploadImageProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof uploadImageVariants> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadImage: FC<UploadImageProps> = ({
  className,
  size,
  onChange,
  ...props
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div className={cn(uploadImageVariants({ size, className }))} {...props}>
      <div
        className="h-full w-full cursor-pointer flex flex-col items-center justify-center"
        onClick={handleImageUpload}
      >
        <Image
          height={60}
          width={60}
          src="/images/upload-img-fallback.png"
          alt="upload-img-fallback"
          className={size === "lg" ? "mb-10" : "mb-3"}
        />
        <div className="flex gap-3">
          <Icons.uploadCloudBlue />
          <p className="text-sm text-brand-primary-100 mb-5">Upload Image</p>
        </div>
        {size === "lg" && (
          <p className="text-brand-black-30 text-sm text-center">
            Upload a cover image for your product. File Format {""}
            <span className="text-brand-black-90">jpeg, png</span> {""}
            Recommened Size{" "}
            <span className="text-brand-black-90">600x600 (1:1)</span>
          </p>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="invisible"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export { UploadImage, uploadImageVariants };
