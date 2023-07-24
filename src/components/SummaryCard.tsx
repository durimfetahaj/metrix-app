import { SummaryCard } from "@/types/types";
import React from "react";

type Props = {
  data: SummaryCard[];
  icon?: JSX.Element;
  id: string;
  isClicked: string;
  setIsClicked: React.Dispatch<React.SetStateAction<string>>;
};

function SummaryCard({ data, icon, id, isClicked, setIsClicked }: Props) {
  return (
    <div
      className={`flex flex-col px-4 py-3 w-full gap-5 cursor-pointer ${
        isClicked === id
          ? "bg-brand-primary-100 text-white "
          : "bg-white text-black"
      } rounded-xl`}
      onClick={() => setIsClicked(id)}
    >
      {icon && icon}
      <div className="flex justify-between">
        {data?.map(({ title, value }) => {
          return (
            <div className="flex flex-col gap-2" key={title}>
              <p>{title}</p>
              <p>{value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SummaryCard;
