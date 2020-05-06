import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadRecipes, deleteRecipe } from "../redux/actions/recipesActions";

const RecipeDetail = ({
  loadRecipes,
  deleteRecipe,
  recipe,
  recipes,
  history,
}) => {
  const [internalRecipe, setInternalRecipe] = useState({ ...recipe });

  useEffect(() => {
    if (recipes.list.length === 0) {
      loadRecipes();
    } else {
      setInternalRecipe({ ...recipe });
    }
  }, [recipes, recipe, loadRecipes]);

  let deleteRecipeFunction = () => {
    deleteRecipe(recipe);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3>{internalRecipe.name}</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            Ingredientes para {internalRecipe.persons}
          </h5>
          <ul>
            {internalRecipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>
                {ingredient.name}: {ingredient.quantity}
              </li>
            ))}
          </ul>
          <h5 className="card-title">Instrucciones</h5>
          <p className="card-text text-justify">
            {internalRecipe.instructions}
          </p>
        </div>
        <div className="card-footer text-muted">
          {internalRecipe.labels.map((label, idx) => (
            <span key={idx}>
              <span>{label.name}</span>
              <span> | </span>
            </span>
          ))}
          <div className="pt-2">
            <input
              type="button"
              onClick={deleteRecipeFunction}
              className="btn btn-danger btn-sm"
              value="Eliminar receta"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export function getRecipeById(recipes, id) {
  return recipes.find((recipe) => recipe.id === Number(id)) || null;
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const recipe =
    id && state.recipes.list.length > 0
      ? getRecipeById(state.recipes.list, id)
      : {
          name: "",
          instructions: "",
          shortDescription: "",
          ingredients: [],
          labels: [],
          persons: "",
        };

  return {
    recipe,
    recipes: state.recipes,
  };
}

const mapDispatchToProps = {
  loadRecipes,
  deleteRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
