const initialState = {
    recipes: [],
    diets: [],
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.data,
                loading: true
            }

        case 'GET_DIETS':
            return {
                ...state,
                diets: action.data,
                loading: true
            }

        case 'SET_DIET_CHECKBOX':
            const selectedDiets = state.diets
                .map(e => e.name === action.payload.name ? {...e, checked: !e.checked} : e)
                .filter(e => e.checked)
                .map(e => e.name.toUpperCase());

            const recipesNew = [];
            for (let index = 0; index < state.recipes.length; index++) {
                if (index === 2) {
                }
                const recipeDiets = state.recipes[index].diets.map(e => e.toUpperCase());
                recipesNew.push({
                    ...state.recipes[index],
                    visible: selectedDiets.every(e => recipeDiets.includes(e))
                })
            }

            return {
                ...state,
                diets: state.diets.map(
                    e => e.name === action.payload.name ? { ...e, checked: action.payload.checked } : e
                ),
                recipes: recipesNew,
                loading: true
            }

        default:
            return { ...state }
    }
}
