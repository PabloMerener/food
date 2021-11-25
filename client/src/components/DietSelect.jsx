import React from 'react';

const DietSelect = ({ dietTypes }) => {
  const options = dietTypes.map(e => (<option key={e} value={e}>{e}</option>));

  return (
    <>
      <select name="diet" id="DietSelect" multiple >
        {options}
      </select>
    </>
  );
};

export default DietSelect;
