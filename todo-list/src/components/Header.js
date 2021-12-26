import ShowFormButton from './ShowFormButton';

const Header = ({ toggleShowForm, showForm }) => {
  return (
    <div className="header">
      <h1>Todo List</h1>
      <ShowFormButton
        toggleShowForm={toggleShowForm}
        text={showForm ? 'Close' : 'Add Todo'}
        buttonStatus={showForm}
      />
    </div>
  );
};

export default Header;
