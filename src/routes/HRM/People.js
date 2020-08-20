import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Button } from "antd";
import ListStaff from "./ListStaff";
import Departments from "./Department";
import Designation from "./Designation";
import Staff from "./Staff";
import StaffDirectory from "./StaffDirectory";
import Celebrants from "./Celebrants";
const { TabPane } = Tabs;
const People = () => {
  const operations = (
    <Link to={`/home/app/hrm/add-staff`}>
      <Button className="btn btn-secondary">Add Staff</Button>
    </Link>
  );

  return (
    <Tabs tabBarExtraContent={operations} size="large">
      <TabPane tab="Staffs" key="staffs">
        <ListStaff />
      </TabPane>
      <TabPane tab="Departments" key="departments">
        <Departments />
      </TabPane>
      <TabPane tab="Designations" key="designations ">
        <Designation />
      </TabPane>
      <TabPane tab="Staff Directory" key="directory ">
        <StaffDirectory />
      </TabPane>
      <TabPane tab="Upcoming Celebrants" key="celebrants ">
        <Celebrants />
      </TabPane>
    </Tabs>
  );
};

export default People;
