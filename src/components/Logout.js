import React from 'react';
import "./Styles.css";

export default function Logout({ user }) {
  return (
    <div className="login-container">
      <h2>Logout Form:</h2>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <div className="button-container">
          <input type="submit" value="Logout" />
        </div>
      </form>
    </div>
  );
}
