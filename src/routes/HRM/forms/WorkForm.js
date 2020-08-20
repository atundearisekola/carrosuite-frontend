import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "@ant-design/compatible/assets/index.css";

// import { Form } from '@ant-design/compatible';

import { Input, DatePicker, Cascader, PageHeader, Tag, Form } from "antd";

const StaffJobForm = (props) => {
  // const {setFieldsValue } = props;
  const employmentType = [
    {
      label: "Full-Time",
      value: "Full-Time",
    },
    {
      label: "Part-Time",
      value: "Part-Time",
    },
    {
      label: "Casual Worker",
      value: "Casual Worker",
    },
    {
      label: "Contract",
      value: "Contract",
    },
    {
      label: "Internship",
      value: "Internship",
    },
    {
      label: "Commission",
      value: "Commission",
    },
  ];
  const values = useSelector((state) => state.staffs.newStaff);

  // useEffect(() => {
  //   const setValues = () => {
  //     setFieldsValue({ ...values }, () => {});
  //   };
  //   setValues();
  // });

  return (
    <div>
      <PageHeader
        title={values.first_name + " " + values.last_name}
        style={{
          border: "1px solid rgb(235, 237, 240)",
        }}
        tags={<Tag color="red">Inactive</Tag>}
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
      />
      <Form.Item
        label="Company"
        hasFeedback
        name="company"
        rules={[
          {
            required: true,
            message: "Please input Company",
          },
        ]}
      >
        <Input
          name="company"
          onChange={props.handleInput("company")}
          value={props.state.company}
        />
      </Form.Item>
      <Form.Item
        label="Department"
        hasFeedback
        name="primary_department"
        rules={[
          {
            required: true,
            message: "Please input Department!",
          },
        ]}
      >
        <Input
          name="primary_department"
          onChange={props.handleInput("primary_department")}
          value={props.state.primary_department}
        />
      </Form.Item>
      <Form.Item
        label="Division"
        hasFeedback
        name="division"
        rules={[
          {
            required: false,
            message: "Please input Division!",
          },
        ]}
      >
        <Input
          name="division"
          onChange={props.handleInput("division")}
          value={props.state.division}
        />
      </Form.Item>
      <Form.Item
        label="Postion"
        hasFeedback
        name="primary_position"
        rules={[
          {
            required: true,
            message: "Input Role For New Staff",
          },
        ]}
      >
        <Input
          name="primary_position"
          onChange={props.handleInput("primary_position")}
          value={props.state.primary_position}
        />
      </Form.Item>
      <Form.Item
        label="Reports To"
        name="reportsto"
        rules={[
          {
            required: true,
            message: "Enter who this staffs would report to ",
          },
        ]}
      >
        <Input
          name="reportsto"
          onChange={props.handleInput("reportsto")}
          value={props.state.reportsto}
        />
      </Form.Item>
      <Form.Item
        label="Employment Type"
        name="employment_type"
        rules={[
          {
            required: true,
            message: "Please select an Industry",
          },
        ]}
      >
        <Cascader
          className="form-item"
          options={employmentType}
          placeholder={`Select Employment Type`}
          name="employment_type"
          onChange={props.handleInput("employment_type")}
          value={props.state.employment_type}
        />
      </Form.Item>
      <Form.Item
        label="Start Date"
        hasFeedback
        name="startDate"
        rules={[
          { required: false, message: "Please input Employee Start Date!" },
        ]}
      >
        <DatePicker
          name="startDate"
          onChange={props.handleStartDateChange}
          value={props.state.startDate}
        />
      </Form.Item>
      <Form.Item
        label="NIN"
        name="nin"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input
          name="nin"
          onChange={props.handleInput("nin")}
          value={props.state.nin}
        />
      </Form.Item>
      <Form.Item
        label="Location"
        name="location"
        rules={[
          {
            required: false,
            message: "Please input Location",
          },
        ]}
      >
        <Input
          name="location"
          onChange={props.handleInput("location")}
          value={props.state.location}
        />
      </Form.Item>
    </div>
  );
};

export default StaffJobForm;
