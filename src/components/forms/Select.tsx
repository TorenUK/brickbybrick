import React, { FC, InputHTMLAttributes } from "react";

interface Option {
  value: string;
  label: string;
}
type Props = InputHTMLAttributes<HTMLSelectElement> & {
  error: Record<string, string>;
  name: string;
  label: string;
  options: Option[];
};
export const Select: FC<Props> = ({ name, error, label, options, ...rest }) => {
  const _error = error[name] != null ? error[name] : "";
  return (
    <div className="w-full flex flex-col space-y-1">
      <label className="block font-semibold text-sm" htmlFor={name}>
        {label}
      </label>
      <select
        {...{ ...rest, name }}
        className={` shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline text-xs ${
          _error !== "" ? "border-red-500" : ""
        }`}
      >
        <option selected className={"camel"}>
          choose a value
        </option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label.toLowerCase()}
          </option>
        ))}
      </select>
      {_error !== "" && <p className="text-red-500 italic">{_error}</p>}
    </div>
  );
};
