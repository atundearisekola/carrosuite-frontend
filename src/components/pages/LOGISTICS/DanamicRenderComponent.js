import React from "react";
import Dashboard from "./dashboard/Dashboard";
import Order from "./orders/Orders";
import Asset from "./assets/Assets";
import Create from "./assets/create/create";
import Customers from "./customers/Customers";

import { withRouter } from "react-router-dom";
const DanamicRenderComponent = (props) => {
  let content;
  const { page, id } = props.match.params;
  switch (page) {
    case "orders":
      content = <Order {...props} />;
      break;
    case "customers":
      content = <Customers {...props} />;
      break;
    case "assets":
      content = <Asset {...props} />;
      break;
    case "create":
      content = <Create {...props} />;
      break;
    default:
      content = <Dashboard {...props} />;
  }
  return <React.Fragment>{content}</React.Fragment>;
};

export default withRouter(DanamicRenderComponent);
