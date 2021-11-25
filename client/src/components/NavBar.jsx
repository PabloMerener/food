import React from 'react';
import SearchBar from './SearchBar';
import DietSelect from './DietSelect';

const NavBar = ({ onSearch, dietTypes }) => {
  return (
    <nav key="nav">
      {dietTypes.length && <DietSelect dietTypes={dietTypes} />}
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default NavBar;