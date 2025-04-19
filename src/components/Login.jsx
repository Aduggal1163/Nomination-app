import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

export default function Login() {
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const navigate=useNavigate();
    const submitFunction =(e)=>{
      // if(!username || !password) toast.error("Enter Details")
        e.preventDefault();
        setusername(username);
        setpassword(password);
        console.log(username);
        console.log(password);
        setusername("");
        setpassword("");
        navigate("/nomination-form")
    }
  return (
    <div className="login-container">
      <div>
        <h1 className="login-heading">LOGIN </h1>
        <form className="login-form" onSubmit={submitFunction} >
          <label>Username <span  className='req'>*</span></label>
          <input type="text" placeholder="username"  value={username} onChange={(e)=>setusername(e.target.value)} required />
          <label>Password <span className='req'>*</span></label>
          <input type="password" placeholder="password"  value={password} onChange={(e)=>setpassword(e.target.value)} required />
          <button type="submit" >Login</button>
        </form>
       
      </div>
    </div>
  );
}

