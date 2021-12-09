import React from "react";
import { Link } from "react-router-dom";
import './RecipeCard.css';

const RecipeOverview = ({ recipe }) => {
    return (
        <div className="recipeCardParent">
            <div
                style={{
                    width: "300px",
                    height: "150px"
                }}
            >
                <div>
                    <Link to={`/recipes/${recipe.id}`}>
                        {recipe.title}
                    </Link>
                </div>
                <div className="recipeCardMain">
                    <img
                        key={recipe.image}
                        src={recipe.image}
                        alt="recipe"
                        width="30%"
                    >
                    </img>
                    <div className="recipeCardRight">
                        {recipe.diets.map(e => (<>{`+ ${e}`}<br></br></>))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeOverview;
