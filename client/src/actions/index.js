import axios from 'axios';

export function getDiets(data) {
  return {
    type: 'GET_DIETS',
    data
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
    data
  }
}

export function fetchRecipes() {
  return function (dispatch) {
    axios.get(`http://localhost:3001/recipes`)
      .then(r => r.data)
      .then(d => {
        dispatch(getRecipes(
          d.map(e => ({
            ...e,
            visible: true
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
