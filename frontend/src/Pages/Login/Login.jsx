import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../../Validation/LoginValidation";
import "./Login.css";
import backvideo from "../../assets/qqq.mp4";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(""); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const validationErrors = validateLogin(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

   
    axios
      .post("http://localhost:3001/Login", { email, password })
      .then((result) => {
        console.log(result);

       
        if (result.data === "Success") {
          setLoginError(""); 
          setEmail("");
          setPassword("");
          setErrors({}); 

          
          setTimeout(() => {
            navigate("/"); 
          }, 2000);
        } else {
         
          setLoginError("Invalid credentials, please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginError("Something went wrong, please try again later.");
      });
  };

  return (
    <div className="login">
       <video autoPlay loop muted playsInline className="background-video">
        <source src={backvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="log-container">
        <form onSubmit={handleSubmit}>
          <h3 className="loginheader">Log in</h3>

          <div className="log-box">
            <label className="emailcolor">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="log-box">
            <label className="emailcolor">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="log-button">
            <button type="submit" className="log-buttun1">
              Log in
            </button>
          </div>

         
          {loginError && <p className="error">{loginError}</p>}

          <p className="not-register" >
            If you don't have an account <a href="/SignUp">Sign up?</a>
          </p>
        </form>
      </div>
    </div>
  );
}







