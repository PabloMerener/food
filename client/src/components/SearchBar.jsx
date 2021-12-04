import React, { useState } from "react";

import './RecipeForm.css';

const SearchBar = ({ onSearch }) => {
  const [recipe, setRecipe] = useState("");

  return (
    <form style={{ margin: "5px" }} onSubmit={(e) => {
      e.preventDefault();
      onSearch(recipe);
    }}>
      <ul className="flex-outer" >
        <li>

          <input
            type="text"
            placeholder="Receta ..."
            value={recipe}
            onChange={e => setRecipe(e.target.value)}
          />
          <input type="submit" value="Buscar" />
        </li>
      </ul>
    </form>
  );
}

export default SearchBar;


