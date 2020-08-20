import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Button } from "antd";
import ListStaff from "./ListStaff";
import Departments from "./Department";
import Designation from "./Designation";

const { TabPane } = Tabs;
const People = () => {
  const operations = (
    <Link to="/app/hrm/add-staff">
      <Button className="btn btn-secondary">Add Staff</Button>
    </Link>
  );

  return (
    <Tabs
      defaultActiveKey="staffs"
      tabBarExtraContent={operations}
      size="large"
    >
      <TabPane tab="Staffs" key="staffs">
        <ListStaff />
      </TabPane>
      <TabPane tab="Departments" key="departments">
        <Departments />
      </TabPane>
      <TabPane tab="Designations" key="designations ">
        <Designation />
      </TabPane>
    </Tabs>
  );
};

export default People;
