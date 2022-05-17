import axios from 'axios';
import React, { useState } from 'react'
import './Register.css'
export default function Register() {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
        email: undefined,
        country: undefined,
        city: undefined,
        phone: undefined
      });
   
        const handleChange = (e) => {
            setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          };
    
    const handleClick = ()=>{
        axios.post("https://booking1400.herokuapp.com/api/auth/register", credentials);
    }
    return (
        <div className="register">
            <div className="rContair">
            <input
                type="text"
                placeholder="username"
                id="username"
                onChange={handleChange}
                className="rInput"
            />
            <input
                type="text"
                placeholder="password"
                id="password"
                onChange={handleChange}
                className="rInput"
            />
            <input
                type="text"
                placeholder="email"
                id="email"
                onChange={handleChange}
                className="rInput"
            />
            <input
                type="text"
                placeholder="country"
                id="country"
                onChange={handleChange}
                className="rInput"
            />
            <input
                type="text"
                placeholder="city"
                id="city"
                onChange={handleChange}
                className="rInput"
            />
            <input
                type="text"
                placeholder="phone"
                id="phone"
                onChange={handleChange}
                className="rInput"
            />
             <button  onClick={handleClick} className="lButton">Register</button>
            </div>
        </div>
    )
}
