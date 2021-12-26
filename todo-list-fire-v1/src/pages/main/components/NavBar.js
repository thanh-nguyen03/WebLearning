import React from 'react';

const NavBar = () => {
  return (
    <nav className="main-nav">
      <div className="logo">
        <span className="main-logo">Todolist</span>
      </div>

      <div className="navigator-buttons">
        <i className="far fa-bell"></i>
        <i className="far fa-user avatar"></i>
      </div>
    </nav>
  );
};

export default NavBar;
