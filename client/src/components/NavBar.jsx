import React from 'react';
import SearchBar from './SearchBar';
import DietCheckboxes from './DietCheckboxes';

const NavBar = ({ onSearch, dietTypes }) => {
  return (
    <div style={{ display: "flex", flexDirection: 'column', padding: "10px" }}>
      <SearchBar onSearch={onSearch} />
      <DietCheckboxes dietTypes={dietTypes} />
    </div>
  );
};

export default NavBar;
