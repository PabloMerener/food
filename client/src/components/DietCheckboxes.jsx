import React from 'react';

import store from '../store.js'
import { setDietChecbox } from '../actions';

import './RecipeForm.css';

const DietCheckboxes = ({ dietTypes }) => {

  const onChange = (e) => {
    store.dispatch(
      setDietChecbox({
        name: e.target.name,
        checked: e.target.checked
      })
    );
  };

  const checkboxes = dietTypes.map((e, i) => (
    <li key={`li-${e.name}`} style={{ marginBottom: 0 }}>
      <input key={e.name} type="checkbox" name={e.name} onChange={onChange} />
      <label key={i} className="nav-bar">{e.name}</label>
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
