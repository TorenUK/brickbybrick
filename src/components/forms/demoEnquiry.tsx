import './Enquire.css'
import { useForm } from "react-hook-form";
// import { DevTool } from '@hookform/devtools';

// let renderCount = 0

type FormValues = {
  name: string;
  email: string;
  details: string;
};


export const EnquireForm = () => {

  const form = useForm<FormValues>({
     defaultValues: {
        name:"",
        email:"",
        details:"",
     },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;


  const onSubmit = (data: FormValues) => {
    console.log('Form submitted', data)
  }
  
  // renderCount++
  return (
    <div>
      <h1>Enquiry form</h1>
      <p>give us the details, and we'll get back to you with a bespoke</p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        id="name" 
        placeholder="Full name..."
       {...register("name", { 
        required:{
          value: true,
          message: "Full name is required ", 
        }

       })} />

    <p className="error">{errors.name?.message}</p>
    </div>
    <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Please enter email..."
        {...register("email", {
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Invalid email format",
          },
          validate: {
              
          }
          
        })} />

    <p className="error">{errors.email?.message}</p>
    </div>
    
    <div className="form-control">

        <label htmlFor="details">Details</label>
        <textarea id="details"
        rows={8}
         cols={50}
         placeholder="Please enter Project details here..."
        {...register("details", { 
          required: "Please enter your project details", 
        
      })} />

    <p className="error">{errors.details?.message}</p>
     </div>      
        <button>Submit</button>
      </form>
      {/* <DevTool control={control}/> */}
    </div>
  );
};
