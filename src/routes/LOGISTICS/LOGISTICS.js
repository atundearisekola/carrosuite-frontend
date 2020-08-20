import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

// import Dashboard from "./dashboard/Dashboard";
// import Order from "./orders/Orders";
// import Asset from "./assets/Assets";
// import Create from "./assets/create/create";
// import Customers from "./customers/Customers";


import asyncComponent from "util/asyncComponent";

const LOGISTICS = () => {

  const match = useRouteMatch();
  console.log("LOGISTICS MATCH OBJ", match);
  return (
    <div className="gx-main-content-wrapper">
      <Switch>
        <Route exact path={`${match.url}`} component={asyncComponent(() => import("./dashboard/Dashboard"))} />
        <Route path={`${match.url}/orders`} component={asyncComponent(() => import("./orders/Orders"))} />
        <Route path={`${match.url}/assets`} component={asyncComponent(() => import("./assets/Assets"))} />
        <Route path={`${match.url}/create/assets`} component={asyncComponent(() => import("./assets/create/create"))} />
        <Route path={`${match.url}/customers`} component={asyncComponent(() => import("./customers/Customers"))} />
      </Switch>
    </div>
  )
};

export default LOGISTICS;