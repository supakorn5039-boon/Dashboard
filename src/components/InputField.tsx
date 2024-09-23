/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormData } from "@/types/TeacherFormType";
import React from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  type?: string;
  register: any;
  name: keyof FormData;
  defaultValue?: string | Date;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export default function InputField({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: Props) {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        {...register(name)}
        {...inputProps}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm"
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error.message}</p>
      )}
    </div>
  );
}
