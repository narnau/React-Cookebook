import React from "react";
import AddRecipe from "./AddRecipe";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as recipesActions from "../redux/actions/recipesActions";

const ManageRecipePage = (props) => {
  const onSubmit = (newRecipe) => {
    props.actions.createRecipe(newRecipe);
    props.history.push("/");
  };

  return (
    <>
      <AddRecipe onSubmit={onSubmit} />
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
      // loadRecipes: bindActionCreators(recipesActions.loadRecipes, dispatch),
      createRecipe: bindActionCreators(recipesActions.createRecipe, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipePage);
