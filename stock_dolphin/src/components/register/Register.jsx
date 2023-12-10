import "./Register.css";
import { useState } from "react";

export const Register = () => {
  const initialData = {
    name: "",
    email: "",
    password: ""
  };

  const [data, setData] = useState(initialData);

  const dataChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const register = async () =>{
    try{
      let res = await fetch(
        "/api/v1/auth/register",
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content Type':
            'appication/json',
          },
        }
      );
      if(res.ok) {
        alert('User is created');
      }
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div>
      <form className='register-form'>
        <h3>Register</h3>
        <label>
        <input
        className='input-register'
        type='name'
        name='name'
        placeholder='Full name'
        value={data.name}
        onChange={dataChange}
        /></label>
        <br/>
        <label>
        <input
        className='input-register'
        type='email'
        name='email'
        placeholder='Email'
        value={data.email}
        onChange={dataChange}
        /></label>
        <br/>
        <label>
        <input
        className='input-register'
        type='password'
        name='password'
        placeholder='Password'
        value={data.password}
        onChange={dataChange}
        /></label>
        <br />
        <button className='btn-register' onClick={register}>Register</button>
      </form>
    </div>
  )
};
