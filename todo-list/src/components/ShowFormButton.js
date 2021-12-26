const ShowFormButton = ({ toggleShowForm, text, buttonStatus }) => {
  return (
    <button
      className={`btn ${
        buttonStatus ? 'btn-outline-danger' : 'btn-outline-success'
      }`}
      onClick={() => toggleShowForm()}
    >
      {text}
    </button>
  );
};

export default ShowFormButton;
