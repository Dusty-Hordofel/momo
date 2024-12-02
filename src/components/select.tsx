import { cn } from "@/lib/utils";
import React from "react";

interface Option {
  interval: string;
  valeur: string;
}
// interface Option {
//   name: string;
//   abbreviation: string;
// }

interface SelectProps {
  name: string;
  label: string;
  options: Option[];
  error?: string;
  required?: boolean;
  className?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { options, error, name, className, label, required = true, ...rest },
    ref
  ) => (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm mb-[5px] text-black">
        {label} <span className="text-gray-500">{required && "*"}</span>
      </label>
      <div className="relative">
        <select
          {...rest}
          ref={ref}
          name={name}
          id={name}
          className={cn(
            "border rounded py-4 w-full appearance-none pl-3",
            error ? "border-red-500" : "border-black",
            error ? "ring-red-500" : "ring-gray-300",
            className
          )}
          aria-invalid={error ? "true" : "false"}
        >
          {options.map((option) => {
            return (
              <option key={option["interval"]} value={option["valeur"]}>
                {option["interval"]}
              </option>
            );
          })}
        </select>
        <div className=" absolute w-[10px] h-full ml-[5px] mt-[1px] top-[21px] right-4 pointer-events-none">
          <svg className="chevronDown" viewBox="0 0 30 30">
            <polygon points="15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 "></polygon>
          </svg>
        </div>
      </div>
      <p aria-live="polite" className="h-6 text-[10px] flex items-center">
        {error && (
          <span className="text-[10px] text-red-500" role="alert">
            {error}
          </span>
        )}
      </p>
    </div>
  )
);

Select.displayName = "Select";
export default Select;
