import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";

export interface EnquireFormProps {
  fields: Array<{
    name: string;
    label: string;
    validation?: Record<string, any>;
  }>;
  defaultValues: Record<string, any>;
  showBackButton: boolean;
  onSubmit: (values: Record<string, any>) => void;
  onBack: (values: Record<string, any>) => void;
}

const EnquireForm: React.FC<EnquireFormProps> = ({
  fields,
  defaultValues,
  showBackButton,
  onSubmit,
  onBack,
}) => {
  const methods = useForm({
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-4 p-4 rounded bg-[#242424]"
      >
        {fields.map(({ name, label, validation }) => (
          <div key={name} className="grid gap-2">
            <label htmlFor={name} className="text-sm font-medium ">
              {label}
            </label>
            <input
              id={name}
              placeholder={label}
              {...register(name, validation)}
              className={`w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-xs ${
                errors[name]
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-blue-500"
              }`}
            />
            {/* <p className="text-xs text-red-500">[test errors]</p> */}
          </div>
        ))}
        <div className="flex justify-between items-center">
          {showBackButton && (
            <button
              type="button"
              onClick={handleSubmit(onBack)}
              className="px-4 py-2 hover:bg-gray-300"
            >
              back
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            next
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default EnquireForm;
