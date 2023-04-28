import React, { useState } from "react";
import axios from "axios";

function ProductForm(){
    const[formData,setFormData] = useState('')
    const handleForm = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
       const result= axios.post('http://localhost:7000/add-product')
       console.log(result);
    }
    return(
       <>
       <form onSubmit={handleSubmit}>
       <h1>Add Product</h1>
       <input type="text" name="name" onChange={handleForm}placeholder="Enter name"/>
       <br/><br/>
       <input type="email" name="email" onChange={handleForm} placeholder="Enter email"/>
       <br/><br/>
       <input type="password" name="password" onChange={handleForm} placeholder="Enter password"/>
       <br/><br/>
       <input type="submit" value="Register"/>
       </form>
       </>
    )
}
export default ProductForm;