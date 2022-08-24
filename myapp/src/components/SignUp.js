import React, { useState } from "react";
import "./Login.css";
import "./SignUp.css";

import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [confirm, setconfirm] = useState("");
  const [empty, setempty] = useState(true);
  async function registeruser(event) {
    console.log(username);
    console.log(password);
    console.log(confirm);
    event.preventDefault();
    if (username === "" || name === "" || password === "" || confirm === "") {
      alert("All fields are required");
      setempty(false);
    }
    else if (confirm !== password) {
      alert("Passwords do not match");
    } else {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
      alert("Successfully registered. Click ok to go to Login Page");
      navigate("/", { replace: true });
    }
  }
  return (
    <div className="login-page">
      <div className="header">
        <div className="logo-img">
          
        </div>
        <Link to={"/"}>
          <div className="signup-btn">
            <button>Sign In</button>
          </div>
        </Link>{" "}
      </div>
      <div className="signup-card">
        <p style={{ textAlign: "center", fontSize: "24px" }}>Sign Up</p>
        <form className="signin-form" onSubmit={registeruser}>
          <input
            className="login-form form "
            type="text"
            name="name"
            id="userId"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Name"
          />
          <input
            className="login-form form "
            type="text"
            name="userame"
            id="userId"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Username"
          />
          <input
            className="login-form form"
            type="text"
            name="password"
            id="passwd"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="login-form form"
            type="text"
            name="confirm-password"
            id="confirm-passwd"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setconfirm(e.target.value)}
          />
          {/* <Link to={"/signin"}> */}
          <input
            type="submit"
            value="Register"
            className="login-form  submit"
          />
          <br />
          {/* </Link> */}
          <p>
           Already have an account?{" "}
            <Link to={"/"}>
              <span>Sign In</span>
            </Link>
          </p>
        </form>
        
      </div>
    </div>
  );
};

export default Signup;
