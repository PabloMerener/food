import React from 'react';
import SearchBar from './SearchBar';
import DietSelect from './DietSelect';

const NavBar = ({ onSearch, dietTypes }) => {
  return (
    <div style={{ display: "flex", flexDirection: 'column', padding: "10px"}}>
      <SearchBar onSearch={onSearch} />
      {dietTypes.length && <DietSelect dietTypes={dietTypes} />}
    </div>
  );
};

export default NavBar;