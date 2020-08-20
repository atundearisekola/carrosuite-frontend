import React from "react";
import { Descriptions } from "antd";
const StaffBio = props => {
  const { staff } = props;
  console.log(staff);
  return (
    <Descriptions
      title={<span className="fs-20">Bio</span>}
      layout="vertical"
      column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
    >
      <Descriptions.Item label={<span className="fs-15">First Name</span>}>
        {staff.User.first_name}
      </Descriptions.Item>
      <Descriptions.Item label={<span className="fs-15">Last Name</span>}>
        {staff.User.last_name}
      </Descriptions.Item>
      <Descriptions.Item label="Date Of Birth">
        {staff.User.dob}
      </Descriptions.Item>
      <Descriptions.Item label="Sex">{staff.User.sex}</Descriptions.Item>
      <Descriptions.Item label="Telephone">
        {staff.User.phoneNumber}
      </Descriptions.Item>
      <Descriptions.Item label="City">{staff.User.city}</Descriptions.Item>
      <Descriptions.Item label="Address">
        {staff.User.adderss}
      </Descriptions.Item>
      <Descriptions.Item label="State Of Origin">
        {staff.User.state}
      </Descriptions.Item>
      <Descriptions.Item label="Nationality">Nigeria</Descriptions.Item>
    </Descriptions>
  );
};

export default StaffBio;
