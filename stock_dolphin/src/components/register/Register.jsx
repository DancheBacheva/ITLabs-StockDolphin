import "./Register.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const initialData = {
    name: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(initialData);
  const [loggedIn, setLoggedIn] = useState(false);
  const [dataErrors, setDataErrors] = useState({});

  const navigate = useNavigate();

  const dataChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password should be at least 8 characters";
    }
    return errors;
  };

  const handleRegister = async () => {
    try {
      let res = await fetch("http://127.0.0.1:9000/api/v1/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content Type": "appication/json",
        },
      });
      let jsonToObject = await res.json();

      setDataErrors(validate(data));
      
      if (res.ok) {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('token', jsonToObject.token);
        navigate("/dashboard");
      }
      alert("User is created");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isLoggedIn);
  }, []);

  // const logout = () => {
  //   setLoggedIn(false);
  //   localStorage.setItem('loggedIn', 'false');
  //   localStorage.removeItem('token');
  // };

  return (
    <div>
       {/* {loggedIn ? (
        <div> */}
         {/* <ProtectedRoute /> */}
         {/* <button onClick={logout}>Logout</button>
        </div> */}
      {/* ):( */}
      <form className="register-form">
        <h1>Register</h1>
        <label>
          <input
            className="input-register"
            type="name"
            name="name"
            placeholder="Full name"
            value={data.name}
            onChange={dataChange}
          />
        </label>
        <br />
        <label>
          <input
            className="input-register"
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={dataChange}
          />
        </label>
        <br />
        <label>
          <input
            className="input-register"
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={dataChange}
          />
        </label>
        <br />
        <button className="btn-register" onClick={handleRegister}>
          Register
        </button>
      </form>
          {/* )}   */}
    </div>
  );
};
