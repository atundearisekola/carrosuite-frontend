import React  from "react";
import { useSelector } from "react-redux";
import '@ant-design/compatible/assets/index.css';
// import { Form } from '@ant-design/compatible';
import {Form, PageHeader, Input, Tag, Cascader, Checkbox } from "antd";

import TextAreaEditor from "../../../layouts/TextAreaEditor";

const OfferDetails = props => {
  const values = useSelector(state => state.staffs.newStaff);
  return (
    <div>
      <PageHeader
        title={values.first_name + " " + values.last_name}
        style={{
          border: "1px solid rgb(235, 237, 240)"
        }}
        subTitle={values.primary_designation + " at " + values.company}
        tags={<Tag color="red">Inactive</Tag>}
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
        }}
      />

      <Form.Item label="Department" hasFeedback name='department' rules={[
        {
          required: false,
          message: "Please input Leave Policy!"
          }
      ]}>
        <Checkbox name="leavePolicy"> Include Leave Policy </Checkbox>
      </Form.Item>
      <Form.Item label="Division" hasFeedback name="division" rules={[
        {
          required: false,
          message: "Please input Division!"
          }
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Average Weekly Hours" hasFeedback name='averageWeeklyHours' rules={[
        {
          required: true,
          message: "Input Role For Average Weekly Hours"
          }
      ]}>
       <Input type="number" />
      </Form.Item>

      <Form.Item label="Compensation Type" name="compensation" rules={[
        {
          required: false,
          message: "Please select an Compensation Type"
          }
      ]}>
          <Cascader
            className="form-item"
            options={[
              { title: "Salary", value: "Salary" },
              { title: "Wages", value: "Wages" }
            ]}
            placeholder={`Select Compensation Type`}
          />
      </Form.Item>
      <Form.Item label="Additional Terms" hasFeedback name="addition" rules={[
        { required: false, message: "Please include Additional Terms" }
      ]}>
       <TextAreaEditor />
      </Form.Item>
    </div>
  );
};

export default OfferDetails;
