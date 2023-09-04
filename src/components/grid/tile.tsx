import { cn } from "@/lib/utils";
import Image from "next/image";

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: "bottom" | "center";
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div className="bg-brand-red border-2 rounded-lg bg-white h-full w-full p-4">
      {props?.src && <Image className="object-contain" {...props} />}
    </div>
  );
}
