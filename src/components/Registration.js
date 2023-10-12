import React, { useState } from 'react';
import './Styles.css';

export default function Registration({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();

    onRegister(username);
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleRegistrationSubmit}>
        <label htmlFor="register-username">Username:</label>
        <input
          type="text"
          name="register-username"
          id="register-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="register-password">Password:</label>
        <input
          type="password"
          name="register-password"
          id="register-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="button-container">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}
