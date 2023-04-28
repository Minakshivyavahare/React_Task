import React, { useState } from 'react'

const Clockify = () => {
    const[task,setTask]= useState(0)
    const handleChange = (e) =>{
        setTask(
            {...task,[e.target.name]:e.target.value}
        )
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(task);
    }
  return (
    <>
    <div className='Container'>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Your task' name='name' onChange={handleChange}/>
        <input type='submit' value='Add Task'/>

        </form>
    </div>
   {
        task.map((x,i)=>{
            return(
                <div className='Container'>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Your task' name='name' onChange={handleChange}/>
        <input type='submit' value='Add Task'/>

        </form>
    </div>
            )
        })
   }
    
    </>
  )
}

export default Clockify