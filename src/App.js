import React from "react";
import "./App.css";
import RecipesPage from "./components/RecipesPage";
import { Route, Switch } from "react-router-dom";
import ManageRecipePage from "./components/ManageRecipePage";
import TopMenu from "./components/Header/Header";

function App() {
  return (
    <>
      <TopMenu></TopMenu>
      <div className="App" style={{ paddingTop: "70px" }}>
        <Switch>
          <Route exact path="/" component={RecipesPage} />
          <Route path="/addRecipe" component={ManageRecipePage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
