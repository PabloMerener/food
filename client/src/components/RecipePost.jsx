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
                                <label for="diets">Dietas:</label>
                                <ul >
                                    <li>
                                        <input type="checkbox" />
                                        <label for="Dairy Free">Dairy Free</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label for="Fodmap Friendly">Fodmap Friendly</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label for="Gluten Free">Gluten Free</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label for="Lacto Ovo Vegetarian">Lacto Ovo Vegetarian</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label for="Paleolithic">Paleolithic</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label for="Pescatarian">Pescatarian</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label for="Primal">Primal</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label for="Vegan">Vegan</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label for="Whole 30">Whole 30</label>
                                    </li>
                                </ul>
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