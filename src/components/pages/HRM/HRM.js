import React from "react";
import DanamincRenderComponent from "./DanamicRenderComponent";
import Container from "../../layouts/Container";
import DashboardNavbar from "./DashboardNavbar";
import HRMDashboard from "./HRMDashboard";
import setAuthToken from "../../../utils/setAuthToken";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { Route, Redirect } from "react-router-dom";
import { loadUser } from "../../../actions/auth";
import {
  FETCH_STAFFS,
  FETCH_DEPARTMENTS,
  FETCH_DESIGNATIONS,
} from "../../../actions/types";
const HRM = (props) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated === true) {
    return <Redirect to="/" />;
  } else {
    setAuthToken(localStorage.token);
    const decoded = jwt_decode(localStorage.token);
    console.log(decoded);
    dispatch(loadUser(decoded));
    dispatch({
      type: FETCH_STAFFS,
    });
    dispatch({
      type: FETCH_DEPARTMENTS,
    });
    dispatch({
      type: FETCH_DESIGNATIONS,
    });
  }

  return (
    <Container sidebar={<DashboardNavbar {...props} />}>
      <Route
        exact
        path={`${props.match.path}`}
        sidebar={() => <HRMDashboard {...props} />}
      />
      <Route
        path={`${props.match.path}/:page`}
        component={() => <DanamincRenderComponent {...props} />}
      />
    </Container>
  );
};

export default HRM;
