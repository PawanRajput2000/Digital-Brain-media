import React, { useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const UpdateTodo=()=>{
    const [title, setTitle]=React.useState("");
    const [description, setDescription]=React.useState("");
    const [status, setStatus]=React.useState("");
   
    const [error , setError]= React.useState(false);
    const params = useParams();
   const navigate = useNavigate();

    useEffect(()=>{
       getTodo();
    },[])

    const getTodo = async()=>{
        console.warn(params);
        let result = await fetch(`http://localhost:5000/todo/${params.id}`);
        result= await result.json();
       setTitle(result.title);
       setDescription(result.description);
       setStatus(result.status);
       
    }

    const UpdateTodo= async()=>{
        console.warn(title,description,status)
      
        let result = await fetch(`http://localhost:5000/todoUpdate/${params.id}` ,{
            method: 'put',
            body:JSON.stringify( {title, description,status }),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        result = await result.json();
        console.warn(result)
         navigate('/')
    }
    
    return(
        <div className='product'>
            <h1>Update TODO</h1>
            <div className="inpu">
            <input type="text" placeholder='Enter product name' className='inputBox' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
           <input type="text" placeholder='Enter product description'  className='inputBox'  value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            <input type="text" placeholder='Enter product status'  className='inputBox'  value={status} onChange={(e)=>{setStatus(e.target.value)}} />
            
          
            </div>

            <button onClick={UpdateTodo} className='appButton '>Update Todo</button>
        
        </div>
    )
}

export default UpdateTodo;