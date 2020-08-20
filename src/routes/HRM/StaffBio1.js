import React from "react";
import { Descriptions } from "antd";
const StaffBio = (props) => {
  const { currentStaff } = props;
  console.log(currentStaff);
  return (
    <Descriptions
      title={<span className="fs-20">Bio</span>}
      layout="vertical"
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      bordered
      size="small"
    >
      <Descriptions.Item label={<span className="fs-15">First Name</span>}>
        Toyeeb
      </Descriptions.Item>
      <Descriptions.Item label={<span className="fs-15">Last Name</span>}>
        Atunde
      </Descriptions.Item>
      <Descriptions.Item label="Date Of Birth">Date Of Birth</Descriptions.Item>
      <Descriptions.Item label="Sex">Male</Descriptions.Item>
      <Descriptions.Item label="Telephone">Telephone</Descriptions.Item>
      <Descriptions.Item label="City">City</Descriptions.Item>
      <Descriptions.Item label="Address">Address</Descriptions.Item>
      <Descriptions.Item label="State Of Origin">State</Descriptions.Item>
      <Descriptions.Item label="Nationality">Nigeria</Descriptions.Item>
    </Descriptions>
  );
};

export default StaffBio;
