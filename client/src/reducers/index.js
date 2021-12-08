const initialState = {
    recipes: [],
    diets: [],
    paginator: {
        totalPages: 0,
        currentPage: 0,
        itemsPerPage: 9
    },
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_RECIPES':
            debugger;
            const selectedDiets1 = state.diets
                .filter(e => e.checked)
                .map(e => e.name.toUpperCase());

            const recipesNew1 = [];
            for (let index = 0; index < action.payload.length; index++) {
                if (selectedDiets1.length) {
                    const recipeDiets = action.payload[index].diets.map(e => e.toUpperCase());
                    recipesNew1.push({
                        ...action.payload[index],
                        filtered: selectedDiets1.every(e => recipeDiets.includes(e))
                    })
                } else {
                    recipesNew1.push({
                        ...action.payload[index],
                        filtered: true
                    })
                }
            }
            const totalFilteredItems1 = recipesNew1.filter(e => e.filtered).length;

            return {
                ...state,
                recipes: recipesNew1,
                paginator: {
                    ...state.paginator,
                    totalPages: Math.ceil(totalFilteredItems1 / state.paginator.itemsPerPage),
                    currentPage: totalFilteredItems1 ? 1 : 0
                },
                loading: true
            }

        case 'GET_DIETS':
            return {
                ...state,
                diets: action.payload,
                loading: true
            }

        case 'SET_DIET_CHECKBOX':
            const selectedDiets = state.diets
                .map(e => e.name === action.payload.name ? { ...e, checked: !e.checked } : e)
                .filter(e => e.checked)
                .map(e => e.name.toUpperCase());

            const recipesNew = [];
            for (let index = 0; index < state.recipes.length; index++) {
                const recipeDiets = state.recipes[index].diets.map(e => e.toUpperCase());
                recipesNew.push({
                    ...state.recipes[index],
                    filtered: selectedDiets.every(e => recipeDiets.includes(e))
                })
            }
            const totalFilteredItems = recipesNew.filter(e => e.filtered).length;

            return {
                ...state,
                diets: state.diets.map(
                    e => e.name === action.payload.name ? { ...e, checked: action.payload.checked } : e
                ),
                recipes: recipesNew,
                paginator: {
                    ...state.paginator,
                    totalPages: Math.ceil(totalFilteredItems / state.paginator.itemsPerPage),
                    currentPage: totalFilteredItems ? 1 : 0
                },
                loading: true
            }

        case 'SET_PAGE':
            return {
                ...state,
                paginator: {
                    ...state.paginator,
                    currentPage: action.payload
                },
                loading: true
            }

        default:
            return { ...state }
    }
}
