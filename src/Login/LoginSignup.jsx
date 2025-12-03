import React, { useState } from "react";
import "./LoginSignup.css"; // Import your CSS file

const LoginSignup = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);
  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert("Password reset feature coming soon!");
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`}>
      {/* LOGIN FORM */}
      <div className="form-box login">
        <form>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="forgot-link">
            <a href="#" onClick={handleForgotPassword}>
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <p>Or login with</p>
          <div className="social-icons">
            <a href="#" onClick={() => alert("Google login coming soon!")}>
              <i className="fa-brands fa-google"></i>
            </a>
            <a href="#" onClick={() => alert("Facebook login coming soon!")}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" onClick={() => alert("GitHub login coming soon!")}>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" onClick={() => alert("LinkedIn login coming soon!")}>
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>

      {/* REGISTER FORM */}
      <div className="form-box register">
        <form>
          <h1>Sign up</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="fa-solid fa-lock"></i>
          </div>
          <button type="submit" className="btn">
            Sign up
          </button>
          <p>Or Sign up with</p>
          <div className="social-icons">
            <a href="#" onClick={() => alert("Google signup coming soon!")}>
              <i className="fa-brands fa-google"></i>
            </a>
            <a href="#" onClick={() => alert("Facebook signup coming soon!")}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" onClick={() => alert("GitHub signup coming soon!")}>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" onClick={() => alert("LinkedIn signup coming soon!")}>
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </form>
      </div>

      {/* BLUE SIDE BOX */}
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
  );
};

export default LoginSignup;
