import React, { useState } from "react";
import "./Login.css";

function Login({ isLoggedIn, onToggle }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Event handler functions
  const handleLogin = () => {
    if (isValidEmail() && isValidPassword()) {
      isLoggedIn(email);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail() && isValidPassword()) {
      isLoggedIn(email);
    }
  };

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

  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    if (inputPassword.length < 8) {
      setPasswordError('Password must be a minimum of 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const isValidPassword = () => {
    return password.length >= 8;
  };

  return (
    <div className="login-container">
      <h1>Welcome</h1>
      <p className="slogan">Nothing acts faster than a TO-DO List!</p>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
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
            {isValidPassword() && <span style={{ color: 'pink', marginLeft: '5px' }}>&#9989;</span>}
          </div>
          {passwordError && <p style={{ color: 'red', fontWeight: 'bold' }}>{passwordError}</p>}
          <button onClick={handleLogin}>LOGIN</button>
        </form>
        <p className="phrase" onClick={onToggle}>Don't Have an account? Sign Up</p>
      </div>
    </div>
  );
}

export default Login;