import React from 'react';
import store from '../store.js'
import { setPage } from '../actions';

const Paginator = ({ paginator }) => {
  const { currentPage } = paginator;

  const onChange = (e) => {
    store.dispatch(setPage(parseInt(e.target.value)));
  }

  return (
    <div style={{ display: 'flex', padding: '10px' }}>
      <label
        key="htmlForPage"
        htmlFor="paginator"
      >
        Page
      </label>
      <select name="paginator" style={{ marginLeft: "5px" }} onChange={onChange}>
        {Array.from({ length: paginator.totalPages }, (_, i) => i + 1).map(
          e => e === currentPage ? <option key={e} value={e} selected>{e}</option> : <option key={e} value={e} >{e}</option>
        )}
      </select>
    </div>
  );
};

export default Paginator;
