import React from "react";
const RecipeList = (props) => {
  return (
    <div>
      {props.recipes
        .filter((recipe) => recipe.name.includes(props.queryString))
        .map((recipe) => (
          <div
            key={recipe.id}
            className="card d-inline-block m-2"
            style={{ width: "18rem" }}
          >
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{recipe.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Ver receta
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecipeList;
