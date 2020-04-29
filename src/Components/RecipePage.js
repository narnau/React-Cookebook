import React, { useState } from "react";
import RecipeList from "./RecipeList";
import Searcher from "./Searcher";

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

  return (
    <>
      <Searcher onChangeFunction={onChangeFunction} />
      <RecipeList queryString={queryString} recipes={recipes} />
    </>
  );
};

export default RecipePage;
