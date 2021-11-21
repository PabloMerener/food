import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [recipe, setRecipe] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
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
