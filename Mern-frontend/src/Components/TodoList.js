import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";


const TodoList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/todoList", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000//delete/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  
  return (
    <div className="product-list">
        
      <h3>TO DO List</h3>
     
       <div className="tbl">
      <table >
        <thead>
          <tr>
            <th>S.No</th>
            <th>Task</th>
            <th>status</th>
                
          </tr>

        </thead>

        {products.length > 0 ? (
          products.map((item, index) => (
            <tbody>
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.category}</td>
                {/* <li>{item.company}</li> */}
                <td>
                  <div className="btns">
                    <div className="btns1">
                      <Button
                        variant="danger"
                        onClick={() => deleteProduct(item._id)}
                      >
                        Delete
                      </Button>
                    </div>
                    <div  className="btns1">
                    
                        <Link to={"/update/" + item._id}><Button variant="primary">Update</Button></Link>
                     
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
