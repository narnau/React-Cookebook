import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setFilter } from "../../redux/actions/recipesActions";

const RecipesPageHeader = (props) => {
  const onChangeFunction = (filter) => {
    props.setFilter(filter);
  };

  return (
    <>
      <Link to="/addRecipe" style={{ color: "white" }}>
        <span>Añadir receta</span>
      </Link>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          onChange={(event) => {
            onChangeFunction(event.target.value);
          }}
          value={props.filter}
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

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPageHeader);
