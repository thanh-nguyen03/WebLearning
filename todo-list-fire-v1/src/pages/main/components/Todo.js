import React from 'react';
import { useState } from 'react';

const Todo = ({ todo, deleteTodo }) => {
  const [checked, setChecked] = useState(todo.done);

  return (
    <div className="todo">
      <div>
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

      <i
        class="fas fa-trash delete-btn"
        onClick={() => deleteTodo(todo.id)}
      ></i>
    </div>
  );
};

export default Todo;
