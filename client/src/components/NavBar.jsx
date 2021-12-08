import React from 'react';
import SearchBar from './SearchBar';
import Paginator from './Paginator';
import DietCheckboxes from './DietCheckboxes';

const NavBar = ({ onSearch, dietTypes, paginator }) => {
  return (
    <div style={{ display: "flex", flexDirection: 'column', padding: "10px" }}>
      <SearchBar onSearch={onSearch} />
      <Paginator paginator={paginator} />
      <DietCheckboxes dietTypes={dietTypes} />
    </div>
  );
};

export default NavBar;
