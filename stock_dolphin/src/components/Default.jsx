import React from 'react';
import "../css/Default.css"
import { Register } from './Register';
import { Login } from './Login';

export const Default = () => {
  return (
    <div>
      <div className="header-section">
      <img className="logo" src="/images/logo1.png" alt="logoItLabs"/>
      <Login />
      </div>
      <br/>
        <Register />
        <br/>
        
      <br/>
    </div>
  )
}

