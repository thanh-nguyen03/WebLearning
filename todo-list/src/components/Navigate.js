import NavigateButton from './NavigateButton';

const Navigate = ({
  onShowTodayTodo,
  onShowAllTodo,
  onShowPastDue,
  showTodayTodo,
  showAllTodo,
  showPastDue,
}) => {
  return (
    <div className="navigate-section" style={{ display: 'flex' }}>
      <NavigateButton
        text="Today"
        btnClass={`${showTodayTodo ? 'btn-warning' : 'btn-outline-warning'}`}
        onClick={onShowTodayTodo}
      />
      <NavigateButton
        text="All Todo"
        btnClass={`${showAllTodo ? 'btn-success' : 'btn-outline-success'}`}
        onClick={onShowAllTodo}
      />
      <NavigateButton
        text="Past due"
        btnClass={`${showPastDue ? 'btn-danger' : 'btn-outline-danger'}`}
        onClick={onShowPastDue}
      />
    </div>
  );
};

export default Navigate;
