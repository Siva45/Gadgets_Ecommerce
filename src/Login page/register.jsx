
import { useForm } from "react-hook-form";
import { useState } from "react"
export default function Register(){
    const registerclick=()=>{
        alert("Successfully you have Registered ")
    }
    const onSubmit = (data) => console.log(data)
    const {control,
        register,
        watch,
        handleSubmit,
        formState: { errors }
    }=useForm()
    return(
        <>
        <section>
            <div className="pt-5 sm:pt-0">
                <p className="text-2xl font-bold">REGISTER</p>
                <p className="pt-5">Create new account today to reap the benefits of a <br /> personalized shopping experience.</p>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}> 

            <div className="pt-5">
            <input type="text" {...register("Username",{ required:true  })} placeholder="Username " className="w-full p-3 rounded-md" />
            {errors.Username && <p role="alert" className="text-red-500">*Username is required</p>}
            </div>
            <div className="pt-3">
            <input type="text" {...register("EmailAddress",{ required:true  })} placeholder=" Email Address" className="w-full p-3 rounded-md" /> 
            {errors.EmailAddress && <p role="alert" className="text-red-500">*Email is required</p>}
            </div>
            <div className="pt-3">
            <input type="password" {...register("Password",{ required:true  })}  placeholder=" Password"   className="w-full p-3 rounded-md"/>
            {errors.Password && <p role="alert" className="text-red-500">*Password is Required</p>}
            </div>
            <div className="pt-5">
                <p className="border-t-2 border-b-2 p-1">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
            </div>
            <div className="pt-3">
                <button onClick={registerclick} className="bg-red-600 pl-5 pr-5 p-2 text-white rounded-lg hover:bg-black" >REGISTER</button>
            </div>
            </form>
        </section>
        </>
    )
}