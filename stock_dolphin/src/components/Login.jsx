import React from 'react';
import "../css/Login.css";
import { useState, useEffect } from "react";

export const Login = () => {
  const initialData = {
    email: "",
    password: ""
  };

  const [data, setData] = useState(initialData);
  const [loggedIn, setLoggedIn] = useState(false);

  const dataChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    try{
      let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/login`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content Type':
          'application/json',
        },
      });
      let jsonToObject = await res.json();

      if(res.ok){
        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('token', jsonToObject.token);
      }
      alert(jsonToObject.status);
    }catch(err){
      console.log(err);
    }
  };

  useEffect(()=>{
    const isLoggedIn = localStorage.getItem(loggedIn) === 'true';
    setLoggedIn(isLoggedIn);
  }, []);

  const logout = () => {
    setLoggedIn(false);
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('token');
  };

  return(
    <div>
      {loggedIn ? (
        <div>
         {/* <ProtectedRoute /> */}
         <button onClick={logout}>Logout</button>
        </div>
      ):(
        <form form className='login-form'>
          <h3>Login</h3>
          <label>
          <input
          className='input-login'
          type='email'
          name='email'
          placeholder='Email'
          value={data.email}
          onChange={dataChange}
          /></label>
          <br/>
          <label>
          <input
          className='input-login'
          type='password'
          name='password'
          placeholder='Password'
          value={data.password}
          onChange={dataChange}
          /></label>
          <br />
          <button className='btn-login' onClick={login}>Login</button>
          <h3>OR</h3>
        </form>
      )}  
    </div>
  )
}