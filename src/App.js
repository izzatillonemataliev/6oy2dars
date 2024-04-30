
import './App.css';

import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Todo App React</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Todo qo'shish..."
        />

        <button onClick={handleAddTodo}>Qo'shish</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

