"use client"; // Menandai file ini sebagai komponen klien

import React, { useState } from "react";
import Header from "../../header";
import Footer  from "../../footer";
import Link from 'next/link';
import "../../../styles/register.css"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="signup-container">
      <div className="logo-container">
        <img src='/image/Journey 1.png' alt="Logo" className="logo" />
      </div>

      <div className="form-container">
        <h1>Create Your Account</h1>

        <form className="signup-form">
          <input type="text" className="form-input" placeholder="Full Name" />
          <input type="email" className="form-input" placeholder="Email Address" />
          
          <div className="password-container">
            <input 
              type={showPassword ? 'text' : 'password'} 
              className="form-input" 
              placeholder="Password" 
            />
            <span className="eye-icon" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
              <img 
                src={showPassword ? '/structure/View_duotone_line.svg' : '/structure/View_hide_light.svg'} 
                alt="Toggle Password Visibility" 
                style={{ width: '20px', height: '20px' }} 
              />
            </span>
          </div>
          
          <div className="password-container">
            <input 
              type={showConfirmPassword ? 'text' : 'password'} 
              className="form-input" 
              placeholder="Konfirmasi Password" 
            />
            <span className="eye-icon" onClick={toggleConfirmPasswordVisibility} style={{ cursor: 'pointer' }}>
              <img 
                src={showConfirmPassword ? '/structure/View_duotone_line.svg' : '/structure/View_hide_light.svg'} 
                alt="Toggle Confirm Password Visibility" 
                style={{ width: '20px', height: '20px' }} 
              />
            </span>
          </div>
          
          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        <p>
          Already have an account? <a href="/">Login here</a>
        </p>
      </div>
    </div>
  );
}