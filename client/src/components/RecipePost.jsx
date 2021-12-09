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
            <label>{e.name}</label>
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
                        <div style={{ display: "flex" }}>
                            <div style={{ flex: 3 }}>
                                <ul className="flex-outer">
                                    <li>
                                        <label for="name">Name:</label>
                                        <input name="name" type="text" onChange={(e) => handleInputChange(e)} />
                                    </li>
                                    <li>
                                        <label for="dishOverview">Dish overview:</label>
                                        <textarea name="dish_overview" rows="5" onChange={(e) => handleInputChange(e)} />
                                    </li>
                                    <li>
                                        <label for="score">Score:</label>
                                        <input name="score" type="number" min="0" max="100" onChange={(e) => handleInputChange(e)} />
                                    </li>
                                    <li>
                                        <label for="healthScore">Healthy score:</label>
                                        <input name="health_score" type="number" min="0" max="100" onChange={(e) => handleInputChange(e)} />
                                    </li>
                                    <li>
                                        <label for="stepByStep">Step by step:</label>
                                        <textarea name="step_by_step" rows="5" onChange={(e) => handleInputChange(e)} />
                                    </li>
                                </ul>
                            </div>
                            <div style={{ flex: 1 }}>
                                <ul className="flex-outer">
                                    <li>
                                        <ul>
                                            {checkboxes}
                                        </ul>
                                    </li>
                                    <li>
                                        <button type="submit">Submit</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default RecipePost;