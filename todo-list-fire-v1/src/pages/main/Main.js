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
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState('today');

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

  // setShowToday
  const setShowToday = () => {
    setCategory('today');
  };

  // setShowAllTodo
  const setShowAllTodo = () => {
    setCategory('all');
  };

  return (
    <div className="main-page">
      <nav>
        <NavBar></NavBar>
      </nav>

      <div className="main">
        <SideBar
          setShowToday={setShowToday}
          setShowAllTodo={setShowAllTodo}
          category={category}
        />
        <Todolist
          todos={todos}
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          category={category}
        />
      </div>
    </div>
  );
};

export default Main;
