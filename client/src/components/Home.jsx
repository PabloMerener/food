import React, { useEffect } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as actionsCreators from '../actions';

import NavBar from './NavBar';
import RecipeList from './RecipeList';
import Header from './Header';

const Home = ({ diets, fetchDiets, recipes, fetchRecipes }) => {
    const dietTypes = typeof diets === 'undefined' ? [] : diets;

    useEffect(() => { fetchDiets() }, []);

    const navigate = useNavigate();
    const onSearch = (recipe) => {
        fetchRecipes();

        const endpoint = 'http://localhost:3001/recipes';
        const nameQuery = recipe.length ? 'name=' + recipe : '';
        const dietQuery = [];

        let query = nameQuery;
        if (query.length) {
            if (dietQuery.length) query = query + `&${dietQuery}`;
        } else {
            query = dietQuery;
        }

        if (recipe) {
            navigate('/recipes?name=' + recipe);
        }
    }

    return (
        <>
            <Header title="Recipes" navigateTo="/recipes/create" buttonText="Crear" />
            <div className="main">
                <div style={{ display: "flex" }}>
                    <NavBar style={{ width: "20%" }} onSearch={onSearch} dietTypes={dietTypes} />
                    <RecipeList recipes={recipes} />
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        diets: state.diets
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
