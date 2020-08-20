import React from "react";
import { useSelector } from "react-redux";
import { Empty } from "antd";

import { PageHeader, Button, Layout, Typography, Row, Tabs } from "antd";
import { Link } from "react-router-dom";
import StaffBio from "./StaffBio";

const { TabPane } = Tabs;

const { Paragraph } = Typography;
const ViewStaff = (props) => {
  console.log(props);

  const staffs = useSelector((state) => state.staffs.staffs);

  const currentStaff = staffs.filter((staff) => staff.id === Number(props.id));
  console.log(currentStaff[0]);

  const content = (
    <div className="content">
      <Paragraph>
        <div className="text-sm">Name | {currentStaff[0].User.first_name}</div>
        <p className="text-sm">
          Department | {currentStaff[0].Department.department}
        </p>
        <p className="text-sm">
          Position | {currentStaff[0].Position.position}
        </p>
        <p className="text-sm">Employment Since Feb 2013</p>
        {/* <p className="text-sm">{currentStaff[0].User.ph}</p> */}
        <p className="text-sm">{currentStaff[0].User.email}</p>
      </Paragraph>
    </div>
  );

  const Content = ({ children, image }) => {
    return (
      <Row className="content" type="flex">
        <div
          className="extra"
          style={{
            marginRight: "50px",
          }}
        >
          {image}
        </div>
        <div className="main" style={{ flex: 1 }}>
          {children}
        </div>
      </Row>
    );
  };

  return (
    <div>
      <PageHeader
        title={
          <Content
            image={
              <img
                style={{
                  borderRadius: "50%",
                  height: "100%",
                  width: "15rem",
                  marginRight: "10",
                }}
                src="https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
              />
            }
          >
            {content}
          </Content>
        }
        style={{
          border: "1px solid rgb(235, 237, 240)",
        }}
        extra={[
          <Link to="/app/hrm/changes">
            <Button className="btn btn-primary" key="make-changes">
              Make Changes
            </Button>
          </Link>,
          <Link to="/app/hrm/delete">
            <Button className="btn btn-danger" key="off-board_staff">
              Off Board
            </Button>
          </Link>,
        ]}
      >
        <Layout>
          <Layout style={{ background: "#fff" }}>
            <Tabs defaultActiveKey="staffs">
              <TabPane tab="Personal Info" key="bio">
                <StaffBio staff={currentStaff[0]} />
              </TabPane>
              <TabPane tab="Changes" key="changes">
                <Empty />
              </TabPane>
              <TabPane tab="Guarantor" key="guarantor">
                <Empty />
              </TabPane>
              <TabPane tab="Document" key="document">
                <Empty />
              </TabPane>
            </Tabs>
          </Layout>
        </Layout>
      </PageHeader>
    </div>
  );
};

export default ViewStaff;
