import React, { Fragment } from "react";
// import PropTypes from 'prop-types';
import NavbarLanding from "../../components/layouts/NavbarLanding";
import Card from "../../components/Card";
import Hrm from "../Hrm/index";
import Logistics from "../Logistics/index";
import Property from "../Property/index";

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

const CardContainer = (props) => {
  const match = useRouteMatch();
  console.log("match", match);

  return (
    <div className="homePage">
      <NavbarLanding />
      <div className="cardWrapper">
        <Card
          onClick={() => props.history.push(`${match.url}/app/logistics`)}
          title={"LOGISTICS"}
        />
        <Card
          onClick={() => props.history.push(`${match.url}/app/hrm`)}
          title={"HRM"}
        />
        <Card
          onClick={() => props.history.push(`${match.url}/app/property`)}
          title={"PROPERTY"}
        />
      </div>
    </div>
  );
};

export default withRouter(CardContainer);
