import React, { useState } from "react";
import NavBar from './NavBar';

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    const onSearch = (recipe) => {
        fetch(`http://localhost:3001/recipes?name=${recipe}`)
            .then(r => r.json())
            .then((data) => {
                setRecipes(data.results);
            });
    }

    return (
        <>
            <h1>Home</h1>
            <NavBar onSearch={onSearch} />
            {recipes.map(e => {
                return (
                    <p key={e.id}>
                        {e.title}
                    </p>
                );
            })}
        </>
    )
}

export default Home