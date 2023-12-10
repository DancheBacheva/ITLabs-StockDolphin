import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const initialData = {
    email: "",
    password: ""
  };

  const [data, setData] = useState(initialData);
  const [loggedIn, setLoggedIn] = useState(false);
  const [dataErrors, setDataErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};
    if(!values.email){
      errors.email = "Email is required!";
    }else if (!regex.test(values.email)){
      errors.email = "This is not a valid email format";
    }
    
    if(!values.password){
      errors.password = "Password is required!";
    }else if(values.password.length < 8){ 
      errors.password = "Password should be at least 8 characters";
    }
    return errors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      let res = await fetch("/api/v1/auth/login",
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type':
          'application/json',
        },
      });
      let jsonToObject = await res.json();

      setDataErrors(validate(data));

      if(res.ok){
        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('token', jsonToObject.token);

        navigate("/dashboard");
      }

      alert(jsonToObject.status);
      }catch(err){
        console.log(err);
      }
  };

  useEffect(()=>{
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
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
        <form className='login-form'>
          <h3>Login</h3>
          <label>
          <input
          className='input-login'
          type='email'
          name='email'
          placeholder='Email'
          value={data.email}
          onChange={handleChange}
          /></label>
          <br/>
          <label>
          <input
          className='input-login'
          type='password'
          name='password'
          placeholder='Password'
          value={data.password}
          onChange={handleChange}
          /></label>
          <br />
          <button className='btn-login' type='submit' onClick={handleLogin}>Login</button>
          <h3>OR</h3>
        </form>
      )}  
    </div>
  )
}

//ne raboti, da se proveri zosto 