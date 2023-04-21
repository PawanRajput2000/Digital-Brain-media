
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import UpdateTodo from './Components/UpdateTodo';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
       <Nav/>
     <Routes>

      <Route element ={<PrivateComponent/>}>
      <Route path = "/" element={< TodoList/>} />
      <Route path = "/add" element={<AddTodo/>} />
      <Route path = "/update/:id" element={<UpdateTodo/>} />
      <Route path = "/logout" element={<h1>Logout Component</h1>} />
      {/* <Route path = "/profile" element={<h1>Pofile Component</h1>} /> */}
      </Route>

      <Route path = "/signup" element={<SignUp/>} />
      <Route path = "/login" element = {<Login/>}/>

     
     </Routes>
      </BrowserRouter>
      <Footer/>
     
    </div>
  );
}

export default App;
