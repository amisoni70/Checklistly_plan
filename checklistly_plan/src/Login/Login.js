import React, { useState } from "react";
import "./Login.css";

//Login component takes a prop called isLoggedIn from a parent component
function Login({isLoggedIn}) {
    const [email, setEmail] = useState('');   //defines the email variable
    const [password, setPassword] = useState('');   //defines the password variable
    const [emailError, setEmailError] = useState(''); //defines the error in the email input 

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

return (
    <div className="login-container">
      <h1>Welcome</h1>
      <p>Nothing acts faster than a TO-DO List!</p>
      <div className="login-form">
        <label htmlFor="email">Email: </label>
        <input 
          id="email"
          type="email" 
          placeholder="User Name" 
          value={email} 
          onChange={handleEmailChange}
        />
        {emailError && <p style={{ color: 'red', fontWeight: 'bold' }}>{emailError}</p>}
        <label htmlFor="password">Password: </label>
        <input
          id="password" 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>LOGIN</button>
      </div>
    </div>
  );
}

export default Login;