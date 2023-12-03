import React from 'react';
import "./Default.css"
import { Register } from '../../components/Register/Register';
import { Login } from '../../components/Login/Login';
import { Link } from "react-router-dom";

export const Default = () => {
  return (
    <div className="header-section">
      <div className='login-section'>
      <Link to="/dashboard"><img className="logo" src="/images/logo1.png" alt="logoItLabs"/></Link>
      <Login />
      </div>
      <div className='register-section'>
        <Register />
      </div>
    </div>
  )
}

