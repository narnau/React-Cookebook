import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function recipesReducer(state = initialState.recipes, action) {
  switch (action.type) {
    case types.CREATE_RECIPE_SUCCESS:
      return [...state, { ...action.recipe }];

    case types.LOAD_RECIPES_SUCCESS:
      return action.recipes;

    default:
      return state;
  }
}
