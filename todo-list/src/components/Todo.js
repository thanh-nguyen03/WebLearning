import AddDate from './AddDate';
import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

const Todo = ({ todo, onDelete, setDone, addDate }) => {
  return (
    <div className={`todo ${todo.done ? 'done' : ''}`}>
      <h4>
        <span>{todo.text}</span>
        <div className="todo-buttons">
          <FaCheck
            style={{ color: '#0a0', cursor: 'pointer' }}
            onClick={() => setDone(todo.id)}
          />
          <FaTimes
            style={{
              color: '#d00',
              cursor: 'pointer',
              margin: '0px 0px 0px 5px',
            }}
            onClick={() => onDelete(todo.id)}
          />
        </div>
      </h4>
      <p>
        {todo.date ? todo.date : <AddDate id={todo.id} addDate={addDate} />}
      </p>
    </div>
  );
};

export default Todo;
