import React from "react";
import { Link } from "react-router-dom";

const RecipeOverview = ({ recipe }) => {
    return (
        <>
            <div>
                <Link to={`/recipes/${recipe.id}`}>
                    <p key={recipe.id}> {recipe.title} </p>
                </Link>
            </div>
            <div>
                <img key={recipe.image} src={recipe.image} alt="recipe"></img>
                {recipe.diets.map(e => (<>{e}<br></br></>))}
            </div>
        </>
    )
}

export default RecipeOverview;
