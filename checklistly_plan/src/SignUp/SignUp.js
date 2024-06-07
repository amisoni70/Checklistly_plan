import React, { useState } from "react";
import "./SignUp.css";

function SignUp({ onSignUp, onToggle }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Event handler functions

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputEmail !== '' && !emailRegex.test(inputEmail)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    if (inputPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const inputConfirmPassword = e.target.value;
    setConfirmPassword(inputConfirmPassword);
    if (inputConfirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = () => {
    return password.length >= 8;
  };

  const passwordsMatch = () => {
    return password === confirmPassword;
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <div className="signup-form">
        <label htmlFor="email">Email: </label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input 
            id="email"
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={handleEmailChange}
          />
          {isValidEmail() && <span style={{ color: 'green', marginLeft: '5px' }}>&#9989;</span>}
        </div>
        {emailError && <p style={{ color: 'red', fontWeight: 'bold' }}>{emailError}</p>}

        <label htmlFor="password">Password: </label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            id="password" 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
          {isValidPassword() && <span style={{ color: 'green', marginLeft: '5px' }}>&#9989;</span>}
        </div>
        {passwordError && <p style={{ color: 'red', fontWeight: 'bold' }}>{passwordError}</p>}

        <label htmlFor="confirmPassword">Confirm Password: </label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            id="confirmPassword" 
            type="password" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={handleConfirmPasswordChange} 
          />
          {passwordsMatch() && <span style={{ color: 'green', marginLeft: '5px' }}>&#9989;</span>}
        </div>
        {confirmPasswordError && <p style={{ color: 'red', fontWeight: 'bold' }}>{confirmPasswordError}</p>}
        <button className="signup-button" onClick={onToggle}>SIGN UP</button>
      </div>
    </div>
  );
}

export default SignUp;