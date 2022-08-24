import React, { useState } from "react";
import "./Login.css";

import { Link, Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  console.log(username, password);

  async function registeruser(event) {
    console.log(username);
    console.log(password);

    event.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status == "ok") {
      alert("login successfull");
      window.localStorage.setItem("token", data.data);
      window.location.href = "./home";
    }
  }

  return (
    <div className="login-page">
      <div className="header">
        <div className="logo-img">
         
        </div>
        <Link to={"/signup"}>
          {" "}
          <div className="signup-btn">
            <button>Sign Up</button>
          </div>
        </Link>
      </div>
      <div className="login-card">
        <p style={{ textAlign: "center", fontSize: "24px" }}>Sign In</p>
        <form action="" className="signin-form" onSubmit={registeruser}>
          <input
            className="login-form form "
            type="text"
            name="userame"
            id="userId"
            placeholder="Username"
            onChange={(e) => setusername(e.target.value)}
          />
          <br />
          <input
            className="login-form form"
            type="text"
            name="password"
            id="passwd"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          {/* <Link to={"/home"}> */}
          <input type="submit" className="login-form  submit" />
          {/* </Link> */}
          <br />
          <p>
            Don't have an account?{" "}
            <Link to={"/signup"}>
              <span>Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
