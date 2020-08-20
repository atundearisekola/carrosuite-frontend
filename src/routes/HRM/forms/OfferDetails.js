import React from "react";
import { useSelector } from "react-redux";
import "@ant-design/compatible/assets/index.css";
// import { Form } from '@ant-design/compatible';
import { Form, PageHeader, Input, Tag, Cascader, Checkbox, Select } from "antd";

import TextAreaEditor from "../../../components/layouts/TextAreaEditor";

const OfferDetails = (props) => {
  const values = useSelector((state) => state.staffs.newStaff);
  const { Option, OptGroup } = Select;
  const { TextArea } = Input;
  return (
    <div>
      <PageHeader
        title={values.first_name + " " + values.last_name}
        style={{
          border: "1px solid rgb(235, 237, 240)",
        }}
        subTitle={values.primary_designation + " at " + values.company}
        tags={<Tag color="red">Inactive</Tag>}
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
      />

      <Form.Item
        label="Department"
        hasFeedback
        name="department"
        rules={[
          {
            required: false,
            message: "Please input Leave Policy!",
          },
        ]}
      >
        <Checkbox
          name="leavePolicy"
          onChange={props.handleInput("leavePolicy")}
          value={props.state.leavePolicy}
        >
          {" "}
          Include Leave Policy{" "}
        </Checkbox>
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
        label="Average Weekly Hours"
        hasFeedback
        name="averageWeeklyHours"
        rules={[
          {
            required: true,
            message: "Input Role For Average Weekly Hours",
          },
        ]}
      >
        <Input
          type="number"
          name="averageWeeklyHours"
          onChange={props.handleInput("averageWeeklyHours")}
          value={props.state.averageWeeklyHours}
        />
      </Form.Item>

      <Form.Item
        label="Compensation Type"
        name="compensation"
        rules={[
          {
            required: false,
            message: "Please select an Compensation Type",
          },
        ]}
      >
        <Select
          className="form-item"
          showSearch
          style={{ width: 200 }}
          placeholder={`Select Compensation Type`}
          optionFilterProp="children"
          name="compensation"
          value={props.state.compensation}
          onChange={props.handleInput}
          onFocus={props.handleInput}
          onBlur={props.handleInput}
          onSearch={props.handleInput}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          onChange={props.handleInput("compensation")}
        >
          <Option value="Salary">Salary</Option>
          <Option value="Wages">Wages</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Additional Terms"
        hasFeedback
        name="addition"
        rules={[
          { required: false, message: "Please include Additional Terms" },
        ]}
      >
        <TextArea
          name="addition"
          onChange={props.handleInput("addition")}
          value={props.state.addition}
        />
      </Form.Item>
    </div>
  );
};

export default OfferDetails;
