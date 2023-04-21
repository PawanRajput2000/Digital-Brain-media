import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  Button } from "react-bootstrap";


const TodoList = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    let result = await fetch("http://localhost:5000/todoList", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    setTodo(result);
  };

  const deleteTodo = async (id) => {
    let result = await fetch(`http://localhost:5000/delete/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      getTodo();
    }
  };

  
  return (
    <div className="product-list">
        
      <h3>TO DO List</h3>
     
       <div className="tbl">
      <table >
        <thead>
          <tr>
            <th>title</th>
            <th>Task</th>
            <th>status</th>
                
          </tr>

        </thead>

        {todo.length > 0 ? (
          todo.map((item, index) => (
            <tbody>
              <tr key={item.id}>
              <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
                {/* <li>{item.company}</li> */}
                <td>
                  <div className="btns">
                    <div className="btns1">
                      <Button
                        variant="danger"
                        onClick={() => deleteTodo(item.id)}
                      >
                        Delete
                      </Button>
                    </div>
                    <div  className="btns1">
                    
                        <Link to={"/update/" + item.id}><Button variant="primary">Update</Button></Link>
                     
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <h1>No Result Found</h1>
        )}
      </table>
      </div>
    </div>
  );
};

export default TodoList;
