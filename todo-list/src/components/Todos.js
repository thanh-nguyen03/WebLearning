import Todo from './Todo';

const Todos = ({
  todos,
  onDelete,
  setDone,
  onAddDate,
  showTodayTodo,
  showAllTodo,
  showPastDue,
  showForm,
}) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  return (
    <div className={`todos ${showForm ? 'show-form' : ''}`}>
      {todos.map((todo) =>
        showTodayTodo && todo.date === today ? (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            setDone={setDone}
            addDate={onAddDate}
          />
        ) : showAllTodo ? (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            setDone={setDone}
            addDate={onAddDate}
          />
        ) : showPastDue &&
          (parseInt(todo.date.substring(8, todo.date.length)) < parseInt(dd) ||
            parseInt(todo.date.substring(5, todo.date.length - 3)) <
              parseInt(mm) ||
            parseInt(todo.date.substring(0, todo.date.length - 6)) <
              parseInt(yyyy)) ? (
          <Todo
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            setDone={setDone}
            addDate={onAddDate}
          />
        ) : (
          ''
        )
      )}
    </div>
  );
};

export default Todos;
