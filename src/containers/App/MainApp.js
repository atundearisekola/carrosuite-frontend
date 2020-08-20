import React, { Fragment } from "react";
// import PropTypes from 'prop-types';
import NavbarLanding from "../../components/layouts/NavbarLanding";
import Card from "../../components/Card";
import Hrm from "../Hrm/index";
import Logistics from "../Logistics/index";
import Property from "../Property/index";
import CardContainer from "./CardContainer";

import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
  withRouter,
  Link,
} from "react-router-dom";

const MainApp = (props) => {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${match.url}home`} component={CardContainer} />
        <Route path={`${match.url}home/app/logistics`} component={Logistics} />
        <Route path={`${match.url}home/app/hrm`} component={Hrm} />
        <Route path={`${match.url}home/app/property`} component={Property} />
      </Switch>
    </div>
  );
};

export default withRouter(MainApp);
