import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]); // todo lar ro'yxati
  const [inputValue, setInputValue] = useState(''); // input qiymati

  // Input o'zgaruvchisini yangilash funksiyasi
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Todo qo'shish funksiyasi
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') { // Bo'sh qatorni qabul qilmaslik
      setTodos([...todos, inputValue]);
      setInputValue(''); // Inputni tozalash
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

