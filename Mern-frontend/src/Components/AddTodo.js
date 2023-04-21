import React from 'react';

const AddTodo=()=>{
    const [title, setTitle]=React.useState("");
    const [description, setDescription]=React.useState("");
    const [status, setStatus]=React.useState("");
    
    const [error , setError]= React.useState(false);

    const addtodo= async()=>{
        if(!title || !description || !status  ){
            setError(true)
            return false;
        }
      
        console.warn(title, description,status);
        const userId = JSON.parse( localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product" ,{
            method: 'post',
            body:JSON.stringify( {title, description,status , userId}),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        result = await result.json();
        console.warn(result)

        setTitle("")
        setDescription("")
        setStatus("")
        
    }
    
    return(
        <div className='product'>
            <h1>Add Product</h1>
            <div className='inpu'>
            <input type="text" placeholder='Enter product name' className='inputBox' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            {error && !title && <span className='invaild-input'>Enter valid Title</span>}

            <input type="text" placeholder='Enter product description'  className='inputBox'  value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            {error && !description && <span className='invaild-input'>Enter valid description</span>}

            <input type="text" placeholder='Enter product status'  className='inputBox'  value={status} onChange={(e)=>{setStatus(e.target.value)}} />
            {error && !status && <span className='invaild-input'>Enter valid status</span>}

            </div>

            <button onClick={addtodo} className='appButton '>Add Product</button>
        
        </div>
    )
}

export default AddTodo;