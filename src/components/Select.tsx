import React from "react";
import {
  Select as ShadSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useField, useFormikContext } from "formik";

interface Option {
  value: string;
}

type Props = {
  options: Option[];
  name: string;
  placeholder: string;
};

const Select = ({ options, name, placeholder }: Props) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleValueChange = (value: string) => {
    setFieldValue(name, value);
  };

  return (
    <ShadSelect onValueChange={handleValueChange}>
      <SelectTrigger className="bg-brand-background">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option: Option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.value}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadSelect>
  );
};

export default Select;
