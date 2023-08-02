import { SummaryCard } from "@/types/types";
import React from "react";

type Props = {
  data: SummaryCard[];
  icon?: JSX.Element;
};

function SummaryCard({ data, icon }: Props) {
  return (
    <div
      className={`flex flex-col justify-between px-4 py-3 w-full gap-5 bg-white rounded-xl`}
    >
      {icon && icon}
      <div className="flex justify-between">
        {data?.map(({ title, value }) => {
          return (
            <div className="flex flex-col gap-2" key={title}>
              <p className="text-brand-black-30 text-sm">{title}</p>
              <p>{value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SummaryCard;
