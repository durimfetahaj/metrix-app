import React from "react";
import { Switch as ShadSwitch } from "@/components/ui/switch";
type Props = {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

const Switch = ({ id, label, ...rest }: Props) => {
  return (
    <div className="flex gap-5 mb-5">
      <label className="text-brand-black-30" htmlFor="hasExpiryDate">
        {label}
      </label>
      <ShadSwitch id={id} {...rest} />
    </div>
  );
};

export default Switch;
