"use client";
import React from "react";
import { cn } from "../../lib/utils";

type TInput = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  className?: string;
};

const Input = React.forwardRef<HTMLInputElement, TInput>(
  (
    {
      error,
      name,
      label,
      type = "text",
      placeholder = "",
      required = true,
      className,
      ...rest
    },
    ref
  ) => (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className=" text-sm mb-[5px] text-black">
        {label} <span className="text-gray-500">{required && "*"}</span>
      </label>
      <input
        className={cn(
          "w-full py-3 pr-4 pl-3 rounded border-default border focus:outline-none transition-all",
          error ? "border-red-500" : "border-black",
          error ? "ring-red-500" : "ring-gray-300",
          className
        )}
        name={name}
        id={name}
        type={type}
        ref={ref}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        {...rest}
      />

      <p aria-live="polite" className="h-6">
        {error && (
          <span className="text-[10px] text-red-500" role="alert">
            {error}
          </span>
        )}
      </p>
    </div>
  )
);

Input.displayName = "Input"; // Ajout du displayName

export default Input;
