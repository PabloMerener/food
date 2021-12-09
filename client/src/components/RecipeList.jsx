import React from "react";
import RecipeOverview from './RecipeOverview';

const RecipeList = ({ recipes }) => {
    const recipeList = typeof recipes === 'undefined'
        ? []
        : recipes.map(e => <RecipeOverview key={e.id} recipe={e} />);

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap"
            }}
        >
            {recipeList}
        </div>
    );
}

export default RecipeList;
