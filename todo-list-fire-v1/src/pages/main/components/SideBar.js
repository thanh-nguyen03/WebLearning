import React from 'react';

const SideBar = ({ setShowToday, setShowAllTodo, category }) => {
  return (
    <div className="sideBar">
      <h2
        className={`category ${category === 'today' ? 'on' : ''}`}
        onClick={() => setShowToday()}
      >
        Today
      </h2>
      <h2
        className={`category ${category === 'all' ? 'on' : ''}`}
        onClick={() => setShowAllTodo()}
      >
        All Todo
      </h2>
    </div>
  );
};

export default SideBar;
