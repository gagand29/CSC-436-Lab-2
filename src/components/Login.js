import React, { useState } from 'react';
import './Styles.css';

export default function Login({ onRegisterClick, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLoginSubmit}>
        <label htmlFor="login-username">Username:</label>
        <input
          type="text"
          name="login-username"
          id="login-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="login-password">Password:</label>
        <input
          type="password"
          name="login-password"
          id="login-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="button-container">
          <input type="submit" value="Login" />
          <button type="button" onClick={onRegisterClick}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
