import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();


    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }

    return (
        <div>
            <img className='logo' src='https://imgs.search.brave.com/RU14GSj6jiGb3ySQVc7UnajNIoeHjin_KbZiLuBO9Ao/rs:fit:524:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/RTFpVXY1UVBpb0hu/VHdGZkpYby1RQUFB/QSZwaWQ9QXBp' alt="logo" ></img>
            {auth ? <ul className='nav-ul'>
                <li><Link to="/" >ToDo</Link></li>
                <li><Link to="/add" >Add New Task</Link></li>
                <li><Link to="/update" >Update Task </Link></li>
                <li><Link onClick={logout} to="/signup" >Logout ({JSON.parse(auth).name})</Link></li>

            </ul>
                : <ul className='nav-ul nav-right'>
                    <li><Link to="/signup" >SignUp </Link> </li>
                    <li><Link to="/login" >Login </Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav