import React from "react";
import "./App.css";
import RecipesPage from "./components/RecipesPage";
import { Route, Switch } from "react-router-dom";
import TopMenu from "./components/Header/Header";
import AddRecipe from "./components/AddRecipe";

function App() {
  return (
    <>
      <TopMenu></TopMenu>
      <div className="App" style={{ paddingTop: "70px" }}>
        <Switch>
          <Route exact path="/" component={RecipesPage} />
          <Route path="/addRecipe" component={AddRecipe} />
        </Switch>
      </div>
    </>
  );
}

export default App;
