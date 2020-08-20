import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddStaff from "./AddStaff";
import People from "./People";
import ViewStaff from "./ViewStaff";
import ChangesForm from "./Changes";
import HRMDashboard from "./HRMDashboard";

import asyncComponent from "util/asyncComponent";

const HRM = () => {
  const match = useRouteMatch();
  console.log("match oject from hrm", match);
  return (
    <div className="gx-main-content-wrapper">
      <Switch>
        <Route
          exact
          path={`${match.url}`}
          component={asyncComponent(() => import("./HRMDashboard"))}
        />
        <Route
          path={`${match.url}/add-staff`}
          component={asyncComponent(() => import("./AddStaff"))}
        />
        <Route
          path={`${match.url}/view-staff`}
          component={asyncComponent(() => import("./ViewStaff"))}
        />
        <Route
          path={`${match.url}/people`}
          component={asyncComponent(() => import("./People"))}
        />
        <Route
          path={`${match.url}/staff/:id`}
          component={asyncComponent(() => import("./Staff"))}
        />
        <Route
          path={`${match.url}/edit-staff/:id`}
          component={asyncComponent(() => import("./EditStaff"))}
        />
        <Route
          path={`${match.url}/leave-policy`}
          component={asyncComponent(() => import("./LeavePolicy"))}
        />
        <Route
          path={`${match.url}/leave-plan`}
          component={asyncComponent(() => import("./LeavePlan"))}
        />
        <Route
          path={`${match.url}/leave-plans/:policy`}
          component={asyncComponent(() => import("./LeavePlans"))}
        />
        <Route
          path={`${match.url}/payroll/`}
          component={asyncComponent(() => import("./Payroll"))}
        />
        <Route
          path={`${match.url}/payroll-item/`}
          component={asyncComponent(() => import("./PayrollItem"))}
        />
        <Route
          path={`${match.url}/basic-pay/`}
          component={asyncComponent(() => import("./BasicPay"))}
        />
        <Route
          path={`${match.url}/add-pay/`}
          component={asyncComponent(() => import("./AddBasicPay"))}
        />
        <Route
          path={`${match.url}/salary-structure/`}
          component={asyncComponent(() => import("./SalaryStructure"))}
        />
      </Switch>
    </div>
  );
};

export default HRM;
