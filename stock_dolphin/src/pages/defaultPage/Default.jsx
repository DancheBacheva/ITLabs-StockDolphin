import "./Default.css"
import React, { useState } from "react"; 
import { Login } from '../../components/Login/Login';
import { Register } from "../../components/Register/Register";



export const Default = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleShow = () => {
    setShowRegister(true)
  }

  return (
    <div className="login-register">
      {showRegister ? <Register /> : <Login onShowRegister={handleShow} />}
    </div>
  );
};

