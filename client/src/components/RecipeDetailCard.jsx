import React from "react";

const RecipeDetailCard = ({ recipe }) => {

    const getDescriptions = (array) => array.map(e => (<p key={e}> {e} </p>));

    const getSteps = (array) => array.map(e => (<p key={e.number}> {e.step} </p>));

    return (
        <>
            <p key={recipe.id}> {`${recipe.id} - ${recipe.title}`} </p>
            <img key={recipe.image} src={recipe.image} alt="recipe"></img>
            {getDescriptions(recipe.diets)}
            <p key="spoonacularScore"> {recipe.spoonacularScore} </p>
            <p key="healthScore"> {recipe.healthScore} </p>
            {getDescriptions(recipe.dishTypes)}
            <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            {!!recipe.analyzedInstructions.length && getSteps(recipe.analyzedInstructions[0].steps)}
        </>
    );
}

export default RecipeDetailCard;
