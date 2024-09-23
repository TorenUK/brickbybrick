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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <input
          className="bg-white text-black"
          defaultValue="test"
          {...register("example")}
        />
        <input
          className="bg-white text-black"
          {...register("exampleRequired", { required: true })}
        />
        {errors.exampleRequired && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
        <input type="submit" />
      </div>
    </form>
  );
};

export default EnquireForm;
