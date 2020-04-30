import React, { useEffect } from "react";
import RecipeList from "./RecipeList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as recipesActions from "../redux/actions/recipesActions";

const RecipesPage = (props) => {
  useEffect(() => {
    props.actions.loadRecipes();
  }, []);

  return <RecipeList queryString={props.filter} recipes={props.recipes} />;
};

function mapStateToProps(state) {
  return {
    recipes: state.recipes.list,
    filter: state.recipes.filter,
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
