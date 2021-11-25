import React from 'react';

const DietSelect = ({ dietTypes }) => {
  const options = dietTypes.map(e => (<option key={e} value={e}>{e}</option>));

  return (
    <>
      <label key="label" for="diet">Dieta:</label>
      <select name="diet" id="diet" multiple>
        {options}
      </select>
    </>
  );
};

export default DietSelect;