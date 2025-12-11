import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginsignup.css";

const LoginSignup = () => {
  const [isActive, setIsActive] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  // -------------------
  // HANDLE LOGIN
  // -------------------
  const handleLoginSubmit = async (e) => {
  e.preventDefault();

  // Trim username and password to avoid trailing spaces
  const payload = {
    username: loginData.username.trim(),
    password: loginData.password
  };

  console.log("Sending login payload:", payload);

  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    console.log("Login response:", data);

    if (res.ok) {
      alert("Login successful!");
      navigate("/TravelPlannerApp");

    } else {
      // Display server error message
      alert(data.error || "Login failed");
    }
  } catch (err) {
    console.error("Login fetch error:", err);
    alert("Server error during login");
  }
};


  // -------------------
  // HANDLE REGISTER
  // -------------------
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData)
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registration successful! Please login.");
        setIsActive(false);
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Server error during registration");
    }
  };

  return (
  <div className="login-page">
    <div className={`container ${isActive ? "active" : ""}`}>
      
      {/* LOGIN FORM */}
      <div className="form-box login">
        <form onSubmit={handleLoginSubmit}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>

      {/* REGISTER FORM */}
      <div className="form-box register">
        <form onSubmit={handleRegisterSubmit}>
          <h1>Sign up</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={registerData.username}
              onChange={(e) =>
                setRegisterData({ ...registerData, username: e.target.value })
              }
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn">
            Sign up
          </button>
        </form>
      </div>

      {/* TOGGLE BOX */}
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="btn register-btn" onClick={handleRegisterClick}>
            Sign up
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome Back</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>

    </div>
  </div>
);
}

export default LoginSignup;
