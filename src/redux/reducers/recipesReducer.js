import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function recipesReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case types.CREATE_RECIPE_SUCCESS:
      newState = Object.assign(
        {},
        {
          filter: state.filter,
          list: [...state.list, { ...action.recipe }],
        }
      );
      return newState;

    case types.LOAD_RECIPES_SUCCESS:
      newState = Object.assign(
        {},
        {
          filter: state.filter,
          list: action.recipes,
        }
      );
      return newState;

    case types.SEARCH_RECIPE:
      newState = Object.assign({}, state, {
        filter: action.filter,
      });
      return newState;
    default:
      return state;
  }
}
