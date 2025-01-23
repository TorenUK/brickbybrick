import { FC, InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error: Record<string, string>;
  name: string;
  label: string;
};
export const Input: FC<Props> = ({ name, error, label, ...rest }) => {
  const _error = error[name] != null ? error[name] : "";
  return (
    <div className="w-full flex flex-col space-y-1">
      <label className="block text-sm font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        {...{ ...rest, name }}
        className={`shadow appearance-none border rounded w-full py-2 px-2 leading-tight focus:outline-none focus:shadow-outline text-xs ${
          _error !== "" ? "border-red-500" : ""
        }`}
      />
      {_error !== "" && <p className="text-red-500 italic">{_error}</p>}
    </div>
  );
};
