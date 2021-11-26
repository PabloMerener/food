import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [recipe, setRecipe] = useState("");

  return (
    <form style={{ margin: "5px" }} onSubmit={(e) => {
      e.preventDefault();
      onSearch(recipe);
    }}>
      <input
        type="text"
        placeholder="Receta ..."
        value={recipe}
        onChange={e => setRecipe(e.target.value)}
      />
      <input type="submit" value="Buscar" />
    </form>
  );
}

export default SearchBar;