import React from 'react';
import logo from '../img/logo.jpg';

const NavBar = ({ onShowForm }) => {
  return (
    <div>
      <nav className="main-nav">
        <img src={logo} alt="logo" className="main-logo" />
        <button type="button" className="btn btn-danger" onClick={onShowForm}>
          Search
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
