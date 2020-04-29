import React, { useState } from "react";

const AddRecipe = (props) => {
  const [recipe, setRecipe] = useState({ name: "" });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(recipe);
    setRecipe({ name: "" });
  };

  const onChangeFunction = (newRecipe) => {
    setRecipe({ name: newRecipe });
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <span>Receipe name:</span>
        <input
          value={recipe.name}
          onChange={(event) => {
            onChangeFunction(event.target.value);
          }}
        />
      </form>
    </>
  );
};

export default AddRecipe;
