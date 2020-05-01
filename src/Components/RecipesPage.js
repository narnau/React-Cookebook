import React, { useEffect } from "react";
import RecipeList from "./RecipeList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as recipesActions from "../redux/actions/recipesActions";

const RecipesPage = (props) => {
  useEffect(() => {
    props.actions.loadRecipes();
  }, [props.actions]);

  const labelOnClick = (label) => {
    props.actions.setFilter(label.name);
  };

  const filterFunction = (recipe) => {
    let name = recipe.name.toLowerCase().includes(props.filter.toLowerCase());
    let label = recipe.labels.find((label) =>
      label.name.toLowerCase().includes(props.filter.toLowerCase())
    );
    return name || label;
  };

  return (
    <RecipeList
      recipes={props.recipes}
      labelOnClick={labelOnClick}
      filterFunction={filterFunction}
    />
  );
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
      setFilter: bindActionCreators(recipesActions.setFilter, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage);
