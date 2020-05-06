import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function recipesReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case types.CREATE_RECIPE_SUCCESS:
      newState = Object.assign({}, state, {
        list: [...state.list, { ...action.recipe }],
      });
      return newState;
    case types.LOAD_RECIPES_SUCCESS:
      newState = Object.assign({}, state, {
        list: action.recipes,
      });
      return newState;

    case types.FILTER_RECIPES:
      newState = Object.assign({}, state, {
        filter: action.filter,
      });
      return newState;
    case types.DELETE_RECIPE_SUCCESS:
      newState = Object.assign({}, state, {
        list: state.list.filter((recipe) => recipe.id !== action.recipe.id),
      });
      return newState;
    default:
      return state;
  }
}
