import { cn } from "@/lib/utils";
import clsx from "clsx";

const Label = ({
  title,
  amount,
  position = "bottom",
}: {
  title: string;
  amount: string;
  position?: "bottom" | "center";
}) => {
  return (
    <div
      className={clsx(
        "absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label",
        {
          "lg:px-20 lg:pb-[35%]": position === "center",
        }
      )}
    >
      <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
          {title}
        </h3>
        <p className="flex-none rounded-full bg-brand-primary-100 p-2 text-xs text-white">
          {`${new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: "EUR",
            currencyDisplay: "narrowSymbol",
          }).format(parseFloat(amount))}`}
          <span className={cn("ml-1 inline")}>{`${"EUR"}`}</span>
        </p>
      </div>
    </div>
  );
};

export default Label;
