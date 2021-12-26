import { useState } from 'react';

const AddDate = ({ id, addDate }) => {
  const [date, setDate] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();

    if (!date) {
      alert('Please choose a date for your todo!');
      return;
    }

    addDate(id, date);
  };

  return (
    <form className="add-date-form" onSubmit={onSubmit}>
      <button className="btn btn-outline-info btn-sm" type="submit">
        Add Date
      </button>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </form>
  );
};

export default AddDate;
