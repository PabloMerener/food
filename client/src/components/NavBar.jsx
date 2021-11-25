import React from 'react';
import SearchBar from './SearchBar';
import DietSelect from './DietSelect';

const NavBar = ({ onSearch, dietTypes }) => {
  return (
    <nav key="nav">
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div>
        {dietTypes.length && <DietSelect dietTypes={dietTypes} />}
      </div>
    </nav>
  );
};

export default NavBar;