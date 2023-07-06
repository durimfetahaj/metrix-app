import { FC, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Icons } from "./Icons";

const displayImageVariants = cva(
  "rounded-xl bg-white relative rounded-xl overflow-hidden border",
  {
    variants: {
      size: {
        default: "h-40 w-40",
        lg: "h-96 w-96",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface DisplayImageProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof displayImageVariants> {
  src: string;
  alt: string;
}

const DisplayImage: FC<DisplayImageProps> = ({
  className,
  size,
  src,
  alt,
  ...props
}) => {
  return (
    <div className={cn(displayImageVariants({ size, className }))} {...props}>
      <Image fill={true} src={src} alt={alt} />
    </div>
  );
};

export { DisplayImage, displayImageVariants };
