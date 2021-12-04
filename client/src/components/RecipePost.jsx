import React, { useState, useEffect } from "react";
import Header from './Header';
import './RecipeForm.css';

function RecipePost() {
    const [dietTypes, setDietTypes] = useState([]);
    const [input, setInput] = useState({
        diets: [],
        response: null
    });

    useEffect(() => {
        fetch('http://localhost:3001/diet-types')
            .then(r => r.json())
            .then((data) => {
                setDietTypes(data);
            });
    }, []);

    const checkboxes = dietTypes.map(e => (
        <li>
            <input type="checkbox" name={e.name} onChange={(e) => handleInputChange(e)} />
            <label for={e.name}>{e.name}</label>
        </li>
    ));

    const handleInputChange = function (e) {
        if (e.target.type === 'checkbox') {
            const newDietList = [...input.diets];
            if (e.target.checked) {
                newDietList.push(e.target.name);
            } else {
                newDietList.splice(newDietList.indexOf(e.target.name), 1);
            }
            setInput({
                ...input,
                diets: newDietList
            });
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/recipes/create', {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                if ('errors' in response) { // TODO: check status code
                    alert(response.errors
                        .map(e => e.value + ' (' + e.message + ')')
                        .join('/')
                    );
                } else {
                    document.getElementById("recipe-form").reset();
                    const message = `${response.name} recipe has been created successfully`;
                    alert(message);
                }
            })
            .catch(error => alert('Server error'));
    };

    return (
        <>
            <Header title="Create Recipe" navigateTo="/" buttonText="Home" />
            <div className="main">
                <div className="container">
                    <form onSubmit={handleSubmit} id="recipe-form">
                        <ul className="flex-outer">
                            <li>
                                <label for="name">Nombre:</label>
                                <input name="name" type="text" onChange={(e) => handleInputChange(e)} />
                            </li>
                            <li>
                                <label for="dishOverview">Resumen del plata:</label>
                                <textarea name="dish_overview" rows="3" onChange={(e) => handleInputChange(e)} />
                            </li>
                            <li>
                                <label for="score">Puntuación:</label>
                                <input name="score" type="number" min="0" max="100" onChange={(e) => handleInputChange(e)} />
                            </li>
                            <li>
                                <label for="healthScore">Nivel de "comida saludable":</label>
                                <input name="health_score" type="number" min="0" max="100" onChange={(e) => handleInputChange(e)} />
                            </li>
                            <li>
                                <label for="stepByStep">Paso a paso:</label>
                                <textarea name="step_by_step" rows="3" onChange={(e) => handleInputChange(e)} />
                            </li>
                            <li>
                                <label for="diets">Dietas:</label>
                                <ul>
                                    {checkboxes}
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