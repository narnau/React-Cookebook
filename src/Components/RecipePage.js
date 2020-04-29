import React, { useState } from "react";
import RecipeList from "./RecipeList";
import Searcher from "./Searcher";
import AddRecipe from "./AddRecipe";

const RecipePage = (props) => {
  const [queryString, setQueryString] = useState("");
  const onChangeFunction = (queryString) => {
    setQueryString(queryString);
  };

  const [recipes, setRecipes] = useState([
    { name: "Receta1" },
    { name: "Receta2" },
    { name: "Receta3" },
  ]);

  const onSubmit = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <>
      <Searcher onChangeFunction={onChangeFunction} />
      <AddRecipe onSubmit={onSubmit} />
      <RecipeList queryString={queryString} recipes={recipes} />
    </>
  );
};

export default RecipePage;
