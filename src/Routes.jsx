import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Education from "./components/cards/Education";
import LeftDrawer from "./components/drawer/LeftDrawer";
import ReorderEducation from "./components/reorders/ReorderEducation";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/test">
          <ReorderEducation />
        </Route>
        <Route exact path="/">
          <LeftDrawer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
