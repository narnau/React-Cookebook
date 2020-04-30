import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as recipesActions from "../../redux/actions/recipesActions";

const RecipesPageHeader = (props) => {
  const onChangeFunction = (filter) => {
    props.actions.setFilter(filter);
  };

  return (
    <>
      <Link to="/addRecipe" style={{ color: "white" }}>
        <span>Add recipe</span>
      </Link>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          onChange={(event) => {
            onChangeFunction(event.target.value);
          }}
          placeholder="Search"
          aria-label="Search"
        ></input>
      </form>
    </>
  );
};

function mapStateToProps(state) {
  return {
    filter: state.recipes.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setFilter: bindActionCreators(recipesActions.setFilter, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPageHeader);
