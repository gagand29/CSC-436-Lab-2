import React from 'react';

export default function TodoItem({ todo }) {
  return (
    <li>
      <strong>{todo.title}</strong>
      {todo.description && <p>{todo.description}</p>}
      <p>Author: {todo.author}</p>
      <p>Created: {new Date(todo.dateCreated).toLocaleString()}</p>
      <p>Complete: {todo.complete ? 'Yes' : 'No'}</p>
      {todo.complete && (
        <p>Completed: {new Date(todo.dateCompleted).toLocaleString()}</p>
      )}
    </li>
  );
}
