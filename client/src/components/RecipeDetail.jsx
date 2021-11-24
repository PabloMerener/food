import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import RecipeDetailCard from './RecipeDetailCard';

const RecipeDetail = () => {
    const [recipe, setRecipe] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/recipes/${id}.json`)
            .then(r => r.json())
            .then((recipe) => {
                setRecipe(recipe);
            });
    }, [id]);

    return (
        <>
            {!!recipe && <RecipeDetailCard recipe={recipe} />}
        </>
    );
}

export default RecipeDetail;
