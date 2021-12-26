import React from 'react';
import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for a movie you like"
          className="main-search-bar"
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchForm;
