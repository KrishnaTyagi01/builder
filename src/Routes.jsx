import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Education from "./components/cards/Education";
import Experience from "./components/cards/Experience";
import Extra from "./components/cards/Extra";
import LeftDrawer from "./components/drawer/LeftDrawer";
import ReorderEducation from "./components/reorders/ReorderEducation";
import Template from "./components/templates/Template";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/test">
          <Template />
        </Route>
        <Route exact path="/">
          <LeftDrawer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
