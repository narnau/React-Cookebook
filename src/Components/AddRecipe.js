import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as recipesActions from "../redux/actions/recipesActions";

const AddRecipe = (props) => {
  const [recipe, setRecipe] = useState({
    name: "",
    instructions: "",
    shortDescription: "",
    ingredients: [],
    labels: [],
    persons: "",
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.actions.createRecipe(recipe);
    props.history.push("/");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const ingredientChangeHandler = (idx) => (e) => {
    const newIngredients = recipe.ingredients.map((ingredient, sidx) => {
      if (idx !== sidx) return ingredient;
      const { name, value } = e.target;
      return { ...ingredient, [name]: value };
    });
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const labelChangeHandler = (idx) => (e) => {
    const newLabels = recipe.labels.map((label, sidx) => {
      if (idx !== sidx) return label;
      const { name, value } = e.target;
      return { ...label, [name]: value };
    });
    setRecipe({ ...recipe, labels: newLabels });
  };

  const addIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, { name: "", quantity: "" }],
    });
  };

  const addLabel = () => {
    setRecipe({
      ...recipe,
      labels: [...recipe.labels, { name: "" }],
    });
  };

  const deleteIngredient = (idx) => () => {
    const newIngredients = recipe.ingredients.filter((ingredient, sidx) => {
      return idx !== sidx;
    });
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const deleteLabel = (idx) => () => {
    const newLabels = recipe.labels.filter((label, sidx) => {
      return idx !== sidx;
    });
    setRecipe({ ...recipe, labels: newLabels });
  };

  return (
    <div className="container p-3">
      <h3>Añadir receta</h3>
      <form onSubmit={handleOnSubmit}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputName">Nombre</label>
            <input
              required
              type="text"
              className="form-control"
              name="name"
              placeholder="Nombre"
              onChange={changeHandler}
              value={recipe.name}
            ></input>
          </div>
        </div>
        <div className="form-inline pb-3">
          <label>Ingredientes para</label>
          <input
            type="number"
            required
            className="form-control mx-2"
            name="persons"
            placeholder="número de personas"
            onChange={changeHandler}
            value={recipe.persons}
          ></input>
          <label>personas</label>
        </div>
        <div className="form-group">
          <input
            type="button"
            value="Añadir ingrediente"
            className="btn btn-secondary"
            onClick={addIngredient}
          ></input>
          {recipe.ingredients.map((ingredient, idx) => {
            let key = `ingredient-${idx}`;
            return (
              <div className="row pt-2" key={key}>
                <div className="col">
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Ingrediente"
                    onChange={ingredientChangeHandler(idx)}
                    value={ingredient.name}
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Cantidad"
                    name="quantity"
                    onChange={ingredientChangeHandler(idx)}
                    value={ingredient.quantity}
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="button"
                    value="Eliminar"
                    className="btn btn-danger"
                    onClick={deleteIngredient(idx)}
                  ></input>
                </div>
              </div>
            );
          })}
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instrucciones</label>
          <textarea
            className="form-control"
            required
            name="instructions"
            placeholder="Instrucciones"
            onChange={changeHandler}
            value={recipe.instructions}
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="button"
            value="Añadir etiqueta"
            className="btn btn-secondary"
            onClick={addLabel}
          ></input>
          {recipe.labels.map((label, idx) => {
            let key = `ingredient-${idx}`;
            return (
              <div className="row pt-2" key={key}>
                <div className="col">
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Etiqueta"
                    onChange={labelChangeHandler(idx)}
                    value={label.name}
                  ></input>
                </div>
                <div className="col">
                  <input
                    type="button"
                    value="Eliminar"
                    className="btn btn-danger"
                    onClick={deleteLabel(idx)}
                  ></input>
                </div>
                <div className="col"></div>
              </div>
            );
          })}
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      createRecipe: bindActionCreators(recipesActions.createRecipe, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(AddRecipe);
