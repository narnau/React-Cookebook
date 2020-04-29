import React from "react";
const RecipeList = (props) => {
  return (
    <div>
      {props.recipes
        .filter((recipe) => recipe.name.includes(props.queryString))
        .map((recipe) => (
          <div key={recipe.name}>
            <span>Nombre: </span>
            <span>{recipe.name}</span>
          </div>
        ))}
    </div>
  );
};

export default RecipeList;
