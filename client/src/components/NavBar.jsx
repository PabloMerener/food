import React from 'react';
import SearchBar from './SearchBar';

const NavBar = ({ onSearch }) => {
  return (
    <nav key="nav">
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default NavBar;