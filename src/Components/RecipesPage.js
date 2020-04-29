import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import Searcher from "./Searcher";
import AddRecipe from "./AddRecipe";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as recipesActions from "../redux/actions/recipesActions";

const RecipesPage = (props) => {
  useEffect(() => {
    props.actions.loadRecipes();
  }, []);

  const [queryString, setQueryString] = useState("");
  const onChangeFunction = (queryString) => {
    setQueryString(queryString);
  };

  const onSubmit = (newRecipe) => {
    props.actions.createRecipe(newRecipe);
  };

  return (
    <>
      <Searcher onChangeFunction={onChangeFunction} />
      <AddRecipe onSubmit={onSubmit} />
      <RecipeList queryString={queryString} recipes={props.recipes} />
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
      loadRecipes: bindActionCreators(recipesActions.loadRecipes, dispatch),
      createRecipe: bindActionCreators(recipesActions.createRecipe, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);
