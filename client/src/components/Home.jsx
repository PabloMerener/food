import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import RecipeOverview from './RecipeOverview';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [dietTypes, setDietTypes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/diet-types')
            .then(r => r.json())
            .then((data) => {
                setDietTypes(data.map(e => e.name));
            });
    }, []);

    const navigate = useNavigate();
    const onSearch = (recipe) => {
        fetch(`http://localhost:3001/recipes?name=${recipe}`)
            .then(r => r.json())
            .then((data) => {
                setRecipes(data);
            });

        if (recipe) {
            navigate('/recipes?name=' + recipe);
        }
    }

    return (
        <>
            <NavBar onSearch={onSearch} dietTypes={dietTypes} />
            {!!recipes.length && recipes.map(e => <RecipeOverview key={e.id} recipe={e} />)}
        </>
    )
}

export default Home;