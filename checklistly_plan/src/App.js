import React, { useState } from 'react';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import TodoList from './TodoList/TodoList';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleSignUp = (username) => {
    setUser(username);
    setIsSignUp(false);
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="App">
      <Header />
      {user ? (
        <TodoList user={user} onLogout={handleLogout} />
      ) : (
        isSignUp ? (
          <SignUp onSignUp={handleSignUp} onToggle={toggleSignUp} />
        ) : (
          <Login isLoggedIn={handleLogin} onToggle={toggleSignUp} />
        )
      )}
      <Footer />
    </div>
  );
}

export default App;