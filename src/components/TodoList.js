import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onAddTodo }) {
  console.log('Todos in TodoList:', todos);

  return (
    <div>
      <div className="form-container">
        <h2>Add new todo list</h2>
        <TodoForm onAddTodo={onAddTodo} />
      </div>

      <div className="list-container">
        <h2>Your Todo List</h2>
        <ul>
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
}
