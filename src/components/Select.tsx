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
};

const Select = ({ options, name }: Props) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleValueChange = (value: string) => {
    setFieldValue(name, value);
  };

  return (
    <ShadSelect onValueChange={handleValueChange} defaultValue={field.value}>
      <SelectTrigger className="bg-brand-background text-brand-black-40">
        <SelectValue
          placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
        />
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
