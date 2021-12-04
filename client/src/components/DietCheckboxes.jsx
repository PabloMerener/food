import React from 'react';

import './RecipeForm.css';

const DietCheckboxes = ({ dietTypes }) => {

  const checkboxes = dietTypes.map((e, i) => (
    <li key={`li-${e}`} style={{marginBottom: 0}}>
      <input key={e} type="checkbox" name={e} />
      <label key={i} className="nav-bar">{e}</label>
    </li>
  ));

  return (
    <div className="container">
      <ul className="flex-outer" >
        {checkboxes}
      </ul>
    </div>
  );
};

export default DietCheckboxes;
