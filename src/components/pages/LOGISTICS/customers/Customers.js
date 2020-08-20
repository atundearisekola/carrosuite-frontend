import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Button } from "antd";
import ListOfCustomers from "./ListOfCustomers";
const { TabPane } = Tabs;

const Customers = () => {
  return (
    <Tabs defaultActiveKey="staffs" size="large">
      <TabPane tab="Customers" key="customers">
        <ListOfCustomers />
      </TabPane>
    </Tabs>
  );
};

export default Customers;
