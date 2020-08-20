import React, { Fragment } from "react";
// import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import NavbarLanding from "../layouts/NavbarLanding";
import Card from "../../components/Card";
const Welcome = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="homePage">
      <NavbarLanding />
      <div className="cardWrapper">
        <Card onClick={() => props.history.push("/app/logistics")} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default withRouter(Welcome);
