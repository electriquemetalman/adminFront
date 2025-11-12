import React, { useContext, useState } from 'react';
import './Login.css';
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Login = ({url}) => {

     const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [data, setData] = useState ({
        email : "",
        password : ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name] : value}))
    }

    const  onLogin = async(event) => {
        try {
            event.preventDefault();
            const response = await axios.post(`${url}/api/user/login`, data)

            if ((response.data.success) && (response.data.user.role === "admin")) {
                login(response.data.token);
                toast.success(response.data.message);
                navigate("/add", {replace: true})
            } else {
                toast.error("you are not Admin");
            }
        } catch (error) {
            toast.error(error);
        }
        
    }

  return (
    <div className="login-popup">
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>Login</h2>
            </div>
            <div className="login-popup-inputs">
                <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Enter your email" required />
                <input type="password" name="password" onChange={onChangeHandler}  value={data.password} placeholder="Enter your password" required />
            </div>
            <button type="submit" className="login-popup-btn">Login</button>
        </form>
    </div>
  )
}

export default Login
