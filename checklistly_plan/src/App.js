import React, { useState } from 'react';
import Login from './Login/Login';
import TodoList from './TodoList/TodoList';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div className="App">
      <Header />
      {user ? <TodoList user={user} /> : <Login isLoggedIn={handleLogin} />}
      <Footer />
    </div>
  );
}

export default App;