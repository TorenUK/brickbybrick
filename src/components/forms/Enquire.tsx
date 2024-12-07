import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const EnquireForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it.

  return (
    <form
      className="grid-white gap-2 grid-cols-artifact"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid-white">
        <input
          className="ml-1 mr-1 mt-1 col-span-full bg-white text-black"
          defaultValue="test"
          {...register("example", { required: true })}
        />
        {errors.example && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
        <input
          defaultValue={"example"}
          className="bg-white text-black col-span-full m-1"
          {...register("exampleRequired", { required: true })}
        />
        {errors.exampleRequired && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
        <input
          className="m-1 col-span-full hover:bg-black hover:cursor-pointer"
          type="submit"
        />
      </div>
    </form>
  );
};

export default EnquireForm;
