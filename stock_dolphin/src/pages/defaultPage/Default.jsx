import React from 'react';
import "./Default.css"
import { Register } from '../../components/register/Register';
import { Login } from '../../components/login/Login';
import { Link } from "react-router-dom";

export const Default = () => {
  return (
    <div>
      <div className="header-section">
      <Link to="/dashboard"><img className="logo" src="/images/logo1.png" alt="logoItLabs"/></Link>
      <Login />
      </div>
      <br/>
        <Register />
        <br/>
        
      <br/>
    </div>
  )
}

