import React, { useEffect, useState } from "react";
import axios from 'axios';

function Product(){
    const[apiData,setAPiData] =useState('')
    useEffect(()=>{
        getProduct()
    },[apiData])
    const getProduct = async ()=>{
       const apiResult=await axios.get('https://jsonplaceholder.typicode.com/posts');
       setAPiData(apiResult.data)
    }
    console.log(apiData);
    return(
        <div>
            <table style={{width:`800px`,margin:`50px auto`,border:`1px solid black`}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>BODY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiData &&
                        (apiData).map((apiDetails,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{apiDetails.id}</td>
                                        <td>{apiDetails.title}</td>
                                        <td>{apiDetails.body}</td>
                                    </tr>
                                    
                                )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Product;