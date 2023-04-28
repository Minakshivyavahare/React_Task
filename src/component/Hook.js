import React, { useState } from 'react';

const Hook = () =>{
    const[formData,setFormData] = useState({})
   
    const handleChange = (e) =>{
        setFormData ({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) =>{
        e.prevendefault();
        console.log(formData);
    }
    return(
        <>
           <form onSubmit={handleSubmit}>
               <input type='text' placeholder='Enter name' name='name' onChange={handleChange} />
               <br></br><br></br>
               <input type='password' placeholder='Enter password' name='password'  onChange={handleChange} />
               <br></br><br></br>
               <input type='submit' value='Register'/>
           </form>
        </>
    )
}
export default Hook;