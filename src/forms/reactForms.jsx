import { useForm } from "react-hook-form";
import { useState } from "react"
export function MyForm(){
    const [input, setInput] = useState(null);
    const onSubmit = (data) => setInput(data)
    const {control,
        register,
        watch,
        handleSubmit,
        formState: { errors }
    }=useForm()
    
   
    
    return(
        <>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">First name</label>
            <input type="text" {...register("Firstname",{ required:true  })}/> <br />
            {errors.Firstname && <p role="alert" className="text-red-500">*First name is required</p>}
            <label htmlFor="">Email</label>
            <input type="text" {...register("EmailAddress",{ required:true  })}/> <br />
            {errors.EmailAddress && <p role="alert" className="text-red-500">*Email Address is required</p>}
            <label htmlFor="">Age</label>
            <input type="number" {...register("Age")}/> <br />
            <label htmlFor="">Gender</label>          
             <select name="gender" id="" {...register("gender")}> 
            <option value="male">male</option>
            <option value="female">female</option>
           </select><br />
           <button>submit</button>
        </form>
        {input && (
            <div className="div">
                <p>{input.Firstname}</p>
                <p>{input.EmailAddress}</p>
                <p>{input.Age}</p>
                <p>{input.gender}</p>    
            </div>
            )} 
            
         
        </>
    )
}