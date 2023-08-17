import React from "react";

type Props = {
  firstItem: { title: string; value: string | undefined };
  secondItem: { title: string; value: string };
  children: React.ReactNode;
};

const ItemInfoSummary = ({ firstItem, secondItem, children }: Props) => {
  return (
    <div className="flex gap-6">
      <p>
        {firstItem?.title} {""}
        <span className="text-brand-black-30">{firstItem?.value}</span>
      </p>
      <p>
        {secondItem?.title} {""}
        <span className="text-brand-black-30">{secondItem?.value}</span>
      </p>
      {children}
    </div>
  );
};

export default ItemInfoSummary;
