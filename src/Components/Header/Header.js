import React from "react";
import RecipesPageHeader from "./RecipesPageHeader";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import ManageRecipeHeader from "./ManageRecipeHeader";

const Header = (props) => {
  return (
    <>
      <nav
        className="navbar navbar-default fixed-top bg-dark"
        style={{ height: "65px" }}
      >
        <div className="container">
          <Switch>
            <Route exact path="/" component={RecipesPageHeader} />
            <Route exact path="/addRecipe" component={ManageRecipeHeader} />
          </Switch>
        </div>
      </nav>
    </>
  );
};

export default Header;
