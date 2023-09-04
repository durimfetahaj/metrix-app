import { FC, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Label from "./grid/label";

const displayImageVariants = cva(
  "rounded-xl bg-white relative rounded-xl overflow-hidden border group h-full w-full",
  {
    variants: {
      size: {
        default: "h-40 w-44",
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
  interactive: boolean;
  label: {
    position: "bottom" | "center";
    title: string;
    amount: string;
  };
}

const DisplayImage: FC<DisplayImageProps> = ({
  className,
  size,
  src,
  alt,
  interactive = false,
  ...props
}) => {
  return (
    <div className={cn(displayImageVariants({ size, className }))} {...props}>
      <Image
        fill={true}
        src={src}
        alt={alt}
        priority
        className={cn("relative h-full w-full object-contain p-5", {
          "transition duration-300 ease-in-out group-hover:scale-105 p-20":
            interactive,
        })}
      />
      {props.label ? (
        <Label
          title={props.label.title}
          amount={props.label.amount}
          position={props?.label.position}
        />
      ) : null}
    </div>
  );
};

export { DisplayImage, displayImageVariants };
