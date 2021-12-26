import React from 'react';

// Components
import NavBar from './components/NavBar';
import Todolist from './components/Todolist';

// Css
import './Main.css';

// Hooks
import { useState } from 'react';
import SideBar from './components/SideBar';

const Main = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Finish the essay collaboration',
      date: '18/12/2021',
      done: false,
    },
    {
      id: 2,
      text: 'Read the next chapter of the book in Danish',
      date: '15/12/2021',
      done: true,
    },
  ]);

  // Add Todo
  const addTodo = ({ text, date }) => {
    let id = Math.floor(Math.random() * 10000000) + 1;
    let done = false;
    setTodos([{ id, text, date, done }, ...todos]);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((v) => v.id !== id));
  };

  return (
    <div className="main-page">
      <nav>
        <NavBar></NavBar>
      </nav>

      <div className="main">
        <SideBar />
        <Todolist todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default Main;
