import React from 'react';
import { useState } from 'react';

const Todo = ({ todo }) => {
  const [checked, setChecked] = useState(todo.done);
  return (
    <div className="todo">
      <i
        className={`far checkButton ${
          checked ? 'fa-check-square' : 'fa-square'
        }`}
        onClick={() => setChecked(!checked)}
      ></i>

      <div>
        <p className={`todo-text ${checked ? 'done' : ''}`}>{todo.text}</p>
        <p className="todo-date">{todo.date}</p>
      </div>
    </div>
  );
};

export default Todo;
