import { useForm } from "react-hook-form";
import { useState } from "react"
export default function Loginuser(){
    const [input, setInput] = useState(null);
    // const onSubmit = (data) => setInput(data)
    const onSubmit = (data) => console.log(data)
    const {control,
        register,
        watch,
        handleSubmit,
        formState: { errors }
    }=useForm()
    
    return(
        <>
        <section className="">
            <div className="">
                <p className="text-2xl font-bold">LOGIN</p>
                <p className="pt-4 text-wrap">Welcome back! Please enter your username and <br /> password to login.</p>
            </div>
            <div className="">
            <form action="" onSubmit={handleSubmit(onSubmit)}> 
                <div className="pt-8 ">
                <input type="text"{...register("Username",{ required:true  })} placeholder="Username or Email Address" className="lg:w-96 w-60 p-3 rounded-md" />
                {errors.Username && <p role="alert" className="text-red-500">*Username or Email Required</p>}
                </div>
                <div className="pt-3 relative">
                <input type="password" {...register("Password",{ required:true  })} placeholder="Password" className="lg:w-96 w-60 p-3 rounded-md" />
                {errors.Password && <p role="alert" className="text-red-500">*Password is Required</p>}
                <div className="">
                <a href=""className="absolute top-5 lg:left-80 left-40 hover:text-red-500">Forget?</a>
                </div>
                </div>
               <div className="pt-4">
               <input type="checkbox" id="remember me" name="Remember Me" unchecked />
               <label for="remember me" className="pl-2">Remember Me</label>
               </div>
               <div className="pt-4 ">
               <button className=" bg-red-600 pl-5 pr-5 p-2 text-white rounded-lg hover:bg-black">LOGIN</button>
               </div>
               </form>  
            </div>
        </section>
        </>
    )
}