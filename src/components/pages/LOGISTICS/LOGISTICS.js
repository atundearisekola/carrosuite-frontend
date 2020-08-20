import React from "react";
import DanamincRenderComponent from "./DanamicRenderComponent";
import Container from "./navigations/Container";
import DashboardSideBarNav from "./navigations/DashboardSideBarNav";

import setAuthToken from "../../../utils/setAuthToken";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { Route, Redirect } from "react-router-dom";
// import { loadUser } from "../../../actions/auth";
// import {
//   FETCH_STAFFS,
//   FETCH_DEPARTMENTS,
//   FETCH_DESIGNATIONS
// } from "../../../actions/types";
const LOGISTICS = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated === false) {
    return <Redirect to="/" />;
  }
  return (
    <Container sidebar={<DashboardSideBarNav {...props} />}>
      <Route
        path={`${props.match.path}/:page`}
        component={() => <DanamincRenderComponent {...props} />}
      />
    </Container>
  );
};

export default LOGISTICS;
