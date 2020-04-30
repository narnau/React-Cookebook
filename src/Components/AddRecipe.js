import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as recipesActions from "../redux/actions/recipesActions";

const AddRecipe = (props) => {
  const [recipe, setRecipe] = useState({ name: "" });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(recipe);
    setRecipe({ name: "" });
  };

  const onChangeFunction = (recipeName) => {
    setRecipe({ name: recipeName });
  };

  const onSubmit = (newRecipe) => {
    props.actions.createRecipe(newRecipe);
    props.history.push("/");
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

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      createRecipe: bindActionCreators(recipesActions.createRecipe, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
