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
        {currentStaff.User.first_name}
      </Descriptions.Item>
      <Descriptions.Item label={<span className="fs-15">Last Name</span>}>
        {currentStaff.User.last_name}
      </Descriptions.Item>
      <Descriptions.Item label="Date Of Birth">
        {currentStaff.User.dob}
      </Descriptions.Item>
      <Descriptions.Item label="Sex">{currentStaff.User.sex}</Descriptions.Item>
      <Descriptions.Item label="Telephone">
        {currentStaff.User.phoneNumber}
      </Descriptions.Item>
      <Descriptions.Item label="City">
        {currentStaff.User.city}
      </Descriptions.Item>
      <Descriptions.Item label="Address">
        {currentStaff.User.adderss}
      </Descriptions.Item>
      <Descriptions.Item label="State Of Origin">
        {currentStaff.User.state}
      </Descriptions.Item>
      <Descriptions.Item label="Nationality">Nigeria</Descriptions.Item>
    </Descriptions>
  );
};

export default StaffBio;
