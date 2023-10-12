import React, { useState } from 'react';
import "./Styles.css";
import TodoFormFields from './TodoFormFields';
import TodoFormButtons from './TodoFormButtons';

export default function TodoForm({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState({ title: '', description: '', author: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if title is not empty
    if (newTodo.title.trim() !== '') {
      // Add the new todo
      onAddTodo({
        ...newTodo,
        dateCreated: Date.now(),
        complete: false,
        dateCompleted: null,
      });

      // Reset the form
      setNewTodo({ title: '', description: '', author: '' });
    }
  };

  return (
    <div>
      <form key="todo-form" className="login-form" onSubmit={handleSubmit}>
        <TodoFormFields onInputChange={handleInputChange} />
        <TodoFormButtons />
      </form>
    </div>
  );
}
