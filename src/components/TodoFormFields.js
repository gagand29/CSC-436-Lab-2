import React from 'react';

export default function TodoFormFields({ onInputChange }) {
  return (
    <>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" id="title" onChange={onInputChange} required />

      <label htmlFor="description">Description:</label>
      <textarea name="description" id="description" onChange={onInputChange}></textarea>

      <label htmlFor="author">Author:</label>
      <input type="text" name="author" id="author" onChange={onInputChange} required />

      <p>Date Created: {new Date().toLocaleString()}</p>
      <input type="hidden" name="dateCreated" value={Date.now()} />
    </>
  );
}
