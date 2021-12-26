import { useState } from 'react';

const AddTodo = ({ todos, onAdd }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState(Date());
  const [done, setDone] = useState(false);
  const [isPastDue, setIsPastDue] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please insert a todo');
      return;
    }

    onAdd({ text, date, done, isPastDue });

    setText('');
    setDate('');
    setDone(false);
    // setIsPastDue(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Todo</label>
        <input
          type="text"
          placeholder="Add todo"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>End Date</label>
        <input
          type="date"
          placeholder="Add todo"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Done?</label>
        <input
          type="checkbox"
          value={done}
          checked={done}
          onChange={(e) => setDone(e.currentTarget.checked)}
        />
      </div>
      <input
        type="submit"
        value="Save Task"
        className="btn btn-block btn-dark"
      />
    </form>
  );
};

export default AddTodo;
