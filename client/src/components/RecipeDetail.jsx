import React from "react";
import { useParams } from 'react-router-dom';
import store from '../store.js'
import RecipeDetailCard from './RecipeDetailCard';

const RecipeDetail = () => {
    const { id } = useParams();

    const { recipes } = store.getState();
    const recipe = recipes.find(e => e.id == id);

    return (
        <div id="root" className="App" >
            <div className="column">
                {!!recipe && <RecipeDetailCard recipe={recipe} />}
            </div>
        </div>
    );
}

export default RecipeDetail;
