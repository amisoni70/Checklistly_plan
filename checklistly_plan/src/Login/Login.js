import React, { useState } from "react";
import "./Login.css";

//Login component takes a prop called isLoggedIn from a parent component
function Login({isLoggedIn}) {
    const [email, setEmail] = useState('');   // stores values for the email
    const [password, setPassword] = useState('');   //stores values for the password
    const [emailError, setEmailError] = useState(''); //stores values for the email errors
    const [passwordError, setPasswordError ] = useState(''); // stores values for the password errors

// Event handler functions
const handleLogin = () => {
    isLoggedIn(email);
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
  if (inputPassword.length <= 8) {
      setPassword(inputPassword);
      if (inputPassword.length < 8) {
          setPasswordError('Password must be exactly 8 characters');
      } else {
          setPasswordError('');
      }
  }
};

return (
    <div className="login-container">
      <h1>Welcome</h1>
      <p>Nothing acts faster than a TO-DO List!</p>
      <div className="login-form">
        <label htmlFor="email">Email: </label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <input 
          id="email"
          type="email" 
          placeholder="User Name" 
          value={email} 
          onChange={handleEmailChange}
        />
        {isValidEmail() && <span style={{ color: 'green', marginLeft: '5px' }}>&#9989;</span>}
        </div>
        {emailError && <p style={{ color: 'red', fontWeight: 'bold' }}>{emailError}</p>}
        <label htmlFor="password">Password: </label>
        <input
          id="password" 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={handlePasswordChange} 
        />
        {passwordError && <p style={{ color: 'red', fontWeight: 'bold' }}>{passwordError}</p>}
        <button onClick={handleLogin}>LOGIN</button>
      </div>
    </div>
  );
}

export default Login;