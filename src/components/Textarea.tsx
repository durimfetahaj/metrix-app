import React from "react";
import { Textarea as ShadTextarea } from "./ui/textarea";
import { useField } from "formik";

type Props = {
  name: string;
  placeholder: string;
  onChange: (e: any) => void;
  value: string;
};

function Textarea({ name, placeholder, ...rest }: Props) {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className="relative mb-8">
      <ShadTextarea
        placeholder={placeholder}
        {...rest}
        className={hasError ? "border-red-500" : ""}
      />
      {hasError && (
        <p className="text-red-500 text-sm absolute -bottom-6 whitespace-nowrap">
          {meta.error}
        </p>
      )}
    </div>
  );
}

export default Textarea;
