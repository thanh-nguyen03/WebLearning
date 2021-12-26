import Header from '../components/Header';
import { useState } from 'react';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import Navigate from '../components/Navigate';

const MainApp = () => {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos'))
      ? JSON.parse(localStorage.getItem('todos'))
      : []
  );

  const [showTodayTodo, setShowTodayTodo] = useState(true);
  const [showAllTodo, setShowAllTodo] = useState(false);
  const [showPastDue, setShowPastDue] = useState(false);

  // Add Todo
  const addTodo = ({ text, date, done, isPastDue }) => {
    const id = Math.floor(Math.random() * 100000000) + 1;
    console.log(typeof date);
    setTodos([...todos, { id, text, date, done, isPastDue }]);
  };

  // Show Form
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Set Done
  const setDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // Add Date
  const addDate = (id, date) => {
    console.log(date);
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, date: date } : todo))
    );
  };

  // Add Loader
  let [loaderHidden, setLoaderHidden] = useState(false);
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  sleep(600).then(() => {
    setLoaderHidden(true);
  });

  // Show Today Todo
  const onShowTodayTodo = () => {
    setShowTodayTodo(true);
    setShowAllTodo(false);
    setShowPastDue(false);
  };

  // Show ALl Todo
  const onShowAllTodo = () => {
    setShowAllTodo(true);
    setShowTodayTodo(false);
    setShowPastDue(false);
  };

  // Show Past Due Todo
  const onShowPastDue = () => {
    setShowPastDue(true);
    setShowTodayTodo(false);
    setShowAllTodo(false);
  };

  // Local Store Data
  localStorage.setItem('todos', JSON.stringify(todos));

  return (
    <div className="container">
      <div className={`loader ${loaderHidden ? 'hidden' : ''}`}></div>

      <div className={`todo-container ${loaderHidden ? '' : 'hidden'}`}>
        <Header toggleShowForm={toggleShowForm} showForm={showForm} />
        {showForm && <AddTodo todos={todos} onAdd={addTodo} />}
        <Navigate
          onShowTodayTodo={onShowTodayTodo}
          onShowAllTodo={onShowAllTodo}
          onShowPastDue={onShowPastDue}
          showTodayTodo={showTodayTodo}
          showAllTodo={showAllTodo}
          showPastDue={showPastDue}
        />
        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onDelete={deleteTodo}
            setDone={setDone}
            onAddDate={addDate}
            showForm={showForm}
            showTodayTodo={showTodayTodo}
            showAllTodo={showAllTodo}
            showPastDue={showPastDue}
          />
        ) : (
          'There is no todo to show :( '
        )}
      </div>
    </div>
  );
};

export default MainApp;
