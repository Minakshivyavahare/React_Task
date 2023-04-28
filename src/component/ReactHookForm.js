import React from 'react'
import {useForm} from "react-hook-form";


export default function ReactHookForm() {

    const{register,formState:{errors},handleSubmit} = useForm()

    console.log("errors",errors);

  return (
    <div className='App'>
        <form autoComplete='off' onSubmit={handleSubmit((data)=>console.log(data))}> 
            <h2>Create an account</h2>
            <input 
              {...register("userName",{
                required:"Username is required",
                minLength:{
                    value:3,
                    message:"Username must be alteast 3 character long"
                },
                maxLength:{
                    value:30,
                    message:"Username must be atmost 30 character long"
                }
              })}
             placeholder='Username'/>
             <p>{errors.userName?.message}</p>
            <input {...register("email",{
                required:"Email is required"
                
            })} placeholder='Email'/>
            <p>{errors.email?.message}</p>
            <input {...register("password",{
                required:"Password is required"
            })} placeholder='Password'/>
            <p>{errors.password?.message}</p>
            <select {...register("gender",{
                required:"Gender is require"
            })}>
                <option value="">Select Gender</option>
                <option value="female">Select Female</option>
                <option value="male">Select Male</option>
                <option value="other">Select Other</option>
            </select>
            <p>{errors.password?.gender}</p>
            <input type="Submit"/>
        </form>
    </div>
  )
}
