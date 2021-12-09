import React from "react";
import './RecipeCard.css';
import Header from './Header';

const RecipeDetailCard = ({ recipe }) => {
    const getDescriptions = (array) => array.map(e => (<p key={e}> {e} </p>));

    const getSteps = (array) => array.map(e => (<p key={e.number}> {e.step} </p>));

    return (
        <>
            <Header title="Recipe" navigateTo="/" buttonText="Home" />
            <div className="recipeCardParent">
                <div className="recipeCardHeader">
                    <p key={recipe.id}> {`${recipe.title}`} </p>
                </div>
                <div className="recipeCardMain">
                    <img key={recipe.image} src={recipe.image} alt="recipe"></img>
                    <div className="recipeCardRight">
                        {getDescriptions(recipe.diets)}
                    </div>
                    <div className="recipeCardRight">
                        {getDescriptions(recipe.dishTypes)}
                    </div>

                </div>
            </div>
            <ul className="flex-outer">
                <li>
                    <label>Score:</label>
                    <p key="spoonacularScore"> {recipe.spoonacularScore} </p>
                </li>
                <li>
                    <label>Health Score:</label>
                    <p key="healthScore"> {recipe.healthScore} </p>
                </li>
                <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                <li>
                    {!!recipe.analyzedInstructions.length && getSteps(recipe.analyzedInstructions[0].steps)}
                </li>
            </ul>
        </>
    );
}

export default RecipeDetailCard;
