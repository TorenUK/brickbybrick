import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "./Input";
import { Select } from "./Select";

type Inputs = {
  name: string;
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

  console.log(watch("name")); // watch input value by passing the name of it.

  return (
    <form className=" w-full h-full " onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full h-full flex flex-col justify-evenly">
        <div className="col-span-2 md:col-span-1 w-full h-full flex flex-col space-y-2">
          <Input
            label="[test]"
            error={{ name: " [error]" }}
            placeholder="enter your name"
            {...register("name")}
          />
          <Input
            label="[test]"
            error={{ name: " [error]" }}
            placeholder="enter your email"
            {...register("name")}
          />
          <Select
            name="select"
            label="[test]"
            options={[{ value: "1", label: "option 1" }]}
            error={{ select: " [error]" }}
          />
          {/* <p className="w-full border-y p-1">[FORM...]</p> */}
        </div>
        <div className="w-full col-span-2 flex items-center ">
          <button className="bg-green-600 text-white border-none w-full">
            submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default EnquireForm;
