import React, { useState } from 'react';

const Header = ({ onSearch, onChangeBg }) => {
  const [query, setQuery] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();

    onSearch(query);

    setQuery('');
  };
  return (
    <div>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Ha Noi, VN"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-warning header-btn">Search</button>
      </form>
    </div>
  );
};

export default Header;
