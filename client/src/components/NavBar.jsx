import React from 'react';
import SearchBar from './SearchBar';

function NavBar({ onSearch }) {
  return (
    <nav>
      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  );
};

export default NavBar;