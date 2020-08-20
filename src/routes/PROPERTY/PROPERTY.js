import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddProperty from "./form/addProperty";
import ListProperty from "./listProperty";

import PROPERTYDashboard from "./PROPERTYDashboard";

import asyncComponent from "util/asyncComponent";

const PROPERTY = () => {
  const match = useRouteMatch();
  console.log("match oject from property", match);
  return (
    <div className="gx-main-content-wrapper">
      <Switch>
        <Route
          exact
          path={`${match.url}`}
          component={asyncComponent(() => import("./PROPERTYDashboard"))}
        />
        <Route
          path={`${match.url}/add-property`}
          component={asyncComponent(() => import("./form/addProperty"))}
        />
        <Route
          path={`${match.url}/list-property`}
          component={asyncComponent(() => import("./listProperty"))}
        />
      </Switch>
    </div>
  );
};

export default PROPERTY;
