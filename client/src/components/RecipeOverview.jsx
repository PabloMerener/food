import React from "react";
import { Link } from "react-router-dom";

const RecipeOverview = ({ recipe }) => {
    return (
        <>
        <Link to={`/recipes/${recipe.id}`}>
            <p key={recipe.id}> {`${recipe.id} - ${recipe.title}`} </p>
            <img key={recipe.image} src={recipe.image} alt="recipe"></img>
            {recipe.diets.map(e => (<p key={`${e} - ${recipe.id}`}> {e} </p>))}
        </Link>
        </>
    )
}

export default RecipeOverview;
