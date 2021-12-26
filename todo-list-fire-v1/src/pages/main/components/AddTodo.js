import React from 'react';

import { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  // Get today's date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  const todayD = yyyy + '-' + mm + '-' + dd;

  const [text, setText] = useState('');
  const [date, setDate] = useState(todayD);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text != '' && date != '') addTodo({ text, date });

    setText('');
    setDate(todayD);
  };

  return (
    <form className="add-todo-form" onSubmit={(e) => onSubmit(e)}>
      <button type="submit">
        <i className="fas fa-plus-square submit-add-todo"></i>
      </button>
      <div className="form-control">
        <label>Todo</label>
        <input
          type="text"
          placeholder="Add a todo here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Date</label>
        <input
          type="date"
          placeholder="Add Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </form>
  );
};

export default AddTodo;
