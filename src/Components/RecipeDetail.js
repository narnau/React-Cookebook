import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadRecipes, deleteRecipe } from "../redux/actions/recipesActions";
import { bindActionCreators } from "redux";

const RecipeDetail = (props) => {
  const [recipe, setRecipe] = useState({ ...props.recipe });

  useEffect(() => {
    if (props.recipes.list.length === 0) {
      props.actions.loadRecipes();
    } else {
      setRecipe({ ...props.recipe });
    }
  }, [props.recipes, props.recipe, props.actions]);

  let deleteRecipe = () => {
    props.actions.deleteRecipe(recipe);
    props.history.push("/");
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3>{recipe.name}</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ingredientes para {recipe.persons}</h5>
          <ul>
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx}>
                {ingredient.name}: {ingredient.quantity}
              </li>
            ))}
          </ul>
          <h5 className="card-title">Instrucciones</h5>
          <p className="card-text text-justify">{recipe.instructions}</p>
        </div>
        <div className="card-footer text-muted">
          {recipe.labels.map((label, idx) => (
            <span key={idx}>
              <span>{label.name}</span>
              <span> | </span>
            </span>
          ))}
          <div className="pt-2">
            <input
              type="button"
              onClick={deleteRecipe}
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

export function navigateToRecipesPage(ownProps) {
  console.log(ownProps);
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

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadRecipes: bindActionCreators(loadRecipes, dispatch),
      deleteRecipe: bindActionCreators(deleteRecipe, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
