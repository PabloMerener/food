import axios from 'axios';

export function getDiets(data) {
  return {
    type: 'GET_DIETS',
    payload: data
  }
}

export function fetchDiets() {
  return function (dispatch) {
    axios.get(`http://localhost:3001/diet-types`)
      .then(r => r.data)
      .then(d => {
        dispatch(getDiets(
          d.map(e => ({
            id: e.id,
            name: e.name,
            checked: false
          }))
        ))
      })
      .catch(e => console.log(e));
  }
}

export function getRecipes(data) {
  return {
    type: 'GET_RECIPES',
    payload: data
  }
}

export function fetchRecipes(query = null) {
  const endpoint = 'http://localhost:3001/recipes';
  const url = query ? endpoint + `?${query}` : endpoint;

  return function (dispatch) {
    axios.get(url)
      .then(r => r.data)
      .then(d => {
        dispatch(getRecipes(
          d.map(e => ({
            ...e,
            filtered: true
          }))
        ))
      })
      .catch(e => console.log(e));
  }
}

export function setDietChecbox(checbox) {
  return {
    type: 'SET_DIET_CHECKBOX',
    payload: checbox
  }
}

export function setPage(page) {
  return {
    type: 'SET_PAGE',
    payload: page
  }
}
