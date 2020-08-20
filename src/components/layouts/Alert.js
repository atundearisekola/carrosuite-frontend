import React from "react";
import { Alert } from "antd";
const AlertBox = ({ alert }) => (
  <Alert type={`${alert.alertType}`} message={alert.msg} />
);

export default AlertBox;
