import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Registration from './components/Registration';
import TodoList from './components/TodoList';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [todos, setTodos] = useState([]);

  const handleRegisterClick = () => {
    setShowRegistration(true);
  };

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleRegistration = () => {
    setShowRegistration(false);
    setLoggedInUser('newlyRegisteredUser'); // Set the user after registration
  };

  return (
    <div>
      <Header />
      <div>
        <h1>Welcome to My App</h1>

        {showRegistration ? (
          <Registration onRegister={handleRegistration} />
        ) : loggedInUser ? (
          <>
            <p>Logged in as: {loggedInUser}</p>
            <button onClick={handleLogout}>Logout</button>
            <TodoList todos={todos} onAddTodo={handleAddTodo} />
          </>
        ) : (
          <Login onRegisterClick={handleRegisterClick} onLogin={handleLogin} />
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
