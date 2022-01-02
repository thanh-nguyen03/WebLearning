import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

const Todolist = ({ todos, addTodo, deleteTodo, category }) => {
  // Get today's date
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  const todayD = yyyy + '-' + mm + '-' + dd;

  return (
    <div className="todolist">
      <AddTodo addTodo={addTodo} />
      <h1 className="main-title">Todo List</h1>
      <div className="overflow">
        {todos.map((todo) =>
          category === 'today' && todo.date === todayD ? (
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ) : category === 'all' ? (
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
          ) : (
            ''
          )
        )}
      </div>
    </div>
  );
};

export default Todolist;
