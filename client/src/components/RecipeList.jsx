import React from "react";
import RecipeOverview from './RecipeOverview';

const RecipeList = ({ recipes }) => {
    const recipeList = typeof recipes === 'undefined'
        ? []
        : recipes
            .filter(e => e.visible)
            .map(e => <RecipeOverview key={e.id} recipe={e} />);

    return (
        <div>
            {recipeList}
        </div>
    );
}

export default RecipeList;
