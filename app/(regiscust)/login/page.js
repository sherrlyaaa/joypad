"use client";
import React, { useState } from "react";
import "../../../styles/login.css"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      {/* Logo */}
      <div className="logo-container">
        <img src='/image/Journey 2.png' alt="Logo" className="logo" />
      </div>

      {/* Login Form */}
      <form className="login-form">
        <input type="text" className="form-input" placeholder="Username" />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            className="form-input"
            placeholder="Password"
          />
          <span
            className="eye-icon"
            onClick={togglePasswordVisibility}
            style={{ cursor: "pointer" }}
          >
            <img
              src={
                showPassword
                  ? "/structure/View_duotone_line.svg"
                  : "/structure/View_hide_light.svg"
              }
              alt="Toggle Password Visibility"
              style={{ width: "20px", height: "20px" }}
            />
          </span>
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>

      {/* Register Link */}
      <p className="register-link">
        Doesn’t have any account yet?{" "}
        <a href="/register">Register</a>
      </p>
    </div>
  );
}