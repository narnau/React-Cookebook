import * as types from "./actionTypes";
import * as recipeApi from "../../api/recipeApi";

export function loadRecipesSuccess(recipes) {
  return { type: types.LOAD_RECIPES_SUCCESS, recipes };
}

export function createRecipeSuccess(recipe) {
  return { type: types.CREATE_RECIPE_SUCCESS, recipe };
}

export function deleteRecipesSuccess(recipe) {
  return { type: types.DELETE_RECIPE_SUCCESS, recipe };
}

export function loadRecipes() {
  return function (dispatch) {
    return recipeApi
      .getRecipes()
      .then((recipes) => {
        dispatch(loadRecipesSuccess(recipes));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function createRecipe(recipe) {
  return function (dispatch) {
    return recipeApi
      .saveRecipe(recipe)
      .then((recipe) => {
        dispatch(createRecipeSuccess(recipe));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function setFilter(filter) {
  return (dispatch) => dispatch({ type: types.FILTER_RECIPES, filter });
}

export function deleteRecipe(recipe) {
  return function (dispatch) {
    return recipeApi.deleteRecipe(recipe.id).then(() => {
      dispatch(deleteRecipesSuccess(recipe));
    });
  };
}
