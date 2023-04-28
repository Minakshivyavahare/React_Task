import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';

const New = () =>{
    const[apiData,setAPiData]=useState('')
    useEffect(()=>{
        getProducts()
    })
    const getProducts = async() =>{
           const apiResult =await axios.get('https://jsonplaceholder.typicode.com/posts')
           setAPiData(apiResult.data)
    }
    return(
        <>
        <table  style={{width:`800px`,margin:`50px auto`,border:`1px solid black`}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>

                </tr>
            </thead>
            <tbody>
                {
                    apiData &&
                    (apiData).map((apiResult,index) =>{
                        return(
                            <tr key={index}> 
                                <td>{apiResult.id}</td>
                                <td>{apiResult.title}</td>
                                <td>{apiResult.body}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}
export default New;