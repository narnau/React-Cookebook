import React from "react";
import "./App.css";
import RecipesPage from "./components/RecipesPage";
import { Route, Switch } from "react-router-dom";
import TopMenu from "./components/Header/Header";
import AddRecipe from "./components/AddRecipe";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <>
      <TopMenu></TopMenu>
      <div className="App" style={{ paddingTop: "70px" }}>
        <Switch>
          <Route exact path="/" component={RecipesPage} />
          <Route path="/addRecipe" component={AddRecipe} />
          <Route path="/recipe/:id" component={RecipeDetail} />
        </Switch>
      </div>
    </>
  );
}

export default App;
