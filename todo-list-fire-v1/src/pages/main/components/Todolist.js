import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

const Todolist = ({ todos, addTodo }) => {
  return (
    <div className="todolist">
      <AddTodo addTodo={addTodo} />
      <h1 className="main-title">Todo List</h1>
      <div className="overflow">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Todolist;
