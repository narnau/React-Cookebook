import React from "react";
import { Link } from "react-router-dom";
const RecipeList = (props) => {
  return (
    <div className="recipes">
      {props.recipes.filter(props.filterFunction).map((recipe) => {
        return (
          <div
            key={recipe.id}
            className="card d-inline-block m-2"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{recipe.name}</h5>
            </div>
            <div>
              {recipe.labels.map((label, idx) => {
                return (
                  <button
                    key={idx}
                    type="button"
                    className="btn btn-primary btn-sm m-2"
                    onClick={() => props.labelOnClick(label)}
                  >
                    {label.name}
                  </button>
                );
              })}
            </div>
            <div className="card-body">
              <Link to={`recipe/${recipe.id}`} className="card-link">
                Ver receta
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
