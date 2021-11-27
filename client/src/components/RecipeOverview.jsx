import React from "react";
import { Link } from "react-router-dom";
import './RecipeCard.css';

const RecipeOverview = ({ recipe }) => {
    return (
        <div className="recipeCardParent">
            <div className="recipeCardHeader">
                    {recipe.title}
            </div>
            <div className="recipeCardMain">
                <div className="recipeCardLeft">
                    <Link to={`/recipes/${recipe.id}`}>
                        <img
                            key={recipe.image}
                            src={recipe.image}
                            alt="recipe"
                            width="100%"
                        >
                        </img>
                    </Link>
                </div>
                <div className="recipeCardMain">
                    <div className="recipeCardRight">
                        {recipe.diets.map(e => (<>{`+ ${e}`}<br></br></>))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RecipeOverview;