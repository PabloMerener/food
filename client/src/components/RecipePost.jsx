import React from "react";
import Header from './Header';
import './RecipeForm.css';

function RecipePost() {
    return (
        <>
            <Header title="Create Recipe" navigateTo="/" buttonText="Home" />
            <div className="main">
                <div className="container">
                    <form>
                        <ul className="flex-outer">
                            <li>
                                <label for="name">Nombre:</label>
                                <input name="name" type="text" />
                            </li>
                            <li>
                                <label for="dishOverview">Resumen del plata:</label>
                                <textarea name="dishOverview" rows="3" />
                            </li>
                            <li>
                                <label for="score">Puntuación:</label>
                                <input name="score" type="number" min="0" max="100" />
                            </li>
                            <li>
                                <label for="healthScore">Nivel de "comida saludable":</label>
                                <input name="healthScore" type="number" min="0" max="100" />
                            </li>
                            <li>
                                <label for="stepByStep">Paso a paso:</label>
                                <textarea name="stepByStep" rows="3" />
                            </li>
                            <li>
                                <label for="diets">Dieta:</label>
                                <select name="diets" multiple>
                                    <option value="Dairy Free">Dairy Free</option>
                                    <option value="Fodmap Friendly">Fodmap Friendly</option>
                                    <option value="Gluten Free">Gluten Free</option>
                                    <option value="Lacto Ovo Vegetarian">Lacto Ovo Vegetarian</option>
                                    <option value="Paleolithic">Paleolithic</option>
                                    <option value="Pescatarian">Pescatarian</option>
                                    <option value="Primal">Primal</option>
                                    <option value="Vegan">Vegan</option>
                                    <option value="Whole 30">Whole 30</option>
                                </select>
                            </li>
                            <li>
                                <button type="submit">Submit</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </>
    );
}

export default RecipePost;