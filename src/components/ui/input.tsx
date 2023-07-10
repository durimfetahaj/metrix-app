import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useField } from "formik";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, name, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [field, meta] = useField(name);

    const handleTogglePassword = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const inputType = type === "password" && showPassword ? "text" : type;
    const hasError = meta.touched && meta.error;

    return (
      <div>
        <div className="relative mb-8">
          <input
            type={inputType}
            className={cn(
              "flex h-10 w-full rounded-md border",
              hasError ? "border-red-500" : "border-input",
              "bg-brand-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-3",
              className
            )}
            ref={ref}
            {...props}
            {...field}
          />

          {hasError && (
            <div className="text-red-500 text-sm absolute -bottom-6 whitespace-nowrap">
              {meta.error}
            </div>
          )}

          {type === "password" && (
            <div
              className="absolute top-1/2 transform -translate-y-[12px] right-3 cursor-pointer"
              onClick={handleTogglePassword}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
